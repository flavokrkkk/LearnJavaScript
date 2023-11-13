const cols = document.querySelectorAll('.col');

// ставим переключение цветов через пробел
document.addEventListener('keydown', event => {
    event.preventDefault();
    if(event.code.toLowerCase() === 'space'){
        setRandomColours()
    }
})

//делаем события с замками
document.addEventListener('click', event => {
    const type = event.target.dataset.type

    if(type === 'lock'){
      const node = event.target.tagName.toLowerCase() === 'i'
      ? event.target
      : event.target.children[0]

      node.classList.toggle('fa-unlock')
      node.classList.toggle('fa-lock')
    }else if(type === 'copy'){
        copyToClickboard(event.target.textContent)
    }
})




//Функция генерации случаный чисел

function generateRandomColor(){
      const hexCodes = '0123456789ABCDEF';
      let color = ''; 
      for(let i = 0; i < 6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
      }
      return '#' + color;
}

// функция для копирования текста
function copyToClickboard(text){
   return navigator.clipboard.writeText(text)
}


function setRandomColours(isInitial){
    const colors = isInitial ? getColorsFromHash() : [];


    cols.forEach((col, index) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2');
        const button = col.querySelector('button');
        

        if (isLocked){
            colors.push(text.textContent)
            return 
        }

        const color = isInitial
         ? colors[index] 
         ? colors[index] 
         : chroma.random()
         :  chroma.random();

        if(!isInitial){
            colors.push(color)
        }

        text.textContent = color;
        col.style.background = color;

        setTextColor(text, color);
        //также окрашиваем кнопки под цвет текста
        setTextColor(button, color);
    })

    updateColorsHash(colors)
}

// пишем функцию-условие для цвета текста
function setTextColor(text, color){
   const luminance = chroma(color).luminance();
   text.style.color = luminance > 0.5 ? 'black' : 'white';
}

// добавлянем выбранные цвета в хэш с помощью функции
    function updateColorsHash(colors = []){
        document.location.hash = colors.map(col => {
            return col.toString().substring(1)
        }).join('-')
    }

    function getColorsFromHash(){
        if (document.location.hash.length > 1){
          return document.location.hash
          .substring(1)
          .split('-')
          .map((color) => '#' + color )
        }
        return []
    }

setRandomColours(true)