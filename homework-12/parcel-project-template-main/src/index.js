import './sass/main.scss';

const debounce = require('lodash.debounce');

import countriesTpl from './templates/countries.hbs';
import countryTpl from './templates/country.hbs';

import { alert } from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";

import ContryApiService from './controllers/ContryApiService';
import refs from './refs';

const contryApiService = new ContryApiService();
// console.log(contryApiService);

refs.searchValue.addEventListener('input', debounce(onSearchConries, 500));


// function onSearchConries(e) {
// 	clearSearch();
// 	contryApiService.query = e.target.value;
// 	if(contryApiService.query === '') {
// 		return;
// 	}

// 	return contryApiService.fetchContries().then(appendContriesMarkup);
// };

async function onSearchConries(e) {
	clearSearch();
	contryApiService.query = e.target.value;
	if(contryApiService.query === '') {
		return;
	};

	try {
		const countries = await contryApiService.fetchContries()
		return appendContriesMarkup(countries);
	} catch(error) {
		console.log(error);
	};
};

function clearSearch() {
	refs.content.innerHTML = '';
}

function appendContriesMarkup(countries) {
	if(countries.length === 1) {
		return refs.content.insertAdjacentHTML('afterbegin', countryTpl(...countries));
	};

	if(countries.length >= 2 && countries.length <= 10) {
		return refs.content.insertAdjacentHTML('afterbegin', countriesTpl(countries));
	}

	alert({
		text: 'Необходимо	сделать запрос более специфичным!',
		type: 'error',
		maxTextHeight: null,
		delay: 1000
	});
	
};

