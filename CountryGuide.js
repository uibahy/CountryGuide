function bahy(){

    let country = document.getElementById("input").value

    axios.get(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
        let ios = response.data[0].cca2
        document.getElementById("cont").innerHTML = `
        <div class="inputs">
        <input placeholder="country name" type="text" id="input">
        <button id="btn" onclick="bahy()">Submit</button>
        </div>

        <div class="flagName">
        <h3>
            ${response.data[0].name.official}
        </h3>
        <img src="${response.data[0].flags.png}" alt="" srcset="">
        </div>
        <div class="info">
                <div class="inf">
                    <h3>Capital:</h3>
                    <h3 class="answer">${response.data[0].name.common}</h3>
                </div>
                <div class="inf">
                    <h3>Population:</h3>
                    <h3 class="answer">${response.data[0].population}</h3>
                </div>
                <div class="inf">
                    <h3>Currency:</h3>
                    <h3 class="answer">${response.data[0].currencies}</h3>
                </div>
        </div>
        `
        console.log(response.data[0].name.official)
    })
}

// axios.get(`https://restcountries.com/v3.1/name/algeria`)
//     .then((response) => {
//         console.log(response.data[0].name.official)
//     })