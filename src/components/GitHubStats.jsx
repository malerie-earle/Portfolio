import React, { useState, useEffect } from 'react';

const GitHubStats = () => {
  const accessToken = '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';
  const [githubStats, setGithubStats] = useState(null);

  const fetchGitHubStats = async () => {
    try {
      const response = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setGithubStats(data);
      } else {
        throw new Error('Failed to fetch GitHub data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGitHubStats();
  }, []);

  return (
    <div className="github-stats">
      <h2>GitHub Stats</h2>
      {githubStats && (
        <div>
          <p>Total Public Repositories: {githubStats.public_repos}</p>
          <p>Followers: {githubStats.followers}</p>
          <p>Following: {githubStats.following}</p>
          <p>Contributions in the Last Year: {githubStats.contributions}</p>
          <p>Total Public Repositories: {githubStats.owned_public_repos}</p>
          <p>Stars Received: {githubStats.stars}</p>

        </div>
      )}
    </div>
  );
};

export default GitHubStats;