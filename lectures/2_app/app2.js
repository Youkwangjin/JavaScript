// 변수 선언의 실행 시점과 변수 호이스팅
console.log(score);
var score;

/**
 * 자바스크립트 코드는 인터프리터에 의해 한 줄씩 순차적으로 실행되므로 console.log 부분이 가장 먼저 실행되고 순차적으로 다음 코드가 실행이 된다.
 * 따라서 console.log가 실행되는 시점에는 아직 score 변수의 선언이 실행되지 않았지만 참조에러(ReferenceError) 에러가 발생하지 않고 undefined 출력이된다.
 * 그 이유는 변수 선언이 소스코드가 한 줄씩 순차적으로 실행되는 시점, 즉 런타임이 아니라 그 이전 단계에서 먼저 실행되었기 때문이다.
 * 변수 선언문이 코드의 선두로 끌어 올려진 것 처럼 동작하는 자바스크립트 고유의 특징을 변수 호이스팅 이라한다.
 */

console.log(score2); // undefined
var score2;
score2 = 50;         
console.log(score2); // 50

// 변수 재할당
var su = 20;
console.log(su); // 20
var su = 30;
console.log(su); // 30

// const는 재할당 불가능
const stvalue = 20;
console.log(stvalue); // 20
// const stvalue = 30; Error : Cannot redeclare block-scoped variable