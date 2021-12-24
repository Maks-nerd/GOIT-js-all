import refs from './refs.js';
import apiServiceFoto from './controllers/apiService.js';
import galleryFotoCardTpl from './templates/gallery-photo-card.hbs';
import { alert } from "@pnotify/core";

const debounce = require('lodash.debounce');
const basicLightbox = require('basiclightbox');
const fotosApiService = new apiServiceFoto();
let currentGalleryItem = '';
let showbuttonLoadMore = true;


refs.input.addEventListener('input', debounce(onSearchFotos, 500));
refs.buttonLoadMore.addEventListener('click', onClickButtonLoadMore);

hideButtonLoadMore();

function addObserver(target) {
			const options = {
				root: null,
				rootMargin: '0px',
				threshold: 1
			};
			const observer = new IntersectionObserver(elements => {
				if (elements[0].isIntersecting) {
					refs.buttonLoadMore.click();
					observer.unobserve(target);
				}
			}, options);

		observer.observe(target);
};

function renderFotos(foto) {
	if(showbuttonLoadMore) {
		if(foto.length === 0) {
			showNotification('error');
			document.removeEventListener('keydown', onCloseLightbox);
			document.removeEventListener('keydown', onClickLightboxToLeft);
			document.removeEventListener('keydown', onClickLightboxToRight);
		} else {
			showNotification('info');
			document.addEventListener('keydown', onCloseLightbox);
			document.addEventListener('keydown', onClickLightboxToLeft);
			document.addEventListener('keydown', onClickLightboxToRight);
		};
	};

	if(foto.length === 0) {
		hideButtonLoadMore();
		showbuttonLoadMore = true;
	} else {
		refs.gallery.insertAdjacentHTML('beforeend', galleryFotoCardTpl(foto));
		refs.gallery.addEventListener('click', onShowBigFoto);
		showButtonLoadMore();
		addObserver(refs.buttonLoadMore);
	};
	
	// setTimeout(() => {
	// 	smoothScrollIntoView(refs.mainContainer);
	// }, 500);

};

// function getFotos() {
// 	return fotosApiService.fetchFotos().then(renderFotos).catch(error => error);
// };
async function getFotos() {
	try {
		const fotos = await fotosApiService.fetchFotos();
		
		return renderFotos(fotos);
	} catch(error){
		return error;
	}
};

function showNotification(type){
	let message = '';

	switch (type) {
		case 'info': message = `Ваш запрос на поиск ${fotosApiService.searchQuery} дал успех!`;
			break;
	
			case 'error': message = `По вашему запросу ${fotosApiService.searchQuery} ничего не найдено!`;
			break;
	}

	return alert({
		text: message,
		type: type,
		maxTextHeight: null,
		delay: 2000
	});
};

function createLightboxGalleryItem(target) {
	deleteLightbox();
	
	const src = target.src;
	const alt = target.alt;
	const newImage = `<img class="lightbox__image" src="${src}" alt="${alt}" />`;
	const bigImage = basicLightbox.create(newImage);

	bigImage.show();
	currentGalleryItem = target.closest('.photo-card');
};

function onShowBigFoto(e) {
	if(e.target.hasAttribute('data-lightbox')) {
		createLightboxGalleryItem(e.target);
		document.addEventListener('keydown', onCloseLightbox);
		document.addEventListener('keydown', onClickLightboxToLeft);
		document.addEventListener('keydown', onClickLightboxToRight);
	}
};

function smoothScrollIntoView(element) {
	element.scrollIntoView({
		behavior: 'smooth',
		block: 'end',
	});
};

function showButtonLoadMore() {
	return refs.buttonLoadMore.classList.remove('hide');
};

function hideButtonLoadMore() {
	return refs.buttonLoadMore.classList.add('hide');
};

function onClickButtonLoadMore() {
	showbuttonLoadMore = false;
	return getFotos();
};

function onSearchFotos(e) {
	clearGallerySearch();
	fotosApiService.resetCountPage();
	const searchValue = fotosApiService.searchQuery = e.target.value;

	if(searchValue === ''){
		hideButtonLoadMore();

		return;
	}
	
	return getFotos();
};

function updateLightboxFoto(side) {
	const allGalleryItems = document.querySelectorAll('.photo-card');
	const arrayGalleryItems = Array.from(allGalleryItems);
	const indexCurrentGalleryItem = arrayGalleryItems.indexOf(currentGalleryItem);
	let indexNextGalleryItem = 0;

	if(side === 'left') {
		indexNextGalleryItem = indexCurrentGalleryItem - 1;
	} else {
		indexNextGalleryItem = indexCurrentGalleryItem + 1;
	};

	if(indexNextGalleryItem > 0 && indexNextGalleryItem < allGalleryItems.length) {
		const getNextGalleryItem = allGalleryItems.item(indexNextGalleryItem);
		const getNextGalleryItemImage = getNextGalleryItem.querySelector('.photo-card img');
	
		createLightboxGalleryItem(getNextGalleryItemImage);
	};

};

function onClickLightboxToLeft(e) {
	const left = 'left';
	
	if(e.code === 'ArrowLeft') {
		updateLightboxFoto(left);
	};
};

function onClickLightboxToRight(e) {
	const right = 'right';

	if(e.code === 'ArrowRight') {
		updateLightboxFoto(right);
	};
};

function onCloseLightbox(e) {
	if(e.code === 'Escape') {
		deleteLightbox();

		document.removeEventListener('keydown', onCloseLightbox);
		document.removeEventListener('keydown', onClickLightboxToLeft);
		document.removeEventListener('keydown', onClickLightboxToRight);
	};
};

function deleteLightbox() {
	if(document.querySelector('.basicLightbox')) {
		document.querySelector('.basicLightbox').remove();
	};
}

function clearGallerySearch() {
	refs.gallery.removeEventListener('click', onShowBigFoto);
	return refs.gallery.innerHTML = '';
};