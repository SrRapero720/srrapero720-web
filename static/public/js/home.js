window.onload = () => {
    const maybe = Math.random() * 100;
    const view = document.getElementById("welcome-title");
    if (maybe > 70) view.innerHTML = "El profesionalismo no es sinonimo de un buen trabajo";
}