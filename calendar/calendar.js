function createEvent(title, month, day){
  if (day > 31 || day < 1) {
    return `Error: ${day} is not a valid day`;
  }
  // Could add additional checks for months with 30 days
  // And a check for February
  var event = {
    title: title,
    month: month,
    day: day
  };
  return event;
};

function createCalendar(owner, events){
  var calendar = {
    owner: owner,
    events: events
  }
  return calendar;
};

function reportMonthlyEvents(calendar, month){
  var monthlyEvents = [];
  calendar.events.forEach(function(event) {
    if (event.month == month) {
      monthlyEvents.push(event);
    };
  });
  return monthlyEvents;
};

module.exports = { 
  createEvent,
  createCalendar,
  reportMonthlyEvents
 };