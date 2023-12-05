 const numbs = [1,2,3,4,5,6,7,8,9,0]

// const newnumbs=  numbs.filter( (num) => { return num>5})
// console.log(newnumbs);

const newnumbs= []

// numbs.forEach( (num) => {
//    if(num>4){
//     newnumbs.push(num)
//    }
// })
// console.log(newnumbs);

// excercise

let books =[
    {title:'book1',genre:"history",date:'1234',edition:'2004'},
    {title:'book2',genre:"history",date:'2345',edition:'2012'},
    {title:'book3',genre:"sci",date:'7854',edition:'2023'},
    {title:'book4',genre:"non-sci",date:'2389',edition:'2011'},
    {title:'book5',genre:"history",date:'7821',edition:'2005'},
    {title:'book6',genre:"sci",date:'7409',edition:'2010'},
    {title:'book7', genre:"non-sci",date:'0012',edition:'2003'},
];

// const userbook = books.filter( (bk) => bk.genre === 'sci')
//   userbook = books.filter( (bk)=>{return bk.edition >2004})
  userbook = books.filter( (bk)=>{return bk.edition >2004 && bk.genre === 'non-sci'})
console.log(userbook);