import itemsArr from './items.js';

let cardsContainer = document.getElementById('cards-container');
function createCard(data) {
	return `          <div class="card" id="${data.id}">
                        <a href="#">
                           <img class="like-empty" src="img/icons/like_empty.svg" alt=""></a>
                        <div class="card__body">
                           <figure class="card__image"><img src="img/${
															data.imgUrl
														}" alt=""></figure>
                           <a href="">
                              <h4 class="card__title">${data.name}</h4>
                           </a>
                           <ul class="card__description">
                              <li class="card__availability "> <span>${
																data.orderInfo.inStock
															}</span> left in stock</li>
                              <li class="card__price">Price: <span>${
																data.price
															}</span> $</li>
                           </ul>
                           <button class="button button-primary">Add to cart</button>
                        </div>
                        <div class="card__footer">
                           <ul class="footer-reviews">
                              <li>${
																data.orderInfo.reviews
															}% Positive reviews</li>
                              <li>Above avarage</li>
                           </ul>
                           <ul class="footer-order">
                              <li>${getRandomArbitrary(300, 1000).toFixed(
																0
															)}</li>
                              <li>orders</li>
                           </ul>
                        </div>
                     </div>
                 `;
}

itemsArr.map(item => {
	const divElement = document.createElement('div');
	divElement.className = 'column width-1-3 width-1-3-lg';
	divElement.innerHTML = createCard(item);
	cardsContainer.appendChild(divElement);
});

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let panel = this.nextElementSibling;
		if (panel.style.display === 'block') {
			panel.style.display = 'none';
		} else {
			panel.style.display = 'block';
		}
	});
}

const filterBtn = document.querySelector('#filter');
const accCol = document.querySelector('#accordion-column');
const cardCol = document.querySelector('#card-column');
const cards = document.querySelectorAll('.card');

filterBtn.addEventListener('click', function (e) {
	e.preventDefault();
	this.classList.toggle('active');
	accCol.classList.toggle('none');
	if (this.classList.contains('active')) {
		cardCol.classList.add('width-2-3');
		for (let i = 0; i < cardsContainer.children.length; i++) {
			cardsContainer.children[i].classList.remove('width-1-3');
			cardsContainer.children[i].classList.add('width-1-2');
		}
	} else {
		cardCol.classList.remove('width-2-3');
		for (let i = 0; i < cardsContainer.children.length; i++) {
			cardsContainer.children[i].classList.add('width-1-3');
		}
	}
});

cards.forEach(element => {
	element.addEventListener('click', function (e) {
		e.preventDefault();
		showmodal(itemsArr.find(item => item.id == element.id));
	});
});

function showmodal(data) {
	let overlay = document.createElement('div');

	overlay.innerHTML = `
    <div class="overlay">
        <div class="modal-container">
            <div class="modal-img">
                <img class="modal-image" src="img/${data.imgUrl}" alt="">
             </div>
            <div class="modal-body">
                <span class="modal-title">${data.name}</span>
                <div class="modal-reviews">
                    <div class="card__footer">
                           <ul class="footer-reviews">
                              <li>${
																data.orderInfo.reviews
															}% Positive reviews</li>
                              <li>Above avarage</li>
                           </ul>
                           <ul class="footer-order">
                              <li>${getRandomArbitrary(300, 1000).toFixed(
																0
															)}</li>
                              <li>orders</li>
                           </ul>
                        </div>
                </div>
                <div class="info">
                    <span>Color: <b>${data.color}</b></span>
                    <span>Operating System: <b>${data.os}</b></span>
                    <span>Chip: <b>${data.chip.name}</b></span>
                    <span>Height: <b>${data.size.height}</b></span>
                    <span>Width: <b>${data.size.width}</b></span>
                    <span>Depth: <b>${data.size.depth}</b></span>
                    <span>Weight: <b>${data.size.weight}</b></span>
                </div>
            </div>
            <div class="modal-control">
                <span class="modal-price">$ ${data.price}</span>
                <span class="count-in-stock">Stock: <b>${
									data.orderInfo.inStock
								} pcs.</b> </span>
                <button class="button button-primary">Add to cart</button>
            </div>
        </div>
    </div>`;
	overlay.addEventListener('click', hideOverlay);
	overlay
		.querySelector('.modal-container')
		.addEventListener('click', e => e.stopPropagation());
	document.body.appendChild(overlay);
}

function hideOverlay() {
	const overlay = document.querySelector('.overlay').parentNode;
	overlay.remove();
}
