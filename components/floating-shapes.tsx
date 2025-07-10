"use client"

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-3/4 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
