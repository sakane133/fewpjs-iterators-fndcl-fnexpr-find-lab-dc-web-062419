const testVar = {}

function superbowlWin(array){let x = array.find(
   function(s){
    return s.result === "W"
  })
  return x.year
}