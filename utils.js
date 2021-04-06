function pxToNum(px) {
  return +px.split("px")[0];
}

function numToPx(num) {
  if (typeof num === "String") return;
  return num + "px";
}
