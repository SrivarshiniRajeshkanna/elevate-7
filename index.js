let userContainer = document.getElementById("userContainer");
let errorDiv = document.getElementById("error");
let reloadBtn = document.getElementById("reloadBtn");
function fetchUserData() {
  userContainer.innerHTML = "";
  errorDiv.textContent = "";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Something went wrong. Status: " + response.status);
      }
      return response.json();
    })
    .then(function(data) {
      for (let i = 0; i < data.length; i++) {
        let user = data[i];
        let card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = 
          "<h3>" + user.name + "</h3>" +
          "<h4>" + user.username + "</h4>"+
          "<p><strong>Email:</strong> " + user.email + "</p>" +
          "<p><strong>Address:</strong> " + user.address.street + ", " + user.address.city + " , " + user.address.suite +"</p>";
        userContainer.appendChild(card);
      }
    })
    .catch(function(error) {
      errorDiv.textContent = "❌ Error fetching data: " + error.message;
    });
}
fetchUserData();
reloadBtn.addEventListener("click", fetchUserData);
