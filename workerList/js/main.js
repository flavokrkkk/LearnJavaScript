import Worker from "../js/worker.js";


//Создаем массив с экземплярами класса
const workers = [
    new Worker ({
    
        name: 'Егор',
        surname: 'Яровицын',
        lastname: 'Викторович',
        workStart: '2020',
        birthDate: new Date(2006, 8, 3),
        post: 'Fullstack'
    
    }),

    new Worker ({
    
        name: 'Андрей',
        surname: 'Харламов',
        lastname: 'Дмитриевич',
        workStart: '2018',
        birthDate: new Date(2006, 1, 17),
        post: 'Unity'
    
    }),
    
     new Worker ({
        
        name: 'Михаил',
        surname: 'Шахов',
        lastname: 'Александрович',
        workStart: '2021',
        birthDate: new Date(2006, 11, 20),
        post: 'Test API'
    })


];

// for (const item of workers) {
//     console.log(item.getBirthDateString());
    
// }

//Получаем DOM-элементы
    const $workersList = document.getElementById('workers-list'),
          $workersListTHAll = document.querySelectorAll('.workersTable th');
    
    let column = 'fio',
        columnDir = true;



//Создаем функцию для создания новых сотрудников

    function newWorkerTr(worker){
        //Создание новых элементов таблицы

        const $workerTR = document.createElement('tr'),
              $fioTD = document.createElement('td'),
              $birthDateTD = document.createElement('td'),
              $workStartTD = document.createElement('td'),
              $postTD = document.createElement('td');

        //Выыводим в таблицу значения

        $fioTD.textContent = worker.fio;
        $birthDateTD.textContent = worker.getBirthDateString() + ' ( ' + worker.getAge() + 'years' +' ) ';         
        $workStartTD.textContent = worker.workStart + ' ( ' + worker.getWorkPeriod() + ' years' +' ) ';       
        $postTD.textContent = worker.post;         

        //Добавляем элементы на экран
        $workerTR.append($fioTD);
        $workerTR.append($birthDateTD);
        $workerTR.append($workStartTD);
        $workerTR.append($postTD);

        return $workerTR;
    }

//Создаем функцию сортировки 
    
    function getSortWorker(prop, dir){
        const workersCopy = [...workers];
        return workersCopy.sort(function(workerA, workerB) {
            if((!dir == false ? workerA[prop] < workerB[prop] : workerA[prop] > workerB[prop]))
            return -1;
        });
    }


//Создаем функцию рендера

    function render(){
        let workersCopy = [...workers];

        workersCopy = getSortWorker(column, columnDir);

        $workersList.innerHTML = '';

        for (const worker of workersCopy) {
            $workersList.append(newWorkerTr(worker));
        }
    }

//Вешаем событие сортировки на кнопку при клике  
    $workersListTHAll.forEach(element => {
        element.addEventListener('click', function(){
            column = this.dataset.column;
            columnDir = !columnDir;
            render();
        })
    })

    // Добавление новых элементов
    document.getElementById('add-worker').addEventListener('submit', function(event){
        event.preventDefault();

        workers.push(new Worker({
           name: document.getElementById('input-name').value,
           surname: document.getElementById('input-surname').value,
           lastname: document.getElementById('input-lastname').value,
           workStart: Number( document.getElementById('input-workStart').value),
           birthDate: new Date(document.getElementById('input-birthDate').value),
           post: document.getElementById('input-post').value
         } ))

        render();
    })

    render();

