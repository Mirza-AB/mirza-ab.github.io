const experiences = [
  {
    title: 'Software Engineer',
    company: 'Honeywell',
    period: 'Sep 2024 - Present',
    description: 'Designed and developed scalable microservices using Java, Spring Boot, and Spring Cloud, improving system performance by 35%. Built secure RESTful and GraphQL APIs with Spring Security and OAuth2/JWT. Developed responsive front-end applications using React.js and Angular. Containerized applications using Docker and deployed on AWS (EC2, S3, RDS, EKS). Implemented event-driven architecture using Apache Kafka and RabbitMQ.',
  },
  {
    title: 'Software Engineer',
    company: 'Mindtree',
    period: 'Jan 2022 - Jul 2023',
    description: 'Developed enterprise web applications using Java, Spring MVC, Hibernate, and J2EE technologies. Designed and implemented RESTful APIs and backend services. Built dynamic user interfaces using Angular, JavaScript, HTML5, and CSS3. Developed and optimized SQL queries across MySQL and SQL Server databases. Implemented asynchronous messaging using RabbitMQ. Wrote unit and integration tests using JUnit and Mockito.',
  },
  {
    title: 'Master in Science in Computer Science',
    company: 'Northeastern Illinois University, Chicago, IL',
    period: 'May 2025',
    description: 'Advanced studies in computer science with focus on software engineering, distributed systems, and system design.',
  },
  {
    title: 'Bachelor of Science in Computer Science',
    company: 'University of East London, London, UK',
    period: 'Jun 2023',
    description: 'Built strong foundation in Java and object-oriented programming, algorithms, data structures, and software engineering principles.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          <span className="text-primary font-mono text-lg mr-2">04.</span>
          Experience & Education
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-px h-full bg-dark-300"></div>
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-primary rounded-full"></div>
              
              <div className="bg-dark-200 rounded-lg p-6 border border-dark-300">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <span className="text-primary">@</span>
                  <span className="text-gray-300">{exp.company}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
