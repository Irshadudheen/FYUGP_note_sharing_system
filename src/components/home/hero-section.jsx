
import { ArrowRight, Upload, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Join 10,000+ FYUGP students
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Share Knowledge, <span className="text-primary">Succeed Together</span>
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Upload your study notes and access thousands of quality notes from fellow FYUGP students. Build your
              academic success through collaborative learning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button size="lg" className="gap-2">
                Start Sharing Notes
                <ArrowRight className="h-4 w-4" />
              </button>
              <button size="lg" variant="outline">
                Browse Notes
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-muted"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-accent"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-primary"></div>
                </div>
                <span>Trusted by students</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -right-4 bottom-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>

              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="h-3 w-32 rounded bg-muted"></div>
                      <div className="mt-2 h-2 w-24 rounded bg-muted/70"></div>
                    </div>
                  </div>

                  <div className="my-6 border-t border-border"></div>

                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-lg border border-border bg-background p-3"
                      >
                        <div className="h-10 w-10 rounded bg-muted"></div>
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2.5 w-3/4 rounded bg-muted"></div>
                          <div className="h-2 w-1/2 rounded bg-muted/70"></div>
                        </div>
                        <Download className="h-4 w-4 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
