    const number = parseInt(prompt('몇 명이 참가하나요?'), 10);    
    
    if (number) {
      const $input = document.querySelector('input');
      const $button = document.querySelector('button');
      const $word = document.querySelector('#word');
      const $order = document.querySelector('#order');

      let word;
      let newWord;

      const onClickButton = () => {
        if (!word || (word[word.length - 1] === newWord[0] && newWord.length === 3)) { 
          word = newWord; 
          $word.textContent = word;
  
          const order = parseInt($order.textContent);
          if (order + 1 > number) {
            $order.textContent = 1;
          } else {
            $order.textContent = order + 1;
          }
        } else {
            alert('올바르지 않은 단어입니다!');
        }
        $input.value = '';
        $input.focus();
      };
      const onInput = (event) => {
        newWord = event.target.value;
      };  
      $button.addEventListener('click', onClickButton);
      $input.addEventListener('input', onInput);  
    }