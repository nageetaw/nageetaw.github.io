const Projects = () => {
  const projects = [
    {
      title: "Modeling for MNAR Data (not-MIWAE)",
      description: "Re-implemented not-MIWAE generative model and benchmarked it on UCI & stock datasets.",
      tools: "PyTorch, Python",
      link: "https://drive.google.com/file/d/18rX4KOimKFLohmaq2p7aE5Sa5yS3oyqz/view?usp=drive_link",
      linkText: "View Report"
    },
    {
      title: "Composed Image Retrieval",
      description: "Adapted CoVR-BLIP-2 for CIRR dataset and improved Recall@1 with attention pooling.",
      tools: "Vision-Language Models, PyTorch",
      link: "https://drive.google.com/file/d/1regVMTobFC2RjGxqjbim6N_EMM36UB3f/view",
      linkText: "View Report"
    },
    {
      title: "Patent Match Challenge",
      description: "Used sentence-transformers and fine-tuned BERT models for patent citation matching.",
      tools: "NLP, Transformers",
      link: "https://www.codabench.org/competitions/2239/",
      linkText: "View Competition"
    },
    {
      title: "Compositional Understanding in VLMs",
      description: "Evaluated VLMs on ARO benchmark, showing improved performance of Qwen2.5 over CLIP/BLIP.",
      tools: "Vision-Language Models, PyTorch",
      link: "https://drive.google.com/file/d/1uYfVymnJbE6bkh3pwxajPRQLI1e-EQ5i/view",
      linkText: "View Report"
    },
    {
      title: "RelevAI-Reviewer (Benchmark System)",
      description: "Relevance ranking for survey papers vs CFP prompts using ML baselines & fine-tuned transformers.",
      tools: "Transformers, Python",
      link: "https://github.com/nageetaw",
      linkText: "GitHub"
    },
    {
      title: "Scrimish (Android Game)",
      description: "Android implementation of Scrimish card game with game logic and UI design.",
      tools: "Android Studio, Java",
      link: "https://github.com/nageetaw/PortfolioProjects/tree/main/Scrimish",
      linkText: "GitHub"
    },
    {
      title: "SIBA Stack Overflow (Q&A Web App)",
      description: "Student/teacher Q&A platform with React.js, Node.js, MySQL.",
      tools: "React.js, Node.js, MySQL",
      link: "https://github.com/nageetaw/PortfolioProjects/tree/main/SibaStackOverFlow",
      linkText: "GitHub"
    },
    {
      title: "Gender Detection Using Eye",
      description: "CNN model predicting gender from eye images with preprocessing and training pipeline.",
      tools: "CNN, Python, TensorFlow",
      link: "https://github.com/nageetaw/PortfolioProjects/tree/main/GenderDetector",
      linkText: "GitHub"
    }
  ]

  return (
    <section id="projects" className="mt-16 pt-5">
      <h2 className="text-center text-primary text-3xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-bg-light border border-gray-300 rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="p-4">
              <h3 className="text-primary mb-3 text-xl">{project.title}</h3>
              <p className="mb-3">{project.description}</p>
              <p className="mb-3">
                <strong>Tools:</strong> {project.tools}
              </p>
              <p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline"
                >
                  {project.linkText}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

