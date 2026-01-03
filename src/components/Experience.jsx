const Experience = () => {
  const experiences = [
    {
      title: "Datadog – AI/ML Research Intern",
      period: "Apr 2025 – Oct 2025",
      problem: "Distributed microservices produce complex trace data, making root cause analysis challenging and costly.",
      strategy: "Formulated the problem as a probabilistic modeling challenge, explored unbiased data sampling, and compared evaluation methods.",
      solution: "Designed models for root cause analysis, implemented unbiased data pipelines, and built an evaluation framework achieving 95% recall & 77% precision.",
      tools: "AWS, Trino-SQL, Docker, Mortor, NBT, Unsupervised Learning, Causal AI",
      learned: "Applied AI research in production-scale systems, theory-engineering balance, multicultural teamwork."
    },
    {
      title: "INRAE – Research Intern",
      period: "Feb 2024 – Jul 2024",
      problem: "INCA2 and INCA3 surveys had inconsistent nomenclature, blocking unified classification.",
      strategy: "Applied ontology mapping & semantic web tech to harmonize datasets.",
      solution: "Built GPT-3.5 pipeline to map INCA2 into FoodEx2 for interoperability.",
      tools: "GPT-3.5, Python, Ontology Dev, Semantic Web",
      learned: "Data harmonization, semantic tech, handling real-world noisy data."
    },
    {
      title: "SoundM / DLLC – Software Engineer",
      period: "Aug 2022 – Aug 2023",
      problem: "Need for secure, scalable communication platform.",
      strategy: "Designed secure back-end systems integrated with front-end features.",
      solution: "Built chat systems, authentication, profile APIs, and deployed on AWS.",
      tools: "React.js, Node.js, FastAPI, AWS",
      learned: "Real-time systems, startup environment, cross-functional teamwork."
    },
    {
      title: "Freelancer – Fiverr",
      period: "2020 – 2022",
      fiverrLink: "https://www.fiverr.com/nageeta_w",
      problem: "Clients needed secure web apps with fast delivery & low cost.",
      strategy: "Defined scope, built clean UI, deployed scalable solutions.",
      solution: "Delivered full-stack projects (auth, APIs, dashboards) with high satisfaction.",
      tools: "React, Node, FastAPI, PostgreSQL, MongoDB, AWS, Docker",
      learned: "End-to-end project delivery, client management, solo development."
    }
  ]

  return (
    <section id="experience" className="mt-16 pt-5">
      <h2 className="text-center text-primary text-3xl mb-8">Work Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-bg-light border border-gray-300 rounded-lg p-5 leading-relaxed">
            <h3 className="text-primary mb-3 text-xl">
              {exp.title} <span className="float-right font-normal">{exp.period}</span>
            </h3>
            {exp.fiverrLink && (
              <p className="mb-3">
                <strong>Fiverr Profile:</strong>{' '}
                <a href={exp.fiverrLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  fiverr.com/nageeta_w
                </a>
              </p>
            )}
            <p className="mb-3">
              ❗ <strong>Problem:</strong> {exp.problem}
            </p>
            <p className="mb-3">
              🧩 <strong>Strategy:</strong> {exp.strategy}
            </p>
            <p className="mb-3">
              ✅ <strong>Solution:</strong> {exp.solution}
            </p>
            <p className="mb-3">
              🛠️ <strong>Tools:</strong> {exp.tools}
            </p>
            <p className="mb-3">
              📚 <strong>What I Learned:</strong> {exp.learned}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

