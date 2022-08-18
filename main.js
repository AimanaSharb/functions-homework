// Task 1
// Напишите функцию, которая принимает любое значение и возвращает шаблон ${val} typeof ${тип переменной val}. Для того, чтобы получить тип переменной - используйте конструкцию typeof val
//
// Input: 1
// Output: '1 typeof number'
// Input: true
// Output: 'true typeof boolean'

// const typeOfVal = (val) =>{
//     return val + ' typeof '+ typeof val
// }
//
// console.log(typeOfVal(1))
// console.log(typeOfVal(true))

// ------------------------------------------------
//
//     Task 2
// Напишите функцию, которая принимает строку-число, а возвращает квадрат этого числа.
//     Пример кода:
//     Input : '3'
// Output :9
// Input:'5'
// Output: 25
// const squareOfNum = (strnum)=>{
//     return Number(strnum*strnum)
// }
//
// console.log(squareOfNum('3'))
// console.log(squareOfNum('5'))

// ------------------------------------------------
//
//     Task 3
// Напишите функцию, которая принимает в себя три строки, поочередно берет по символу с каждой строки и возвращает одну строку.
//     Смотрите пример ниже!
//     Пример кода:
//
//     Input: 'this','test','lock'
// Output: 'ttlheoiscstk'
// Input: 'aa','bb','cc'
// Output :'abcabc'
// Input:'Bm', 'aa', 'tn'
// Output: 'Batman'


const firstLettersOfStr = (firstStr, secondStr, thirdStr)=>{
    for (let i =0; i< 12; i++){
        return firstStr[i] + secondStr [i] + thirdStr[i]
    }
}

console.log(firstLettersOfStr('aaa', 'bbb', 'ccc'))

console.log(firstLettersOfStr('this', 'test', 'lock'));
console.log(firstLettersOfStr('Bm', 'aa', 'tn'))

// ------------------------------------------------
//     Task 4
// Напишите функцию, которая принимает в качестве параметра строку, содержащую имя и фамилию человека, а возвращает инициалы, разделенные точкой.
//
//     Input: 'Сергей Семёнов'
// Output:  'С.С'
//
// Input: 'Анастасия Черданцева'
// Output:'А.Ч'
//
// Input: 'Горинов Максим'
// Output:'Г.М'
//
// ------------------------------------------------
//
//     Task 5
// Напишите функцию, которая принимает в себя три параметра: name, city, region. Name - массив, с именем, именем фамилией или ФИО человека. City - город, region - область, куда отправился путешественник. Функция должна возвращать строку-приветствие путешественника. Смотрите пример ниже:
//
//
//     Input: ['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл'
// Output:Привет, Дмитрий Серебров! Добро пожаловать в Ишим, Тюменская обл!
//
//     Input: ['Анастасия'], 'Миасс', 'Челябинская обл'
// Output:Привет, Анастасия! Добро пожаловать в Миасс, Челябинская обл!
//
//     Input: ['Горинов', 'Максим', 'Владимирович'], 'Чернушка', 'Свердловская обл'
// Output:Привет, Горинов Максим Владимирович! Добро пожаловать в Чернушка, Свердловская обл!
//
//     ------------------------------------------------
//
//         Task 6
// Напишите функцию, которая принимает число и возвращает Negative если число меньше нуля, Positive если больше нуля, Zero если равно нулю
//
// Input: 1
// Output: 'Positive'
// Input: -1
// Output: 'Negative'
// Input: 0
// Output: 'Zero'
//
// ------------------------------------------------
//
//     Task 7
//
// Напишите функцию, которая принимает строку и из строчных букв делает прописные, а прописные - строчными.
//
//     Input: 'hello world'
// Output: 'HELLO WORLD'
// Input: 'HELLO WORLD'
// Output: 'hello world'
// Input:'hello WORLD'
// Output: 'HELLO world'
// Input:'HeLLo WoRLD'
// Output: 'hEllO wOrld'
//
// ------------------------------------------------
//
//     Task 8
// Напишите функцию, которая принимает объект с полем id например {id:0} и возвращает значение этого айди - 0
//
// Input: {id: 10}
// Output: 10
// Input: {id: true}
// Output: true
//
// ------------------------------------------------
//
//     Task 9
// Напишите функцию, которая принимает объект с полем name и возвращает 0 если длина этого поля четная и 1 если нечетная
// Input: {name: 'xxxx'}
// Output: 0
//
// Input: {name: 'alpha'}
// Output: 1
//
// ------------------------------------------------
//
//     Task 10
// Напишите функцию, которая принимает два числа. Если первое число больше - возвращает 1, Если меньше -1, если равны, то ноль
// Input: 5,2
// Output: 1
//
// Input: 1,2
// Output: -1
//
// Input: 2,2
// Output: 0
//
// ------------------------------------------------
//
//     Task 11
// Напишите функцию MasterYoda, которая будет возвращать
// 'Master' если передаваемый параметр кратен 3,
//     'Yoda', если передаваемый параметр кратен 5,
// 'MasterYoda' - если параметер кратен 3 и 5.
// Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
//
// Input: 9
// Output: Master
//
// Input: 10
// Output: Yoda
//
// Input: 15
// Output: MasterYoda