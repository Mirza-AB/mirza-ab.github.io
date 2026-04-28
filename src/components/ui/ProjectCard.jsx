import { LANGUAGE_COLORS } from '@services/githubApi';

export default function ProjectCard({ repo }) {
  const languageColor = LANGUAGE_COLORS[repo.language] || '#6b7280';

  return (
    <div className="bg-dark-200 rounded-lg p-6 border border-dark-300 hover:border-primary/50 transition-all hover:transform hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-3">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <div className="flex gap-3 text-sm text-gray-400">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 3a3 3 0 00-1 5.83v6.34a3.001 3.001 0 102 0V15a4 4 0 004 4h1.17A3.001 3.001 0 0018 17a3 3 0 00-5.83-1H11a2 2 0 01-2-2V8.83A3.001 3.001 0 006 3z"/>
              </svg>
              {repo.forks_count}
            </span>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {repo.description || 'No description available'}
      </p>

      <div className="flex items-center justify-between">
        {repo.language && (
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: languageColor }}></span>
            {repo.language}
          </span>
        )}
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:text-primary-light transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
