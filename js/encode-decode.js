function urlEncode(url) {
    return encodeURIComponent(url);
}

function urlDecode(url) {
    return decodeURIComponent(url);
}

const encoderbtn = document.querySelector('#encode');
encoderbtn.addEventListener('click', () => {
    const inputtext = document.querySelector('#input-text');
    const encodedText = urlEncode(inputtext.value);
    const outputtext = document.querySelector('#output-text');
    outputtext.value = encodedText;
    outputtext.style.pointerEvents = 'auto';
    outputtext.style.backgroundColor = 'white';
});

const decoderbtn = document.querySelector('#decode');
decoderbtn.addEventListener('click', () => {
    const inputtext = document.querySelector('#input-text');
    const encodedText = urlDecode(inputtext.value);
    const outputtext = document.querySelector('#output-text');
    outputtext.value = encodedText;
    outputtext.style.pointerEvents = 'auto';
    outputtext.style.backgroundColor = 'white';
});
