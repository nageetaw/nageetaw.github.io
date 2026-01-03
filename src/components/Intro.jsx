const Intro = () => {
  return (
    <section id="intro" className="flex flex-col md:flex-row items-center gap-10 py-12 px-5 bg-white rounded-lg mb-10">
      <img 
        src="/assets/my_image.jpeg" 
        alt="Nageeta Kumari" 
        className="flex-shrink-0 w-64 h-64 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary"
      />
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl text-primary mb-4">
          Hi, I'm Nageeta (Nigeeta) Kumari
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          AI/ML Engineer & Software Engineer with expertise in building intelligent systems using machine learning, natural language processing, and modern software engineering practices. I have completed my MVA at École Normale Supérieure Paris-Saclay and am currently exploring software engineering and ML engineering roles where I can apply my skills in developing scalable AI solutions and robust software systems.
        </p>
      </div>
    </section>
  )
}

export default Intro

