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
	divElement.className = 'column width-1-3 width-1-2-lg';
	divElement.innerHTML = createCard(item);
	cardsContainer.appendChild(divElement);
});

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
