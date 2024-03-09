const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMzMxZTJkN2IxMTAwMTkwZTc5NDUiLCJpYXQiOjE3MDk5MTMxMTMsImV4cCI6MTcxMTEyMjcxM30.djWsNbLV8wVO0fLPEKIWthNji0NF6mEjHgTYQVDOEPw";
const cards = document.getElementById('cards');
let Data = [];

window.addEventListener('load', function () {
    loadProducts();
});


//caricamento con rotellina blu
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


//stampa delle cards, controlla
const prodotti = () => {
    cards.innerHTML = '';
    Data.forEach(item => {
        cards.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${card.imageUrl}" class="card-img-top" alt="Immagine Card">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">${card.Descrizione}</p>
            <p class="card-text">Brand: ${card.brand}</p>
            <p class="card-text">Price: ${card.price}</p>
            <button onclick="modificaCard('${card.id}')" class="btn btn-warning">Modifica</button>
            <button onclick="scopriDiPiu('${card.id}')" class="btn btn-primary">Scopri di più</button>
        </div>
    </div>`;
    });
};
