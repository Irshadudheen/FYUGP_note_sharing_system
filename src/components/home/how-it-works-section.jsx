import { Upload, Search, Download } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Notes",
      description:
        "Share your study materials with the community. Add details like subject, semester, and topic to help others find it.",
      step: "01",
    },
    {
      icon: Search,
      title: "Discover Quality Content",
      description:
        "Browse thousands of notes uploaded by fellow students. Use filters to find exactly what you need for your exams.",
      step: "02",
    },
    {
      icon: Download,
      title: "Download & Study",
      description: "Download notes instantly and study offline. Rate and review to help the community grow stronger.",
      step: "03",
    },
  ]

  return (
    <section id="how-it-works" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Start sharing and learning in three simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-border lg:block"></div>
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="mt-2 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Step {step.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
