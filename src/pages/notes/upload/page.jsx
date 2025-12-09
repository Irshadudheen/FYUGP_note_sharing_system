import { Header } from "@/components/home/header"
import { Footer } from "@/components/home/footer"
import { NotesUploadForm } from "@/components/note/notes-upload-form"

export default function NotesUploadPage() {
  return (
    <div className="min-h-screen bg-[#FAF8E4]">
      <Header />
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#7D511A] sm:text-4xl">Upload Your Notes</h1>
            <p className="mt-3 text-lg text-[#7D511A]">
              Share your knowledge with fellow students and help them succeed
            </p>
          </div>
          <NotesUploadForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
