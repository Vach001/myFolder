// function reverseString(s){

//  try {
//     const a = s.split("").reverse().join("")
//     if (typeof s === "string") {
//         return a;
//     }

//  } catch (err) {
//     throw new TypeError(`Your parameter not is string ${s}`);
//  }

// }

// console.log(reverseString("456"))

// let num = -5;

// function isPositive(num) {
//   if (num > 0) {
//     return "Yes";
//   }

//   if ((num === 0)) {
//     throw new Error("Zero Error!!!");
//   }

//   if (num < 0) {
//     throw new Error("Negative Error!!!");
//   }
// }

// console.log(isPositive(num));

// function mapArray(arr) {
//   try {
//     return arr.map((item) => item * 2);
//   } catch (error) {
//     return error.message;
//   }
// }
// console.log(mapArray(true));
// function sum(num){
//     let a = 8
//     let c = a + num
//     try {        
//         if( c > 10){
//             throw new SyntaxError("aaaa")
//         }
//         } catch(SyntaxError){
//             console.log(SyntaxError.message)
//             return 789
//         } finally {
//             return 5
//         }
      
//     }
//  console.log(sum(10))



//  let studentLabs = [
//     {
//     student: "Blake",    
//     myCode: function (num) {
//     return Math.pow(num, num);
//     },
//     },

//     {
//     student: "Jessica",
//     runLab: function (num) {
//     return Math.pow(num, num);
//     },
//     },

//     {
//     student: "Mya",
//     runLab: function (num) {
//     return num * num;
//     },
//     },
//     ];
//     function gradeLabs(array){
//         let conclusion = "lab is working"
//       for(let i = 0; i < array.length; i++){
//         let student = array[i]
//         try{
//             if(!student.runLab){
//                 throw new TypeError("Error Thrown")
//             } else {
//                 if(student.runLab(8) === 64){
//                     console.log(conclusion)
//                 } else {
//                     throw new TypeError("lab.runLab is not a function.")
//                 }


//             }
//         } catch(error){
//             console.log (error.message)
//         }

//       }
        
//     }
//    gradeLabs(studentLabs)