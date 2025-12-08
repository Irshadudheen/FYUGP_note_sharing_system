import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { NotesListGrid } from "@/components/note/notes-list-grid"

export default function NotesListPage() {
  return (
    <div className="min-h-screen bg-[#FAF8E4]">
      <Header />
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#8F6127] sm:text-4xl">Browse Notes</h1>
          <p className="mt-3 text-lg text-muted-foreground">Discover study materials shared by your fellow students</p>
        </div>
        <NotesListGrid />
      </main>
      <Footer />
    </div>
  )
}