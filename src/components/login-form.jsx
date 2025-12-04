

import { useState } from "react"


import {Link} from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"



export function LoginForm({ userType, title, description, accentColor = "primary" }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${userType} login:`, { email, password })
    // Add authentication logic here
  }

  return (
    <div className="w-full max-w-md">
      <div className="space-y-1">
        <div className="text-2xl font-bold text-center">{title}</div>
        <div className="text-center">{description}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor={`${userType}-email`}>Email</label>
            <input
              id={`${userType}-email`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor={`${userType}-password`}>Password</label>
            <div className="relative">
              <input
                id={`${userType}-password`}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <Link href="#" className="text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <button type="submit" className="w-full" size="lg">
            Sign In
          </button>
          {userType === "student" && (
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="#" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
