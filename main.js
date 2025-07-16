document.getElementById("gradeform").addEventListener("submit", function (result) {
    // .addEventListener ស្ដាប់បញ្ជា "submit" នៅលើ element gradeform
    // function​ ដោះស្រាយពេល "submit" 
    result.preventDefault();
    // result.preventDefault() បញ្ឈប់ការ reload page
  const name = document.getElementById("name").value.trim();
  const score = parseInt(document.getElementById("score").value.trim());
  const showgrade = document.getElementById("showgrade");
  let grade = "";
  let message = "";
  if (score >= 90 && score <= 100) {
    grade = "A";
    message = "You passed  🎉 the test";
  } else if (score >= 80 && score < 90) {
    grade = "B";
    message = "You passed  🎉 the test";
  } else if (score >= 70 && score < 80) {
    grade = "C";
    message = "You passed  🎉 the test";
  } else if (score >= 60 && score < 70) {
    grade = "D";
    message = "You passed  🎉 the test";
  } else if (score >= 50 && score < 60) {
    grade = "E";
    message = "You passed  🎉 the test";
  } else {
    grade = "F";
    message = "You failed  😢 the test, pls try again";
  }
  showgrade.innerHTML = `Hello ${name}, your grade is <strong>${grade}</strong>. ${message}`;
});