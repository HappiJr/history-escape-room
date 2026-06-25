function moveToNext(currentInput) {
    if (currentInput.value.length >= currentInput.maxLength) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput && nextInput.tagName.toLowerCase() === 'input') {
            nextInput.focus();
        }
    }
}

function moveToPrev(currentInput, e) {
    if (e.key === 'Backspace' && currentInput.value.length === 0) {
        const prevInput = currentInput.previousElementSibling;
        if (prevInput && prevInput.tagName.toLowerCase() === 'input') {
            prevInput.focus();
        }
    }
}