import { Upload, Search, Users, Shield, BookMarked, Zap } from "lucide-react"


export function FeaturesSection() {
  const features = [
    {
      icon: Upload,
      title: "Easy Upload",
      description:
        "Upload your notes in seconds with our simple drag-and-drop interface. Support for PDF, images, and documents.",
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find exactly what you need with advanced filters by subject, semester, topic, and university.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Learn from the best. Rate and review notes to help other students find quality content.",
    },
    {
      icon: Shield,
      title: "Safe & Verified",
      description: "All content is moderated to ensure quality and authenticity. Your academic integrity matters.",
    },
    {
      icon: BookMarked,
      title: "Organize & Save",
      description: "Bookmark your favorite notes, create collections, and access them anytime, anywhere.",
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Download notes instantly. No waiting, no limits. Study when you want, how you want.",
    },
  ]

  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Excel
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Powerful features designed to make sharing and discovering study notes effortless
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="border-border transition-all hover:shadow-md">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
