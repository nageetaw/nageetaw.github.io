const Education = () => {
  const educations = [
    {
      title: "École Normale Supérieure Paris-Saclay – MVA",
      period: "Sep 2024 – Sep 2025",
      grade: "16/20",
      description: "Selective AI Master's in computer vision, learning, and mathematics.",
      courses: [
        "Reinforcement Learning",
        "Probabilistic Graphical Models",
        "Advanced Deep Learning",
        "Large Language Models",
        "Geometric Data Analysis",
        "Machine Intelligence of Images"
      ]
    },
    {
      title: "Université Paris-Saclay – Master in Data Science",
      period: "Aug 2023 – Aug 2024",
      grade: "15.7/20",
      courses: [
        "Advanced Databases, Distributed Systems",
        "Deep Learning, NLP, ML Algorithms",
        "Information Theory, Probability"
      ]
    },
    {
      title: "Sukkur IBA University – BS in CS",
      period: "Aug 2018 – Aug 2022",
      grade: "3.68 / 4",
      medal: "🏅 Silver Medalist",
      courses: "Software Engineering, Object Oriented Programming, Web Enterprise Development, Database Design, Data Structures, Advanced Algorithms, Business Communication, Cloud and Parallel Computing, Robotics, Cyber Security, IoT"
    }
  ]

  return (
    <section id="education" className="mt-16 pt-5">
      <h2 className="text-center text-primary text-3xl mb-8">Education</h2>
      <div className="flex flex-col gap-8">
        {educations.map((edu, index) => (
          <div key={index} className="bg-bg-light border border-gray-300 rounded-lg p-5 leading-relaxed">
            <h3 className="text-primary mb-3 text-xl">
              {edu.title} <span className="float-right font-normal">{edu.period}</span>
            </h3>
            <p className="mb-3">
              <strong>Grade:</strong> {edu.grade}
            </p>
            {edu.medal && (
              <p className="mb-3">{edu.medal}</p>
            )}
            {edu.description && (
              <p className="mb-3">{edu.description}</p>
            )}
            {edu.courses && (
              <>
                <p className="mb-3"><strong>Courses:</strong></p>
                {Array.isArray(edu.courses) ? (
                  <ul className="ml-5 mb-3 list-disc">
                    {edu.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-3">{edu.courses}</p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

