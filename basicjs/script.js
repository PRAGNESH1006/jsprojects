const inventors = [
  {
    firstName: "C. V.",
    lastName: "Raman",
    age: 82,
    city: "Bangalore",
    invention: "Discovery of the Raman Effect",
    yearBorn: 1888,
    yearDeath: 1970,
  },
  {
    firstName: "A.P.J.",
    lastName: "Abdul Kalam",
    age: 84,
    city: "Rameswaram",
    invention: "Development of India's space and missile programs",
    yearBorn: 1931,
    yearDeath: 2015,
  },
  {
    firstName: "Jagadish Chandra",
    lastName: "Bose",
    age: 78,
    city: "Kolkata",
    invention: "Crescograph",
    yearBorn: 1858,
    yearDeath: 1937,
  },
  {
    firstName: "Satyendra Nath",
    lastName: "Bose",
    age: 80,
    city: "Kolkata",
    invention: "Bose-Einstein statistics",
    yearBorn: 1894,
    yearDeath: 1974,
  },
  {
    firstName: "Vikram",
    lastName: "Sarabhai",
    age: 52,
    city: "Ahmedabad",
    invention: "Father of the Indian space program",
    yearBorn: 1919,
    yearDeath: 1971,
  },
  {
    firstName: "M.",
    lastName: "Visvesvaraya",
    age: 101,
    city: "Muddenahalli",
    invention: "Harnessing water resources in India",
    yearBorn: 1861,
    yearDeath: 1962,
  },
  {
    firstName: "Aryabhata",
    lastName: "",
    age: 74,
    city: "Patna",
    invention: "Concept of zero and decimal system",
    yearBorn: 476,
    yearDeath: 550,
  },
  {
    firstName: "Srinivasa",
    lastName: "Ramanujan",
    age: 32,
    city: "Erode",
    invention: "Contributions to number theory and infinite series",
    yearBorn: 1887,
    yearDeath: 1920,
  },
  {
    firstName: "Salim",
    lastName: "Ali",
    age: 91,
    city: "Mumbai",
    invention: "Bird conservation",
    yearBorn: 1896,
    yearDeath: 1987,
  },
  {
    firstName: "Homi J.",
    lastName: "Bhabha",
    age: 57,
    city: "Mumbai",
    invention: "Father of the Indian nuclear program",
    yearBorn: 1909,
    yearDeath: 1966,
  },
];

const names = [
  "Alice",
  "Michael",
  "Emily",
  "Daniel",
  "Sarah",
  "Christopher",
  "Jessica",
  "Kevin",
  "Samantha",
  "Matthew",
  "Amanda",
  "Joshua",
  "Ashley",
  "David",
  "Jennifer",
  "Andrew",
  "Nicole",
  "Justin",
  "Lauren",
  "Brandon",
  "Elizabeth",
  "Ryan",
  "Taylor",
  "Jacob",
  "Brittany",
  "Tyler",
  "Rachel",
  "Eric",
  "Olivia",
  "Nicholas",
];

const people = [
  "Alice Johnson",
  "Michael Brown",
  "Emily Martinez",
  "Daniel Lee",
  "Sarah Thompson",
  "Christopher Davis",
  "Jessica Taylor",
  "Kevin Rodriguez",
  "Samantha Wilson",
  "Matthew Anderson",
  "Amanda Garcia",
  "Joshua Hernandez",
  "Ashley Thomas",
  "David Perez",
  "Jennifer Lewis",
  "Andrew White",
  "Nicole Hall",
  "Justin Young",
  "Lauren Moore",
  "Brandon Clark",
  "Elizabeth King",
  "Ryan Martinez",
  "Taylor Baker",
  "Jacob Harris",
  "Brittany Nelson",
  "Tyler Green",
  "Rachel Allen",
  "Eric Carter",
  "Olivia Scott",
  "Nicholas Wright",
];

let fiftys = inventors.filter(
  (inventer) => inventer.yearBorn >= 1500 && inventer.yearBorn < 1900
);
// console.table(fiftys);

let fistName = inventors.map((invent) => invent.firstName);
// console.table(fistName);

const shortName = inventors.sort((a, b) => {
  // if (a.age > b.age) {
  //   return 1;
  // } else {
  //   return -1;
  // }
  return a.age > b.age ? 1 : -1;
});
// console.table(shortName);

const newBaseName = names.sort();
// console.table(newBaseName);

const newPeople = people.sort();
// console.table(newPeople);
const kbj = people.sort((a, b) => {
  const [aFirst, aLast] = a.split(" ");
  const [bFirst, bLast] = b.split(" ");
  if (aLast > bLast) {
    return 1;
  } else if (aLast < bLast) {
    return -1;
  } else {
    if (aFirst > bFirst) {
      return 1;
    } else if (aFirst < bFirst) {
      return -1;
    } else {
      return 0;
    }
  }
});
console.log(kbj);
