var randomNum = [];
for (var i = 0; i < 5; i++) {
  randomNum.push(Math.floor(Math.random() * 100) + 2); //+2 incase it give a 0
}
console.log(randomNum);
​
var pokemn = new Promise(function (resolve, reject) {
  var sumH = 0;
  for (var j = 0; j < randomNum.length; j++) {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + randomNum[j],
      type: 'GET',
      dataType: "json",
      success: function (data) {
​
        sumH += data.height;
        console.log(data.height);
​
      },
      async: false  //without this sum was not adding
    });
  }
  console.log("---" + sumH);
​
  if (sumH % 2 === 0) {
    resolve(sumH);
  } else{
    reject(sumH);
  }
});
​
​
var checkPromise = function () {
  pokemn
    .then(function (fulfilled) {
      alert("Promise is resolved as sum of height is even : " + fulfilled);
    })
    .catch(function (error) {
      alert("Promise is rejected as sum of height is odd :" + error);
    });
};
​
checkPromise();