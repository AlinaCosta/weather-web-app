// Conține funcții ajutătoare, ce sunt utilizate în multiple locuri din aplicație
// conține funcții ce prelucrează date calendaristice

function getDayOfTheWeek(utc) {
  // Pentru a crea o data, pornind la o valoare unix utc, este nevoie sa o inmultim cu 1000 mai intai.
  const date = new Date(utc * 1000);

  const dayIndex = date.getDay();
  let day;

  switch (dayIndex) {
    case 0:
      day = 'Duminica';
      break;
    case 1:
      day = 'Luni';
      break;
    case 2:
      day = 'Marti';
      break;
    case 3:
      day = 'Miercuri';
      break;
    case 4:
      day = 'Joi';
      break;
    case 5:
      day = 'Vineri';
      break;
    case 6:
      day = 'Sambata';
      break;
    default:
      throw new Error('Indexul trebuie sa fie intre 0 si 6.');
  }
  return day;
}

function getMonth(utc) {
  const date = new Date(utc * 1000);

  const monthIndex = date.getMonth();
  let month;

  switch (monthIndex) {
    case 0:
      month = 'Ianuarie';
      break;
    case 1:
      month = 'Februarie';
      break;
    case 2:
      month = 'Martie';
      break;
    case 3:
      month = 'Aprilie';
      break;
    case 4:
      month = 'Mai';
      break;
    case 5:
      month = 'Iunie';
      break;
    case 6:
      month = 'Iulie';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'Septembrie';
      break;
    case 9:
      month = 'Octombrie';
      break;
    case 10:
      month = 'Noiembrie';
      break;
    case 11:
      month = 'Decembrie';
      break;
    default:
      throw new Error('Indexul trebuie sa fie intre 0 si 11.');
  }
  return month;
}

function getHour(utc) {
  const date = new Date(utc * 1000);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return hours + ':' + minutes;
}
