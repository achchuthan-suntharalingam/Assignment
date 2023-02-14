let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 9.782950, lng: 80.200870},
    zoom: 13,
  });
}

window.initMap = initMap;

// form
const form = document.querySelector("#form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const fname = form.elements.fname.value;
  const lname = form.elements.lname.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const message = form.elements.message.value;
  
  if (!fname || !lname || !email || !phone || !message) {
    alert("Please fill in all fields");
    return;
  }
  
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }
  else if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number");
    return;
  }
  
  alert(`Successfully Submitted`);
});