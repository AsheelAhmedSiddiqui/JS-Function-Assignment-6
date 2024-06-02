function factorial(num) {
  if (num === 0) {
    return (document.getElementById("para").innerText = 1);
  } else {
    return (document.getElementById("para").innerText =
      num * factorial(num - 1));
  }
}
