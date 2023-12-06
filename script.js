const SPECIAL_CHARS = ["%", "*", "-", "+", "/"];
let dzialanie = "";
function calculate(button) {
  if (
    SPECIAL_CHARS.includes(button) &&
    SPECIAL_CHARS.includes(
      dzialanie[dzialanie.length - 1] && button !== "-" && button !== "+"
    )
  )
    return;

  dzialanie += button;
  document.getElementById("display").innerText = dzialanie;
}

function wynik() {
  dzialanie = eval(dzialanie);
  return (document.getElementById("display").innerText =
    parseFloat(dzialanie).toFixed(5));
}

function clearDisplay() {
  dzialanie = "";
  return (document.getElementById("display").innerText = " ");
}

function backspace() {
  dzialanie = dzialanie.substring(0, dzialanie.length - 1);
  return (document.getElementById("display").innerText = dzialanie);
}
