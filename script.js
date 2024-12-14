
const fetchDataButton = document.getElementById('fetchDataButton');
const dataDisplay = document.getElementById('dataDisplay');


fetchDataButton.addEventListener('click', function () {
    fetchData();
});


function fetchData() {

    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {

            dataDisplay.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            `;
        })
        .catch(error => {
            dataDisplay.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}
