function checkboxListener(){
    let checkboxes = document.querySelectorAll(".checkbox");
    checkboxes[0].checked=true;
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("click", event => {
            if (!checkbox.checked) event.preventDefault();
            checkboxes.forEach(another => {
                if (another !== checkbox)
                    another.checked = false
            });
        })
    })
}

window.addEventListener("DOMContentLoaded", () => {
    checkboxListener();
})
