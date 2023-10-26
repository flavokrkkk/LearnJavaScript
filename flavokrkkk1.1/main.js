  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  const btntwo = document.querySelector('.headline-btn');
 


    btntwo.addEventListener('click', () => {
      btntwo.style.backgroundColor = 'white'; 
      btntwo.style.color = 'black';
      document.documentElement.scrollTo(0, 1500);
    })

  btn.addEventListener('click',()=>{
    nav.classList.toggle('menu-open');

  });