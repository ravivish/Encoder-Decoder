function encode(str) {
    return btoa(str);
}

const element = document.querySelector('#encode');
element.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    if (inputText.value === '') {
        return;
    }
    const encodedText = encode(inputText.value);
    const outputText = document.querySelector('#output-text');
    outputText.style.display = 'inline';
    outputText.value = encodedText;
});
