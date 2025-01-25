async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  let dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    const userList = document.getElementById("ul");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
    dataContainer.innerHTML = "";
    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "Error loading user data.";
    console.error("Failed to load user data");
  }
  document.addEventListener("DOMContentLoaded", function () {
    fetchUserData();
  });
}
