const startValue = 60;
const endValue = 300;
const numberOfValues = 25;

const mappedValues = mapValues(startValue, endValue, numberOfValues);

const slideValue = document.querySelector(".sliderValue-span");
const inputSlider = document.querySelector(".field-input");

const BtnMinVal = document.querySelector(".value-left");
const BtnMaxVal = document.querySelector(".value-right");



function mapValues(start, end, numValues) {
    const step = (end - start) / (numValues - 1);
    const values = [];

    for (let i = 0; i < numValues; i++) {
        values.push(start + i * step);
    }

    return values;
}

inputSlider.oninput = (() => {
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