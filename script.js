const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function capitalLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function main() {
  const h1 = document.createElement("h1");
  h1.id = "header"
  h1.innerHTML = "FREELANCERS";

  const ul = document.createElement("ul");
  ul.id = "list"
  ul.className = "list-group"

  const root = document.getElementById("root");
  root.className = "container"
  root.appendChild(h1);

  
  root.appendChild(ul)
  const list = document.getElementById("list")

  users.forEach(user => {
    //Create elements for card
    const li = document.createElement("li");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    //Assign bootstrap class names to elements
    li.className = "list-group-item col-md-3 text-center"
    card.className = "card"
    cardBody.className = "card-body"
    cardTitle.className = "card-title"
    cardText.className = "card-text"
    
    cardTitle.innerHTML = capitalLetter(user.occupation);
    cardText.innerHTML = `${user.name} - ${user.age}`

    list.appendChild(li)
    li.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  })
}

//call the main function
main();