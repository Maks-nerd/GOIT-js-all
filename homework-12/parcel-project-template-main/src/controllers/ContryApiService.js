const BASE_URL = 'https://restcountries.eu/rest/v2';

export default class ContryApiService {
	constructor() {
		this.searchValue = '';
	}

	// fetchContries() {
	// 	if(this.query === '') {
	// 		return;
	// 	}
	// 	const url = `${BASE_URL}/name/${this.searchValue}`;

	// 	return fetch(url)
	// 	.then(response => {
	// 		return response.json();
	// 	});
	// }

	async fetchContries() {
		if(this.query === '') {
			return;
		}
		const url = `${BASE_URL}/name/${this.searchValue}`;
		const response = await fetch(url);

		return await response.json();
	}

	get query() {
		return this.searchValue;
	}

	set query(newSearchValue) {
		this.searchValue = newSearchValue;
	}
};