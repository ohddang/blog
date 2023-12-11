import { Octokit } from "https://esm.sh/@octokit/core";

let act1 = 'ghp_mHxPCeoHzSiCn2';
let act2 = 'HNq18UzRFIETnTXn0ZKCGV';

const OCTOKIT_TOKEN = act1 + act2;

if (!OCTOKIT_TOKEN) {
  throw new Error('.env 파일의 git hub token이 잘못되었습니다.');
}

const owner = 'ohddang';
const repo = 'this-is-blog';
const path = '_pages/weekly-paper'; // 디렉토리 경로

// Personal Access Token
const accessToken = '';

// Octokit 인스턴스 생성 
const octokit = new Octokit({
  auth: accessToken,
});

// GitHub API 호출
try {
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner,
    repo,
    path,
    headers: {
      'Accept': 'application/vnd.github.v3+json', // API 버전 헤더
    },
  });

  // 응답 데이터 출력
  console.log('Directory Info:', response.data);
} catch (error) {
  console.error('Error fetching data from GitHub API:', error.message);
}