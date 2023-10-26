  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  const btntwo = document.querySelector('.headline-btn');
  const input = document.querySelectorAll('.contacts-input');
 


    btntwo.addEventListener('click', () => {
      btntwo.style.backgroundColor = 'white'; 
      btntwo.style.color = 'black';
      document.documentElement.scrollTo(0, 1500);
    })

  btn.addEventListener('click',()=>{
    nav.classList.toggle('menu-open');

  });

  //  input.forEach(function(el){
  //   el.addEventListener('click', function(event){ // инпут на всякий случай
  //     console.log(this);
  //     this.style.color = '#fff';
  //   })
  // }) 

  input.forEach(function(el){
    el.addEventListener('click', function(event){ // инпут на всякий случай
      console.log(this);
      this.style.color = '#fff';
    })
  }) 