class Validator {
    constructor(form) {
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+?[78] \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
            //email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
            // textarea: / \w/g
        };
        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон подчиняется шаблону +7(000)000-0000',
            //email: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        };
        this.errorClass = 'error-msg';
        this.form = form;
        this.valid = false;
        this._validateForm();
    }
    validate(regexp, value) {
        regexp.test(value)
    }

    _validateForm() { // каждый инпут пропускаем через данный метод, находим все инпуты
        let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errorClass}`)]; // [... ] - это коллекция, сохраняем в коллекцию, она не занимает память как массив
        for (let error of errors) {
            error.remove();
        }
        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')]; // собираем инпуты в коллекцию
        for (let field of formFields) {
            this._validate(field); // для каждого запускаем метод _validate
        }
        if (![...document.getElementById(this.form).querySelectorAll('.invalid')].length) { //ищем все ошибки, если нет ощибок 
            this.valid = true; // ставим true
        }
    }
    _validate(field) { //выполняем проверку 
        if (this.patterns[field.name]) { //существует ли правило для input
            if (!this.patterns[field.name].test(field.value)) { // если правило есть, то применяем метод test берем то что ввели и сравниваем с рег выражением(this.patterns[field.name])
                field.classList.add('invalid'); //добавляем класс
                this._addErrorMsg(field); // запускаем метод для вывода сообщения 
                this._watchField(field); //запускаем метод, котрый контралирует измениние в input'ах
            }
        }
    }
    _addErrorMsg(field) {
        let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div> `; // добавляем крассную рамку и текст ошибки
        field.parentNode.insertAdjacentHTML('beforeend', error); //обращаемся к родителю input в данном случае это label, перед окончанием тега label вставляем сообщение с ошибкой
    }
    _watchField(field) {
        field.addEventListener('input', () => { //вешаем событи input, отслеживающее изменение в нем
            let error = field.parentNode.querySelector(`.${this.errorClass}`); //ищем есть ли сообщение об ошибки,
            if (this.patterns[field.name].test(field.value)) { //
                field.classList.remove('invalid'); //удаляем класс об ошибки
                field.classList.add('valid'); // добавляем зелену рамку
                if (error) { //если была ошибка
                    error.remove(); // мы ее удаляем
                }
            } else { // если пользовател что то ввел, но ошибка осталась
                field.classList.remove('valid'); // стираем рамку зеленую
                field.classList.add('invalid'); // добавляем рамку красную
                if (!error) { // если ошибки не было
                    this._addErrorMsg(field); // мы ее добавляем
                }
            }
        })
    }
}