let PHI = (1 + Math.sqrt(5)) / 2;
// for (let pct = 0; pct < 195; pct += .5) {
//     let hr = `<div class='line' style='width:${pct}%; transform: rotate(${pct*PHI}deg); border-bottom: 1.25px solid rgba(0, 0, 0, .1); '>`;
//     document.getElementById("net").innerHTML += hr;
// }
for (let pct1 = 0; pct1 < 195; pct1 += .5) {
    let hr1 = `<div class='line' style='width:${pct1}%; transform: rotate(${pct1*PHI}deg); border-bottom: 1.25px solid rgba(0, 0, 0, .15); '>`;
    document.getElementById("net2").innerHTML += hr1;
}