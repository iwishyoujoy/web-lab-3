window.addEventListener("DOMContentLoaded", () => {
    changeButtonLabel("october-22");
})

let months = ["october-22", "august-22", "july-22", "june-22", "may-22", "april-22"];

function swipeRight(){
    let labelNumber = getButtonLabelNumber();
    if (labelNumber+1 >= months.length){
        console.log("дальше нет месяцев. конец");
        return;
    }
    changeButtonLabel(months[labelNumber+1]);
    let elements = document.querySelectorAll(".tab");
    elements.forEach(element => {
        if (element.classList.contains(months[labelNumber+1])) element.classList.add("show");
        else element.classList.remove("show");
    });
}

function swipeLeft(){
    let labelNumber = getButtonLabelNumber();
    if (labelNumber-1 < 0){
        console.log("ты пытаешься сделать меньше нуля");
        return;
    }
    changeButtonLabel(months[labelNumber-1]);
    let elements = document.querySelectorAll(".tab");
    elements.forEach(element => {
        if (element.classList.contains(months[labelNumber-1])) element.classList.add("show");
        else element.classList.remove("show");
    });
}

function changeButtonLabel(c){
    let label = document.querySelector(".button-label");
    label.innerHTML = '';
    switch (c){
        case 'october-22':
            label.innerHTML += 'октябрь 2022';
            break;
        case 'august-22':
            label.innerHTML += 'август 2022';
            break;
        case 'july-22':
            label.innerHTML += 'июль 2022';
            break;
        case 'june-22':
            label.innerHTML += 'июнь 2022';
            break;
        case 'may-22':
            label.innerHTML += 'май 2022';
            break;
        case 'april-22':
            label.innerHTML += 'апрель 2022';
            break;
    }
}

function getButtonLabelNumber(){
    let label = document.querySelector(".button-label").innerHTML;
    switch (label){
        case 'октябрь 2022':
            return 0;
        case 'август 2022':
            return 1;
        case 'июль 2022':
            return 2;
        case 'июнь 2022':
            return 3;
        case 'май 2022':
            return 4;
        case 'апрель 2022':
            return 5;
    }
}



