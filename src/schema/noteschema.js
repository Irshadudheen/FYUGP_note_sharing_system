import { z } from "zod"
export const departments = [
  "Economics",
  "Mathematics",
  "physics",
  "English",
  "chemistry",
  "Computer Science",
  "West Asian",
  "Bio chemistry",
  "Bio Technology",
  "Micro Biology",
  "Bcom with co-operation",
  "Bcom with computer application",
  "Bachelor of Management",
  "BVoc logistics",
  "Bvoc Islmic Finance",
  "Bvoc Professional Accounting and Taxation",
  "Statistics",
  "Languages",

] 
export const uploadNotesSchema = z.object({
    subject: z.string().min(3, "Subject Name must be at least 3 characters long").max(100, "Subject Name must be at most 100 characters long"),
    title: z.string().min(3, "Title must be at least 3 characters long").max(100, "Title must be at most 100 characters long"),
    semester: z.string().min(1, "Please select a semester")
    .refine(
      (value) => ["1", "2", "3", "4", "5", "6", "7", "8"].includes(value),
      "Please select a valid semester"
    ),

    department: z.string()
  .min(1, "Please select a department")
  .refine(
    (value) => departments.includes(value),
    "Please select a valid department"
  ),
    file: z.instanceof(File, "A valid file must be provided"),
})
