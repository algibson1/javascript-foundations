function createBirthday(name, month, day){
  var birthday = {
    name: name,
    month: month,
    day: day
  }
  return birthday;
}

function celebrateBirthday(birthday){
  return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`;
}

function countBirthdays(birthdays, month) {
  birthdaysThisMonth = 0
  birthdays.forEach(function(birthday) {
    if (birthday.month === month) {
      birthdaysThisMonth +=1;
    };
  });
  return birthdaysThisMonth;
}

module.exports = { 
  createBirthday,
  celebrateBirthday,
  countBirthdays
 };