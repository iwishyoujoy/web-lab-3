window.addEventListener("DOMContentLoaded", () => {
    let clock = document.getElementById("clock");
    let setTime = () => {
        let date = new Date();
        clock.innerHTML = date.toLocaleDateString("ru-RU",
            {
                year: "numeric", month: "numeric", day: "numeric",
                hour: "2-digit", minute: "2-digit", second: "2-digit"
            }).replace(",", "").replaceAll(".", "/");
    };
    setTime();
    setInterval(setTime, 13000)
})