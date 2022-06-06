// Variables

const stName = document.querySelector('.name');
const life = document.querySelector('.life');
const quote = document.querySelector('.quote');
const dateString = document.querySelector('.date--string');
const imageBox = document.querySelector('.picture');

const dayInput = document.querySelector('.day__input');
const monthInput = document.querySelector('.month__input');

const searchButton = document.querySelector('.button__search');
const searchRandom = document.querySelector('.button__random');
const searchToday = document.querySelector('.button__today');

const months = [
  'siječanj',
  'veljača',
  'ožujak',
  'travanj',
  'svibanj',
  'lipanj',
  'srpanj',
  'kolovoz',
  'rujan',
  'listopad',
  'studeni',
  'prosinac',
];

// Functions //////////////////////////////////////////////////////////////////

// Date to ID number
const findingDateId = function (date) {
  const month = date.getMonth();
  let day = String(date.getDate());
  day = day.padStart(2, '0');
  const correctId = Number(`${month}.${day}`);
  const [saint] = sveci[months[month]].filter(function (obj) {
    return obj.id === correctId + 1;
  });
  return saint;
};

// Filling text on Page
const fillUpTheText = function (obj) {
  stName.innerHTML = `<h1 class="name_class">${obj.ime}</h1>`;
  life.innerHTML = `<p>${obj.tekst}</p>`;
  quote.innerHTML = `<p>${obj.citat}</p>`;
  dateString.innerHTML = `<p class="date_class">${obj.datum}</p>`;
};

const searchSaint = function () {
  const dayVal = dayInput.value.padStart(2, '0');
  const monthVal = Number(monthInput.value);
  const correctId = Number(`${monthVal}.${dayVal}`);
  console.log(dayVal, monthVal, correctId);
  const [saint] = sveci[months[monthVal - 1]].filter(function (obj) {
    return obj.id === correctId;
  });
  fillUpTheText(saint);
};

const randomSaint = function () {
  const month = Math.floor(Math.random() * 12);
  const day = String(
    Math.floor(Math.random() * sveci[months[month]].length) + 1
  ).padStart(2, '0');
  console.log(Number(`${month}.${day}`));
  const [saint] = sveci[months[month]].filter(
    obj => obj.id === Number(`${month + 1}.${day}`)
  );
  console.log(saint);
  fillUpTheText(saint);
};

// CODE EXECUTION ///////////////////////////////////////////////////////////////////////

const saintOfDay = findingDateId(new Date());
console.log(new Date().getDate());
fillUpTheText(saintOfDay);
searchButton.addEventListener('click', function () {
  searchSaint();
});
searchRandom.addEventListener('click', function () {
  randomSaint();
});
searchToday.addEventListener('click', function () {
  fillUpTheText(saintOfDay);
});
