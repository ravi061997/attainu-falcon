var players = [
{ name: "Roger Federer", rank: 1 },
{ name: "Rafel Nadal", rank: 2 },
{ name: "Nalbandian", rank: 12 },
{ name: "Andy Murray", rank: 14 },
{ name: "Andy Roddick", rank: 4 },
{ name: "Pete Sampras", rank: 3 },
{ name: "Rod Laver", rank: 190 },
{ name: "Andre Agassi", rank: 11 },
{ name: "Novak Djokovic", rank: 5 },
{ name: "Arthur Ashe", rank: 8 },
];

function checkTopTen(playerList) {
  var i ,n;
  n=playerList.length;
  for( i=0; i<n; i++) {
    if(playerList[1].rank<=10) {
      console.log(playerList[i].name + "" +playerList[i].rank);
    }
  }
}

checkTopTen(players);
