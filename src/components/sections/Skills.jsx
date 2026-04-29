const skills = {
  'Java & Spring Ecosystem': ['OOP', 'Collections Framework', 'Streams API', 'Exception Handling', 'JDBC',
        'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Spring Cloud', 'Hibernate'],
  'Microservices & APIs': ['RESTful APIs', 'OpenAPI/Swagger', 'Eureka', 'Spring Cloud Gateway', 'Resilience4j', 'Circuit Breaker',
        'API Gateway', 'Apache Kafka', 'RabbitMQ'],
  'Frontend & Databases': ['React.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS',
        'PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'MongoDB', 'Redis'],
  'Cloud, DevOps & Tools': ['AWS (EC2, S3, RDS, Lambda, EKS)', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions, Jenkins)', 'Git', 'GitHub', 'Maven'],
  'Testing & Quality': ['JUnit 5', 'Mockito', 'Selenium', 'Cucumber', 'TDD', 'BDD', 'SonarQube'],
  'Architecture & Design': ['System Design', 'Design Patterns', 'SOLID Principles', 'Distributed Systems', 'Event-Driven Architecture'],

};

export default function Skills() {
  return (
    <section id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          <span className="text-primary font-mono text-lg mr-2">03.</span>
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-dark-200 rounded-lg p-6 border border-dark-300">
              <h3 className="text-lg font-semibold text-primary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-dark-300 text-gray-300 rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
