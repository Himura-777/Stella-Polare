// nav_header_list
const chaptersLink = document.querySelectorAll('.nav_header_link');
const chaptersItem = document.querySelectorAll('.nav_header_item');
chaptersItem.forEach(item => {
	item.addEventListener('click', () => {
		event.preventDefault();
		chaptersLink.forEach(link => link.classList.remove('active'));
		item.parentElement.classList.add('active');
	});
});

// hits_products_container
const hitsList = document.querySelector('.hits_list');
const hitsItem = document.querySelectorAll('.hits_item');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let currentIndex = 0;
function updateProductView() {
	hitsList.style.transform = `translateX(-${currentIndex * 100}%)`;
}
right.addEventListener('click', () => {
	if (currentIndex < hitsItem.length - 1) {
		currentIndex++;
		updateProductView();
	}
});
left.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--;
		updateProductView();
	}
});

// products_nav
const chaptersProducts = document.querySelectorAll('.products_nav_item');
const productsList = document.querySelectorAll('.products_list');
chaptersProducts.forEach(item => {
	item.addEventListener('click', () => {
		chaptersProducts.forEach(nav => nav.classList.remove('active'));
		productsList.forEach(section => section.classList.remove('active'));

		item.classList.add('active');
		const contentId = item.getAttribute('data-content');
		document.getElementById(contentId).classList.add('active');
	});
});

// company_icons_list
const companyIconsList = document.querySelector('.company_icons_list');
companyIconsList.innerHTML += companyIconsList.innerHTML;
