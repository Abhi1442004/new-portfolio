// Typing effect
const typedText = document.querySelector(".typing");
const words = ["Frontend Developer", "Java Developer", "Full Stack Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      typedText.textContent = currentWord;
    }

    if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      typedText.textContent = currentWord;
    }

    if (j == words[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === words.length) i = 0;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}

type();
