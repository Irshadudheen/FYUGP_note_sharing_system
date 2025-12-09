import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { NotesListGrid } from "@/components/note/notes-list-grid"
import { Link } from "react-router-dom"
import { Upload } from "lucide-react"

export default function NotesListPage() {
  return (
    <div className="min-h-screen bg-[#FAF8E4]">
      <Header />
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Title + Upload Button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#8F6127] sm:text-4xl">Browse Notes</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Discover study materials shared by your fellow students
            </p>
          </div>

          {/* Upload Note Button */}
        <Link to="/upload">
        
  <button
    className="px-5 py-3 rounded-lg bg-[#8F6127] hover:bg-[#704A1F] text-white font-semibold shadow-md transition flex items-center gap-2"
  >
    {/* Mobile text */}
    

    {/* Desktop text */}
    <button className="flex items-center gap-2">
  <Upload className="h-5 w-5" />
  <span className="hidden sm:inline">Upload Note</span>
</button>
  </button>
</Link>
        </div>

        <NotesListGrid />
      </main>
      <Footer />
    </div>
  )
}
