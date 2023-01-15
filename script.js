document.getElementById("user-icon").addEventListener("mouseover", showUserDropdown);
document.getElementById("user-icon").addEventListener("mouseout", hideUserDropdown);
document.getElementById("user-section-dropdown").addEventListener("mouseover", showUserDropdown);
document.getElementById("user-section-dropdown").addEventListener("mouseleave", hideUserDropdown);

function showUserDropdown(){
  document.getElementById("user-section-dropdown").style.display = "flex";
}
function hideUserDropdown(){
  document.getElementById("user-section-dropdown").style.display = "none";
}