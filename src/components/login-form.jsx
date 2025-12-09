import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import GoogleLoginButton from "./user/auth/googleLogin"

export function LoginForm({ userType, title, description }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 
  const handleAdminLogin = (e) => {
    e.preventDefault()
    console.log("Admin login:", { email, password })
    // TODO - Call backend API
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-xl shadow-sm ">
      {/* Title */}
      <div className="space-y-1 mb-6 text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {/* STUDENT + TEACHER = Google Login */}
      {(userType === "student" || userType === "teacher") && (
        <GoogleLoginButton role={userType} authType={'google'}/>
      )}

      {/* ADMIN LOGIN FORM */}
      {userType === "admin" && (
        <form onSubmit={handleAdminLogin} className="space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-11 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-11 px-3 rounded-md border border-input bg-background pr-10 focus:ring-2 focus:ring-primary outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-11 border hover:bg-black hover:text-white rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
          >
            Sign In
          </button>
        </form>
      )}
    </div>
  )
}
