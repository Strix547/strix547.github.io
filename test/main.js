$(document).ready(function () {
    var start = document.getElementById("start");
    var nextQ = document.getElementById("nextQ");
    var fixQ = document.getElementById("fixQ");
    var end = document.getElementById("end");
    var result = document.getElementById("result");
    var name;

    nextQ.setAttribute("disabled","disabled");
    fixQ.setAttribute("disabled","disabled");
    end.setAttribute("disabled","disabled");

    $('input[name="radio"]').prop('checked', false);
    $('input[name="radio"]').prop('disabled', "disabled");

    // Плавающий label
    $('.form').find('input').on('keyup blur focus', function (e) {
        var $this = $(this),
            label = $this.prev('label');

        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if( $this.val() === '' ) {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {

            if( $this.val() === '' ) {
                label.removeClass('highlight');
            }
            else if( $this.val() !== '' ) {
                label.addClass('highlight');
            }
        }
    });

    document.getElementById("endForm1").onclick = function (e) {
        e.preventDefault();
        name = document.getElementById("name").value;
        if (name) {
            document.getElementById("form1").style.display = "none";
            document.getElementById("form2").style.display = "block";
        } else {
            alert("Введите имя");
        }
    };

    document.getElementById("endForm2").onclick = function (e) {
        e.preventDefault();
        document.getElementById("form2").style.display = "none";
        document.getElementById("form3").style.display = "block";
    };

    start.onclick = function (e) {
        e.preventDefault();
        var questions = [
            "Как расшифровывается аббревиатура \"WWW\"?",
            "В какой стране появился интернет?",
            "Какой был первый браузер?",
            "Что такое HTML?",
            "В каком году появился интернет?",
            "Какое расширение имеет веб-страница?",
            "Кто придумал \"WWW\"?",
            "Компьютер, предоставляющий свои ресурсы другим компьютерам при совместной работе называется:",
            "Чем является Яндекс?",
            "Как называется всемирная свободная энциклопедия?"
        ];

        var answers = [
            ["WorldWideWeb","WordWindowsWeb","WorldWindowsWeb","WorldWifeWeb"], //1
            ["Япония","Великобритания","Россия","США"], //4
            ["Internet Explorer","Netscape","Mosaic","Korner"], //3
            ["HyperText Markup Language","HyperTechnology Mega Language","HyperText Mega Language","HyperText Max Language"], //1
            ["1974","1991","1985","1980"], //2
            [".doc",".txt",".htm",".bat"], //3
            ["Роберт Никельсон","Брендан Эйх","Тим Бернерс-Ли","Майк Сендалл"], //3
            ["Адаптером","Модемом","Коммутатором","Сервером"], //4
            ["Самой мощной поисковой системой в мире","Самой популярной поисковой системой в сети российской части","Российской социальной сетью","Российская энциклопедия"], //2
            ["Википедия","Фейсбук","Рамблер","Ответы майл.ру"] //1
        ];

        var rightAnswers = [1,4,3,1,2,3,3,4,2,1];

        var i = 0, counter = 0;
        var question = document.getElementById("question");
        var labels = document.querySelectorAll(".answer .left span.label");
        var radio = document.querySelectorAll(".answer .left input[type='radio']");
        var table = document.getElementById("table");
        var answer;

        start.setAttribute("disabled","disabled");
        nextQ.removeAttribute("disabled");
        fixQ.removeAttribute("disabled");

        for (var j = 0;j < 4;j++) {
            radio[j].removeAttribute("disabled");
        }

        question.innerHTML = questions[i];
        for (j = 0;j < 4;j++) {
            labels[j].innerHTML = answers[i][j];
        }
        i++;
        nextQ.onclick = function (e) {
            e.preventDefault();
            nextQ.setAttribute("disabled","disabled");
            fixQ.removeAttribute("disabled");
            for (j = 0;j < 4;j++) {
                if (radio[j].checked === true && j + 1 === rightAnswers[i-1]) {
                    counter++;
                }
            }

            for (var j = 0;j < 4;j++) {
                radio[j].removeAttribute("disabled");
            }
            fixQ.removeAttribute("disabled");
            if (i === 9) {
                nextQ.setAttribute("disabled","disabled");
            }
            question.innerHTML = questions[i];
            for (j = 0;j < 4;j++) {
                labels[j].innerHTML = answers[i][j];
            }
            i++;
        };
        fixQ.onclick = function (e) {
            e.preventDefault();
            if (i < 10) {
                nextQ.removeAttribute("disabled");
            } else if (i === 10) {
                end.removeAttribute("disabled");
            }
            fixQ.setAttribute("disabled","disabled");
            for (var j = 0;j < 4;j++) {
                radio[j].setAttribute("disabled","disabled");
            }
            if (i > 0) {
                for (j = 0;j < 4;j++) {
                    if (radio[j].checked === true) {
                        answer = j + 1;
                    }
                }
                table.rows[answer].cells[i].style.backgroundColor = "rgb(86, 180, 166)";
            }
        };
        end.onclick = function (e) {
            e.preventDefault();
            fixQ.setAttribute("disabled","disabled");
            end.setAttribute("disabled","disabled");
            for (var j = 0;j < 4;j++) {
                if (radio[j].checked === true && j + 1 === rightAnswers[i-1]) {
                    counter++;
                }
            }
            for (j = 0;j < 4;j++) {
                if (radio[j].checked === true) {
                    answer = j + 1;
                }
            }
            table.rows[answer].cells[i].style.backgroundColor = "rgb(86, 180, 166)";

            for (i = 1; i < table.rows.length; i++) {
                for (j = 1; j < table.rows[i].cells.length; j++) {
                    if (table.rows[i].cells[j].style.backgroundColor === "rgb(86, 180, 166)" && i === rightAnswers[j-1]) {
                        table.rows[i].cells[j].innerHTML = "✓";
                    } else if (table.rows[i].cells[j].style.backgroundColor === "rgb(86, 180, 166)" && i !== rightAnswers[j-1]) {
                        table.rows[i].cells[j].innerHTML = "✕";
                    }
                }
            }
            if (counter === 1) {
                result.innerHTML = name + ", вы ответили правильно на " + counter + " вопрос из 10";
            } else if (counter > 1 && counter < 5) {
                result.innerHTML = name + ", вы ответили правильно на " + counter + " вопроса из 10";
            } else {
                result.innerHTML = name + ", вы ответили правильно на " + counter + " вопросов из 10";
            }
            var exit = document.createElement("div");
            exit.id = "exit";
            exit.innerHTML = "Пройти тест заново";
            document.getElementById("form3").appendChild(exit);
            exit.onclick = function () {
                location.reload();
            }
        }

    };

});


