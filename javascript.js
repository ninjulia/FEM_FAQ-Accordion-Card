//core functionality lifted from https://www.w3schools.com/howto/howto_js_accordion.asp

const question = document.querySelectorAll("h2");

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        this.classList.toggle("open");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}