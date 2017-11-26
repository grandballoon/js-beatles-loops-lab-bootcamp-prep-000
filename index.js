function theBeatlesPlay (musicians, instruments) {
  var whoPlays = [];
  for (let i = 0; i<4; i++) {
    whoPlays.push(`${musicians[i]} plays ${instruments[i]}`)

  }
      return whoPlays;
}

function johnLennonFacts (facts) {
var i = 0;
  while (i < 4) {
    facts[i]=`${facts[i]}!!!`;
      ++i;
  }
  return facts;
}
