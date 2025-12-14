import { toast } from "sonner";
import axiosInstance from "../config/axios";

export const NotesService = {
  uploadNotesService: async (data) => {
    try {
        console.log(data,'the data in service')
      const response = await axiosInstance.post(
        "/notes/upload",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return { data: response.data, error: null };
    } catch (error) {
      console.log(error);

      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.errors?.[0]?.message ||
        "Notes upload failed. Please try again.";

      toast.error(errorMessage);
      throw { data: null, error: errorMessage };
    }
  },
};
