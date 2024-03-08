const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMzMxZTJkN2IxMTAwMTkwZTc5NDUiLCJpYXQiOjE3MDk5MTMxMTMsImV4cCI6MTcxMTEyMjcxM30.djWsNbLV8wVO0fLPEKIWthNji0NF6mEjHgTYQVDOEPw";
const cards = document.getElementById('cards');
let Data = [];



const cardData = [
    {
        name: " X17 nokia",
        brand: "Dell",
        description: "Display da 17,3 pollici; FHD (1920 x 1080) a 165Hz 3ms o 360Hz 1ms; 4K (3840x 2160) a 120Hz 4ms\nCPU: Intel i7-12700H o i9-12900HK\nGPU: fino a Nvidia GeForce RTX 3080 Ti\nMemoria: fino a 64 GB DDR5, 4800 MHz\nMemoria: 512GB-4TB M.2, PCIe NVMe a stato solido",
        imageUrl: "https://i.dell.com/sites/csimages/Product_Imagery/all/fp-aw-laptops-hero-a-1920x1440-v2.png",
        price: "2700"
    },


]

const aggiungiProdotti = async (product) => {
    try {
        console.log("Request sent:", product);
        const response = await fetch(dataURL, {
            method: "POST",
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",

            },
            body: JSON.stringify(product)
        });
        Data = await response.json();
        console.log("Prodotto aggiunto:", Data);
        return Data;
    } catch (error) {
        console.log("Errore nell'aggiunta del prodotto:", error);
    }

}
aggiungiProdotti(cardData);


/*
document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById("cards");

    function generateCards() {
        try {
            aggiungiProdotti();
            const datiMemorizzati = localStorage.getItem('salvaDati');
            const cardData = datiMemorizzati ? JSON.parse(datiMemorizzati) : [];

            cardData.forEach(function (card) {
                const cardHtml = `
                    <div class="card" style="width: 18rem;">
                        <img src="${card.imageUrl}" class="card-img-top" alt="Immagine Card">
                        <div class="card-body">
                            <h5 class="card-title">${card.name}</h5>
                            <p class="card-text">${card.Descrizione}</p>
                            <p class="card-text">Brand: ${card.brand}</p>
                            <p class="card-text">Price: ${card.price}</p>
                            <button onclick="modificaCard('${card.id}')" class="btn btn-warning">Modifica</button>
                            <button onclick="scopriDiPiu('${card.id}')" class="btn btn-primary">Scopri di più</button>
                        </div>
                    </div>
                `;
                cardsContainer.innerHTML += cardHtml;
            });
        } catch (error) {
            console.error("Errore durante la generazione delle carte:", error);
           
        }
    }

    function modificaCard(cardId) {
        window.location.href = `ModificaProdotti.html?id=${cardId}`;
    }

    function scopriDiPiu(cardId) {
        window.location.href = `dettagli.html?id=${cardId}`;
    }

    generateCards();
});

/*
const stampaCard = async () => {
    try {
        await addProduct();

        data.forEach((item) => {
            box.innerHTML = `
            <div class="card" style="width: 18rem;">
              <img src=${item.imageUrl} class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">${item.name}</h5>
                   <p class="card-text">${item.description}</p>
                   <a href="#" class="btn btn-primary">Modifica </a>
                   <a href="https://" class="btn btn-primary">Scopri di più </a>
                 </div>
             </div>`
        });
    } catch (error) {
        console.log('Errore durante la stampa delle carte:', error);
    }
}

*/

/*


const aggiungiProdotti = async (product) => {
    try {
        console.log("Request sent:", product);
        const response = await fetch(dataURL, {
            method: "POST",
            headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",

            },
            body: JSON.stringify(product)
        });
        const aggiunti = await response.json();
        console.log("Prodotto aggiunto:", aggiunti);
        return aggiunti;
    } catch (error) {
        console.log("Errore nell'aggiunta del prodotto:", error);
    }

}
aggiungiProdotti(cardData);



*/