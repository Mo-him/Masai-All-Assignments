# what is the difference between Props and State?

Ans- The difference between props and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component whereas state is managed within the component.

# Explain the useState API?

Ans- useState is like a hook which is change and the update in dispatcher by dispatcher function by use of useState.

In which two variables let first and second. first we decalare first variable with help of useSate like gives a initial value it is initial state and then update by second variable like dispatcher functing change in first variable by using second variable

ex-
const [first, second] = React.useState("initial state");

# Explain the how map, filter, reduce work?

Ans- map --> In the map function, The callback runs for each value in the array and returns each new value in the resulting array.

filter --> In the filter function, What if you have an array, but only want some of the elements in it? That’s where .filter() comes in!
            like here we can filter the value by using filter here we use condition. in filter function function then return only that elements.

            ex- 

            var rebels = pilots.filter(function (pilot) {
                return pilot.faction === "Rebels";
            });

reduce --> In the reduce function, we add values in array of objects by helping accumulator in reduce function 

        ex-

        var totalYears = pilots.reduce(function (accumulator, pilot) {
            return accumulator + pilot.years;
        }, 0);


# Create your own map, filter, reducer methods and attach it to an array using prototype chain ( Unit 3 / JS-201 concept ) use this as reference ?

Ans- 

# map -> 

// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
[20, 24, 56, 88]


            var officersIds = officers.map(function (officer) {
                return officer.id
            });

# reduce --> 

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];


var totalYears = pilots.reduce(function (accumulator, pilot) {
  return accumulator + pilot.years;
}, 0);



# filter

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];



var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});


var empire = pilots.filter(function (pilot) {
  return pilot.faction === "Empire";
});