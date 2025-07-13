import chroma from "chroma-js";

function darken(color, amount) {
  return chroma(color).darken(amount * 2).hex()
}

function brighten(color, amount) {
  return chroma(color).brighten(amount * 2).hex()
}


export default {
  darken,
  brighten
}