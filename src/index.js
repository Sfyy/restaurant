import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createMenuItem } from "./menu.js";
import { createContact } from "./contact.js";

const content = document.querySelector("#content");
const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");

// Set the initial tab to 'home'
let activeTab = homeTab;

// Create a function to switch tabs
function switchTab(tab) {
  activeTab.classList.remove("active");
  tab.classList.add("active");
  activeTab = tab;
  content.innerHTML = "";

  if (tab === homeTab) {
    content.appendChild(createHome());
  } else if (tab === menuTab) {
    content.appendChild(createMenu());
    content.appendChild(createMenuItem());
  } else if (tab === contactTab) {
    content.appendChild(createContact());
  }
}

// Add event listeners to each tab
homeTab.addEventListener("click", () => {
  if (activeTab !== homeTab) {
    switchTab(homeTab);
  }
});

menuTab.addEventListener("click", () => {
  if (activeTab !== menuTab) {
    switchTab(menuTab);
  }
});

contactTab.addEventListener("click", () => {
  if (activeTab !== contactTab) {
    switchTab(contactTab);
  }
});

// Initialize the page with the 'home' tab selected
switchTab(homeTab);
