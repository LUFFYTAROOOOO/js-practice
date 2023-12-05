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
//   userbook = books.filter( (bk)=>{return bk.edition >2004 && bk.genre === 'non-sci'})
// console.log(userbook);


let student = [
    {name:'ayush',email:'abc.com',phone:1245,dob:2005/2/21},
    {name:'rahul',email:'xyz.com',phone:1247,dob:34-2-23},
    {name:'shruti',email:'pqr.com',phone:7844,dob:31-23-21},
    {name:'devendra',email:'lmn.com',phone:4567,dob:1-11-21},
    {name:'sahil',email:'rst.com',phone:8493,dob:2-2-23},
    {name:'paras',email:'uvw.com',phone:2237,dob:2-2-52},
    {name:'raj',email:'efg.com',phone:4557,dob:12-2-43},
];

// let userinfo = student.filter((info) => {return info.phone === 1247})
// console.log(userinfo);