import { Book, GraduationCap, Library } from "lucide-react"

export function MobileSubjectList() {
  const majorSubjects = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English Literature",
    "History",
    "Economics",
  ]

  const minorSubjects = [
    "Data Science",
    "Artificial Intelligence",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "Psychology",
    "Business Management",
    "Statistics",
  ]

  const mdcCourses = [
    "Environmental Studies",
    "Indian Constitution",
    "Digital Literacy",
    "Communication Skills",
    "Ethics and Values",
    "Research Methodology",
    "Entrepreneurship",
    "Health and Wellness",
  ]

  return (
    <div className="space-y-6 py-8">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Browse Notes by Subject</h1>
        <p className="text-muted-foreground">Find study materials for your FYUGP courses</p>
      </div>

      {/* Major Subjects */}
      <div className="rounded-xl border border-border bg-background shadow-sm">
        <div className="flex items-center gap-3 p-4 border-b">
          <div className="p-2 rounded-lg bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Major Subjects</h2>
            <p className="text-sm text-muted-foreground">Core discipline courses</p>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 gap-2">
            {majorSubjects.map((subject) => (
              <button
                key={subject}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left"
              >
                <span className="font-medium text-foreground">{subject}</span>
                <span className="text-sm text-muted-foreground">View Notes →</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Minor Subjects */}
      <div className="rounded-xl border border-border bg-background shadow-sm">
        <div className="flex items-center gap-3 p-4 border-b">
          <div className="p-2 rounded-lg bg-accent/10">
            <Book className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Minor Subjects</h2>
            <p className="text-sm text-muted-foreground">Elective and specialized courses</p>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 gap-2">
            {minorSubjects.map((subject) => (
              <button
                key={subject}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left"
              >
                <span className="font-medium text-foreground">{subject}</span>
                <span className="text-sm text-muted-foreground">View Notes →</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MDC Courses */}
      <div className="rounded-xl border border-border bg-background shadow-sm">
        <div className="flex items-center gap-3 p-4 border-b">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <Library className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">MDC Courses</h2>
            <p className="text-sm text-muted-foreground">Multi-Disciplinary Courses</p>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 gap-2">
            {mdcCourses.map((subject) => (
              <button
                key={subject}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left"
              >
                <span className="font-medium text-foreground">{subject}</span>
                <span className="text-sm text-muted-foreground">View Notes →</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
