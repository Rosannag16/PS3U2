const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMzMxZTJkN2IxMTAwMTkwZTc5NDUiLCJpYXQiOjE3MDk5MTMxMTMsImV4cCI6MTcxMTEyMjcxM30.djWsNbLV8wVO0fLPEKIWthNji0NF6mEjHgTYQVDOEPw";
let id;
let prodotto;


window.addEventListener('load', function () {
    const params = new URLSearchParams(location.search);
    id = params.get('id');
    loadProduct();
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
        prodotto = await response.json();
        document.getElementById('caricamento').style.display = 'none';
        prodotti();
    } catch (error) {
        console.log(error);
    }
};


const prodotti = () => {
    productDetails.innerHTML = `
    <div class="col-6 text-center">
        <img src="${product.imageUrl}" width="100%" />
    </div>
    <div class="col-6">
        <h6>${product.brand}</h6>
        <h2>${product.name}</h2>
        <span class="badge bg-dark text-warning">${product.price}€</span>
        <p class="mt-4">${product.description}</p>
    </div>
    `
}
