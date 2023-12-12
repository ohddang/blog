import { Octokit } from "https://esm.sh/@octokit/core"; // CDN


// FIXME : env value
// let act1 = 'ghp_mHxPCeoHzSiCn2';
// let act2 = 'HNq18UzRFIETnTXn0ZKCGV';

// const OCTOKIT_TOKEN = act1 + act2;

// if (!OCTOKIT_TOKEN) {
//   throw new Error('.env 파일의 git hub token이 잘못되었습니다.');
// }

const owner = 'ohddang';
const repo = 'this-is-blog';
const path = '_pages'; 

// does not need token
const accessToken = '';
 
const octokit = new Octokit({
  auth: accessToken,
});

function makeMarkdownElement(rsp){
  let li = document.createElement('li');
  li.setAttribute('id', rsp.name);
  li.textContent = rsp.name;
  return li;
}

async function requestGithubRepository(path, parentElement=null){
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner,
      repo,
      path,
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    console.log('Directory Info:', response.data);
    
    response.data.filter(rsp => {
      if(rsp.type == "dir"){
        let ul = document.createElement('ul');
        ul.setAttribute('id', rsp.name);

        ul.textContent = rsp.name;
        page_list.appendChild(ul);
        requestGithubRepository(rsp.path, ul);
      }
      else if(rsp.type == "file" && String(rsp.name).split('.')[1] == "md"){
        // TODO : make obj {id : path(includes .md)}
        let li = makeMarkdownElement(rsp);
        if(parentElement != null)
          parentElement.appendChild(li);

        // TODO : read .md file
      }
    })

  } catch (error) {
    console.error('Error fetching data from GitHub API:', error.message);
  }
}

requestGithubRepository(path);