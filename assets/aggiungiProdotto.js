const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhY2IyMjJkN2IxMTAwMTkwZTZkYmUiLCJpYXQiOjE3MDk4ODYyNDIsImV4cCI6MTcxMTA5NTg0Mn0.drAXcb5tP2nW2hONu49Az_rqJmxEKWIQfk0K5Nx0zDM";


const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const brandInput = document.getElementById('brand');
const imageUrlInput = document.getElementById('imageUrl');
const descriptionInput = document.getElementById('description');
const priceInput = document.getElementById('price');
const deleteBtn = document.getElementById('deleteBtn');
const submitBtn = document.getElementById('btnSubmit');
let id;


window.addEventListener('load', function () {
    const dettagli = new URLSearchParams(location.search);
    id = dettagli.get('id');
    if (id) {
        title.innerText = 'Modifica Prodotto';
        searchProduct(id);
    } else {
        title.innerText = 'Aggiungi Prodotto';
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
    brandInput.value = prodotto.brand;
    imageUrlInput.value = prodotto.imageUrl;
    priceInput.value = prodotto.price;
    descriptionInput.value = prodotto.description;
}


submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const name = nameInput.value;
    const brand = brandInput.value;
    const imageUrl = imageUrlInput.value;
    const price = priceInput.value;
    const description = descriptionInput.value;

    const prodotto = { name, brand, imageUrl, price, description };
    if (id) {
        modifyprodotto(prodotto);
    } else {
        aggiungiProd(prodotto);
    }
});


const cardData = [
    {
        name: " X17 nokia",
        brand: "Dell",
        description: "Display da 17,3 pollici; FHD (1920 x 1080) a 165Hz 3ms o 360Hz 1ms; 4K (3840x 2160) a 120Hz 4ms\nCPU: Intel i7-12700H o i9-12900HK\nGPU: fino a Nvidia GeForce RTX 3080 Ti\nMemoria: fino a 64 GB DDR5, 4800 MHz\nMemoria: 512GB-4TB M.2, PCIe NVMe a stato solido",
        imageUrl: "https://i.dell.com/sites/csimages/Product_Imagery/all/fp-aw-laptops-hero-a-1920x1440-v2.png",
        price: "2700"
    },


]





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


