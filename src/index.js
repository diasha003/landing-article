import "./styles.css"

const orderButton = document.getElementById('order-button');

orderButton.addEventListener('click', function () {
    orderButton.disabled = true;
    orderButton.innerHTML = '<span class="fas fa-spinner fa-3x fa-spin"></span><span>Loading...</span>'
    orderButton.className = 'button button-loading'
})

