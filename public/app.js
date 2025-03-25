// Function to fetch car data from the server
function fetchCarData(type = '', sort = 'make') {
    fetch(`/api/cars?type=${type}&sort=${sort}`)
        .then(response => response.json())
        .then(cars => {
            displayCars(cars);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display cars in the table
function displayCars(cars) {
    const tableBody = document.querySelector('#carTable tbody');
    tableBody.innerHTML = '';  // Clear existing rows

    cars.forEach(car => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${car.type}</td>
            <td>${car.horsepower}</td>
            <td>${car.torque}</td>
            <td>$${car.price.toFixed(2)}</td>
            <td><img src="${car.image}" alt="${car.make} ${car.model}" width="100"></td>
        `;
        tableBody.appendChild(row);
    });
}

// Event listener for the filter form submission
document.getElementById('filterForm').addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form submission

    const type = document.getElementById('type').value;
    const sort = document.getElementById('sort').value;
    
    // Fetch and display filtered/sorted data
    fetchCarData(type, sort);
});

// Initially fetch and display all car data
fetchCarData();
