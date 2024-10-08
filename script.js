// JavaScript: Fade in when scrolling
window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".fade-in");

    elements.forEach(element => {
        let position = element.getBoundingClientRect();
        // If the element is in the viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    });
});

function facialRecog() {
    window.location.href = "https://lillyjade219.github.io/FAce-analyser-1/";
}
