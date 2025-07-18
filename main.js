document
  .getElementById("gradeform")
  .addEventListener("submit", function (result) {
    result.preventDefault(); // បញ្ឈប់ការ reload page

    const name = document.getElementById("name").value.trim();
    const score = parseInt(document.getElementById("score").value.trim());
    const showgrade = document.getElementById("showgrade");
    const clearbtn = document.getElementById("clearbtn"); // ប៊ូតុង Clear All

    let grade = "";
    let message = "";

    if (score >= 90) {
      grade = "A";
      message = "You passed 🎉 the test";
    } else if (score >= 80) {
      grade = "B";
      message = "You passed 🎉 the test";
    } else if (score >= 70) {
      grade = "C";
      message = "You passed 🎉 the test";
    } else if (score >= 60) {
      grade = "D";
      message = "You passed 🎉 the test";
    } else if (score >= 50) {
      grade = "E";
      message = "You passed 🎉 the test";
    } 
      if (score < 0 || score > 100 || isNaN(score)) {
        showgrade.innerHTML = "❌ Please enter a score between 0 and 100.";
        clearbtn.style.display = "block";
        return;
      } else {
        grade = "F";
        message = "You failed 😢 the test, pls try again";
      }

    showgrade.innerHTML = `Hello ${name}, your grade is <strong>${grade}</strong>. ${message}`;

    // បង្ហាញប៊ូតុង Clear All
    clearbtn.style.display = "block";
  });

// ✅ Function Clear All
document.getElementById("clearbtn").addEventListener("click", function () {
  document.getElementById("name").value = "";
  document.getElementById("score").value = "";
  document.getElementById("showgrade").innerHTML = "";
  this.style.display = "none"; // លាក់ប៊ូតុង Clear All វិញ
});
