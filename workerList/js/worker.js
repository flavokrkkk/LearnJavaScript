//Создаем класс
export default class Worker{
    constructor(options){
        this.name = options.name;
        this.surname = options.surname;
        this.lastname = options.lastname;
        this.workStart = options.workStart;
        this.birthDate = options.birthDate;
        this.post = options.post;
    }
//Переносим наши ранеее сделанные функции в метод класса

    //Функция получения ФИО
    get fio(){
        return `${this.surname} ${this.name} ${this.lastname}`;
    }

    //Функция нахождения опыта работы
    getWorkPeriod(){
        const currentTime = new Date();
        return currentTime.getFullYear() - this.workStart;
    }

    //Функция получения даты рождения в нужном нам формате
     getBirthDateString(){
        const yyyy = this.birthDate.getFullYear();
        let mm  = this.birthDate.getMonth() + 1;
        let dd = this.birthDate.getDate();

        if(dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '.' + mm + '.' + yyyy;
    }

    //Функия получения возраста сотрудника
     getAge(){
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        let m = today.getMonth() - this.birthDate.getMonth();
        if(m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())){
            age--;
        }
         return age;
    }


}

//Проходимся по массиву с помощью цикла
// for(let worker of workers){
//     console.log('Привет, меня зовут: ', worker.getFIO());
//     console.log('Мой стаж работы: ', worker.getWorkPeriod(), ' лет');
//     console.log('Дата рождения: ', worker.getBirthDateString());
//     console.log('Мне', worker.getAge(), 'лет');
// }







