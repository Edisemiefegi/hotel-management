import { ID, storage, tableDB } from "@/appwriteConfig";
import { useAdminStore } from "@/store/adminStore";
import type { Hotel } from "@/types";
import type { Models } from "appwrite";

const db_Id = "admin-id";
const hotel_Id = "hotels";
const bucket_Id = "hotel_Images";

export const useAdmin = () => {
  const { setHotels } = useAdminStore();

  const mapRowToHotel = (row: Models.DefaultRow): Hotel => ({
    id: row.$id,
    name: row.name,
    location: row.location,
    rating: row.rating,
    reviews: row.reviews ?? [],
    images: (row.images ?? []).map((fileId: string) =>
      storage.getFileDownload({ bucketId: bucket_Id, fileId })
    ),
    amenities: row.amenities ?? [],
    status: row.status,
    whatsapp: row.whatsapp,
    rooms: row.rooms ?? [],
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
          console.log(upload, "upload");

          uploadedIds.push(upload.$id);
        }
      }
    }

    return uploadedIds;
  };

  const addHotel = async (form: Hotel) => {
    const uploadedFileIds = await uplaodImage(form?.images, bucket_Id);

    const hotel = {
      name: form.name,
      location: form.location,
      whatsapp: form.whatsapp,
      description: form.description,
      amenities: form.amenities,
      rooms: form.rooms,
      addons: form.addons,
      images: form.images,
      rating: form.rating,
      reviews: form.reviews,
      status: form.status,
    };
    const hotelData = { ...hotel, images: uploadedFileIds };

    tableDB.createRow({
      databaseId: db_Id,
      tableId: hotel_Id,
      rowId: ID.unique(),
      data: hotelData,
    });
  };

  const getHotels = async () => {
    const promise = await tableDB.listRows({
      databaseId: db_Id,
      tableId: hotel_Id,
    });

    const res = promise.rows.map(mapRowToHotel);

    setHotels(res);
    return promise;
  };
  return {
    addHotel,
    getHotels,
  };
};
