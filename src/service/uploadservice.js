import { toast } from "sonner";
import axiosInstance from "../config/axios";

export const NotesService = {
  /* ===============================
     Upload Notes
  ================================ */
  uploadNotesService: async (data) => {
    try {
      const response = await axiosInstance.post("/note/upload", data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return { data: response.data, error: null };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.errors?.[0]?.message ||
        "Notes upload failed. Please try again.";

      toast.error(errorMessage);
      throw { data: null, error: errorMessage };
    }
  },

  /* ===============================
     Get All Notes (Pagination)
     page = 1, limit = 10
  ================================ */
  getAllNotesService: async (page = 1, limit = 10) => {
    try {
      const response = await axiosInstance.get(
        `/note?page=${page}&limit=${limit}`,
        { withCredentials: true }
      );

      return { data: response.data, error: null };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Failed to fetch notes.";

      toast.error(errorMessage);
      throw { data: null, error: errorMessage };
    }
  },

  /* ===============================
     Get Single Note (Edit)
  ================================ */
  getNoteByIdService: async (noteId) => {
    try {
      const response = await axiosInstance.get(
        `/note/${noteId}`,
        { withCredentials: true }
      );

      return { data: response.data, error: null };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Failed to fetch note details.";

      toast.error(errorMessage);
      throw { data: null, error: errorMessage };
    }
  },

  /* ===============================
     Update Note
  ================================ */
  updateNoteService: async (noteId, data) => {
    try {
      const response = await axiosInstance.put(
        `/note/${noteId}`,
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Note updated successfully");
      return { data: response.data, error: null };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Failed to update note.";

      toast.error(errorMessage);
      throw { data: null, error: errorMessage };
    }
  },

  /* ===============================
     Delete Note
  ================================ */
  deleteNoteService: async (noteId) => {
    try {
      const response = await axiosInstance.delete(
        `/note/${noteId}`,
        { withCredentials: true }
      );

      toast.success("Note deleted successfully");
      return { data: response.data, error: null };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Failed to delete note.";

      toast.error(errorMessage);
      throw { data: null, error: errorMessage };
    }
  },
};
