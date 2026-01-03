import { useEffect } from 'react'

const MemoryCard = ({ country, currentIndex, onClose, onNext, onPrev, setCurrentIndex }) => {
  const currentMemory = country.memories[currentIndex]

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    const handleArrowKeys = (e) => {
      if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'ArrowRight') {
        onNext()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleArrowKeys)
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleArrowKeys)
    }
  }, [onClose, onNext, onPrev])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full aspect-square max-h-[90vh] overflow-hidden flex flex-col">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Card Content */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/2 w-full bg-gray-100 flex items-center justify-center overflow-hidden p-4">
            <img
              src={currentMemory.image}
              alt={currentMemory.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                {currentMemory.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {currentMemory.description}
              </p>
              <p className="text-sm text-gray-500">
                {country.name} • Memory {currentIndex + 1} of {country.memories.length}
              </p>
            </div>

            {/* Navigation Controls */}
            {country.memories.length > 1 && (
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={onPrev}
                  className="w-10 h-10 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex gap-2">
                  {country.memories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (setCurrentIndex) {
                          setCurrentIndex(index)
                        }
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to memory ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={onNext}
                  className="w-10 h-10 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors flex items-center justify-center"
                  aria-label="Next"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoryCard

