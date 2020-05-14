function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById("url-input").value

    if (Client.validateURL(url)) { //if URL is valid, then fetch from the API and update page
        //create an object to be used in the fetch
        let requestBody = {
            url: url
        };
        fetch("http://localhost:8081/api", {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById("url").innerHTML = "<BR>URL: " + url
            document.getElementById("polarity").innerHTML = "Polarity: " + res.polarity
            document.getElementById("subjectivity").innerHTML = "Subjectivity: " + res.subjectivity
            document.getElementById("errors").innerHTML = ""
        })
    } else { // else display error message
        document.getElementById("url").innerHTML = ""
        document.getElementById("polarity").innerHTML = ""
        document.getElementById("subjectivity").innerHTML = ""
        document.getElementById("errors").innerHTML = "<BR>Error: Please enter a valid URL"
    }
}

export { handleSubmit }