import { createBrowserRouter, Outlet } from "react-router-dom";
import AppLayout from "../layout/Applayout.jsx";
import LandingPage from "../pages/home/home.jsx";
import ConditionalLanding from "../components/ConditionalLanding.jsx";
import LoginPage from "../pages/auth/auth.jsx";
import InputOtpForm from "../components/user/auth/inputOtpForm.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { env } from "../config/env.js";
import ForgotPassword from "../components/user/auth/forgotPassowrd.jsx";
import UnProtectedRoute from "./UnProtectedRoutes";
import ProtectedRoute from "./ProtectedRoutes";
import OnboardingForm from "../pages/profile/onBoarding.jsx";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    children: [
      { path: "/", element: <ConditionalLanding /> },
      {
        path: "profile/student",
        element: (
          <>student</>
        ),
      },
      {
        path: "profile/onboarding",
        element: (
          <>onboarding</>
        ),
      },
      {
        path: "profile/teacher",
        element: (
          <>teacher</>
        ),
      },
      {
        path: "teacher",
        element: (
          <>teacher</>
        ),
       
        
      },
      {
        path: "student",
        element: (
          <ProtectedRoute>
           student 
          </ProtectedRoute>
        ),
        
      },
      
    ],
  },

  // Auth routes outside layout
  {
    path: "auth/employer",
    element: (<UnProtectedRoute><LoginPage role="employer" /></UnProtectedRoute>),
  },
  {
    path: "auth/employee",
    element: (
      <UnProtectedRoute>
        <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
          <LoginPage role="employee" />
        </GoogleOAuthProvider>
      </UnProtectedRoute>
    ),
  },
  { path: "otp-verification", element: <InputOtpForm /> },
  { path: "reset-password", element: <div>Reset Password</div> },
  { path: "employee/forgot-password", element: <ForgotPassword /> },
   { path: "employer/forgot-password", element: <ForgotPassword /> },
  { path: "*", element: <div>Not Found</div> },
]);
