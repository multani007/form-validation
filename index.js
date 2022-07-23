const name = document.getElementById("name");
const telephone = document.getElementById("telephone");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("nameerror");
const telerrorElement = document.getElementById("telerror");
const emailerrorElement = document.getElementById("emailerror");
var selectedVideo = document.getElementById("selectedVideo");

let price = [
  ["Psycho", 10, 9.1],
  ["Bambi", 20, 8.3],
  ["Ghost", 30, 8.5],
  ["Star Wars", 40, 8.7],
  ["Dumbo", 50, 5.6],
  ["Rain Man", 60, 8.7],
  ["Ben Hur", 70, 8.4],
  ["Spartacus", 80, 6.7],
  ["Tootsie", 90, 6.6],
  ["The Sting", 100, 5.5],
  ["Blazing Saddles", 110, 4.9],
];

form.addEventListener("submit", (e) => {
  let namemessages = [];
  let telmessages = [];
  let emailmessages = [];
  if (name.value === "" || name.value === null) {
    namemessages.push("Name Required");
  } else if (name.value.length > 20) {
    namemessages.push("Name greater than 20 digits");
  } else {
    errorElement.innerText = "";
  }
  if (namemessages.length > 0) {
    e.preventDefault();
    errorElement.innerText = namemessages.join(",");
  }

  if (telephone.value === "" || telephone.value === null) {
    telmessages.push("Telephone Number Required");
  } else if (telephone.value.length != 10) {
    telmessages.push("Telephone Number is less than 10 digits");
  } else {
    telerrorElement.innerText = "";
  }
  if (telmessages.length > 0) {
    e.preventDefault();
    telerrorElement.innerText = telmessages.join(",");
  }

  if (email.value === "" || email.value === null) {
    emailmessages.push("Email Required");
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    emailmessages.push("Email not valid");
  } else {
    emailerrorElement.innerText = "";
  }
  if (emailmessages.length > 0) {
    e.preventDefault();
    emailerrorElement.innerText = emailmessages.join(",");
  }
});

function getSelectValue() {
  var selectedValue = document.getElementById("list").value;
  selectedVideo.value = selectedValue;
  priceTag = document.getElementById("priceTag");
  tax = document.getElementById("tax");
  total = document.getElementById("total");

  for (let i = 0; i < price.length; i++) {
    if (price[i][0] === selectedVideo.value) {
      priceTag.value = price[i][1] + "$";
      tax.value = price[i][2] + "$";
      total.value = price[i][1] + price[i][2] + "$";
    }
  }
}
