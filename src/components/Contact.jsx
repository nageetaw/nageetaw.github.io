const Contact = () => {
  return (
    <section id="contact" className="text-center py-10 px-5 bg-bg-light rounded-lg mt-16">
      <h2 className="text-primary text-3xl mb-5">Contact Me</h2>
      <p className="text-lg mb-4">
        I'd love to hear from you! Feel free to reach out via email or connect with me on LinkedIn.
      </p>
      <p className="text-lg mb-4">
        <strong>Email:</strong>{' '}
        <a href="mailto:nageetaw@gmail.com" className="text-primary font-medium hover:underline">
          nageetaw@gmail.com
        </a>
      </p>
      <p className="text-lg mb-4">
        <strong>LinkedIn:</strong>{' '}
        <a 
          href="https://www.linkedin.com/in/nageeta124" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary font-medium hover:underline"
        >
          linkedin.com/in/nageeta124
        </a>
      </p>
      <p className="text-lg mb-4">
        <strong>GitHub:</strong>{' '}
        <a 
          href="https://github.com/nageetaw" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary font-medium hover:underline"
        >
          github.com/nageetaw
        </a>
      </p>
    </section>
  )
}

export default Contact

