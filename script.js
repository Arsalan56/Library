// const myLibrary = [];

// function Book() {}

// function AddBook() {}

// function displayBooks() {}

const stat = document.querySelector('.status');
const statImg = document.querySelector('.status > img');
stat.addEventListener('click', () => {
    const currentImg = statImg.getAttribute('src');
    if (currentImg === 'svg-icons/uncheck.svg') {
        statImg.setAttribute('src', 'svg-icons/check.svg');
    } else {
        statImg.setAttribute('src', 'svg-icons/uncheck.svg');
    }
});
