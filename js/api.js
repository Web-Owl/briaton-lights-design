const BASE_URL = './data/data.json';

export default async function getProducts() {
	try {
    const response = await fetch(BASE_URL);

    return await response.json();
  } catch(e) {
    console.error(e);

    return [];
  }
}