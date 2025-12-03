import { axiosInstance } from "../config/axios.js";
import { toast } from "sonner";


export const AuthService = {
    loginService: async (data) => {
        try {
          
            const response = await axiosInstance.post("/auth/login", data, { withCredentials: true });
            console.log(response,'the respon')
            return { data: response.data, error: null };
        } catch (error) {
            console.log(error)
            const errorMessage = error.response.data.message || error?.response?.data?.errors[0].message ||  "Login failed. Please try again.";
            toast.error(errorMessage);
            throw { data: null, error: errorMessage };
        }
    },

    registerService: async (data) => {
        try {
            const response = await axiosInstance.post("/auth/register", data, { withCredentials: true });
            return { data: response.data, error: null };
        } catch (error) {
            console.log(error)
            const errorMessage =error.response.data.message || error?.response?.data?.errors[0].message || "Registration failed. Please try again.";
            toast.error(errorMessage);
            throw { data: null, error: errorMessage };
        }
    },

   

    otpVerificationService: async (data) => {
        try {
            const response = await axiosInstance.post("/auth/verify-otp", data);
            return { data: response.data, error: null };
        } catch (error) {
            console.log(error)
            const errorMessage = error.response.data.message || error?.response?.data?.errors[0].message ||  "OTP validation failed. Please try again.";
            toast.error(errorMessage);
            throw { data: null, error: errorMessage };
        }
    },

    forgetPasswordService: async (data) => {
        try {
            const response = await axiosInstance.post("/auth/forgot-password", data);
            return { data: response.data, error: null };
        } catch (error) {
            const errorMessage = error.response.data.message || error?.response?.data?.errors[0].message ||  "ForgetPassword Service failed. Please try again.";
            toast.error(errorMessage)
            throw { data: null, error: errorMessage };
        }
    },

    

    

    fetchUser: async () => {
        try {
            const response = await axiosInstance.get("/auth/me");
            return { data: response.data, error: null };
        } catch (error) {
            return { data: null, error: error.message };
        }
    },

    logout: async () => {
        console.log("Logout called");
        try {
            await axiosInstance.post("/auth/logout", {}, { withCredentials: true });
            return { error: null };
        } catch (error) {
            console.log("Logout error: ", error);
            return { error: error.message };
        }
    },

    refreshToken: async (data) => {
        
        try {
            const response = await axiosInstance.post('/auth/refresh-token', data, { withCredentials: true });
            return { data: response.data, error: null };
        } catch (error) {
            return { data: null, error: error.message };
        }
    },

    resetPasswordService: async (data) => {
        try {
            console.log("ResetPasswordService data:", data);
            const response = await axiosInstance.post("/auth/reset-password", data);
            return { data: response.data, error: null };
        } catch (error) {
            const errorMessage = error?.response?.data?.error || "Reset password failed. Please try again.";
            toast.error(errorMessage);
            throw { data: null, error: errorMessage };
        }
    }
};
