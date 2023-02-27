const button = document.getElementsByTagName("button")[0]
const select = document.getElementById("select-2")

const dollar = 5.2
const euro = 5.9

const convertValues = () => {
    const inputReais = document.getElementById("input-select").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")

    
     realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",

    }).format (inputReais)

    if(select.value === `US$ Dólar Americano`){
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",

    }).format (inputReais / dollar);
}

    if(select.value === `€ Euro`) {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-UE", {
        style: "currency",
        currency: "EUR",

    }).format (inputReais / euro)
}

};

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if( select.value === `US$ Dólar Americano`){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./estados-unidos (1) 1.png"
    }

    if( select.value === `€ Euro`){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./euro.png"
    } 

    convertValues()
};

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)
