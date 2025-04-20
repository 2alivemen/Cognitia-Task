document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for registering!");
  });
});
