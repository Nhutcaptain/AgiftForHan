
const style = document.querySelector(".text pre style");
const card = document.querySelector(".front face back face");
(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    const mediaQueryList = window.matchMedia("(max-width: 600px)");
    if(mediaQueryList.matches) {
      script = `
    Chào bạn dà!
    Tuy giờ này gửi cái này 
    là trễ con bà nó rồi.
    Cơ mà tui chúc bà từ 
    giờ tới hết 20/10 và dìa 
    sau đề dui dẻ nghen.
    Thiệt ra là tui còn 
    nhiều điều muốn nói,
    nhưng mà sau cái pha 
    răng đe dạy dỗ khi 
    nảy thì tui đành nuốt
    ngược dô trong hết. 
    Mà nói chung lại thì 
    bà cứ sống như cách 
    bà muốn là được. HEhehe 
    
    `;
    }
    else {
      script = `
    Chào bạn dà!
    Tuy giờ này gửi cái này là trễ con bà nó rồi.
    Cơ mà tui chúc bà từ giờ tới hết 20/10 và dìa 
    sau đề dui dẻ hén.
    Thiệt ra là tui còn nhiều điều muốn nói, nhưng 
    mà sau cái pha răng đe dạy dỗ khi nảy thì tui 
    đành nuốt ngược dô trong hết. 
    Mà nói chung lại thì bà cứ sống như cách bà muốn
    là được. HEhehe 
    
    `;
    }
    let counter = 0;
      let intervalID = setInterval(() => {
        counter++;
        style.textContent = script.substring(0, counter);
        style.scrollTop = style.scrollHeight;
      
        if(counter > script.length) {
          clearInterval(intervalID);
        }
      }, 30);
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
    
  });

}());



