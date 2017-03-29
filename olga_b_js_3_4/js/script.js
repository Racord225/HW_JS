var test = {
    title: "Тест по программированию",
    questions: ['1.Вопрос №1', '2.Вопрос №2', '3.Вопрос №3'],
    answers: [['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
              ['Вариант ответа №4', 'Вариант ответа №5', 'Вариант ответа №6'],
              ['Вариант ответа №7', 'Вариант ответа №8', 'Вариант ответа №9']],
    button: "Проверить мои результаты",
    name: function  () {
        var title = document.createElement('h1');
        title.innerHTML = test.title;
        document.body.appendChild(title);
    },
       
    content: function ()  {  
        for (var i = 0; i < test.questions.length; i++) {
        var questions = document.createElement ('div');
        questions.innerHTML = test.questions[i];
        document.body.appendChild(questions); 


        var answ = test.answers[i].length;
            for (var j = 0; j < answ; j++) {
            var input = document.createElement('input');
            input.setAttribute("type", "checkbox"); 
            document.body.appendChild(input);

        var answers = document.createElement('label');
        answers.innerHTML = test.answers[i][j];
        document.body.appendChild(answers);
        }
        }
    },    

    result: function () {
        var button = document.createElement('button');
        button.innerHTML = test.button;
        document.body.appendChild(button);
    }
}
test.name();
test.content();
test.result();