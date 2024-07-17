const slideValue = document.querySelector(".sliderValue-span.p1");
const inputSlider = document.querySelector(".field-input.p1");

const BtnMinVal = document.querySelector(".value-left.p1");
const BtnMaxVal = document.querySelector(".value-right.p1");



function mapValues(start, end, numValues) {
    const step = (end - start) / (numValues - 1);
    const values = [];

    for (let i = 0; i < numValues; i++) {
        values.push(start + i * step);
    }

    return values;
}

inputSlider.oninput = (() => {
    let startValue = 60;
    let endValue = 300;
    let numberOfValues = 25;
    let mappedValues = mapValues(startValue, endValue, numberOfValues);

    let value = inputSlider.value;
    console.log(value);
    let progress = (inputSlider.value / 25) * 100;

    slideValue.textContent =  mappedValues[value - 1] + "cm";
    slideValue.style.left = progress + "%";
    slideValue.classList.add("show"); 
    BtnMinVal.classList.remove("choose");
    BtnMaxVal.classList.remove("choose");

    if (value == 25) {
        slideValue.classList.remove("show"); 
        BtnMaxVal.classList.add("choose");
    } else if (value == 1){
        slideValue.classList.remove("show"); 
        BtnMinVal.classList.add("choose");
    }
});


const slideValue2 = document.querySelector(".sliderValue-span.p2");
const inputSlider2 = document.querySelector(".field-input.p2");

const BtnMinVal2 = document.querySelector(".value-left.p2");
const BtnMaxVal2 = document.querySelector(".value-right.p2");




inputSlider2.oninput = (() => {
    let startValue = 60;
    let endValue = 400;
    let numberOfValues = 35;
    let mappedValues = mapValues(startValue, endValue, numberOfValues);

    let value = inputSlider2.value;
    console.log(value);
    let progress = (inputSlider2.value / 35) * 100;

    slideValue2.textContent =  mappedValues[value - 1] + "cm";
    slideValue2.style.left = progress + "%";
    slideValue2.classList.add("show"); 
    BtnMinVal2.classList.remove("choose");
    BtnMaxVal2.classList.remove("choose");

    if (value == 35) {
        slideValue2.classList.remove("show"); 
        BtnMaxVal2.classList.add("choose");
    } else if (value == 1){
        slideValue2.classList.remove("show"); 
        BtnMinVal2.classList.add("choose");
    }
});