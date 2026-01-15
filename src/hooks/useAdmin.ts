import { ID, storage, tableDB } from "@/appwriteConfig";
import type { HotelFormData } from "@/types";

const db_Id = "admin-id";
const hotel_Id = "hotels";
const bucket_Id = "hotel_Images";

export const useAdmin = () => {
  const uplaodImage = async (images: File[], id: string) => {
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

  const addHotel = async (form: HotelFormData) => {
    const uploadedFileIds = await uplaodImage(form?.images, bucket_Id);
    const hotelData = { ...form, images: uploadedFileIds };
    const promise = tableDB.createRow({
      databaseId: db_Id,
      tableId: hotel_Id,
      rowId: ID.unique(),
      data: hotelData,
    });
  };
  return {
    addHotel,
  };
};
