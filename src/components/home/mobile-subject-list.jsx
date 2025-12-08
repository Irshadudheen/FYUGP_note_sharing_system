import { useState, useEffect } from "react"
import { Book, GraduationCap, Library, Search, Brain, ChevronDown } from "lucide-react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useNavigate } from "react-router-dom"

export function MobileSubjectList() {
  const [query, setQuery] = useState("")
 
  const [openCategory, setOpenCategory] = useState(null)

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

  const aecCourses = [
    "English Language Skills for Sciences",
    "English Language Skills for Humanities and Other BA Programmes",
    "General Foundation Course in English",
    "English Language Skills for Commerce and Management",
    "Modern Standard Arabic"
  ]

  const filter = (items) =>
    items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    )

  useEffect(() => {
    setOpenCategory(null)
  }, [query])

  const toggleCategory = (title) => {
    if (openCategory === title) {
      setOpenCategory(null)
    } else {
      setOpenCategory(title)
    }
  }

  return (
    <div className="space-y-4 py-8">
      {/* Heading */}
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-foreground">Browse Notes by Subject</h1>
        <p className="text-muted-foreground">Find study materials for your FYUGP courses</p>
      </div>

      {/* Search Input */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search subjects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-foreground focus:outline-none focus:ring focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Major Subjects */}
      <SubjectCategory
        title="Major Subjects"
        subtitle="Core discipline courses"
        icon={<GraduationCap />}
        iconColor="text-indigo-600 bg-indigo-100"
        items={filter(majorSubjects)}
        isOpen={openCategory === "Major Subjects"}
        onToggle={() => toggleCategory("Major Subjects")}
      />

      {/* Minor Subjects */}
      <SubjectCategory
        title="Minor Subjects"
        subtitle="Elective and specialized courses"
        icon={<Book />}
        iconColor="text-emerald-600 bg-emerald-100"
        items={filter(minorSubjects)}
        isOpen={openCategory === "Minor Subjects"}
        onToggle={() => toggleCategory("Minor Subjects")}
      />

      {/* MDC Courses */}
      <SubjectCategory
        title="MDC Courses"
        subtitle="Multi-Disciplinary Courses"
        icon={<Library />}
        iconColor="text-amber-600 bg-amber-100"
        items={filter(mdcCourses)}
        isOpen={openCategory === "MDC Courses"}
        onToggle={() => toggleCategory("MDC Courses")}
      />

      {/* AEC Courses */}
      <SubjectCategory
        title="AEC Courses"
        subtitle="Ability Enhancement Courses"
        icon={<Brain />}
        iconColor="text-rose-600 bg-rose-100"
        items={filter(aecCourses)}
        isOpen={openCategory === "AEC Courses"}
        onToggle={() => toggleCategory("AEC Courses")}
      />
    </div>
  )
}

function SubjectCategory({ 
  title, 
  subtitle, 
  icon, 
  items, 
  iconColor,
  isOpen,
  onToggle 
}) {
  const [parent] = useAutoAnimate({ duration: 300 })
 const navigate = useNavigate()
  if (items.length === 0) return null

  return (
    <div className="rounded-xl border border-border bg-background shadow-sm">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-4 border-b hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${iconColor}`}>
            {icon}
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-foreground">{title}</h2>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <ChevronDown 
          className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div ref={parent}>
        {isOpen && (
          <div className="p-4">
            <div className="grid grid-cols-1 gap-2">
              {items.map((subject) => (
                <button
                  key={subject}
                  onClick={()=>navigate('/notes')}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left w-full"
                >
                  <span className="font-medium text-foreground">{subject}</span>
                  <span className="text-sm text-muted-foreground">View Notes →</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}