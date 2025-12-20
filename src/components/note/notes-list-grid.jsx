import { useEffect, useState } from "react"
import { Download, Search, FileText, User } from "lucide-react"
import { NotesService } from "../../service/noteservice"
import { useNavigate } from "react-router-dom"
import { NotesGridSkeleton } from "./noteGridskleton"
import useAuthStore from "../../store/authstore"
// Sample data from backend

export function NotesListGrid() {
   const { isAuthenticated, user, logout, role ,profileStrength,setProfileStrength} = useAuthStore();
 const [searchQuery, setSearchQuery] = useState("")
const [selectedSemester, setSelectedSemester] = useState("")
const [selectedModule, setSelectedModule] = useState("")
const [notes, setNotes] = useState([])
const [loading, setLoading] = useState(true)
const navigate = useNavigate()
useEffect(() => {
  const timer = setTimeout(() => {
    fetchNotes()
  }, 400)

  return () => clearTimeout(timer)
}, [searchQuery, selectedSemester, selectedModule])
const fetchNotes = async () => {
  try {
    setLoading(true)

    const filters = {
      search: searchQuery || undefined,
      semester: selectedSemester || undefined,
      module: selectedModule || undefined,
    }

    const res = await NotesService.getAllNotesService(1, 6, filters)
    setNotes(res.data?.data?.notes || [])

  } catch (err) {
    console.error(err)
    setNotes([])
  } finally {
    setLoading(false)
  }
}
  const downloadFile = async (url, filename) => {
    if(!isAuthenticated){
      navigate('/student-login')
      return
    }
  const response = await fetch(url);
  const blob = await response.blob();

  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(link.href);
};
  const handleSearch = (e) => {
    
  setSearchQuery(e.target.value)
}


 
const handleModuleChange = (value) => {
  setSelectedModule(value)
}
const handleSemesterChange = (value) => {
  setSelectedSemester(value)
  setSelectedModule("")
}



  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
  {/* Semester */}
  <select
    value={selectedSemester}
    onChange={(e) => handleSemesterChange(e.target.value)}
    className="rounded-lg border border-gray-700 bg-[#FAF8E4] px-4 py-2 text-black focus:ring-2 focus:ring-[#8F6127] outline-none"
  >
    <option value="">Select Semester</option>
    {[1,2,3,4,5,6].map((sem) => (
      <option key={sem} value={sem} className="bg-[#FAF8E4] selection:bg-amber-200">
        Semester {sem}
      </option>
    ))}
  </select>

  {/* Module (Only show if semester selected) */}
  {selectedSemester && (
    <select
      value={selectedModule}
      onChange={(e) => handleModuleChange(e.target.value)}
      className="rounded-lg border border-gray-700 bg-[#FAF8E4] px-4 py-2 text-black focus:ring-2 focus:ring-[#8F6127] outline-none"
    >
      <option value="">Select Module</option>
      {[1,2,3,4,5].map((mod) => (
        <option key={mod} value={mod}>
          Module {mod}
        </option>
      ))}
    </select>
  )}
</div>
      {/* Search bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2  text-gray-400" />
          <input
            type="text"
            placeholder="Search by subject, department, or title..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full rounded-lg bg-[#FAF8E4] border border-gray-700 text-black px-10 py-2 focus:ring-2 focus:ring-[#8F6127] outline-none"
          />
        </div>
      </div>
      
      {loading ? (
  <NotesGridSkeleton count={6} />

) : notes && notes.length === 0 ?(
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <img src="/emptykotta.webp" className="mb-4 h-30 w-30 " draggable={false} />
          <h3 className="text-lg font-semibold text-[#8F6127]">No notes found</h3>
          <p className="mt-2 text-sm text-[#8F6127]">Try adjusting your search query</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
          { notes&&notes.map((note) => (
            <div
              key={note.id}
              className="flex flex-col rounded-xl border border-gray-700 bg-[#FAF8E4] p-5 shadow-md transition hover:shadow-lg"
            >
              {/* Header */}
              <div className="mb-3 flex items-start justify-between">
                <img src="/kotta.webp" className="h-15 w-15 " draggable={false} />
                <span className="text-[6px] sm:text-[11px] lg:text-xs bg-[#8F6127] text-white px-2 py-1 rounded-md text-nowrap">
                  {note.department}
                </span>
              </div>

              {/* Title & subject */}
              <h2 className="text-lg text-[#8F6127] font-semibold line-clamp-2">{note.title}</h2>
              <p className="text-[#8F6127] text-sm line-clamp-1">{note.subject}</p>

              {/* Content */}
              <div className="flex-1 mt-4 space-y-2 text-sm text-[#8F6127]">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{note.userId&&note.userId.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>{note.downloadCount}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 flex w-full items-center justify-between gap-3">
              <button onClick={()=>{
                if(!isAuthenticated){
                  navigate('/student-login')
                  return
                }
                window.location.href = note.noteUrl;
              }} className="flex w-1/2 items-center justify-center gap-2 rounded-lg border border-[#8F6127] py-2 text-black hover:bg-[#8F6127] hover:text-white transition">
                <FileText className="h-4 w-4" />
               <span className="hidden lg:block"> View </span>
            </button>

            <button onClick={() =>
                  downloadFile(
                    note.noteUrl,
                    note.title+ ".pdf"
                  )
                } className="flex w-1/2 items-center bg-[#8F6127] justify-center gap-2 rounded-lg border border-[#8F6127] py-2 text-white hover:bg-[#8a5617] hover:text-white transition">
                <Download className="h-4 w-4" />
              <span className="hidden lg:block"> Download </span> 
            </button>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
