import chroma from "chroma-js";

const darken = (color, amount) => chroma(color).darken(amount * 1).hex()
const brighten = (color, amount) => chroma(color).brighten(amount * 1).hex()
const saturate = (color, amount) => chroma(color).saturate(amount * 1).hex()


export default {
  darken,
  brighten,
  saturate
}