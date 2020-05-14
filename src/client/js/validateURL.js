
function validateURL(inputText) {
    // Check to confirm the url submitted by user is valid
    let regex = /^(https?:\/\/)(([\da-z\.-]+)\.)?([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    return regex.test(inputText)
}

export { validateURL }