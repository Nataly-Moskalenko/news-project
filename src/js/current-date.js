import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import { filterByDateMostViwed } from './fetchData/filters';

const datePicker = document.querySelector('#date-picker');
const dateInput = document.querySelector('.date-input');

const dateUp = document.querySelector('.date-up');
const dateDown = document.querySelector('.date-down');
const calendarSvg = document.querySelector('.date-down');

let selectedDate;

const options = {
  //allowInput: true,
  dateFormat: 'd/m/Y',
  locale: 'en',
  onChange: function (selectedDates) {
    selectedDate = selectedDates[0];

    datePicker.style.backgroundColor = '#4440F6';
    datePicker.style.color = '#F8F8F8';
    datePicker.style.border = '#4440F6';
    dateDown.style.display = 'block';
    dateUp.style.display = 'none';
  },
};
flatpickr(datePicker, options);

dateInput.addEventListener('click', changeSvg);

function changeSvg(e) {
  dateInput.style.color = '#F8F8F8';
  dateDown.style.display = 'none';
  dateUp.style.display = 'block';
}
function clearFlatpickr() {
  datePicker.clear();
}
