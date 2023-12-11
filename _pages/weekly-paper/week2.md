# <span style="color:white">Week2 11.27~12.03</span>  

## <span style="color:white">Git에서 branch merge 방법들과 각 방법의 특징을 설명해 주세요.</span>  
- <span style="color:white">git merge -ff</span>  
-- <span style="color:white">현재 branch와 merge하려는 branch가 fast-forward 관계에 있는 경우 새로운 커밋을 생성하지 않고 브랜치의 참조값만 변경되도록 한다.</span>  
- <span style="color:white">git merge --no-ff</span>  
-- <span style="color:white">merge하려는 두 브랜치가 fast-forward관계여도 강제로 merge commit을 생성하고 병합한다.</span>  
- <span style="color:white">git merge --squash</span>  
-- <span style="color:white">merge이력뿐만 아니라 merge된 브랜치의 이력도 남기지 않는 방식이다.</span>  
  
## Git에서 branch merge 방법들과 각 방법의 특징을 설명해 주세요.
<span style="color:white">개발하는 소프트웨어의 버전관리를 위해 단계별로 브랜치를 생성하여 관리하는 전략이다.</span>  
<span style="color:white">Feature 브랜치에서 개발자들이 작업을 진행하며 작업이 완료되면 Develop 브랜치로 각자 merge한다.</span>  
<span style="color:white">모든 작업이 끝나면 develop브랜치에서 QA 진행을 위해 release 브랜치로 merge를 하게되고 완료되면 master브랜치와 develop브랜치로 머지한다.</span>