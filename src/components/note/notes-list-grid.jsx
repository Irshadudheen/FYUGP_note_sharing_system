import { useState } from "react"
import { Download, Search, FileText, User } from "lucide-react"

// Sample data from backend
const sampleNotes = [
  {
    id: 1,
    title: "Data Structures Complete Notes",
    subject: "Data Structures and Algorithms",
    department: "Computer Science",
    uploadedBy: "Rajesh Kumar",
    uploadDate: "2024-01-15",
    downloads: 245,
  },
  {
    id: 2,
    title: "Calculus II - Chapter 1-5",
    subject: "Calculus II",
    department: "Mathematics",
    uploadedBy: "Priya Sharma",
    uploadDate: "2024-01-14",
    downloads: 187,
  },
  {
    id: 3,
    title: "Digital Electronics Lab Manual",
    subject: "Digital Electronics",
    department: "Electronics Engineering",
    uploadedBy: "Amit Patel",
    uploadDate: "2024-01-13",
    downloads: 156,
  },
  {
    id: 4,
    title: "Environmental Studies Summary",
    subject: "Environmental Studies",
    department: "MDC Course",
    uploadedBy: "Sneha Reddy",
    uploadDate: "2024-01-12",
    downloads: 203,
  },
  {
    id: 5,
    title: "Python Programming Basics",
    subject: "Programming with Python",
    department: "Computer Science",
    uploadedBy: "Vikram Singh",
    uploadDate: "2024-01-11",
    downloads: 312,
  },
  {
    id: 6,
    title: "Organic Chemistry Reactions",
    subject: "Organic Chemistry",
    department: "Chemistry",
    uploadedBy: "Anjali Gupta",
    uploadDate: "2024-01-10",
    downloads: 178,
  },
]

export function NotesListGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredNotes, setFilteredNotes] = useState(sampleNotes)

  const handleSearch = (query) => {
    setSearchQuery(query)
    const filtered = sampleNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.subject.toLowerCase().includes(query.toLowerCase()) ||
        note.department.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredNotes(filtered)
  }

  return (
    <div className="space-y-6">
      {/* Search bar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2  text-gray-400" />
          <input
            type="text"
            placeholder="Search by subject, department, or title..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full rounded-lg bg-[#FAF8E4] border border-gray-700 text-black px-10 py-2 focus:ring-2 focus:ring-[#8F6127] outline-none"
          />
        </div>
      </div>

      {/* No results */}
      {filteredNotes.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <img src="/emptykotta.png" className="mb-4 h-30 w-30 " draggable={false} />
          <h3 className="text-lg font-semibold text-[#8F6127]">No notes found</h3>
          <p className="mt-2 text-sm text-[#8F6127]">Try adjusting your search query</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="flex flex-col rounded-xl border border-gray-700 bg-[#FAF8E4] p-5 shadow-md transition hover:shadow-lg"
            >
              {/* Header */}
              <div className="mb-3 flex items-start justify-between">
                <img src="/kotta.png" className="h-15 w-15 " draggable={false} />
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
                  <span>{note.uploadedBy}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>{note.downloads}<span className="hidden lg:block">downloads</span> </span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 flex w-full items-center justify-between gap-3">
              <button className="flex w-1/2 items-center justify-center gap-2 rounded-lg border border-[#8F6127] py-2 text-black hover:bg-[#8F6127] hover:text-white transition">
                <FileText className="h-4 w-4" />
               <span className="hidden lg:block"> View </span>
            </button>

            <button className="flex w-1/2 items-center bg-[#8F6127] justify-center gap-2 rounded-lg border border-[#8F6127] py-2 text-white hover:bg-[#8a5617] hover:text-white transition">
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
