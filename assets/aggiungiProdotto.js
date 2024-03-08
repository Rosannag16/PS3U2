const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhY2IyMjJkN2IxMTAwMTkwZTZkYmUiLCJpYXQiOjE3MDk4ODYyNDIsImV4cCI6MTcxMTA5NTg0Mn0.drAXcb5tP2nW2hONu49Az_rqJmxEKWIQfk0K5Nx0zDM";
function Prodotto(name, brand, imageUrl, price, Descrizione) {
    this.name = name;
    this.brand = brand;
    this.imageUrl = imageUrl;
    this.price = price;
    this.Descrizione = Descrizione;
}

function salvaDati() {
    const name = document.getElementById('name').value;
    const brand = document.getElementById('Brand').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const price = document.getElementById('price').value;
    const Descrizione = document.getElementById('Descrizione').value;

    const prodotto = new Prodotto(name, brand, imageUrl, price, Descrizione);

    const prodottoString = JSON.stringify(prodotto);

    const encodedProdottoString = encodeURIComponent(prodottoString);

    window.location.href = `home.html?prodotto=${encodedProdottoString}`;

}
