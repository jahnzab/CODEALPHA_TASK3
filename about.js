

    // Retrieve the username from local storage
    var username = localStorage.getItem("username");

    // Check if username exists and update the DOM
    if (username) {
        document.getElementById("username").textContent = "Welcome, " + username + "!";
    }

// SIDEBAR TOGGLE
var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
