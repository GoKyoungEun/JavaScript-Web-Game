    // prompt: 입력창
    // 입력 값이 string이므로 parseIn를 이용해 number로 바꿔줘야한다.
    // 마지막에 숫자 10은 십진법을 의미한다.
    // 적지 않아도 기본값이 십진법이지만 적어주는게 명시적으로 좋다.
    const number = parseInt(prompt('몇 명이 참가하나요?'), 10);
    const $input = document.querySelector('input');
    const $button = document.querySelector('button');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');
    let word; // 제시어
    let newWord; // 새로 입력한 단어

    const onClickButton = () => {
      if (!word || word[word.length - 1] === newWord[0]) { // 제시어가 비어있는가? 또는 입력한 단어가 올바른가?
        // 제시어가 비어 있다.
        word = newWord; // 입력한 단어가 제시어가 된다.
        $word.textContent = word; // #word에 입련된 제시어를 넣어준다.

        const order = parseInt($order.textContent); //현재 순서
        if (order + 1 > number) { // 현재 순서에서 1을 더한 값이 number보다 크면
          $order.textContent = 1; // 현재 순서가 첫번째로 돌아간다.
        } else { // 그게 아니면
          $order.textContent = order + 1; // 현재 순서에서 1을 더한다.
        }
      } else {
        // 제시어가 비어있지 않다. 또는 올바르지 않은 단어이다.
          alert('올바르지 않은 단어입니다!');
      }
      $input.value = ''; // 입력버튼을 누르면 input이 빈칸이 된다.
      $input.focus(); // 커서를 둔다
    };
    const onInput = (event) => {
      // 새로 입력된 글자가 저장된다.
      newWord = event.target.value;
    };

    $button.addEventListener('click', onClickButton);
    $input.addEventListener('input', onInput);
