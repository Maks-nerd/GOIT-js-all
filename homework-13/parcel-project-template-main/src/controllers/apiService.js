const BASE_URL = 'https://pixabay.com/api';
const KEY = '22320158-241d603601ee22cf546972c18';

export default class apiServiceFoto {
	constructor() {
		this.page = 1;
		this.searchQuery = '';
	}
	
	// fetchFotos() {
	// 	const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;
		
	// 	return fetch(url).then(response => response.json()).then(fotos => {
	// 		this.incrementCountPage();

	// 		return fotos.hits;
	// 	});
	// }
	async fetchFotos() {
		const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;
		const response = await fetch(url);
		const fotos = await response.json();
		await this.incrementCountPage();

		return fotos.hits;
	}

	incrementCountPage() {
		this.page += 1;
	}

	resetCountPage() {
		this.page = 1;
	}

};