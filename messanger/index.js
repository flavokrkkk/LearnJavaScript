//Создание небольшого мессенджера

let data = localStorage.getItem('msg-list'); // получаем введенные данные
let msgList = []; // и формируем их в виде массива

if(data!== '' && data !== null){
    msgList = JSON.parse(data);
} //обязательно делаем проверку
    

    console.log(msgList);

function createNewMsg(obj){

    const itemMsg = document.createElement('li'); // создаём новый элемент 
    itemMsg.classList.add('list-group-item');// присваиваем класс

    const itemTitle = document.createElement('h2'); // создаём новый элемент 
    itemTitle.textContent = obj.name; // присваиваем текстовое содержимое элемента переменной userName

    const itemText = document.createElement('p'); // создаём новый элемент 
    itemText.classList.add('lead');
    itemText.textContent = obj.msg; //присваиваем текстовое содержимое элемента переменной itemText

    itemMsg.append(itemTitle); // добавляем текстовый узел в конец элемента
    itemMsg.append(itemText);
    document.getElementById('msg-list').append(itemMsg); //Все что мы добавили в переменную itemMsg, также добавляем в родительский элемент ul, который мы только что получили

    //ТО ЕСТЬ ПРИ ОТПРАВКЕ ФОРМЫ СОЗДАЕТСЯ СОБЫТИЕ И ПРОИСХОДЯТ ВСЕ ВОТ ЭТИ ДЕЙСТВИЯ

}

    for(const msg of msgList){
        createNewMsg(msg);
    }

document.getElementById('add-msg-form').addEventListener('submit', function(event){
    event.preventDefault(); // происываем собыите и убираем значения для кнопки по умолчанию

    let userName = document.getElementById('name-inp').value; //получаем введённый текст внутри формы(можем получить его в консоли и тд)
    let msg = document.getElementById('msg-inp').value;

    let msgObj = {
        name: userName,
        msg: msg
    }; // Упаковывваем данные в объект, чтобы упростить нашу работу

    msgList.push(msgObj);

    localStorage.setItem('msgList', JSON.stringify(msgList))

    // console.log(msg);
    // console.log(userName);
       console.log(`Кто отправил сообщение:  ${msgObj.name}`);
       console.log(`Что было отправлено в сообщении:  ${msgObj.msg}`);

    createNewMsg(msgObj);

    document.getElementById('msg-inp').value = ''; //отчищаем текстовые поля после отправки сообщения
});

   const btn = document.querySelector('button');

   btn.addEventListener('click', function(){
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
            const body = document.querySelector('body');
            body.style.backgroundColor = 'black';
            const title = document.querySelector('h1');
            title.style.color = 'white';
            const textArea = document.querySelector('textarea');
            textArea.style.border = '2px solid white';
            const inputText = document.querySelector('input');
            inputText.style.border = '2px solid white';
   })

   
 


//НЕМНОГО ПРО LOCALSTORAGE

// localStorage.setItem('name', 'Egor'); // сохраняем данные в LocalStorage при помощи метода setItem

// localStorage.setItem('age', 17); 

// localStorage.setItem('city', JSON.stringify({ city: 'Kostroma' }));  // преобразуем объект в JSON строку и размещаем его в LOCALSTORAGE

// console.log(localStorage.getItem('name')); // получаем данные при помощи метода getItem в консоль
// console.log(localStorage.getItem('age'));
// console.log(JSON.parse(localStorage.getItem('city')));// получаем данные в виде объекта