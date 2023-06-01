// Toggle status button
const statImgs = document.querySelectorAll('.status > img');
statImgs.forEach((statImg) =>
    statImg.addEventListener('click', () => {
        const currentImg = statImg.getAttribute('src');
        if (currentImg === 'svg-icons/uncheck.svg') {
            statImg.setAttribute('src', 'svg-icons/check.svg');
        } else {
            statImg.setAttribute('src', 'svg-icons/uncheck.svg');
        }
    })
);

// Make trash button work
const Alltrash = document.querySelectorAll('.trash');
Alltrash.forEach((trash) =>
    trash.addEventListener('click', () => {
        trash.parentNode.remove();
    })
);

const form = document.querySelector('form');
const openForm = document.querySelector('.btn > button');
const body = document.querySelector('body');

openForm.addEventListener('click', (e) => {
    e.stopPropagation();
    form.style.visibility = 'visible';
});

body.addEventListener('click', () => {
    form.style.visibility = 'hidden';
});

form.addEventListener('click', (e) => e.stopPropagation());

const closeForm = document.querySelector('form > button');
closeForm.addEventListener('click', () => {
    form.style.visibility = 'hidden';
});

const submitForm = document.querySelector('form > div > button');
const inputs = document.querySelectorAll('form input');

const myLibrary = [];

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBook() {}
function displayBooks() {}

submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        form.style.visibility = 'hidden';
        inputs.forEach((input) => {
            // eslint-disable-next-line no-param-reassign
            input.value = '';
        });
    }
});
