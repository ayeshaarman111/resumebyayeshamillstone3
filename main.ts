// main.ts

window.addEventListener('DOMContentLoaded', (event) => {
    const skills = document.querySelectorAll('.skills li');

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`You clicked on ${skill.textContent} skill!`);
        });
    });

    console.log("Resume page loaded and TypeScript active.");
});