// function checkReg(string){
//     let reg = /\w/g
//    return reg.test(string)
// }
// console.log(checkReg("jhfgbhnjnn"))

// function myRegExp(string){
//     let regExp = /^[0-9]$/g

//         return regExp.test(string)

// }
// console.log(myRegExp("[0-9]"))

function dayOfYear(data) {
  let date = new Date(data);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  for (let i = 1; i < month; i++) {
    let daysOfMonth = 31;
    if (i === 4 || i === 6 || i === 9 || i === 11) {
      daysOfMonth = 30;
    }
    if (i === 2) {
      daysOfMonth = year % 4 ? 28 : 29;
    }
    day += daysOfMonth;
  }

  return day;
}
console.log(dayOfYear("12/31/2000"));
