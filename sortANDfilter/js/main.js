//База данных, массив всех пользователей

let listData = [
    {
        name: 'Егор', 
        surname: "Викторович",
        lastname: 'Яровицын',
        age: 17,
        hobby: 'Программирование'
    },
    {
        name: 'Влад', 
        surname: "Дмитриевич",
        lastname: 'Смирнов',
        age: 19,
        hobby: 'Программирование'

    },
    {
        name: 'Андрей', 
        surname: "Дмитриевич",
        lastname: 'Харламов',
        age: 17,
        hobby: 'Видео монтаж'
    },
    {
        name: 'Екатерина', 
        surname: "Фёдоровна",
        lastname: 'Яровицына',
        age: 19,
        hobby: 'Волонтёрство'
    },
    {
        name: 'Арсений', 
        surname: "Сергеевич",
        lastname: 'Дмитриев',
        age: 18,
        hobby: 'Спорт'
    },
];

let sortColumnFlag = 'fio',
    sortDirFlag = 'true';

//Получаем элементы и работаем с ними

      const $app = document.getElementById('app'),
      $addForm = document.getElementById('add-form'),
      $nameInp = document.getElementById('add-form__name-inp'),
      $surnameInp = document.getElementById('add-form__surname-inp'),
      $lastnameInp = document.getElementById('add-form__lastname-inp'),
      $ageInp = document.getElementById('add-form__age-inp'),
      $hobbyInp = document.getElementById('add-form__hobby-inp'),

      $sortFioBtn = document.getElementById('sort__fio'),
      $sortAgeBtn = document.getElementById('sort__age'),

      $filterForm = document.getElementById('filter-form'),
      $fioFilterInp = document.getElementById('filter-form__fio-inp'),
      $hobbyFilterInp = document.getElementById('filter-form__hobby-inp'),

//Создаём элементы
      $table = document.createElement('table'),
      $tableHead = document.createElement('thead'),
      $tableBody = document.createElement('tbody'),

      $tableHeadTr = document.createElement('tr'),
      $tableHeadThFIO = document.createElement('th'),
      $tableHeadThAge = document.createElement('th'),
      $tableHeadThBirthYear = document.createElement('th'),
      $tableHeadThHobby = document.createElement('th');


$table.classList.add('table');
$tableBody.classList.add('table-group-divider');




      $tableHeadThFIO.textContent = 'ФИО';
      $tableHeadThAge.textContent = 'Возраст';
      $tableHeadThBirthYear.textContent = 'Год рождения';
      $tableHeadThHobby.textContent = 'Хобби';

      
      $tableHeadTr.append($tableHeadThFIO);  
      $tableHeadTr.append($tableHeadThAge);  
      $tableHeadTr.append($tableHeadThBirthYear);  
      $tableHeadTr.append($tableHeadThHobby);  
      
      
      $tableHead.append($tableHeadTr);
      $table.append($tableHead);
      $table.append($tableBody);    
      $app.append($table);


//Функция создания пользователя
function createUserTr(oneUser){
    const $userTr = document.createElement('tr'),
    $userFIO = document.createElement('th'),
    $userAge = document.createElement('th'),
    $userBirthYear = document.createElement('th'),
    $userHobby = document.createElement('th');

    $userFIO.textContent = oneUser.fio;
    $userAge.textContent = oneUser.age;
    $userBirthYear.textContent = oneUser.birthYear;
    $userHobby.textContent = oneUser.hobby;


    $userTr.append($userFIO);  
    $userTr.append($userAge);  
    $userTr.append($userBirthYear);  
    $userTr.append($userHobby); 

    return $userTr;
}

//Функция фильтрации
    function filter(arr, prop, value){
        return  arr.filter(function(oneUser){
            if(oneUser[prop].includes(value.trim())){
                return true;
            }
        });
    }

//Функция рендера

function render(arrData){
    $tableBody.innerHTML = '';

let copyListData = [...arrData];

//Подготовка

    for (const oneUser of copyListData) {
    oneUser.fio = oneUser.name + ' ' + oneUser.surname + ' ' + oneUser.lastname;
    oneUser.birthYear = 2023 - oneUser.age;
    }

//Сортировка
    copyListData = copyListData.sort(function(a, b){
        let result = 0;
        let sort = a[sortColumnFlag] < b[sortColumnFlag];

        if(sortDirFlag == false){
            sort = a[sortColumnFlag] > b[sortColumnFlag];
        }

        if(sort){
            return -1;
        }
    });

//Фильтрация

    if($fioFilterInp.value.trim() !== ""){
        copyListData = filter(copyListData, "fio", $fioFilterInp.value);
    }

    if($hobbyFilterInp.value.trim() !== ""){
        copyListData = filter(copyListData, "hobby", $hobbyFilterInp.value);
    }

//Отрисовка

    for(const oneUser of copyListData){
        const $newTr = createUserTr(oneUser);
        
        $tableBody.append($newTr);
    }

    }

    render(listData);

//Добавление события в кнопку формы
$addForm.addEventListener('submit', function(event) {
    event.preventDefault();
//Валидация
    if($nameInp.value.trim() == ""){
        alert("Имя не введдено!");  
        return;
    }
    if($surnameInp.value.trim() == ""){
        alert("Отчество не введдено!");  
        return;
    }
    if($lastnameInp.value.trim() == ""){
        alert("Фамилия не введдена!");  
        return;
    }
    if($ageInp.value.trim() == ""){
        alert("Возраст не введен!");  
        return;
    }


    listData.push({
        name: $nameInp.value, 
        surname: $surnameInp.value.trim(),
        lastname: $lastnameInp.value.trim(),
        age: parseInt($ageInp.value),
        hobby: $hobbyInp.value.trim()
    });

    render(listData);

});
 

//События сортировки

    $sortFioBtn.addEventListener('click', function(event){
        sortColumnFlag = 'fio';
        sortDirFlag = !sortDirFlag;
        render(listData);
    });

    $sortAgeBtn.addEventListener('click', function(event){
        sortColumnFlag = 'age';
        sortDirFlag = !sortDirFlag;
        render(listData);
    });

//Фильтрация
$filterForm.addEventListener('submit', function(event) {
    event.preventDefault();
});

$fioFilterInp.addEventListener('input', function(){
    render(listData);
});

$hobbyFilterInp.addEventListener('input', function(){
    render(listData);
});