config = {
  "conditions": [
    "F: DrawLine(D, D, D)",
    "+: Turn(D)",
    "-: Turn(-D)",
    "[: Save()",
    "]: Load()"
  ],
  "rules": [
    //"X: X+YF+",
    //"Y: -FX-Y"
    "X: F[+X]F[-X]+X",
    "F: FF"
  ],
  //"axiom": "FX",
  //"angle": 90,
  "axiom": "X",
  "angle": 22.5,
  "lineWidth": 2,
  "lineLength": 5,
  "iterations": 5,
  "color": "rgb(190, 128, 255)"
}