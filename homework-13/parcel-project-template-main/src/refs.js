const createRefs = () => {
	const mainContainer = document.querySelector('.js-gallery');
	const form = document.createElement('form');
	const input = document.createElement('input');
	const ul = document.createElement('ul');
	const buttonLoadMore = document.createElement('button');

	ul.classList.add('gallery');

	buttonLoadMore.classList.add('load-more');
	buttonLoadMore.type = 'button';
	buttonLoadMore.textContent = 'Load more';

	form.classList.add('search-form');
	form.id = 'search-form';

	input.type = 'text';
	input.name = 'query';
	input.autocomplete = 'off';
	input.placeholder = 'Search images...';

	form.append(input);

	return mainContainer.append(form, ul, buttonLoadMore);
};
createRefs();

export default {
	'mainContainer': document.querySelector('.js-gallery'),
	'searchForm': document.querySelector('.search-form'),
	'input': document.querySelector('.search-form input[name="query"]'),
	'gallery': document.querySelector('ul.gallery'),
	'buttonLoadMore': document.querySelector('.load-more'),
};