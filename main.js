// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  // We're going to solve this by breaking the problem into three parts.
  // Programmers like automating things, we'll populate the HTML drop down options using code,
  // instead of having to type out all the values.
  // Create a function that does the some math and gives us the new weight.
  // Then create a function that responds when the user clicks on the button.
  
  // 1. Populate the dropdown element with the data found in the planets array.
  // The value of each option should be the planet's name.
  // Use the following built-in methods:
  // `.forEach` `document.createElement` `document.getElementById` `.appendChild`
// Loops throught the array and only selects the first item in each array
for (var i = 0; i < planets.length; i++) {
    var select = document.getElementById("planets");//Get dropdown from the DOM
    var option = document.createElement("OPTION"),
      txt = document.createTextNode(planets[i][0]);
    option.appendChild(txt);
    option.setAttribute("value", planets[i][0]);
    select.insertBefore(option, select.lastChild);
}

  
function calculateWeight(weight, planetName) {
    // 2. Write the code to return the correct weight
      var planetName = document.getElementById("planets").selectedIndex;//this is where Michael says code needs work
      var planetWeight = planets[planetName][1];//grabs index of selected planet
      var userWeight = document.getElementById("user-weight").value;
      var newWeight  = (userWeight * planetWeight);
      return newWeight
    };

  function handleClickEvent(e) {
  
    // 3. Create a variable called userWeight and assign the value of the user's weight.
  var userWeight = document.getElementById("user-weight").value;//works--returns user input weight
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down
  var planetName = document.getElementById("planets").value;//works--returns the selected planets name
    // 5. Create a variable called result and assign the value of the new calculated weight.
  var result = calculateWeight();//works--grabs the weight from above function
    // 6. Write code to display the message shown in the screenshot.
  var output = document.getElementById("output").innerHTML = ("If you were on " + planetName + ", you would weigh " + result + "lbs!");
  }
  
  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
    document.getElementById('calculate-button').onclick = function() {
    handleClickEvent();
  }

  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)


    
  