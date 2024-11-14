const url = "https://api.pexels.com/v1/search?query=nature&per_page=1";
const API_KEY = "pQ8iWddyI14lBjLJ2TVC8fTOIjMNizh5qx12mfyamLU9uxP4qFHx6O0qY";

fetch(url, {
  method: "GET",
  headers: { Authorization: API_KEY }
}).then((response) => {
  console.log(response);
});
