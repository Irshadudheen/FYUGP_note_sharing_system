import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm({ userType, title, description }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [admissionNo, setAdmissionNo] = useState("")
  const [password, setPassword] = useState("")
  const [isSignup, setIsSignup] = useState(false)

  const [name, setName] = useState("")
  const [department, setDepartment] = useState("")
  const [year, setYear] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignup) {
      console.log("Student Signup:", {
        name,
        department,
        year,
        admissionNo,
        email,
        password
      })
    } else {
      console.log("Login:", { userType, admissionNo, email, password })
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-xl shadow-sm bg-white">
      
      {/* Title */}
      <div className="space-y-1 mb-6 text-center">
        <h1 className="text-2xl font-bold">
          {isSignup ? "Student Sign Up" : title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {isSignup ? "Create a new student account" : description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Student SIGNUP fields */}
        {userType === "student" && isSignup && (
          <>
            {/* Name */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full h-11 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Department */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Department</label>
              <input
                type="text"
                value={department}
                placeholder="Enter your department"
                onChange={(e) => setDepartment(e.target.value)}
                required
                className="w-full h-11 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Year */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Year</label>
              <input
                type="text"
                value={year}
                placeholder="e.g., 1st Year, 2nd Year"
                onChange={(e) => setYear(e.target.value)}
                required
                className="w-full h-11 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-11 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </>
        )}

        {/* Student LOGIN Admission No */}
        {userType === "student" && !isSignup && (
          <div className="space-y-1">
            <label className="text-sm font-medium">Admission Number</label>
            <input
              type="text"
              placeholder="Enter your admission number"
              value={admissionNo}
              onChange={(e) => setAdmissionNo(e.target.value)}
              required
              className="w-full h-11 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
        )}

        {/* Teacher/Admin Email */}
        {(userType === "teacher" || userType === "admin") && (
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-11 px-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
        )}

        {/* Password */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
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
              {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full h-11 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
        >
          {isSignup ? "Create Account" : "Sign In"}
        </button>

        {/* Student → Toggle Sign Up */}
        {userType === "student" && (
          <p className="text-center text-sm text-muted-foreground">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  className="text-primary hover:underline font-medium"
                  type="button"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button
                  className="text-primary hover:underline font-medium"
                  type="button"
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </p>
        )}
      </form>
    </div>
  )
}
