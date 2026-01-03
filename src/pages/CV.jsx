import Navbar from '../components/Navbar'

const CV = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-10 max-w-6xl">
        <h2 className="text-center text-primary text-3xl mb-8">My CV</h2>
        
        <div className="text-center mt-5">
          <a 
            href="/assets/Nageeta_Kumari_CV.pdf" 
            download 
            className="bg-primary text-white py-3 px-5 no-underline rounded-lg inline-block font-medium hover:bg-primary-dark"
          >
            Download CV
          </a>
        </div>

        <div className="w-full h-[800px] border border-gray-300 mt-5">
          <iframe 
            src="/assets/Nageeta_Kumari_CV.pdf" 
            width="100%" 
            height="100%"
            title="CV Viewer"
            className="border-0"
          />
        </div>
      </main>
    </div>
  )
}

export default CV

