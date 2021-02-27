function getJSON(url) {
    return fetch(url)
      .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
            return response.json();
            }
  })
  .catch(function(error) {
    console.log(error);
  });
  }
  function getShips(url) {
    return getJSON(url);
  }
  
  function renderShipList(ships, shipListElement) {
    const list = shipListElement.children[1];
    list.innerHTML = "";
    ships.forEach(function (ship) {
      let listItem = document.createElement("tr");
      listItem.innerHTML = `
      <td><a href="${ship.url}">${ship.name}</a></td>
      <td>${ship.length}</td>
      <td>${ship.crew}</td>
      `;
      
      listItem.addEventListener("click", function (event) {
        event.preventDefault();
        getShipDetails(ship.url);
      });
      
      list.appendChild(listItem);
    });
  }
  
  function renderShipDetails(shipData) {
    console.log(shipData);
    //const shipName = document.getElementById("shipName");
    document.getElementById("shipName").innerHTML = ("Name: " + shipData.name);
    document.getElementById("shipModel").innerHTML = ("Model: " + shipData.model);
    document.getElementById("shipManufacturer").innerHTML = ("Manufacturer: " + shipData.manufacturer);
    document.getElementById("shipCost").innerHTML = ("Cost in Credits: " + shipData.cost_in_credits);
    document.getElementById("shipLength").innerHTML = ("Length: " + shipData.length);
  }
  
  function showShips(url = "https://swapi.dev/api/starships/") {
    getShips(url).then(function (data) {
      console.log(data);
      const results = data.results;
      
      const shipListElement = document.getElementById("shipList");
      renderShipList(results, shipListElement);
      
      if (data.next) {
        const nextBtn = document.getElementById("next");
        nextBtn.onclick = () => {
          showShips(data.next);
        };
      }
      if (data.previous) {
        const prevBtn = document.getElementById("prev");
        prevBtn.onclick = () => {
          showShips(data.previous);
        };
      }
    });
  }
  
  function getShipDetails(url) {
    getShips(url).then(function (data) {
      renderShipDetails(data);
    });
  }
  showShips();