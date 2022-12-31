import throttle from "lodash.throttle";
const form = document.querySelector(`.feedback-form`);

const STORAGE_KEY = "feedback-form-state";
const formData = {};

form.addEventListener(`input`, throttle(onNameComent, 500));
form.addEventListener(`submit`, onSubmit)

const saveText = localStorage.getItem(STORAGE_KEY)
    
const formParse = JSON.parse(saveText)

function onNameComent(event) {
    formData[event.target.name] = event.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset()
    console.log(formData)
    localStorage.removeItem(STORAGE_KEY)    
}
 
    comebackText()

function comebackText() {
    if (saveText) {
    form.elements.email.value = formParse.email || '';
    form.elements.message.value = formParse.message || '';
    }
}