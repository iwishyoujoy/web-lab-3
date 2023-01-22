window.addEventListener("DOMContentLoaded", () => {
    changeButtonLabel("october-22");
})

let monthsFor2022 = ["october-22", "august-22", "july-22", "june-22", "may-22", "april-22"];
let monthsFor2021 = ["july-21", "october-21"];
let flag = 2022;

function showYear(year){
    let elements = document.querySelectorAll(".tab");
    elements.forEach(element => {
        if (year === 2022){
            changeButtonLabel("october-22");
            if (element.classList.contains("october-22")) element.classList.add("show");
            else element.classList.remove("show");
            flag = 2022;
        }
        if (year === 2021){
            changeButtonLabel("july-21");
            if (element.classList.contains("july-21")) element.classList.add("show");
            else element.classList.remove("show");
            flag = 2021;
        }
    });
}

function swipeRight(){
    if (flag === 2022){
        let labelNumber = getButtonLabelNumber2022();
        if (labelNumber+1 >= monthsFor2022.length){
            return;
        }
        changeButtonLabel(monthsFor2022[labelNumber+1]);
        let elements = document.querySelectorAll(".tab");
        elements.forEach(element => {
            if (element.classList.contains(monthsFor2022[labelNumber+1])) element.classList.add("show");
            else element.classList.remove("show");
        });
    }
    if (flag === 2021){
        let labelNumber = getButtonLabelNumber2021();
        if (labelNumber+1 >= monthsFor2021.length){
            return;
        }
        changeButtonLabel(monthsFor2021[labelNumber+1]);
        let elements = document.querySelectorAll(".tab");
        elements.forEach(element => {
            if (element.classList.contains(monthsFor2021[labelNumber+1])) element.classList.add("show");
            else element.classList.remove("show");
        });
    }

}

function swipeLeft(){
    if (flag === 2022){
        let labelNumber = getButtonLabelNumber2022();
        if (labelNumber-1 < 0){
            return;
        }
        changeButtonLabel(monthsFor2022[labelNumber-1]);
        let elements = document.querySelectorAll(".tab");
        elements.forEach(element => {
            if (element.classList.contains(monthsFor2022[labelNumber-1])) element.classList.add("show");
            else element.classList.remove("show");
        });
    }
    if (flag === 2021){
        let labelNumber = getButtonLabelNumber2021();
        if (labelNumber-1 < 0){
            return;
        }
        changeButtonLabel(monthsFor2021[labelNumber-1]);
        let elements = document.querySelectorAll(".tab");
        elements.forEach(element => {
            if (element.classList.contains(monthsFor2021[labelNumber-1])) element.classList.add("show");
            else element.classList.remove("show");
        });
    }
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
        case 'july-21':
            label.innerHTML += 'июль 2021';
            break;
        case 'october-21':
            label.innerHTML += 'октябрь 2021';
            break;
    }
}

function getButtonLabelNumber2022(){
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

function getButtonLabelNumber2021(){
    let label = document.querySelector(".button-label").innerHTML;
    switch (label){
        case 'июль 2021':
            return 0;
        case 'октябрь 2021':
            return 1;
    }
}



