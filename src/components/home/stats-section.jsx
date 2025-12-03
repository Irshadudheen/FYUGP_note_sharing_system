export function StatsSection() {
  const stats = [
    { value: "10,000+", label: "Active Students" },
    { value: "50,000+", label: "Notes Shared" },
    { value: "200+", label: "Subjects Covered" },
    { value: "98%", label: "Success Rate" },
  ]

  return (
    <section className="border-y border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-foreground lg:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
