const Publications = () => {
  return (
    <section id="publications" className="mt-16 pt-5">
      <h2 className="text-center text-primary text-3xl mb-8">Publications</h2>
      <div className="grid grid-cols-1 gap-5 mt-8">
        <div className="bg-bg-light border border-gray-300 rounded-lg overflow-hidden col-span-full">
          <div className="p-4">
            <h3 className="text-primary mb-3 text-xl">
              RelevAI-Reviewer: A Benchmark on AI Reviewers for Survey Paper Relevance
            </h3>
            <p className="mb-3">
              <strong>Authors:</strong> Paulo Henrique Couto, Quang Phuoc Ho, <em>Nageeta Kumari</em>, Benedictus Kent Rachmat, Thanh Gia Hieu Khuong, Ihsan Ullah, Lisheng Sun-Hosoya
            </p>
            <p className="mb-3">
              <strong>Conference:</strong> Conférence sur l'Apprentissage Automatique (CAp) 2024, Lille, France
            </p>
            <p className="mb-3">
              <strong>Abstract:</strong> Recent advancements in AI, particularly Large Language Models (LLMs), offer promise for automating scientific paper review. This paper proposes RelevAI-Reviewer, an automatic system that conceptualizes survey paper review as a classification problem, aimed at assessing paper relevance to specified prompts. We introduce a novel dataset of 25,164 instances and explore various baseline approaches including traditional ML classifiers like SVM and advanced language models such as BERT.
            </p>
            <p className="mb-3">
              <strong>Links:</strong>{' '}
              <a href="https://arxiv.org/abs/2406.10294" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                arXiv
              </a>
              {' · '}
              <a href="https://hal.science/LISN/hal-04608255v1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                HAL
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications

