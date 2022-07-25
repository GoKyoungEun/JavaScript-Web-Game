let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClickNumber = (event) => {
  if (!operator) { //비어있다
    numOne += event.target.textContent; // numOne에 숫자를 넣는다.
    $result.value += event.target.textContent;
    return;
  }
  // 비어있지 않다.
  if (!numTwo) { // numTwo가 없으면 화면에 숫자를 지워라
    $result.value = '';
  }
  numTwo += event.target.textContent; // numTwo에 숫자를 넣는다.
  $result.value += event.target.textContent;
};

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
  if (op === '-') { // op가 -가 들어올때
    if (!numOne) { //numOne에 값이 없으면
      numOne += op; // numOne 변수에 -를 저장해라
      $result.value = op; // $result에 -를 출력해라
      return;
    } else if (numOne && !operator){ // numOne에 값이 있거나 operator에 값이 없으면
      operator = op; // operator변수에 -를 저장해라
      $operator.value = op; //$operator에 -를 출력해라
      return;
    }
    if (!numTwo) { // numTwo에 값이 없으면
      $result.value = ''; // $result값을 비워라
      numTwo += op; // numTwo 변수에 -를 저장해라
      $result.value = op; // $result에 -를 출력해라
      return;
    }
  } else {
    if (numOne) { // numOne에 값이 있으면
      operator = op; // operator에 -를 넣어라
      $operator.value = op; //$operator에 -를 출력해라
    } else {
      alert('숫자를 먼저 입력하세요.');
    } 
  }}

// const onClickOperator = (op) => () => {
//   if (numTwo) {
//     switch (operator) {
//       case '+':
//         $result.value = parseInt(numOne) + parseInt(numTwo);
//         break;
//       case '-':
//         $result.value = numOne - numTwo;
//         break;
//       case '*':
//         $result.value = numOne * numTwo;
//         break;
//       case '/':
//         $result.value = numOne / numTwo;
//         break;
//       default:
//         break;
//     }
//     numOne = $result.value;
//     numTwo = '';
//   }
//   if(numOne) {
//     operator = op;
//     $operator.value = op;
//   } else {
//     alert('숫자를 먼저 입력하세요.')
//   }
// }
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
  if (numTwo) {
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '*':
        $result.value = numOne * numTwo;
        break;
      case '/':
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
    $operator.value = '';
    numOne = $result.value;
    operator = '';
    numTwo = '';
  } else {
    alert('숫자를 먼저 입력하세요.')
  }
});
document.querySelector('#clear').addEventListener('click', () => {
  numOne = '';
  operator = '';
  numTwo = '';
  $operator.value = '';
  $result.value = '';
});
