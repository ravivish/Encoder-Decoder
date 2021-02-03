function decode(str) {
    return atob(str);
}

const decoder = document.querySelector('#decode');
decoder.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    if (inputText.value === '') {
        return;
    }
    const decodedText = decode(inputText.value);
    const outputText = document.querySelector('#output-text');
    outputText.style.display = 'inline';
    outputText.value = decodedText;
});
