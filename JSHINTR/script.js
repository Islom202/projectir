'use sctrict'

console.log('string' * 9 ); // Answer: NaN - не число


const persone = 'Alex';

const bool  = true;






let number  = 5; //  1- спобоб переменного

const rightBright = 10; //  2- спобоб переменного

 lol = 10;
console.log( lol);



{
    var result  = 100;
}

console.log(result);


  

const obj = {         //object, name,age,isMarries - keys, а  свойство это то что укащано 
 name: "John",
 age: 25,
 isMarried: false
};

console.log(obj.name); // Мы тут использовали свойство obj и указали именно какое свойство 

// 2 способ  console.log(obj["name"]);


//Massive


let arr  = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[2]);

    

// Обшение с пользователем

// alert('Hi'); - выходит диалоговое окно


// const test = confirm("Are you here");    //  Тут мы спрагиваем и выходит модальное окно с "Отмена" и "Ок"

// console.log(test);



// const answer  = prompt("Are you 19?", "");
// console.log(typeof(answer));                                        // Окно с текстовым пространсвом



const answers = [];

answers[0] = prompt('What is your name', '');
answers[1] = prompt('What is your last', '');
answers[2] = prompt('What is your first', '');

document.write(answers);




// Операторы

console.log('arr' + "- object"); // Ответ: arr - object
console.log(5 + "- object"); // Ответ: 5 - object




let incr = 10, 
    decr  = 10;

    incr++;
    decr--;

    console.log(incr);
    console.log(decr);

// Остаток

console.log(10%2); // Выведит остаток