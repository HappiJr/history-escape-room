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

function checkForEmptyInputs() {
    let noEmptyInputs = true;
    document.querySelectorAll('.code-input').forEach(input => {
        let val = input.value;
        if (val == "") {
            noEmptyInputs = false;
        }
    })
    return noEmptyInputs;
} //checkForEmptyInputs()

//you cannot store an array in the sessionStorage, 
//so store the parts of the array seperatly:
function storeArray(array) {
    for(let i = 0; i < 8; i++) {
        sessionStorage.setItem(i, array[i]);
    }
} //storeArray()

function retrieveArray() {
    let array = [];
    for(let i = 0; i < 8; i++) {
        array.push(sessionStorage.getItem(i));
    }
    return array;
} //retrieveArray

//this function certain letters of the solution based on which riddle has been solved yet
function showObtainedSolutionLetters(array) {
    console.log(array);
    const firstChild = document.querySelector('.solution.one');

    if (array[0] === 'true') {
        let firstSibling = firstChild.nextElementSibling;
        firstSibling.innerHTML = 'i';
        let secondSibling = firstChild;
        for (let i = 0; i < 8-1; i++) { //secondSibling should be the 8th child
            secondSibling = secondSibling.nextElementSibling;
        }
        secondSibling.innerHTML = 'i';
    } //riddle 1

    if (array[1] === 'true') {
        let firstSibling = firstChild;
        for (let i = 0; i < 7-1; i++) {   
            firstSibling = firstSibling.nextElementSibling;
        }
        firstSibling.innerHTML = 'e';
        let secondSibling = firstChild;
        for (let i = 0; i < 10-1; i++) {
            secondSibling = secondSibling.nextElementSibling;
        }
        secondSibling.innerHTML = 'e';
    } //riddle 2

    if (array[2] === 'true') {
        let firstSibling = firstChild;
        for (let i = 0; i < 6-1; i++) {   
            firstSibling = firstSibling.nextElementSibling;
        }
        firstSibling.innerHTML = 'w';
    } //riddle 3

    if (array[3] === 'true') {
        let firstSibling = firstChild;
        for (let i = 0; i < 5-1; i++) {   
            firstSibling = firstSibling.nextElementSibling;
        }
        firstSibling.innerHTML = 't';
    } //riddle 4

    if (array[4] === 'true') {
        firstChild.innerHTML = 'S';
        let secondSibling = firstChild;
        for (let i = 0; i < 9-1; i++) {
            secondSibling = secondSibling.nextElementSibling;
        }
        secondSibling.innerHTML = 's';
    } //riddle 5

    if (array[5] === 'true') {
        let firstSibling = firstChild;
        for (let i = 0; i < 3-1; i++) {   
            firstSibling = firstSibling.nextElementSibling;
        }
        firstSibling.innerHTML = 'c';
    } //riddle 6

    if (array[6] === 'true') {
        let firstSibling = firstChild;
        for (let i = 0; i < 4-1; i++) {   
            firstSibling = firstSibling.nextElementSibling;
        }
        firstSibling.innerHTML = 'h';
    } //riddle 7

    if (array[7] === 'true') {
        let firstSibling = firstChild;
        for (let i = 0; i < 11-1; i++) {   
            firstSibling = firstSibling.nextElementSibling;
        }
        firstSibling.innerHTML = 'n';
    } //riddle 8

} //showObtainedSolutionLetters(array)