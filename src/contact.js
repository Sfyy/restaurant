export function createContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("tab-content");

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("location");

  const headline = document.createElement("h2");
  headline.textContent = "Contact Us";

  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("fa-solid", "fa-phone");

  const phone = document.createElement("p");
  phone.textContent = "Phone: ";
  phone.appendChild(phoneIcon);
  phone.appendChild(document.createTextNode(" 123-456-7890"));

  const emailIcon = document.createElement("i");
  emailIcon.classList.add("fa-solid", "fa-envelope");

  const email = document.createElement("p");
  email.textContent = "Email: ";
  email.appendChild(emailIcon);
  email.appendChild(document.createTextNode(" info@fork&knife.com"));

  const locationHead = document.createElement("h2");
  locationHead.textContent = "Location:";

  const locationName = document.createElement("p");
  locationName.textContent = "Fork & Knife";

  const address = document.createElement("p");
  address.textContent = "123 Main St, Anytown, CA 12345";

  locationDiv.appendChild(locationHead);
  locationDiv.appendChild(locationName);
  locationDiv.appendChild(address);

  contactDiv.appendChild(headline);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);
  contactDiv.appendChild(locationDiv);
  return contactDiv;
}
