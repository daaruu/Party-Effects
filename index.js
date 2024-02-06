import party from "party-js";

document.querySelector(".button").addEventListener("click", function (e) {
    party.confetti(this);
});

party.confetti(runButton, {
    count: party.variation.range(20, 40),
    shapes: ["star", "roundedSquare"]
});

party.sparkles(runButton, {
    color: Color.fromHsl(50, 100, random.randomRange(55, 500))
});