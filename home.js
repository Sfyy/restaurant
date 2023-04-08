export function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("tab-content");

  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("hours");

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "Welcome to Fork & Knife, where we serve up mouth-watering meals and create unforgettable dining experiences. Our chefs use only the freshest ingredients to craft each dish, and our friendly staff are here to make sure your visit is nothing short of amazing.";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Our restaurant is the perfect place for a special occasion or a night out with friends. Come join us and see why Fork & Knife is the talk of the town.";

  homeDiv.appendChild(paragraph1);
  homeDiv.appendChild(paragraph2);

  const head = document.createElement("h2");
  head.textContent = "Hours:";

  const p1 = document.createElement("p");
  p1.textContent = "Monday - Thursday: 11am - 9pm";

  const p2 = document.createElement("p");
  p2.textContent = "Friday - Saturday: 11am - 10pm";

  const p3 = document.createElement("p");
  p3.textContent = "Sunday: 12pm - 8pm";

  hoursDiv.appendChild(head);
  hoursDiv.appendChild(p1);
  hoursDiv.appendChild(p2);
  hoursDiv.appendChild(p3);

  homeDiv.appendChild(hoursDiv);

  return homeDiv;
}
