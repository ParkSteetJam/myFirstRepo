let menu = [{
    prodName: 'coke',
    prodPrice: 5
},
{
    prodName: 'pizza',
    prodPrice: 3
},
{
    prodName: 'fries',
    prodPrice: 2
},
{
    prodName: 'gum',
    prodPrice: 1
}
]

// console.log(menu[0].prodName);

let custChoice = ['coke', 'pizza'];

console.log('Customer is buying: ' + custChoice);

let cart = [];

// console.log(cart);

for (let key in custChoice){
    //console.log(key);
    for (let i = 0; i < menu.length; i++) {
        if (custChoice[key]==menu[i].prodName){
            //console.log(menu[i].prodPrice);
            cart.push(menu[i].prodPrice);
    } 
    
    } 
}

// console.log(cart);

let sum = 0;

for (let i=0; i< cart.length; i++) {
    sum += cart[i];
}

console.log("Final price the customer needs to pay is: $ " + sum);