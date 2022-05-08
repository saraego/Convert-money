const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.08
const euro = 5.36
const bitcoin = 173.38630

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const dolarValueText = document.getElementById('dolar-value-text')

    //realValueText.innerHTML = inputReal
    //dolarValueText.innerHTML = inputReal / dolar
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal)

    if (select.value === "US$ Dolar americano") {
        dolarValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReal / dolar)
    } 
    
    if(select.value === "€ Euro"){
        dolarValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal / euro)
    }

    if(select.value === "Bitcoin"){
        dolarValueText.innerHTML = inputReal / bitcoin
        
    }




}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('euro-img')

    if (select.value === 'US$ Dolar americano') {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if(select.value === "Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)