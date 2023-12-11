# <span style="color:white">Week1 11.21~11.26</span>  

## <span style="color:white">CSS Cascading이란?</span>  
> <span style="color:white">요소의 스타일을 여러가지 방법으로 결정할 수 있는데 이 중 실제 화면에 나타나는 방식을 말한다.</span>  
> <span style="color:white">첫째로 스타일이 적용되는 위치로 나눌 수 있는데 HTML에 inline으로 적용한 style이 가장 높은 우선순위를 가지며, link된 CSS파일 내 style이 두번째.</span>  
> <span style="color:white">마지막으로 브라우저 기본 style이 가장 낮은 우선순위를 가진다. !important라는 키워드가 있는데 해당 키워드롤 사용하면 우선순위에 상관없이 값이 적용된다.</span>  
> <span style="color:white">두번째로 명시도라는 가중치에 따라 결정되는데 같은 속성에 접근하는 Selector를 사용할때 inline은 가중치 1000, id는 가중치 100, class는 가중치 100,</span>  
> <span style="color:white">tag는 가중치 1을 가지며 여러개를 사용하면 더해져서 계산된다.</span>  
> <span style="color:white">마지막으로 코드 상에서 아래 위치한 스타일이 적용된다. 만약 가중치가 같은데 CSS에서 아래라인에 위치한다면 해당 속성으로 style이 변경된다.</span>  
  
## Position의 속성들과 특징
- <span style="color:white">static : 요소들이 기본적으로 있어야하는 자리에 위치하게됨</span>  
- <span style="color:white">relative : 기본적으로 있어야하는 자리에서 이동할 수 있게 해줌</span>  
- <span style="color:white">absolute : 배치되는 기준을 static이 아닌 본인의 조상요소들로 정함. 최상위 body</span>  
- <span style="color:white">fixed : 브라우저 내에서 지정한 위치로 고정함. 스크롤을 이동해도 항상 표시됨</span>  
- <span style="color:white">sticky : 스크롤이 없을때는 relative 처럼동작하고 스크롤되면 fixed처럼 동작함</span>