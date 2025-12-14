import { Upload, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadNotesSchema,departments } from "@/schema/noteschema";
import { NotesService } from "../../service/uploadservice";

export function NotesUploadForm() {
    const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(uploadNotesSchema),
  });
 const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  
console.log(errors)
    /* ---------- FILE HANDLER ---------- */
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("file", file, { shouldValidate: true });
      setFileName(file.name);
    }
  };

   /* ---------- ZOD SUBMIT ---------- */
  const onSubmit = async (data) => {
    try {
      setIsUploading(true);
      console.log('hih')
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("subject", data.subject);
      formData.append("department", data.department);
      formData.append("noteFile", data.file);
      formData.append("semester", data.semester);

      // 🔥 API call here 
      

      await NotesService.uploadNotesService(formData);
      

      setUploadSuccess(true);
      reset();
      setFileName("");
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl border border-[#8F6127] bg-[#FAF8E4] shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-1 text-[#8F6127]">Share Your Notes</h2>
      <p className="text-[#8F6127] mb-6">Fill in the details below to upload your study materials</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="text-[#8F6127] block mb-1">Title</label>
          <input
              {...register("title")}
            placeholder="e.g., Computer Science Notes"
          
            disabled={isUploading}
            
            className="w-full rounded-md bg-[#FAF8E4] border border-gray-600 text-black px-3 py-2 focus:ring-2 focus:ring-[#8F6127] outline-none"
          />
        </div>
         {errors.title && (
            <p className="text-red-500 text-sm">
              {errors.title.message}
            </p>
          )}
        {/* Subject */}
        <div>
          <label className="text-[#8F6127] block mb-1">Subject</label>
          <input
              {...register("subject")}
            placeholder="e.g., Data Structures and Algorithms"
          
            disabled={isUploading}
        
            className="w-full rounded-md bg-[#FAF8E4] border border-gray-600 text-black px-3 py-2 focus:ring-2 focus:ring-[#8F6127] outline-none"
          />
        </div>
         {errors.subject && (
            <p className="text-red-500 text-sm">
              {errors.subject.message}
            </p>
          )}
          {/* Semester */}
        <div>
          <label className="text-[#8F6127] block mb-1">Semester</label>
          <select
            {...register("semester")}
            disabled={isUploading}
            className="w-full rounded-md bg-[#FAF8E4] border border-gray-600 px-3 py-2 focus:ring-2 focus:ring-[#8F6127] outline-none"
          >
            <option value="">Select Semester</option>

            {['1','2','3','4','5','6','7','8'].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
         {errors.semester && (
            <p className="text-red-500 text-sm">
              {errors.semester.message}
            </p>
          )}
        {/* Department */}
        <div>
           <label className="text-[#8F6127] block mb-1">Department</label>
          <select
            {...register("department")}
            disabled={isUploading}
            className="w-full rounded-md bg-[#FAF8E4] border border-gray-600 px-3 py-2 focus:ring-2 focus:ring-[#8F6127] outline-none"
          >
            <option value="">Select Department</option>

            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          
          {errors.department && (
            <p className="text-red-500 text-sm">
              {errors.department.message}
            </p>
          )}

        </div>
          
        {/* File upload */}
        <div>
          
          <label
  htmlFor="file"
  className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-600 bg-[#FAF8E4] p-6 hover:border-[#FAF8E4] hover:bg-[#8F6127] transition"
>
  <Upload className="h-6 w-6 text-gray-400 group-hover:text-white" />
  <span className="text-sm text-gray-400 group-hover:text-white">
    {fileName || "Choose a file or drag it here"}
  </span>
</label>
          <input
            id="file"
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
            onChange={handleFileChange}
            disabled={isUploading}
          />
          {errors.file && (
            <p className="text-red-500 text-sm">{errors.file.message}</p>
          )}
       

          {fileName && (
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
              <FileText className="h-4 w-4" />
              <span>
                {fileName} 
              </span>
            </div>
          )}
        </div>

        {/* Success */}
        {uploadSuccess && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-green-600/20 text-green-400">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">Notes uploaded successfully!</span>
          </div>
        )}

       <button
          type="submit"
          disabled={isUploading }
          className="w-full py-3 rounded-md bg-[#8F6127] text-white font-semibold cursor-pointer"
        >

          {isUploading ? "Uploading..." : "Upload Notes"}
        </button>
      </form>
    </div>
  )
}
