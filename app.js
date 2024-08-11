const block1 = document.getElementById('block1')
const block2 = document.getElementById('block2')
const block3 = document.getElementById('block3')
const block4 = document.getElementById('block4')
const block5 = document.getElementById('block5')
const name = document.getElementById('name')
const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    submitSchedule()
})
var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});
console.log('run')
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

function submitSchedule() {
    //GET ALL database entries that match block 1, 2, 3, 4, 5
    //display 
    //links to other schedules
    //display own schedule in table
}