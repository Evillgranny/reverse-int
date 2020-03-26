module.exports = function reverse (n) {
    let nArray = String(n).split('')
    let newString = ''

    if (nArray[0] === '-') {
        nArray.splice(0, 1)
    }

    for (let i = nArray.length - 1; i >= 0; i--)
        newString += nArray[i];


    return Number(newString)
}
