import { ID, storage, tableDB } from "@/appwriteConfig";
import type { HotelFormType } from "@/schemas/hotel.schema";
import { useAdminStore } from "@/store/adminStore";
import type { Addon, Room } from "@/types/hotel";

const db_Id = "admin-id";
const hotel_Id = "hotels";
const bucket_Id = "hotel_image";
const room_Id = "rooms";
const addons_Id = "addons";

export const useAdmin = () => {
  const { hotels, setHotels, setRooms,setHydrated, setAddons } =
    useAdminStore();

    console.log("Bucket ID:", bucket_Id);
  const getImageUrl = (fileId: string) => {
    
    return `https://fra.cloud.appwrite.io/v1/storage/buckets/${bucket_Id}/files/${fileId}/view?project=hotelmanagement-id&mode=admin`;
  };

  const uploadImages = async (files: File[], bucketId: string) => {
    if (!files || files.length === 0) return [];

    const uploads = files.map((file) => {
      const fileId = ID.unique();
      return storage.createFile({
        bucketId,
        fileId,
        file,
      });
    });

    const results = await Promise.all(uploads);
    return results.map((res) => res.$id);
  };

  const fetchAllData = async () => {
    const state = useAdminStore.getState();

    if (state.isHydrated) {
      console.log("USING CLEAN CACHED DATA ✅");
      return state.hotels;
    }
    const [hotelRes, roomRes, addonRes] = await Promise.all([
      tableDB.listRows({
        databaseId: db_Id,
        tableId: hotel_Id,
      }),
      tableDB.listRows({
        databaseId: db_Id,
        tableId: room_Id,
      }),
      tableDB.listRows({
        databaseId: db_Id,
        tableId: addons_Id,
      }),
    ]);

    const roomsData = roomRes.rows.map((room: any) => ({
      ...room,
      image: room.image ? getImageUrl(room.image) : null,
    }));

    const addonsData = addonRes.rows.map((addon: any) => ({
      id: addon.$id,
      addonName: addon.addonName,
      price: addon.price,
      description: addon.description,
      icon: addon.icon,
      hotelId: addon.hotelId,
    }));

    const hotelsData: any = hotelRes?.rows.map((hotel: any) => {
      const hotelRooms = roomsData.filter((room) => room.hotelId === hotel.$id);

      const hotelAddons = addonsData.filter(
        (addon) => addon.hotelId === hotel.$id,
      );

      return {
        id: hotel.$id,
        name: hotel.name,
        location: hotel.location,
        rating: hotel.rating,
        reviews: hotel.reviews ?? [],
        images: (hotel.images ?? []).map(getImageUrl),
        amenities: hotel.amenities ?? [],
        status: hotel.status,
        whatsapp: hotel.whatsapp,
        description: hotel.description,
        rooms: hotelRooms,
        addons: hotelAddons,
      };
    });

    setHotels(hotelsData);
    setRooms(roomsData);
    setAddons(addonsData);
    setHydrated(true);

    return hotelsData;
  };

  // const getRoomsByHotel = (hotelId: string) => {
  //     const state = useAdminStore.getState();
  //     return state.rooms.filter((room: any) => room.hotelId === hotelId);
  //   };

  const addHotel = async (form: HotelFormType) => {
    const uploadedFileIds = await uploadImages(form?.images, bucket_Id);
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

    const newHotel: any = {
      ...hotel,
      id: res.$id,
      images: uploadedFileIds?.map(getImageUrl),
    };

    setHotels([newHotel, ...useAdminStore.getState().hotels]);
    console.log(hotels, "testingß");

    return res;
  };

  const addRoom = async (form: Room, hotelId: string) => {
    const files = form.image ? [form.image] : [];
    const uploadedFileIds = await uploadImages(files, bucket_Id);

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

    const res = await tableDB.createRow({
      databaseId: db_Id,
      tableId: room_Id,
      rowId: ID.unique(),
      data: room,
    });

    const newRoom = {
      ...room,
      id: res.$id,
      image: getImageUrl(uploadedFileIds[0]),
    };

    setRooms([newRoom, ...useAdminStore.getState().rooms]);
  };

  const handleAddon = async (form: Addon, hotelId: string) => {
    const addon = {
      addonName: form.addonName,
      price: form.price,
      description: form.description,
      icon: form.icon,
      hotelId,
    };

    const res = await tableDB.createRow({
      databaseId: db_Id,
      tableId: addons_Id,
      rowId: ID.unique(),
      data: addon,
    });

    const newAddon = {
      ...addon,
      id: res.$id,
    };

    setAddons([newAddon, ...useAdminStore.getState().addons]);
  };

  // const getAddonsByHotel = (hotelId: string) => {
  //   const state = useAdminStore.getState();
  //   return state.addons.filter((addon: any) => addon.hotelId === hotelId);
  // };

  // const getHotels = async () => {
  //   if (hotels.length > 0) return hotels;
  //   const promise = await tableDB.listRows({
  //     databaseId: db_Id,
  //     tableId: hotel_Id,
  //   });

  //   const res = promise.rows.map(mapRowToHotel);

  //   setHotels(res);

  //   return res;
  // };


  const deleteHotel = async (id: string) => {
    const result = await tableDB.deleteRow({
      databaseId: db_Id,
      tableId: hotel_Id,
      rowId: id,
    });

    const state = useAdminStore.getState();
    setHotels(state.hotels.filter((h: any) => h.id !== id));

    console.log(result);
  };

  return {
    fetchAllData,
    // getRoomsByHotel,
    addHotel,
    // getHotels,
    deleteHotel,
    addRoom,
    handleAddon,
    // getAddonsByHotel,
    // getRooms,
  };
};
