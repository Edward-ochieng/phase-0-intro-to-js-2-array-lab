// Write your solution here!
const cats =[
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat (name) {
    cats.push(name);
}

function destructivelyPrependCat (name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat (name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat (name) {
    cats.shift(name);
}

const appendCat = (name) => {
    const newArray = [...cats, name];
    return newArray;
}
const prependCat = (name) => {
    const newArray = [name, ...cats];
    return newArray;
}
const removeLastCat = () => {
    const newArray = [...cats];
    newArray.splice(newArray.length - 1, 1);
    return newArray;
}
const removeFirstCat = () => {
    const newArray = [...cats];
    newArray.splice(0, 1);
    return newArray;
}