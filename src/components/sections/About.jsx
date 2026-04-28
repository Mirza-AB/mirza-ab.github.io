import { useGithubProfile } from '@hooks/useGithub';

export default function About() {
  const { profile, loading } = useGithubProfile('mirza-ab');

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          <span className="text-primary font-mono text-lg mr-2">01.</span>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Hello! I'm Adnan, a Software Engineer with 3+ years of experience designing and building
              scalable, high-performance applications using Java, Spring Boot, and microservices architecture.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I specialize in developing secure RESTful and GraphQL APIs, with hands-on experience in 
              distributed systems and event-driven architectures using Kafka and RabbitMQ. Proficient in 
              cloud-native development on AWS with Docker and Kubernetes.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Experienced in building responsive front-end applications using React and Angular, and optimizing 
              database performance across SQL and NoSQL systems.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Here are a few technologies I've been working with:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {['Java & Spring Boot', 'Microservices & REST APIs', 'Kafka & RabbitMQ', 'AWS & Kubernetes', 'React & Angular', 'PostgreSQL & MongoDB', 'Docker & CI/CD', 'Mockito & JUnit'].map((tech) => (
                <span key={tech} className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="text-primary">▸</span> {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            {loading ? (
              <div className="bg-dark-200 rounded-lg p-8 border border-dark-300 animate-pulse">
                <div className="w-48 h-48 bg-dark-300 rounded-full mx-auto"></div>
              </div>
            ) : profile ? (
              <div className="bg-dark-200 rounded-lg p-8 border border-dark-300 text-center">
                <img
                  src={profile.avatar_url}
                  alt="Profile"
                  className="w-48 h-48 rounded-full mx-auto mb-4 border-2 border-primary"
                />
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div>
                    <p className="text-2xl font-bold text-primary">{profile.public_repos}</p>
                    <p className="text-xs text-gray-400">Repos</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{profile.followers}</p>
                    <p className="text-xs text-gray-400">Followers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{profile.following}</p>
                    <p className="text-xs text-gray-400">Following</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-dark-200 rounded-lg p-8 border border-dark-300 text-center">
                <div className="w-48 h-48 bg-dark-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">No profile</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
