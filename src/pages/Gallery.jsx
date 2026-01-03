import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'
import { geoCentroid } from 'd3-geo'
import Navbar from '../components/Navbar'
import MemoryCard from '../components/MemoryCard'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const countryColors = {
  "India": "#FF9933", // Saffron from Indian flag
  "Pakistan": "#01411C", // Green from Pakistani flag
  "Hungary": "#CD2A3E", // Red from Hungarian flag
  "France": "#0055A4", // Blue from French flag
  "Czech Republic": "#D7141A", // Red from Czech flag
  "Austria": "#ED2939" // Red from Austrian flag
}

const visitedCountries = [
  {
    name: "India",
    cities: [
      { name: 'Agra', coordinates: [78.0081, 27.1767] },
      { name: 'New Delhi', coordinates: [77.2090, 28.6139] }
    ],
    memories: [
      {
        id: 1,
        title: "Taj Mahal Visit",
        description: "Visited the iconic Taj Mahal in Agra, one of the Seven Wonders of the World. The beautiful white marble mausoleum was even more stunning in person.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop"
      },
      {
        id: 2,
        title: "Delhi Street Food",
        description: "Explored the vibrant street food scene in Old Delhi. The flavors and spices were incredible, especially the chaat and samosas.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop"
      }
    ]
  },
  {
    name: "Pakistan",
    cities: [
      { name: 'Lahore', coordinates: [74.3436, 31.5204] },
      { name: 'Karachi', coordinates: [67.0011, 24.8607] }
    ],
    memories: [
      {
        id: 3,
        title: "Lahore Fort",
        description: "Explored the historic Lahore Fort, a UNESCO World Heritage site. The architecture and history were fascinating.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      },
      {
        id: 4,
        title: "Karachi Beaches",
        description: "Spent a relaxing day at the beautiful beaches of Karachi. The sunset over the Arabian Sea was breathtaking.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop"
      }
    ]
  },
  {
    name: "Hungary",
    cities: [
      { name: 'Budapest', coordinates: [19.0402, 47.4979] }
    ],
    memories: [
      {
        id: 5,
        title: "Budapest Parliament",
        description: "Visited the stunning Hungarian Parliament Building in Budapest. The Gothic Revival architecture along the Danube was magnificent.",
        image: "https://images.unsplash.com/photo-1551866442-64e75e911c23?w=800&h=600&fit=crop"
      },
      {
        id: 6,
        title: "Thermal Baths",
        description: "Relaxed in the famous thermal baths of Budapest. The Széchenyi Thermal Bath was a perfect way to unwind.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
      }
    ]
  },
  {
    name: "France",
    cities: [
      { name: 'Paris', coordinates: [2.3522, 48.8566] }
    ],
    memories: [
      {
        id: 7,
        title: "Eiffel Tower",
        description: "Visited the iconic Eiffel Tower in Paris. The view from the top was absolutely spectacular, especially at sunset.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop"
      },
      {
        id: 8,
        title: "Louvre Museum",
        description: "Spent hours exploring the Louvre Museum. Seeing the Mona Lisa and other masterpieces in person was unforgettable.",
        image: "https://images.unsplash.com/photo-1591862715142-1dbf754b3152?w=800&h=600&fit=crop"
      },
      {
        id: 9,
        title: "Parisian Cafés",
        description: "Enjoyed the café culture in Paris. The croissants and coffee were perfect for people-watching.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4c7c98?w=800&h=600&fit=crop"
      }
    ]
  },
  {
    name: "Czech Republic",
    cities: [
      { name: 'Prague', coordinates: [14.4378, 50.0755] }
    ],
    memories: [
      {
        id: 10,
        title: "Prague Castle",
        description: "Explored the beautiful Prague Castle complex. The architecture and views of the city were incredible.",
        image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&h=600&fit=crop"
      },
      {
        id: 11,
        title: "Charles Bridge",
        description: "Walked across the historic Charles Bridge at sunrise. The statues and views of the Vltava River were stunning.",
        image: "https://images.unsplash.com/photo-1555993536-7e27d3c5ccf8?w=800&h=600&fit=crop"
      }
    ]
  },
  {
    name: "Austria",
    cities: [
      { name: 'Vienna', coordinates: [16.3738, 48.2082] }
    ],
    memories: [
      {
        id: 12,
        title: "Vienna Opera House",
        description: "Attended a performance at the Vienna State Opera. The architecture and acoustics were world-class.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop"
      },
      {
        id: 13,
        title: "Schönbrunn Palace",
        description: "Visited the magnificent Schönbrunn Palace in Vienna. The gardens and palace interiors were breathtaking.",
        image: "https://images.unsplash.com/photo-1555993536-7e27d3c5ccf8?w=800&h=600&fit=crop"
      },
      {
        id: 14,
        title: "Vienna Coffee Culture",
        description: "Experienced the famous Viennese coffee house culture. The pastries and atmosphere were delightful.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop"
      }
    ]
  }
]

const Gallery = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [currentMemoryIndex, setCurrentMemoryIndex] = useState(0)
  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1 })

  // Helper function to get country centroid from geographies
  const getCountryCentroid = (geographies, countryName) => {
    const country = geographies.find(geo => geo.properties.name === countryName)
    if (country) {
      return geoCentroid(country)
    }
    return [0, 0] // fallback
  }

  const handleMarkerClick = (country, city) => {
    setSelectedCountry(country)
    setCurrentMemoryIndex(0)
    // center the map on clicked city and zoom in for details
    setPosition(() => ({
      coordinates: city.coordinates,
      zoom: 4
    }))
  }

  const handleClose = () => {
    setSelectedCountry(null)
  }

  const handleNext = () => {
    if (selectedCountry) {
      setCurrentMemoryIndex((prev) =>
        prev < selectedCountry.memories.length - 1 ? prev + 1 : 0
      )
    }
  }

  const handlePrev = () => {
    if (selectedCountry) {
      setCurrentMemoryIndex((prev) =>
        prev > 0 ? prev - 1 : selectedCountry.memories.length - 1
      )
    }
  }

  const handleZoomIn = () => {
    setPosition((pos) => {
      const newZoom = Math.min(pos.zoom * 1.7, 8)
      return {
        ...pos,
        zoom: newZoom
      }
    })
  }

  const handleZoomOut = () => {
    setPosition((pos) => {
      const newZoom = Math.max(pos.zoom / 1.7, 0.4)
      return {
        ...pos,
        zoom: newZoom
      }
    })
  }

  const handleMoveEnd = (moveEndPosition) => {
    if (moveEndPosition) {
      setPosition(moveEndPosition)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-10 max-w-7xl">
        <h1 className="text-center text-primary text-4xl mb-8">Travel Memories</h1>
        <p className="text-center text-gray-600 mb-8">
          Click on the markers to explore memories from countries I've visited
        </p>

        <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
          <div className="relative w-full h-[600px] border border-gray-300 rounded-lg overflow-hidden bg-white">
            <ComposableMap
              projectionConfig={{
                scale: 147,
                center: position.coordinates
              }}
              style={{
                width: '100%',
                height: '100%'
              }}
              className="w-full h-full"
            >
              <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={handleMoveEnd}
                minZoom={0.4}
                maxZoom={8}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const countryName = geo.properties.name
                      const isVisited = visitedCountries.some(
                        country => country.name === countryName
                      )
                      const countryColor = countryColors[countryName]

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isVisited ? countryColor : "#e5e7eb"}
                          stroke="#6b7280"
                          strokeWidth={0.4}
                          style={{
                            default: { outline: 'none' },
                            hover: {
                              fill: isVisited ? countryColor + 'DD' : '#d1d5db',
                              outline: 'none',
                              stroke: '#4b5563',
                              strokeWidth: 0.6
                            },
                            pressed: {
                              fill: isVisited ? countryColor + 'BB' : '#cbd5e1',
                              outline: 'none'
                            }
                          }}
                        />
                      )
                    })
                  }
                </Geographies>
                {/* City Markers */}
                {visitedCountries.flatMap((country, index) =>
                  (country.cities || []).map((city, cIndex) => {
                    const baseRadius = 12
                    const markerRadius = Math.max(4, Math.min(28, baseRadius / position.zoom))
                    const textSize = Math.max(8, Math.min(18, 12 / position.zoom))
                    const strokeWidth = Math.max(0.8, 2 / position.zoom)

                    return (
                      <Marker
                        key={`${index}-${cIndex}`}
                        coordinates={city.coordinates}
                        onClick={(evt) => { evt.stopPropagation(); handleMarkerClick(country, city) }}
                        className="cursor-pointer group"
                      >
                        <circle
                          r={markerRadius}
                          fill="#DC2626"
                          stroke="#fff"
                          strokeWidth={strokeWidth}
                          className="hover:opacity-80 transition-opacity"
                          style={{
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                          }}
                        />
                        <text
                          textAnchor="middle"
                          y={-(markerRadius + 8)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                          style={{
                            fontFamily: 'system-ui',
                            fill: '#DC2626',
                            fontSize: `${textSize}px`,
                            fontWeight: 'bold',
                            textShadow: '0 1px 2px rgba(255,255,255,0.8)'
                          }}
                        >
                          {city.name}
                        </text>
                      </Marker>
                    )
                  })
                )}
              </ZoomableGroup>
            </ComposableMap>

            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button
                onClick={handleZoomIn}
                className="bg-white border border-gray-300 rounded-lg p-2 shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Zoom in"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button
                onClick={handleZoomOut}
                className="bg-white border border-gray-300 rounded-lg p-2 shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Zoom out"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Map Controls */}
          <div className="mt-4 flex justify-center gap-4">
            <p className="text-sm text-gray-600">
              💡 Use mouse wheel to zoom, click and drag to pan, or use zoom buttons
            </p>
          </div>
        </div>

        {/* Memory Card Modal */}
        {selectedCountry && (
          <MemoryCard
            country={selectedCountry}
            currentIndex={currentMemoryIndex}
            onClose={handleClose}
            onNext={handleNext}
            onPrev={handlePrev}
            setCurrentIndex={setCurrentMemoryIndex}
          />
        )}
      </main>
    </div>
  )
}

export default Gallery

