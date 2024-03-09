const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMzMxZTJkN2IxMTAwMTkwZTc5NDUiLCJpYXQiOjE3MDk5MTMxMTMsImV4cCI6MTcxMTEyMjcxM30.djWsNbLV8wVO0fLPEKIWthNji0NF6mEjHgTYQVDOEPw";
const cards = document.getElementById('cards');
let cardData = []; // Cambiato da const a let

window.addEventListener('load', function () {
    loadProducts();
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

        // Verifica il tipo di dato restituito
        const responseData = await response.json();
        console.log("Tipo di dato restituito:", typeof responseData);

        cardData = responseData;
        document.getElementById('caricamento').style.display = 'none';
        prodotti();
    } catch (error) {
        console.log(error);
    }
};


const sampleCardData = [
    {
        name: "X17 nokia",
        Brand: "Dell",
        Descrizione: "Display da 17,3 pollici; FHD (1920 x 1080) a 165Hz 3ms o 360Hz 1ms; 4K (3840x 2160) a 120Hz 4ms\nCPU: Intel i7-12700H o i9-12900HK\nGPU: fino a Nvidia GeForce RTX 3080 Ti\nMemoria: fino a 64 GB DDR5, 4800 MHz\nMemoria: 512GB-4TB M.2, PCIe NVMe a stato solido",
        imageUrl: "https://i.dell.com/sites/csimages/Product_Imagery/all/fp-aw-laptops-hero-a-1920x1440-v2.png",
        price: "2700"
    },
];

// stampa delle cards, controlla
const prodotti = () => {
    cards.innerHTML = '';
    cardData.forEach(card => {
        cards.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${card.imageUrl}" class="card-img-top" alt="Immagine Card">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">${card.Descrizione}</p>
            <p class="card-text">Brand: ${card.Brand}</p>
            <p class="card-text">Price: ${card.price}</p>
            <button onclick="modificaCard('${card.id}')" class="btn btn-warning">Modifica</button>
            <button onclick="scopriDiPiu('${card.id}')" class="btn btn-primary">Scopri di più</button>
        </div>
    </div>`;
    });
};