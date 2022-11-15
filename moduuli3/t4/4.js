'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

students.forEach(function(student) {
  const option = document.createElement('option');
  option.innerText = student.name;
  option.value = student.id;
  document.getElementById('target').appendChild(option);
});