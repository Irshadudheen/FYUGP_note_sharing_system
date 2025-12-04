
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 px-8 py-16 sm:px-12 lg:px-16">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"></div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your Study Experience?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Join thousands of FYUGP students who are already sharing knowledge and acing their exams together.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
             <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-md text-lg font-medium border border-primary hover:bg-primary/90 hover:shadow-lg transition">
  Get Started Free
  <ArrowRight className="h-4 w-4" />
</button>
             <button className="flex items-center gap-2 px-6 py-2 rounded-md text-lg font-medium border border-primary text-primary hover:bg-primary/10 transition">
  Learn More
</button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • Free forever • Join in 30 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
