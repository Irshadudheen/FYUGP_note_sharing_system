import { Upload, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadNotesSchema,departments } from "@/schema/noteschema";
import { NotesService } from "../../service/noteservice";
import { useNavigate } from "react-router-dom";

export function NotesUploadForm() {
  const navigate = useNavigate();
  const {
  register,
  handleSubmit,
  reset,
  setValue,
  watch,
  formState: { errors },
} = useForm({
  resolver: zodResolver(uploadNotesSchema),
  defaultValues: {
    isPublic: true,
  },
});
 const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  
  

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
      formData.append("module", data.module);
      formData.append("isPublic", data.isPublic);

      // 🔥 API call here 
      

      await NotesService.uploadNotesService(formData);
      

      setUploadSuccess(true);
      reset();
      setFileName("");
      setTimeout(() => {
        setUploadSuccess(false); navigate(-1)}, 3000);
      
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
        {/* File upload */}
        <div>
          
          <label
  htmlFor="file"
  className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-600 bg-[#FAF8E4] p-6 hover:border-[#FAF8E4] hover:bg-[#8F6127] transition"
>{errors.file && (
            <p className="text-red-500 text-sm">{errors.file.message}</p>
          )}
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
          
       

          {fileName && (
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
              <FileText className="h-4 w-4" />
              <span>
                {fileName} 
              </span>
            </div>
          )}
        </div>
        {/* Title */}
        <div>
          <label className="text-[#8F6127]  mb-1 flex justify-between">Title {errors.title && (
            <p className="text-red-500 text-sm">
              {errors.title.message}
            </p>
          )}</label>
          <input
              {...register("title")}
            placeholder="e.g., Computer Science Notes"
          
            disabled={isUploading}
            
            className="w-full rounded-md bg-[#FAF8E4] border border-gray-600 text-black px-3 py-2 focus:ring-2 focus:ring-[#8F6127] outline-none"
          />
        </div>
         
        {/* Subject */}
        <div>
          <label className="text-[#8F6127]  mb-1 flex justify-between">Subject {errors.subject && (
            <p className="text-red-500 text-sm">
              {errors.subject.message}
            </p>)}</label>
          <input
              {...register("subject")}
            placeholder="e.g., Data Structures and Algorithms"
          
            disabled={isUploading}
        
            className="w-full rounded-md bg-[#FAF8E4] border border-gray-600 text-black px-3 py-2 focus:ring-2 focus:ring-[#8F6127] outline-none"
          />
        </div>
        
          {/* Semester */}
        <div>
          <label className="text-[#8F6127]  mb-1 flex justify-between">Semester {errors.semester && (
            <p className="text-red-500 text-sm">
              {errors.semester.message}
            </p>)}</label>
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

         {/* Module */}
        <div>
          <label className="text-[#8F6127]  mb-1 flex justify-between">Module {errors.semester && (
            <p className="text-red-500 text-sm">
              {errors.module.message}
            </p>)}</label>
          <select
            {...register("module")}
            disabled={isUploading}
            className="w-full rounded-md bg-[#FAF8E4] border border-gray-600 px-3 py-2 focus:ring-2 focus:ring-[#8F6127] outline-none"
          >
            <option value="">Select Module</option>

            {['1','2','3','4','5','6','7','8'].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        
        {/* Department */}
        <div>
           <label className="text-[#8F6127]  mb-1 flex justify-between">Department {errors.department && (
            <p className="text-red-500 text-sm">
              {errors.department.message}
            </p>)}</label>
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

          
          

        </div>
       {/* Visibility Toggle */}
            <div>
              <label className="text-[#8F6127] mb-2 block font-medium">
                Visibility
              </label>

              <div className="flex items-center gap-4">
                {/* Toggle */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("isPublic")}
                    className="sr-only peer"
                  />

                  {/* Track */}
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer
                    peer-checked:bg-[#8F6127]
                    transition-all">
                  </div>

                  {/* Thumb */}
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all
                    peer-checked:translate-x-5">
                  </div>
                </label>

                {/* Text */}
                <span className="text-[#8F6127] font-medium">
                  {watch("isPublic") ? "Public" : "Private"}
                </span>
              </div>

              {errors.isPublic && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.isPublic.message}
                </p>
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
          disabled={isUploading}
          className="w-full py-3 rounded-md bg-[#8F6127] text-white font-semibold cursor-pointer"
        >

          {isUploading ? "Uploading..." : "Upload Notes"}
        </button>
      </form>
    </div>
  )
}
