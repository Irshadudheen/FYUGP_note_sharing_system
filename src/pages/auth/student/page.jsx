import { LoginForm } from "@/components/login-form"
import {Link} from "react-router-dom"
import { BookOpen, GraduationCap } from "lucide-react"

export default function StudentLoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">NotesHub</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Student Portal</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access thousands of study notes shared by your peers. Upload your notes and help others succeed in their
              FYUGP journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Browse Notes</h3>
                  <p className="text-sm text-muted-foreground">Find notes for any subject or course</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Upload & Share</h3>
                  <p className="text-sm text-muted-foreground">Contribute your notes to help peers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Collaborate</h3>
                  <p className="text-sm text-muted-foreground">Connect with students across FYUGP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <LoginForm userType="student" title="Student Login" description="Sign in to access and share study notes" />
          </div>
        </div>
      </div>
    </div>
  )
}
