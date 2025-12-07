import { Book, GraduationCap, Library } from "lucide-react"

export function MobileSubjectList() {
  const majorSubjects = [
    "B.A. Economics Honours",
    "B.A. English Honours",
    "B.A. West Asian Studies Honours",
    "B.Com with Computer Application Honours",
    "B.Com with Co-operation Honours",
    "B.Sc. Biotechnology Honours(SF)",
    "B.Sc. Computer Science Honours",
    "B.Sc. Microbiology Honours",
    "B.Sc.Biochemistry Honours(SF)",
    "Bachelor of Business Administration Honours (SF)",
    "BSc Mathematics and Physics Honours(Double Major)",
    "BVoc Islamic Finance",
    "BVoc Logistics Management",
    "BVoc Professional Accounting and Taxation"

  ]

  const minorSubjects = [
  "Marketing Management",
  "Communicating With Financial Data",
  "Foundations of Modern Banking",
  "Basics of Financial Markets",
  "Fundamentals of Financial Accounting",
  "Essentials of Cost Accounting",
  "Biochemistry",
  "Introduction to Biochemistry",
  "Fundamentals of Biotechnology",
  "Computer Fundamentals With MS Excel SPSS",
  "Introduction to IT",
  "Fundamentals of Content Creation",
  "The Language of Digital Space: English and New Media",
  "Introduction to Microbiology",
  "Basics of Communication",
  "Introduction to Mass Communication",
  "Mathematical Logic, Set Theory and Combinatorics",
  "Human Rights",
  "Indian Constitution",
  "Basic Statistics",
  "Fundamentals of Data Analysis",
  "Basics of Translation",
  "Modern Indian History",
  "Basic Inorganic and Bio Inorganic"
]


  const mdcCourses = [
  "Creativity, Innovation & Business Development",
  "Introducing Print and Digital Narratives",
  "Elementary Arabic",
  "The Art of Photography",
  "Fundamentals of Statistics",
  "Stock Market Fundamentals",
  "Data Analysis and Visualization through Spreadsheet",
  "Security Trading Practices",
  "Physics in Daily Life",
  "Mathematics for Competitive Examinations",
  "Microorganisms in Daily Life",
  "Yoga and Stress Management",
  "Historical Tourism in Kerala",
  "Food Biochemistry and Quality Control",
  "Hindi Cinema Mein Samajik Sarokar"
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
