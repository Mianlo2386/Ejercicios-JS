function findNaughtyStep(original, modified) {
    if (original === modified) {
        return "";
    }
    let differentElementIndex = 0;
    for (let i = 0; original[i] === modified[i]; i++) {
        differentElementIndex = i + 1;
    }
    return original.length > modified.length ? original[differentElementIndex] : modified[differentElementIndex];
}


// Ejemplos de uso:
const original5 = 'abcd';
const modified5 = 'abcde';
console.log(findNaughtyStep(original5, modified5)); // 'e'

const original6 = 'stepfor';
const modified6 = 'stepor';
console.log(findNaughtyStep(original6, modified6)); // 'f'

const original7 = 'abcde';
const modified7 = 'abcde';
console.log(findNaughtyStep(original7, modified7)); // '' 
