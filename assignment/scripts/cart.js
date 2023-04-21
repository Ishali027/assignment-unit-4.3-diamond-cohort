console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// - Create a global variable named `basket` and set it to an empty array.
let basket = [];

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
function addItem(item){
    basket.push(item);
    return true;
}
// Call and test
console.log(`basket is: ${basket}`);
console.log('Adding penny (expect true)', addItem('penny'));
console.log('Adding nickels (expect true)', addItem('nickel'));
console.log('Adding dime (expect true)', addItem('dime'));
console.log('Adding quarter (expect true)', addItem('quarter'));



console.log(`basket array: ${basket}`);

// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(){
    for(let i=0; i<basket.length; i++){
    console.log('in for loop:', basket[i]);
    }
  }
  // Call and test
  (listItems());
  

//   - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
function empty(){
    basket.length = 0;
    console.log('The basket is now empty', basket);
}
// Call and test
empty();




