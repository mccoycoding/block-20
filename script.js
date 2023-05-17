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

function main() {
  const h1 = document.createElement("h1");
  h1.id = "header"
  h1.innerHTML = "FREELANCERS";

  const ul = document.createElement("ul");
  ul.id = "list"

  const root = document.getElementById("root");
  root.appendChild(h1);

  
  root.appendChild(ul)
  const list = document.getElementById("list")

  users.forEach(user => {
    const li = document.createElement("li");
    li.innerHTML = user.name
    list.appendChild(li);
  })
}

//call the main function
main();