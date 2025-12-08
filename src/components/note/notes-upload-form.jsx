import { useState } from "react"
import { Upload, FileText, CheckCircle2 } from "lucide-react"

export function NotesUploadForm() {
  const [subjectName, setSubjectName] = useState("")
  const [departmentName, setDepartmentName] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsUploading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsUploading(false)
    setUploadSuccess(true)

    setTimeout(() => {
      setSubjectName("")
      setDepartmentName("")
      setFile(null)
      setUploadSuccess(false)
    }, 3000)
  }

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl border border-gray-700 bg-[#0A1929] shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-1 text-white">Share Your Notes</h2>
      <p className="text-gray-400 mb-6">Fill in the details below to upload your study materials</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subject */}
        <div>
          <label className="text-gray-200 block mb-1">Subject Name</label>
          <input
            type="text"
            placeholder="e.g., Data Structures and Algorithms"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            disabled={isUploading}
            required
            className="w-full rounded-md bg-gray-800 border border-gray-600 text-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Department */}
        <div>
          <label className="text-gray-200 block mb-1">Department Name</label>
          <input
            type="text"
            placeholder="e.g., Computer Science"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            disabled={isUploading}
            required
            className="w-full rounded-md bg-gray-800 border border-gray-600 text-gray-200 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* File upload */}
        <div>
          <label className="text-gray-200 block mb-2">Upload File</label>
          <label
            htmlFor="file"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-600 bg-gray-800 p-6 hover:border-blue-500 hover:bg-gray-700 transition"
          >
            <Upload className="h-6 w-6 text-gray-400" />
            <span className="text-sm text-gray-400">
              {file ? file.name : "Choose a file or drag it here"}
            </span>
          </label>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
            required
            disabled={isUploading}
          />
          {file && (
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
              <FileText className="h-4 w-4" />
              <span>
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
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
          disabled={isUploading}
          className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition text-white font-semibold disabled:bg-gray-600"
        >
          {isUploading ? "Uploading..." : "Upload Notes"}
        </button>
      </form>
    </div>
  )
}
