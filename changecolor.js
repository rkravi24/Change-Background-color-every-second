const randamColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  // console.log(randamColor);
  
  let intervalId;
  
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = changeBgColor = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
      document.body.style.backgroundColor = randamColor();
    }
  };
  
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  