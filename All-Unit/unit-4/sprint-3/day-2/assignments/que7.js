let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];

  var ans = users
  .filter(function(element){
    return element.place=="Banglore";
  })
  
  .map(function(element){
    return element.firstName + " " + element.lastName;
  });
  console.log(ans);