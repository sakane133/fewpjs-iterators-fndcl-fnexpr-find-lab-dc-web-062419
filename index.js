const testVar = {}

function superbowlWin(array){
  if (array.find(function(s) {return s.result === "W"})){ return array.find(function(s) {return s.result === 'W'}).year}
  else {
        return undefined
      }
    } 

