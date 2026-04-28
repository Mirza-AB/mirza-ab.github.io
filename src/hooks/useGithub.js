import { useState, useEffect } from 'react';
import { fetchUserRepos, fetchUserProfile } from '@services/githubApi';

export const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const data = await fetchUserRepos(username);
        const filtered = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};

export const useGithubProfile = (username) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;
    
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await fetchUserProfile(username);
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, [username]);

  return { profile, loading, error };
};
