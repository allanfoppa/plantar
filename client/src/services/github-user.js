import { Octokit } from "@octokit/core"

export default async function githubUserService({
  userName
}) {

  // Create a personal access token
  // at https://github.com/settings/tokens/new?scopes=repo
  const token = process.env.REACT_APP_GITHUB_API_TOKEN
  const octokit = new Octokit({ auth: token });

  return await octokit.request('GET /users/{username}', {
    username: userName,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

}
