import { LoginForm } from "@/components/login-form"
import {Link} from "react-router-dom"
import { BookOpen, User } from "lucide-react"
import { Header } from "../../../components/home/header"

export default function TeacherLoginPage() {
  return (
    <div className=" flex flex-col bg-[#FAF8E4]">


      <div className="flex-1 flex items-center justify-center p-4 mt-15">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                <User className="h-6 w-6 text-accent" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Teacher Portal</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Monitor student contributions, review uploaded notes, and guide students toward academic excellence in
              FYUGP.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Review Content</h3>
                  <p className="text-sm text-muted-foreground">Verify and approve student notes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Upload Resources</h3>
                  <p className="text-sm text-muted-foreground">Share lecture notes and materials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Monitor Progress</h3>
                  <p className="text-sm text-muted-foreground">Track engagement and contributions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <LoginForm
              userType="teacher"
              title="Teacher Login"
              description="Sign in to manage and review student notes"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
