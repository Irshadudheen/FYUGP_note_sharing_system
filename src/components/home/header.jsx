import { Link, useNavigate } from "react-router-dom"
import { BookOpen, Menu, X } from "lucide-react"
import useAuthStore from "../../store/authstore";
import { useState } from "react"

export function Header() {
    const { isAuthenticated, user, logout, role ,profileStrength,setProfileStrength} = useAuthStore();
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  console.log(isAuthenticated,'header auth',user)
  return (
    <header className="sticky  top-0 z-50 w-full border-b border-border  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAF8E4]">
        
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-15 w-15 items-center justify-center rounded-lg ">
              <img src="/kotta.png" alt="" />
            </div>
            <span className="text-xl font-bold text-foreground">Kotta Note</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {(isAuthenticated && user) ? (
              <>
                <span className="text-sm font-medium text-foreground">
                  Welcome, {user.firstName || user.email}!
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>

            <button
              onClick={() => navigate("/teacher-login")}
              className="px-4 py-2 text-sm font-medium rounded-md border border-[#330033] text-[#330033] hover:bg-[#330033] hover:text-white transition"
            >
              Teacher Login
            </button>

            <button
              onClick={() => navigate("/student-login")}
              className="px-4 py-2 text-sm font-medium rounded-md border border-[#540054] text-[#540054] hover:bg-[#540054] hover:text-white transition"
            >
              Student Login
            </button>

            <button className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition">
              Get Started
            </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden mt-2 space-y-3 pb-4 animate-slideIn">
            
            <a href="#features" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </a>

            <a href="#how-it-works" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              How It Works
            </a>

            <a href="#about" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </a>
            {(isAuthenticated && user) ? (
              <>
                <span className="block text-sm font-medium text-foreground">
                  Welcome, {user.firstName || user.email}!
                </span>
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 text-sm font-medium rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
              
            <button
              onClick={() => navigate("/teacher-login")}
              className="w-full px-4 py-2 text-sm font-medium rounded-md border border-[#330033] text-[#330033] hover:bg-[#330033] hover:text-white transition"
            >
              Teacher Login
            </button>

            <button
              onClick={() => navigate("/student-login")}
              className="w-full px-4 py-2 text-sm font-medium rounded-md border border-[#540054] text-[#540054] hover:bg-[#540054] hover:text-white transition"
            >
              Student Login
            </button>
              </>
            )}
            <button className="w-full px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
