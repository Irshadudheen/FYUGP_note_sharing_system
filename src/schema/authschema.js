import { z } from "zod"

export const loginSchema = z.object({
    phone: z
            .string()
            .min(10, "Phone must be at least 10 characters long")
            .max(10, "Phone must be at most 10 characters long")
            .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    password: z
        .string()
        .min(1, "Password must be at least 1 characters long")
        ,
})

export const registerStudentSchema = z
    .object({
        
        fullname: z
            .string()
            .min(10, "Phone must be at least 10 characters long")
            .max(10, "Phone must be at most 10 characters long")
            .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
            admissionNumber: z
            .string()
            .min(10, "Phone must be at least 10 characters long")
            .max(10, "Phone must be at most 10 characters long")
            .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
             Department: z
            .string()
            .min(10, "Phone must be at least 10 characters long")
            .max(10, "Phone must be at most 10 characters long")
            .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
             year: z
            .string()
            .min(10, "Phone must be at least 10 characters long")
            .max(10, "Phone must be at most 10 characters long")
            .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
            email: z.string().email("Invalid email address"),
            
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long")

            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[0-9]/, "Password must contain at least one digit")
            .regex(
                /[^a-zA-Z0-9]/,
                "Password must contain at least one special character"
            ),
    })
    .strict();

export const OtpSchema = z.object({
    otp: z.string()
        .regex(/^\d{6}$/, { message: "OTP must be exactly 6 digits." }),
})

export const forgetPasswordSchema = z.object({
    phone: z
            .string()
            .min(10, "Phone must be at least 10 characters long")
            .max(10, "Phone must be at most 10 characters long")
            .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
})

export const resetPasswordSchema = z.object({
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one digit")
        .regex(
            /[^a-zA-Z0-9]/,
            "Password must contain at least one special character"
        ),
    confirmPassword: z.string().min(1, { message: "Please confirm your password" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
})