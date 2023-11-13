
const SERVER_URL = 'http://localhost:3000'


//Функция добавления нового студента на сервер, то есть отправка на сервер
 async function serverAddStudent(obj){
      let response = await fetch(SERVER_URL + '/api/students', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj),
      })

      let data = await response.json()

      return data
}

//Функция получения данных с сервера
async function serverGetStudent(){
    let response = await fetch(SERVER_URL + '/api/students', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })

    let data = await response.json()

    return data
}
//Функция удаления пользователей с сервера
async function serverDeleteStudent(id){
    let response = await fetch(SERVER_URL + '/api/students/' + id, {
      method: 'DELETE',
    })

    let data = await response.json()

    return data
}


let serverData = await serverGetStudent()

//создание массива со студентами
// let listStudents = [
//     {
//         name: 'Андрей',
//         lastname: 'Харламов',
//         surname: 'Дмитриевич',
//         birthday: new Date(2006, 2, 17),
//         faculty: 'Информационные системы и программирование',
//         start: 2022
//     }, 
//     {
//         name: 'Илья',
//         lastname: 'Лебедев',
//         surname: 'Олегович',
//         birthday: new Date(2006, 6, 13),
//         faculty: 'Информационные системы и программирование',
//         start: 2022
//     }, 
//     {
//         name: 'Александр',
//         lastname: 'Ермолин',
//         surname: 'Александрович',
//         birthday: new Date(2006, 8, 8),
//         faculty: 'Информационные системы и программирование',
//         start: 2022
//     }, 

// ];

// функция красивой даты

let listStudents = []

if (serverData){
    listStudents = serverData
}

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }

// функции добавления студентов из массива в таблицу
    function $getNewStudentTR(studObj){
        const $tr = document.createElement('tr');
        const $tdFIO = document.createElement('td');
        const $tdBirthday = document.createElement('td');
        const $tdFaculty = document.createElement('td');
        const $tdStudyStart = document.createElement('td');
        const $tdDelete = document.createElement('td');
        const $btnDelete = document.createElement('button');

        $btnDelete.classList.add('btn', 'btn-danger', 'w-100');
        $btnDelete.textContent = 'Удалить'

        $tdFIO.textContent = `${studObj.lastname} ${studObj.name} ${studObj.surname}`;
        $tdBirthday.textContent = formatDate(new Date(studObj.birthday))
        $tdFaculty.textContent = `${studObj.faculty}`;
        $tdStudyStart.textContent = `${studObj.studyStart}`;

        $btnDelete.addEventListener('click', async function(){
           await serverDeleteStudent(studObj.id)
           $tr.remove()
        } )


        $tdDelete.append($btnDelete)
        $tr.append( $tdFIO, $tdBirthday, $tdFaculty, $tdStudyStart, $tdDelete);
        return $tr;
    }

    function render(arr){
        let copyArr = [...arr]
        const $studTable = document.getElementById('stud-table');

        $studTable.innerHTML = ''
        for(const studObj of copyArr){
            const $newTr = $getNewStudentTR(studObj)
    
            $studTable.append($newTr);
        }
    }

    render(listStudents);

    // добавление новых студентов из формы путем нажатия на кнопку

    document.getElementById('add-form').addEventListener('submit', 
        async function(event){
        event.preventDefault();


        let newStudentObj = {
            name: document.getElementById('name-inp').value,
            lastname: document.getElementById('lastname-inp').value,
            surname: document.getElementById('surname-inp').value,
            birthday: new Date(document.getElementById('birthday-inp').value),
            faculty: document.getElementById('faculty-inp').value,
            studyStart: document.getElementById('studyStart-inp').value
        }

       let serverDataObj = await serverAddStudent(newStudentObj)
       serverDataObj.birthday = new Date(serverDataObj.birthday )

        listStudents.push(serverDataObj);
        console.log(listStudents)

        render(listStudents)
    })





    






















