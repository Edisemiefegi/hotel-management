import { ID, storage, tableDB } from "@/appwriteConfig";
import type { HotelFormType } from "@/schemas/hotel.schema";
import { useAdminStore } from "@/store/adminStore";
import type { Addon, Hotel, Room } from "@/types/hotel";
import { Query, type Models } from "appwrite";

const db_Id = "admin-id";
const hotel_Id = "hotels";
const bucket_Id = "hotel_Images";
const room_Id = "rooms";
const addons_Id = "addons";

export const useAdmin = () => {
  const { setHotels, setRooms } = useAdminStore();

  const mapRowToHotel = (row: Models.DefaultRow): any => ({
    id: row.$id,
    name: row.name,
    location: row.location,
    rating: row.rating,
    reviews: row.reviews ?? [],
    images: (row.images ?? []).map((fileId: string) =>
      storage.getFileDownload({ bucketId: bucket_Id, fileId }),
    ),
    amenities: row.amenities ?? [],
    status: row.status,
    whatsapp: row.whatsapp,
    rooms: [],
    description: row.description,
    addons: row.addons ?? [],
  });

  const uplaodImage = async (images: any, id: string) => {
    const uploadedIds: string[] = [];
    if (images.length > 0) {
      for (const file of images) {
        if (file instanceof File) {
          const fileId = ID.unique();
          const upload = await storage.createFile({
            bucketId: id,
            fileId: fileId,
            file: file,
          });

          uploadedIds.push(upload.$id);
        }
      }
    }

    return uploadedIds;
  };

  const addHotel = async (form: HotelFormType) => {
    const uploadedFileIds = await uplaodImage(form?.images, bucket_Id);
    const hotel = {
      name: form.name,
      location: form.location,
      whatsapp: form.whatsapp,
      description: form.description,
      amenities: form.amenities?.map((a: any) => a.value) ?? [],
      images: uploadedFileIds,
      rating: 0,
      reviews: [],
      status: form.status,
    };

    const res = await tableDB.createRow({
      databaseId: db_Id,
      tableId: hotel_Id,
      rowId: ID.unique(),
      data: hotel,
    });

    return res;
  };

  const addRoom = async (form: Room, hotelId: string) => {
    const uploadedFileIds = await uplaodImage(form?.image, bucket_Id);

    const room = {
      type: form.type,
      pricePerNight: form.pricePerNight,
      roomNo: form.roomNo,
      bed: form.bed,
      amenities: [],
      capacity: form.capacity,
      image: uploadedFileIds[0],
      status: form.status,
      hotelId: hotelId,
    };
    const RoomData = { ...room };

    await tableDB.createRow({
      databaseId: db_Id,
      tableId: room_Id,
      rowId: ID.unique(),
      data: RoomData,
    });
  };

  const handleAddon = async (form: Addon, hotelId: string) => {
    const Addons = {
      addonName: form.addonName,
      price: form.price,
      description: form.description,
      icon: form.icon,
      hotelId: hotelId,
    };

    await tableDB.createRow({
      databaseId: db_Id,
      tableId: addons_Id,
      rowId: ID.unique(),
      data: Addons,
    });
  };

  const getHotelAddons = async (hotelId: string) => {
    if (!hotelId) {
      console.error("hotelId is missing");
      return [];
    }
    const response = await tableDB.listRows({
      databaseId: db_Id,
      tableId: addons_Id,
      queries: [Query.equal("hotelId", hotelId)],
    });

    return response.rows;
  };

  const getHotelRooms = async (hotelId: string) => {
    if (!hotelId) {
      console.error("hotelId is missing");
      return [];
    }
    const response = await tableDB.listRows({
      databaseId: db_Id,
      tableId: room_Id,
      queries: [Query.equal("hotelId", hotelId)],
    });
    const result = response.rows.map((e) => {
      const image = e.image;

      const imageUrl = storage.getFileDownload({
        bucketId: bucket_Id,
        fileId: image,
      });

      return {
        ...e,
        imageUrl,
      };
    });

    return result;
  };

  const getHotels = async () => {
    const promise = await tableDB.listRows({
      databaseId: db_Id,
      tableId: hotel_Id,
    });

    const res = promise.rows.map(mapRowToHotel);

    setHotels(res);
    return res;
  };

  const getRooms = async () => {
    const promise = await tableDB.listRows({
      databaseId: db_Id,
      tableId: room_Id,
    });

    const res = promise.rows;
    const rooms = await Promise.all(
      res.map(async (room) => {
        if (!room.image) return room;

        const file = await storage.getFileDownload({
          bucketId: bucket_Id,
          fileId: room.image,
        });

        return {
          ...room,
          image: file,
        };
      }),
    );

    setRooms(rooms);
    return rooms;
  };

  const deleteHotel = async (id: string) => {
    const result = await tableDB.deleteRow({
      databaseId: db_Id,
      tableId: hotel_Id,
      rowId: id,
    });

    console.log(result);
  };

  const updateHotel = async (id: string) => {};
  return {
    addHotel,
    getHotels,
    deleteHotel,
    updateHotel,
    addRoom,
    getHotelRooms,
    handleAddon,
    getHotelAddons,
    getRooms,
  };
};
