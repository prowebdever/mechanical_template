import { useEffect, useState } from 'react'

export default function Lightbox({ project, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const images = project?.images ?? []

  useEffect(() => {
    setIndex(startIndex)
  }, [startIndex, project])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-steel-950/95 p-4"
      onClick={onClose}
    >
      <button
        className="absolute right-5 top-5 text-2xl text-steel-400 hover:text-steel-50"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      <div className="flex max-h-[80vh] w-full max-w-4xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button
            className="px-3 text-3xl text-steel-400 hover:text-steel-50"
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
            aria-label="Previous"
          >
            ‹
          </button>
        )}

        <img
          src={images[index]}
          alt={`${project.title} ${index + 1}`}
          className="max-h-[80vh] max-w-full rounded-lg object-contain"
        />

        {images.length > 1 && (
          <button
            className="px-3 text-3xl text-steel-400 hover:text-steel-50"
            onClick={() => setIndex((i) => (i + 1) % images.length)}
            aria-label="Next"
          >
            ›
          </button>
        )}
      </div>

      <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="font-semibold">{project.title}</p>
        {images.length > 1 && (
          <p className="mt-1 font-mono text-sm text-steel-400">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  )
}
