// hw 27-05

// classes
// Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). 
//Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с
//наибольшим количеством страниц
let bookArr=[];
class Book {
    constructor(author,bookName,pageAmount)
    {this.author=author;
        this.bookName=bookName;
        this.pageAmount=pageAmount;
       console.log (this);
       bookArr.push(this);} 
}
const book1=new Book(`Н.Носов`,`Neznaika na Lune `,65);
const book2=new Book(`М.Носов`,`Neznaika na Solnze`,25);
const book3=new Book(`О.Носов`,`Neznaika na Yupitere`,32);
const book4=new Book(`П.Носов`,`Neznaika na Venere`,33);
const book5=new Book(`Р.Носов`,`Neznaika na Marse`,19);
const book6=new Book(`С.Носов`,`Neznaika na Plutone`,35);
const book7=new Book(`Т.Носов`,`Neznaika na Saturne`,36);
const book8=new Book(`У.Носов`,`Neznaika na Zemle`,37);
console.log(bookArr); 
getBiggerBook (bookArr);
function getBiggerBook ()
 {let book=book1;
    for (let i=0; i < 8; i++) { 
            if (bookArr[i].pageAmount>book.pageAmount)
                {
                 book=bookArr[i];} 
     }
    console.log(book); }
//2. Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]),
// и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», 
//    «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer,
//     чтобы они выводили соо(бщение вида «Hello my name is Oleg»


class Programmer {
     constructor (name, stack) 
     {
       this.name = name;
       this.stack = stack; }
 code () {
 for (let i=0; i < this.stack.length; i++ )
      
    { console.log(`${this.name} is coding on ${this.stack[i]}`);
        
}
 }

toString() { console.log(`Hello, my name is ${this.name}`);

}
}
const p1 = new Programmer('Oleg', [`Python`, `PHP`, `Java`] );
console.log (p1);
p1.code();
p1.code=p1.toString;
p1.code();

//toString => console.log(`Hello, my name is ${this.firstName}`);
