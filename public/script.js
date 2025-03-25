document.getElementById("applyFilters").addEventListener("click", fetchFilteredData);

async function fetchFilteredData() {
    const make = document.getElementById("makeFilter").value;
    const type = document.getElementById("typeFilter").value;
    const transmission = document.getElementById("transmissionFilter").value;
    const drivetrain = document.getElementById("drivetrainFilter").value;

    let query = `/cars?`;

    if (make !== "All") query += `make=${make}&`;
    if (type !== "All") query += `type=${type}&`;
    if (transmission !== "All") query += `transmission=${transmission}&`;
    if (drivetrain !== "All") query += `drivetrain=${drivetrain}&`;

    query = query.slice(0, -1); // Remove last "&" if present

    try {
        const response = await fetch(query);
        const carData = await response.json();
        loadCarData(carData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function loadCarData(cars) {
    const tableBody = document.getElementById("carData");
    tableBody.innerHTML = ""; // Clear previous results

    cars.forEach(car => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><img src="${car.image}" alt="${car.make}" width="100"></td>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${car.type}</td>
            <td>${car.hp}</td>
            <td>${car.torque}</td>
            <td>${car.acceleration}</td>
            <td>${car.topSpeed}</td>
            <td>${car.fuelEfficiency}</td>
            <td>${car.transmission}</td>
            <td>${car.drivetrain}</td>
            <td>${car.price.toLocaleString()}</td>
        `;

        tableBody.appendChild(row);
    });
}
