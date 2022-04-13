function getAddress(address) {
    const at = '@';
    return '%c' + address + at + 'solidas.ru'
}

const consoleStylesMain = 'color: #23211F; font-size: larger;';
const consoleStylesEmail = 'font-style: italic; font-size: larger;';

function simpleMessage(address) {
    if (Math.random() < 0.5) {
        console.log(
            '%c' +
            'Нравится web разработка? \nПрисылай своё резюме на ' + getAddress(address), consoleStylesMain, consoleStylesEmail);
    } else {
        console.log(
            '%c' +
            'Нашел ошибку или знаешь, как сделать лучше? \nПрисылай описание вместе со своим резюме на ' +
            getAddress(address), consoleStylesMain, consoleStylesEmail);
    }
}

function quiz(address) {
    const questions = [
        'Что выведет консоль браузера и почему при выполнении такого кода: console.log(1 + - + - + - 1); ?',
        'Как почситать, сколько нолей находится в конце десятичной записи числа 111! ?',
        'Мы заметили, что вероятность появления ошибки в коде программиста, работающего один час равна 35%. ' +
            'Какова вероятность появления ошибки в коде программиста, работающего 15 минут?',
        'Интересно, какое время проходит между теми ближайшими моментами, ' +
            'когда часовая и минутная стрелки кремлевских курантов полностью накладываются друг на друга?',
        'Какое число будет выведено последним:\n' +
            'unsigned int j;\n' +
            'for (j = 5; j >= 0; --j)\n' +
            'printf("%u\\n", j);'

    ];
    const questionNumber = Math.floor(Math.random()*questions.length);
    const intro = 'Обычно здесь отображаются ошибки, но у нас будет викторина. \nВопрос: ';
    const question = questions[questionNumber];
    const request = 'Присылай варианты ответа вместе с резюме на';

    console.log(
        '%c' +
        intro +
        question + '\n' +
        request + getAddress(address)
        , consoleStylesMain, consoleStylesEmail
    );
}

export default function quizToConsole() {
    if (Math.random() < 0.5) {
        quiz(' hr');
    } else {
        simpleMessage('hr');
    }
}
