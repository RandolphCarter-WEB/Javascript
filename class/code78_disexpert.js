// let value = {
//     item1: "item1",
//     amount: {
//         apple: 10,
//         candy: 30
//     },

//     item2: "item2",
//     amount: {
//         apple: 10,
//         candy: 30
//     }
// };

// for( let { item, amount: { apple, candy } } of value) {
//     console.log(item, apple, candy);
// }

let people = [
    {
        name : "OST",
        Family : {
            mather : "mom1",
            father : "papa1",
            sister : "sis1",
            brother : "bro1"
        }
    },
    
    {
        name : "john",
        Family : {
            mather : "mom2",
            father : "papa2",
            brother : "bro2"
        }
    }
];

for(let {name, Family: {mather, father, sister, brother}} of people) {
    console.log(`name : ${name}, brother : ${brother? brother : undefined}, sister : ${sister? sister : undefined}`);
}

const obj1 = {
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    extra : {
        five : 5,
        six: 6
    }
}

funcA = ({one, two, three, four, extra : {five, six}}) => {
    console.log(one+two+three+four+five+six);
}

funcA(obj1);


const obj2 = {
    title : "my-name",
    items : [
        "item1", "item2", "item3", "item4"
    ]
};

funcB = ({ title, items: [item1, item2, ...restitems ] }) => {
    console.log("title name >> "+ title);
    console.log("items >> " + item1, item2, ...restitems);
}

funcB(obj2)