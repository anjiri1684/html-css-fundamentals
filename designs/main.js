let currency = prompt("Which currency would you like to convert");
if (currency === "dollar") {
  let amount = Number(prompt("Enter amount"));
  alert(amount * 130);
} else if (currency === "euro") {
  let amount = Number(prompt("Enter amount"));
  alert(amount * 230);
} else {
  alert(
    "Our system at the moment only suppot dollar to ksh and euro to cash..keep on checking to other currencies converter in future"
  );
}
