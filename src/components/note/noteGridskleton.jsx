export function NotesGridSkeleton({ count = 6 }) {
  return (
    <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse flex flex-col rounded-xl  border-gray-700 bg-[#a36c29] p-5 shadow-md"
        >
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div className="h-12 w-12 rounded bg-gray-300" />
            <div className="h-4 w-16 rounded bg-gray-300" />
          </div>

          {/* Title */}
          <div className="h-5 w-3/4 rounded bg-gray-300 mb-2" />
          <div className="h-4 w-1/2 rounded bg-gray-300" />

          {/* Content */}
          <div className="mt-4 space-y-2">
            <div className="h-4 w-2/3 rounded bg-gray-300" />
            <div className="h-4 w-1/3 rounded bg-gray-300" />
          </div>

          {/* Footer */}
          <div className="mt-5 flex gap-3">
            <div className="h-9 w-1/2 rounded bg-gray-300" />
            <div className="h-9 w-1/2 rounded bg-gray-300" />
          </div>
        </div>
      ))}
    </div>
  )
}
