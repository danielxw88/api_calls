
const fetchDataButton = document.getElementById('fetchDataButton');
const dataDisplay = document.getElementById('dataDisplay');
const fetchDataXHRButton = document.getElementById('fetchDataXHRButton');

// Event listener for fetch button using fetch()
fetchDataButton.addEventListener('click', function () {
    fetchData();
});


// Event listener for fetch button using XMLHttpRequest
fetchDataXHRButton.addEventListener('click', function () {
    fetchDataWithXHR();
});

// Function to fetch data using fetch() method
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

// Function to fetch data using XMLHttpRequest method (Task 2)
function fetchDataWithXHR() {
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            dataDisplay.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            `;
        } else {
            dataDisplay.innerHTML = `<p>Error: Failed to fetch data (Status: ${xhr.status})</p>`;
        }
    };

    xhr.onerror = function () {
        dataDisplay.innerHTML = `<p>Error: Network error occurred</p>`;
    };


    xhr.send();
}