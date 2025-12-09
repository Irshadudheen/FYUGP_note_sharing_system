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
import StudentLoginPage from "../pages/auth/student/page.jsx";
import TeacherLoginPage from "../pages/auth/teacher/page.jsx";
import AdminLoginPage from "../pages/auth/admin/page.jsx";
import NotesListPage from "../pages/notes/list/page.jsx";
import NotesUploadPage from "../pages/notes/upload/page.jsx";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    children: [
      { path: "/", element: <LandingPage/> },
      {path:'student-login', element:<UnProtectedRoute> <StudentLoginPage userType="student"/></UnProtectedRoute>},
      {path:'teacher-login', element:<UnProtectedRoute> <TeacherLoginPage userType="teacher"/></UnProtectedRoute>},
      {path:'adimn-login', element: <UnProtectedRoute> <AdminLoginPage userType="admin"/></UnProtectedRoute>},
      {path:'notes', element: <NotesListPage/>},
      {path:'upload', element: <NotesUploadPage/>},
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

  
  ,
  { path: "otp-verification", element: <InputOtpForm /> },
  { path: "reset-password", element: <div>Reset Password</div> },
  { path: "employee/forgot-password", element: <ForgotPassword /> },
   { path: "employer/forgot-password", element: <ForgotPassword /> },
  { path: "*", element: <div>Not Found</div> },
]);
