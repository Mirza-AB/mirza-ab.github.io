import { useState } from 'react';
import { useGithubRepos } from '@hooks/useGithub';
import ProjectCard from '@components/ui/ProjectCard';

export default function Projects() {
  const { repos, loading, error } = useGithubRepos('mirza-ab');
  const [filter, setFilter] = useState('All');

  const languages = ['All', ...new Set(repos.map(repo => repo.language).filter(Boolean))];
  const filteredRepos = filter === 'All' ? repos : repos.filter(repo => repo.language === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          <span className="text-primary font-mono text-lg mr-2">02.</span>
          Projects
        </h2>
        <p className="text-gray-400 text-center mb-12">Some things I've built</p>

        {repos.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                  filter === lang
                    ? 'bg-primary text-white'
                    : 'bg-dark-300 text-gray-400 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-dark-200 rounded-lg p-6 border border-dark-300 animate-pulse">
                <div className="h-4 bg-dark-300 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-dark-300 rounded w-full mb-2"></div>
                <div className="h-3 bg-dark-300 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-red-400 text-center">Failed to load projects. Please check the GitHub username.</p>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="text-gray-400 text-center">No repositories found.</p>
        )}
      </div>
    </section>
  );
}
