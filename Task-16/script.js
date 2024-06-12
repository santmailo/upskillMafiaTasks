const dataStudents = [
  {
    Name: "Alice Smith",
    Marks: 87,
    grade: 10,
    Address: "123 Main St, Cityville",
  },
  {
    Name: "Bob Johnson",
    Marks: 72,
    grade: 9,
    Address: "456 Elm St, Townsburg",
  },
  {
    Name: "Charlie Brown",
    Marks: 95,
    grade: 11,
    Address: "789 Oak St, Villageton",
  },
  {
    Name: "Biana Rodriguez",
    Marks: 81,
    grade: 10,
    Address: "101 Pine St, Hamletville",
  },
  {
    Name: "Crica Davis",
    Marks: 68,
    grade: 9,
    Address: "202 Maple St, Countryside",
  },
  {
    Name: "Crank Wilson",
    Marks: 90,
    grade: 11,
    Address: "303 Cedar St, Suburbia",
  },
  {
    Name: "Aina Martinez",
    Marks: 79,
    grade: 10,
    Address: "404 Birch St, Townsville",
  },
  {
    Name: "Carry Thompson",
    Marks: 83,
    grade: 9,
    Address: "505 Walnut St, Riverside",
  },
  {
    Name: "Bvy White",
    Marks: 88,
    grade: 11,
    Address: "606 Spruce St, Hilltown",
  },
];

const cards = dataStudents.map((item) => {
  const name = item.Name;
  const marks = item.Marks;
  const grade = item.grade;
  const address = item.Address;

  return `<div class="card">
        <p>Student Name: <span>${name}</span></p>
        <p>Marks: <span>${marks}</span></p>
        <p>Class: <span>${grade}</span></p>
        <p>Location: <span>${address}</span></p>
      </div>`;
});

let div = cards.join("");
let cardContainer = document.getElementById("card-container");
cardContainer.innerHTML = div;

function onSubmit() {
  const search = document.getElementById("userSearch").value;
  // console.log(search);
  const searchResult = dataStudents.filter((student) => {
    if (
      student.Name.substring(0, search.length).toLowerCase() ==
      search.toLowerCase()
    ) {
      return true;
    }
  });

  const showSearchResult = searchResult.map((student) => {
    const name = student.Name;
    const marks = student.Marks;
    const grade = student.grade;
    const address = student.Address;

    return `<div class="card">
        <p>Student Name: <span>${name}</span></p>
        <p>Marks: <span>${marks}</span></p>
        <p>Class: <span>${grade}</span></p>
        <p>Location: <span>${address}</span></p>
      </div>`;
  });
  div = showSearchResult.join("");
  let h1 = document.getElementById("searchResult");
  h1.innerHTML = `Search Result for ${search}...`;
  console.log(h1);
  cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = div;
}
