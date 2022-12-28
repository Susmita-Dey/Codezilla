document.querySelector("#mainNav .openBtn").addEventListener("click", () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mainNav").style.marginLeft = "250px";
});

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
document.querySelector("#mySidebar .closeBtn").addEventListener("click", () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mainNav").style.marginLeft = "0";
});

// Toggle mode
document
  .querySelector("#lightDarkButton")
  .addEventListener("click", function toggleMode() {
    var element = document.body;
    var eleApp = document.getElementById("#app");
    element.classList.toggle("light-mode");
  });
