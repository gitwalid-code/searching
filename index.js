const arr = [
  {
    name: "Jean",
    salary: 1000,
  },
  {
    name: "Akram",
    salary: 300,
  },
  {
    name: "Leila",
    salary: 700,
  },
];

arr.sort((a, b) => {
  if (a.salary > b.salary) return 1;
  if (b.salary > a.salary) return -1;
  return 0;
});

console.log(arr);
