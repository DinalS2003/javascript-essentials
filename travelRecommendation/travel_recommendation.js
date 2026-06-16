const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

let travelData = {};

fetch("travel_recommendation_api.json")
.then(response => response.json())
.then(data => {
    travelData = data;
    console.log(data);
});

function displayItems(items) {

    results.innerHTML = "";

    items.forEach(item => {

        results.innerHTML += `
        <div class="card">
            <img src="${item.imageUrl}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>
        `;
    });
}

searchBtn.addEventListener("click", () => {

    let keyword = searchInput.value.toLowerCase();

    if(keyword.includes("beach")){
        displayItems(travelData.beaches);
    }
    else if(keyword.includes("temple")){
        displayItems(travelData.temples);
    }
    else if(keyword.includes("country")){
        displayItems(travelData.countries);
    }
    else{
        results.innerHTML =
        "<h2>No recommendations found</h2>";
    }
});

clearBtn.addEventListener("click", () => {

    searchInput.value = "";
    results.innerHTML = "";
});