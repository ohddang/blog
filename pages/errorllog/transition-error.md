# <span style="color:white">Week1 11.21~11.26</span>  

## <span style="color:white">[JavaScript] 요소의 transform이 같을 때 transition Event 발생안함</span>  
<span style="color:white">버튼 클릭 시, 화면의 큐브를 미리 설정한 transform으로 변형을 주고, 해당 동작이 transitionend가 되면 이후 페이지를 이동하는 기능을 구현했는데, 큐브가 미리 설정한 transform과 같은 경우 페이지 이동이 안되는 문제가 발생했다. 요소의 transform이 같으면 transition 이벤트가 아예 발생하지 않는 것을 확인했다. transition이 일어나지 않기 때문에 transitionend도 당연히 호출이 안되고 페이지 이동도 안되었던 것이였다. 이전 transform과 같으면 바로 페이지 이동을 하거나 일정 시간 이후 페이지 이동 하는 방식으로 변경필요</span>