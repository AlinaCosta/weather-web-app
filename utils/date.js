function getDayOfTheWeek(utc) {
  const date = new Date(utc * 1000);

  const dayIndex = date.getDay();
  let day;

  switch (dayIndex) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    default:
      throw new Error('The index has to be between 0 and 6.');
  }
  return day;
}

function getMonth(utc) {
  const date = new Date(utc * 1000);

  const monthIndex = date.getMonth();
  let month;

  switch (monthIndex) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
    default:
      throw new Error('The index has to be between 0 and 11.');
  }
  return month;
}

function getHour(utc) {
  const date = new Date(utc * 1000);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  let ampm = hours >= 12 ? 'PM' : 'AM';

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return hours + ':' + minutes + ' ' + ampm;
}
