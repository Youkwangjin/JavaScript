// 변수는 하나의 값을 저장하기 위한 수단.
var userId = 1;
var userName = 'Lee';

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = {id: 1, name: 'Lee'};

var users = [
    {id: 1, name: 'Lee'},
    {id: 2, name: 'You Kwang Jin'},
]

/**
 * 변수를 선언한 이후, 아직 변수에 값을 할당하지 않았기에 확보된 메모리 공간에는 자바스크립트 엔진에 의해 undefined 라는 값이 암뭄적으로 할당되어 초기화
 * 자바스크립트 엔진은 변수 선언을 2단계에 거쳐 수행한다.
 * 선언단계 : 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알린다.
 * 초기화 단계 : 값을 저장하기 위한 메모리 공간을 확보하고 undefined 라는 값이 암뭄적으로 할당되어 초기화한다.
 */
var score; 
console.log(score) // undefined

var score2; // 변수 선언
score2 = 100; // 값의 할당
console.log(score2) // 100