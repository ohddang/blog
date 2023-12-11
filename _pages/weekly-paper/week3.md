# <span style="color:white">Week3 11.21~11.26</span>  

## <span style="color:white">자바스크립트에서 == 와 === 가 어떻게 다른지 설명해 주세요.</span>  
<span style="color:white">==는 동등 ===는 일치를 말하며 동등은 형식이 다르더라도 값이 같으면 같다고 처리한다.  
예를 들어 Number형식의 123과 문자열 형식의 “123”을 123 == “123”을 했을때 같다고 처리된다.  
일치는 자료형까지 완전히 일치 했을 때 일치 처리된다.</span>
  
## 자바스크립트에서 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)에 대해 설명해 주세요.
<span style="color:white">얕은 복사의 경우 데이터의 주소값을 복사하여 둘 중 하나의 값을 변경했을 경우 두 값이 모두 변경되며,</span>  
<span style="color:white">깊은 복사는 새롭게 할당된 주소 값을 복사하는 방식으로</span>  
<span style="color:white">둘 중 하나의 값을 변경해도 두 값이 저장된 주소가 다르기 때문에 다른 값이 변경되지 않는다.</span>