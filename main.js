// main.ts
window.addEventListener('DOMContentLoaded', function (event) {
    var skills = document.querySelectorAll('.skills li');
    skills.forEach(function (skill) {
        skill.addEventListener('click', function () {
            alert("You clicked on ".concat(skill.textContent, " skill!"));
        });
    });
    console.log("Resume page loaded and TypeScript active.");
});
