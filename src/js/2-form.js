const formData = {
  email: "",
  message: "",
};

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

// 1. Відновлення даних при завантаженні сторінки
initForm();

function initForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) return;

  try {
    const parsedData = JSON.parse(savedData);

    // оновлюємо formData
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    // заповнюємо форму
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (error) {
    console.log("Invalid storage data");
  }
}

// 2. Делегування input
form.addEventListener("input", onFormInput);

function onFormInput(event) {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// 3. Сабміт форми
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  // перевірка на заповненість
  if (!email || !message) {
    alert("Fill please all fields");
    return;
  }

  console.log({
    email,
    message,
  });

  // очищення
  localStorage.removeItem(STORAGE_KEY);

  formData.email = "";
  formData.message = "";

  form.reset();
}