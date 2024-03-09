const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhY2IyMjJkN2IxMTAwMTkwZTZkYmUiLCJpYXQiOjE3MDk4ODYyNDIsImV4cCI6MTcxMTA5NTg0Mn0.drAXcb5tP2nW2hONu49Az_rqJmxEKWIQfk0K5Nx0zDM";



const nameInput = document.getElementById('name');
const BrandInput = document.getElementById('Brand');
const imageUrlInput = document.getElementById('imageUrl');
const DescrizioneInput = document.getElementById('Descrizione');
const priceInput = document.getElementById('price');
const deleteBtn = document.getElementById('deleteBtn');
const submitBtn = document.getElementById('btnSubmit');
let id;


window.addEventListener('load', function () {
    const dettagli = new URLSearchParams(location.search);
    id = dettagli.get('id');
    if (id) {
        this.name.innerText = 'Modifica Prodotto';
        searchProduct(id);
    } else {
        this.name.innerText = 'Aggiungi Prodotto';
        deleteBtn.style.display = 'none';
    }
});


const loadProducts = async () => {
    try {
        let response = await fetch(dataURL, {
            method: "POST",
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",

            },
        });
        Data = await response.json();
        document.getElementById('caricamento').style.display = 'none';
        prodotti();
    } catch (error) {
        console.log(error);
    }
};

const form = (prodotto) => {
    nameInput.value = prodotto.name;
    BrandInput.value = prodotto.Brand;
    imageUrlInput.value = prodotto.imageUrl;
    priceInput.value = prodotto.price;
    DescrizioneInput.value = prodotto.Descrizione;
}


submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Pulsante cliccato');
    const name = nameInput.value;
    const Brand = BrandInput.value;
    const imageUrl = imageUrlInput.value;
    const price = priceInput.value;
    const Descrizione = DescrizioneInput.value;

    const prodotto = { name, Brand, imageUrl, price, Descrizione };
    if (id) {
        modifyprodotto(prodotto);
    } else {
        aggiungiProd(prodotto);
    }
});





const aggiungiProd = async (product) => {
    try {
        let response = await fetch(dataURL, {
            method: 'POST',
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",

            },
            body: JSON.stringify(product),
        });
        let aggiunto = await response.json();
        alert('Prodotto correttamente inserito');
        location.href = 'home.html';
    } catch (error) {
        console.log(error);
        alert('Errore nell\'inserimento del prodotto');
    }
}


const modificaProd = async (product) => {
    try {
        let response = await fetch(dataURL + id, {
            method: 'PUT',
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",

            },
            body: JSON.stringify(product),
        });
        let aggiunto = await response.json();
        alert('Prodotto correttamente modificato');
        location.href = 'home.html';
    } catch (error) {
        console.log(error);
        alert('Errore nella modifica del prodotto');
    }
}



//reset funziona

const eliminaProd = async () => {
    try {
        let response = await fetch(dataURL + id, {
            method: 'DELETE',
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",

            },
        });
        alert('Prodotto correttamente eliminato');
        location.href = 'home.html';
    } catch (error) {
        console.log(error);
        alert('Errore nell\'eliminazione del prodotto');
    }
}


