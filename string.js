// const str = 'Tanvir ahmmed tonmay'
// console.log(str.toUpperCase())
// console.log(str);
// console.log(str.toLowerCase());

// const  str = 'Tanvirahmmedtonay'
// let i = 0;
// let n = 0;
// for (i = 0; i <= str.length - 1; i++){
//     if(str[i] === 'a'){
//         n = n + 1;
//     }   
// }
// console.log("Number of a is : " , n);


// const  str = 'Amar Sonar Bangla Ami tomy valo bashi ciro din tomar Akash tomar batas'
// let i = 0;
// let n = 0;
// let m = 0;
// for (i = 0; i <= str.length - 1; i++){
//     if(str[i] === 'a'){
//         n = n + 1;
//     }
//     else if (str[i] === 'A'){
//         m = m + 1;
//     }   
// }
// console.log("Number of a is : " , n);
// console.log("Number of A is : ", m);


// const str = "amar sonar bangla ami tomai valobashi cero din tomar akash tomar batas"
// let vao;
// let n = 0;
// for(let i = 1; i <= str.length; i++){
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//         console.log(str[i]);
//         n = n + 1;
//     }
// }
// console.log("Total number of vaowle is : ", n);


// const str = ['Tanvir,ahmmed,tonmay']
// const first = 'tanvir';
// const last = 'ahmmed'
// const nam = first + last;
// // console.log(nam);
// const nam1 = first + " " + last;
// // console.log(nam1);
// const nam2 = first.concat(' ',last);
// // console.log(nam2);

// console.log(first.includes('a'));


// const str = 'tanvirahmmedtonamy'
// let rev = '';
// for(let i = 0; i <= str.length - 1; i++){
//     rev = str[i] + rev;
// }
// console.log(rev);


// const names = 'tanvirahmmedtonamy'
// let rev = '';
// for(let name of names){
//     rev = name + rev;
// }
// console.log(rev);


// const sentance = 'i am a web devoloper'
// let rev = sentance.split('').reverse().join('')
// console.log(rev);


// const computer = {
//     brand : 'acer',
//     price : 3400,
//     processor : 'intel',
//     sdd : 512,
//     monitor : 'hp'
// }

// for(const key in computer){
//     console.log(key, " : ",computer[key]);
// }

// const string = 'Tanvix ahmmXed tynmaY'
// const newString = string.replace('x','X');
// console.log(newString);


// const string = "fr




// console.log(world[]);


// const myString = "freecodecamp is an awesome resource"
// const world = myString.split(" ");

// for(let i = 0; i < world.length; i++){
//     world[i] = world[i][0].toUpperCase() + world[i].substring(1); 
//     // console.log(world[i]);
// }
// console.log(world.join(" "))

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors["golden rod"]);


// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// // const passengerCapacity = 5;
// car.passengerCapacity = 5;
// console.log(car);

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks);

// let n = 0;
// let students = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// for(keys in students){
//     console.log(keys);
//     n = n + 1;
// }
// console.log('Number of keys : ', n);

// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };
// for(keys in myObject){
//     console.log(keys , ':' , myObject[keys] , '|' , 'Types' , ':' , typeof(myObject[keys]) );
    
// }


// const number = [1,2,3,4,5,6,7]
// const rev_number = [];
// for(let i = 0; i < number.length; i++){
//     rev_number.unshift(number[i]);
// }
// console.log(rev_number);


// const number = [1,2,3,4,5,6,7]
// const rev_number = [];
// for(num of number){
//     rev_number.unshift(num);
// }
// console.log(rev_number);

// const number = ['To?

// const number = [1,2,3,4,5,6,7]
// console.log(number.reverse());

// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// const rev_colors = [];
// for(let i = colors.length-1; i > 0; i--){
    
//     rev_colors.push(colors[i]);
// }
// console.log(rev_colors);

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const num = [];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//         num.push(numbers[i])
//         console.log(numbers[i]);
//     }
    
// }

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// var total_concat;
// for(num of numbers){
//     console.log(num);
// }

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let add_world = "";
// for(let num of numbers){
//     add_world = add_world + num
// }
// console.log(add_world);
// console.log(numbers.join(''));

// const statement = 'I am a hard working person'
// const divided = statement.split(" ");
// let add = '';
// for(let i = divided.length-1; i >= 0; i--){
//     add = add + " " + divided[i];
// }
// console.log(add);

