const GITHUB_API = 'https://api.github.com';

export const fetchUserRepos = async (username) => {
  const response = await fetch(`${GITHUB_API}/users/${username}/repos?sort=stars&per_page=100&type=owner`);
  if (!response.ok) throw new Error('Failed to fetch repositories');
  return response.json();
};

export const fetchUserProfile = async (username) => {
  const response = await fetch(`${GITHUB_API}/users/${username}`);
  if (!response.ok) throw new Error('Failed to fetch profile');
  return response.json();
};

export const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Vue: '#41b883',
  React: '#61dafb',
};
