
const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {
  try {
    for await (let url of urls) {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.results);
    }
  } catch(error) {
    console.log(error);
  }
}

fetchNewData();