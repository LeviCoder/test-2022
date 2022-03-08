
function dateFormat(arr) {
  if(typeof arr === "string") {
    arr = arr.split(":");
  }
  return arr[0] % 12 + ":" + arr[1] + (arr[0] < 12 ? " AM" : " PM");
}
function setTotal(mins, start, end) {
  let total = document.getElementById("total");
  if(start !== undefined) {
    total.innerHTML = "You started at "+start+" and ended at "+end+", for a total of " + mins + " minutes.";
  } else {
    total.innerHTML = "You spent a total of " + mins +" minutes."
  }
}
function enterTimes() {
  let start = document.getElementById("start").value.split(":");
  let end = document.getElementById("end").value.split(":");

  let mins = (end[0]*60 + ~~end[1]) - (start[0]*60 + ~~start[1]);

  setTotal(mins, dateFormat(start), dateFormat(end));
}

function enterHours() {

  let mins = ~~(document.getElementById("hours").value*60);

  setTotal(mins);
}
