const Awards = () => {
  const awards = [
    {
      title: "Silver Medal",
      period: "Apr 2023",
      issuer: "Sukkur IBA University",
      description: "Silver Medalist for achieving the second-highest position based on Bachelor's CGPA in Batch 2018."
    },
    {
      title: "Robotics Competition",
      period: "May 2022",
      issuer: "CRAIB Lab, Sukkur IBA University",
      description: "Participated in a robotics competition where students assembled and programmed robots for specific tasks. Worked with a team on a spider robot using 3D printed parts, programmed to access hidden areas that are hard for larger robots to reach."
    },
    {
      title: "Merit Scholarship 2019",
      period: "Dec 2019",
      issuer: "Sukkur IBA University",
      description: "Institutional merit-based scholarship awarded to the Top 3 students of the department based on Fall semester GPA for the entire academic year."
    },
    {
      title: "Mathematics Olympiad Winner",
      period: "Aug 2018",
      issuer: "Sukkur IBA University",
      description: "Won the Mathematics Olympiad competition hosted by Sukkur IBA University with its sub-campuses for foundation semester Batch 2018."
    }
  ]

  return (
    <section id="rewards" className="mt-16 pt-5">
      <h2 className="text-center text-primary text-3xl mb-8">Awards & Honors</h2>
      <div className="flex flex-col gap-8">
        {awards.map((award, index) => (
          <div key={index} className="bg-bg-light border border-gray-300 rounded-lg p-5 leading-relaxed">
            <h3 className="text-primary mb-3 text-xl">
              {award.title} <span className="float-right font-normal">{award.period}</span>
            </h3>
            <p className="mb-3">
              <strong>Issued by:</strong> {award.issuer}
            </p>
            <p className="mb-3">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awards

