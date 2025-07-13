import chroma from "chroma-js";
import cm from "./helpers/colorMods";

export default class mapColors {
  palette = []
  result = {}
  conf = {
    scheme: 0, // 0 - dark | 1 - light
    c16: 0, // 0 - darken | 1 - lighten,
    contrast: 1.0,
    saturate: 1.0,
  }

  constructor(palette, scheme = 'dark', c16 = 'darken') {
    this.palette = palette;
    this.conf.scheme = scheme == 'dark' ? 0 : 1;
    this.conf.c16 = c16 == 'darken' ? 0 : 1;
  }

  generate() {
    console.log(this.conf)
    return this.conf.scheme ? this.shade16Light() : this.shade16Dark()
  }


  shade16Light() {
    let r = this.palette.slice();

    // r[7] = chroma(r[0]).darken(.5).hex();
    // r[8] = chroma(r[0]).darken(.25).hex();

    r[7] = cm.darken(r[0], 0.5)
    r[8] = cm.darken(r[0], 0.25)

    // darken
    if (!this.conf.c16) {
      // for (let i = 1; i < 7; i++) r[i] = chroma(r[i]).darken(0.25).hex();
      // r[7] = chroma(r[0]).darken(0.5).hex();
      // for (let i = 9; i < 16; i++) r[i] = chroma(this.palette[i - 8]).darken(0.25).hex();
      // r[15] = chroma(r[0]).darken(0.75).hex();

      for (let i = 1; i < 7; i++) r[i] = cm.darken(r[i], 0.25)
      r[7] = cm.darken(r[0], 0.5);
      for (let i = 9; i < 16; i++) r[i] = cm.darken(r[i - 8], 0.25);
      r[15] = cm.darken(r[0], 0.75);

    }
    else { // lighten
      for (let i = 9; i < 16; i++) r[i] = chroma(this.palette[i - 9]).brighten(0.25).hex();
      r[15] = chroma(r[0]).darken(0.75).hex();
    }

    return r;
  }

  shade16Dark() {
    let r = this.palette.slice();

    r[7] = chroma(r[0]).brighten(.55).saturate(.05).hex();
    r[8] = chroma(r[0]).brighten(.35).saturate(.1).hex();
    r[15] = chroma(r[0]).brighten(.75).hex()

    if (!this.conf.c16) { // darken
      for (let i = 1; i < 7; i++) r[i] = chroma(r[i]).darken(.25).hex();
      for (let i = 9; i < 15; i++) r[i] = chroma(r[i-8]).darken(.25).hex();
    } 
    else { // lighten
      for (let i = 1; i < 7; i++) r[i] = chroma(r[i]).brighten(0.25).saturate(.40).hex();
      for (let i = 9; i < 15; i++) r[i] = chroma(r[i-8]).brighten(.25).saturate(.4).hex();
    }

    return r;
  }
}