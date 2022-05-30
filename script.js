// let name = prompt('name')
// name = name.toLowerCase().trim()

// if (name[0] === 'a') {
//    let age = prompt('age')
//    age = age.trim()
//    if (age >= 20 && age <= 40) {
//       let money = prompt('money')
//       money = money.trim()
//       if (money >= 100) {
//          console.log('welcome');
//       } else {
//          console.log('go to home');
//       }
//    } else {
//       console.log('go to home');
//    }
// } else {
//    console.log('go to home');
// }






let nam = prompt('как вас зовут?')
nam = nam.toLowerCase().trim()


if (nam === 'alex') {

   let account = prompt('Номер счета?')
   account = account.trim()

   if (account === '7777') {


      let sum = prompt('Сколько обналичть?')
      sum = sum.trim()
      let wallet = 10000
      let remainder
      remainder = wallet - sum


      if (sum <= wallet) {
         console.log('Все отлично');
         alert(`${remainder} осталось` + ' ' + `${sum} снял`)
      } else {
         alert('Недостаточна средств');
      }

   } else {
      alert('Пользовател не найден, досвидули');
   }

} else {
   alert('Пользовател не найден, досвидули');
}








