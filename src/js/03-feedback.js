import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emmailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormData = throttle(() => {
    const formData = {
        emmail: emmailInput.value,
        message: messageInput.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

emmailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);

const loadFormData = () => {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const formData = JSON.parse(storedData);
        emmailInput.value = formData.emmail || "";
        messageInput.value = formData.message || "";
    }
};

loadFormData();

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = {
        emmail: emmailInput.value,
        message: messageInput.value,
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    emmailInput.value = '';
    messageInput.value = '';
});





