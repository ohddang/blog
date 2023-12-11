import { Octokit } from "https://cdn.skypack.dev/octokit"

const OCTOKIT_TOKEN = process.env.REACT_APP_OCTOKIT_TOKEN;

if (!OCTOKIT_TOKEN) {
  throw new Error('.env 파일의 git hub token이 잘못되었습니다.');
}

const owner = 'ohddang';
const repo = 'this-is-blog';
const path = 'path'; // 디렉토리 경로

// Personal Access Token
const accessToken = '';

// Octokit 인스턴스 생성 
const octokit = new Octokit({
  auth: accessToken,
});


octokit.repos.getContent({
  owner,
  repo,
  path,
})
  .then(response => {
    // 디렉토리 정보 출력
    console.log('Directory Info:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data from GitHub API:', error.message);
  });