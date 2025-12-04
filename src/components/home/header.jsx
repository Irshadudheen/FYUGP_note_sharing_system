import {Link, useNavigate} from "react-router-dom"

import { BookOpen } from "lucide-react"

export function Header() {
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">NotesHub</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
          </nav>

         <div className="flex items-center gap-3">
  <button onClick={()=>navigate('/teacher-login')} className="px-4 py-2 text-sm font-medium rounded-md border border-[#330033] text-[#330033] hover:bg-[#330033] hover:text-white transition">
    Teacher Login
  </button>

  <button onClick={()=>navigate('/student-login')} className="px-4 py-2 text-sm font-medium rounded-md border border-[#540054] text-[#540054] hover:bg-[#540054] hover:text-white transition">
    Student Login
  </button>

  <button className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition">
    Get Started
  </button>
</div>
        </div>
      </div>
    </header>
  )
}
