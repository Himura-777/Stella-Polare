const chaptersPage = document.querySelectorAll('.nav_item');

chaptersPage.forEach(item => {
	item.addEventListener('click', () => {
		chaptersPage.forEach(i => i.classList.remove('active'));

		item.classList.add('active');
	});
});

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
