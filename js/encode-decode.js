function urlEncode(url) {
    return encodeURIComponent(url);
}

function urlDecode(url) {
    return decodeURIComponent(url);
}

const encoderbtn = document.querySelector('#encode');
encoderbtn.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    if (inputText.value === '') {
        return;
    }
    const encodedText = urlEncode(inputText.value);
    const outputtext = document.querySelector('#output-text');
    outputtext.value = encodedText;
    outputtext.style.pointerEvents = 'auto';
    outputtext.style.backgroundColor = 'white';
});

const decoderbtn = document.querySelector('#decode');
decoderbtn.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    if (inputText.value === '') {
        return;
    }
    const encodedText = urlDecode(inputText.value);
    const outputtext = document.querySelector('#output-text');
    outputtext.value = encodedText;
    outputtext.style.pointerEvents = 'auto';
    outputtext.style.backgroundColor = 'white';
});
