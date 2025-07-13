import cm from "../helpers/colorMods";

class mapColors {
  palette = []
  result = {}
  conf = {
    scheme: 0, // 0 - dark | 1 - light
    c16: 0, // 0 - darken | 1 - lighten,
    contrast: 1.0, //WIP
    saturate: 1.0, //WIP
  }

  constructor(palette, scheme = 'dark', c16 = 'darken') {
    this.palette = palette;
    this.conf.scheme = scheme == 'dark' ? 0 : 1;
    this.conf.c16 = c16 == 'darken' ? 0 : 1;
  }

  generate() {
    return this.conf.scheme ? this.shade16Light() : this.shade16Dark()
  }


  shade16Light() {
    let r = this.palette.slice();

    r[7] = cm.darken(r[0], 0.5)
    r[8] = cm.darken(r[0], 0.25)

    // darken
    if (!this.conf.c16) {
      for (let i = 1; i < 7; i++) r[i] = cm.darken(r[i], 0.25)
      r[7] = cm.darken(r[0], 0.5);
      for (let i = 9; i < 16; i++) r[i] = cm.darken(r[i - 8], 0.25);
      r[15] = cm.darken(r[0], 0.75);
    }
    else { // lighten
      for (let i = 9; i < 16; i++) r[i] = cm.brighten(this.palette[i - 8], 0.25);
      r[15] = cm.darken(r[0], 0.75);
    }

    return r;
  }

  shade16Dark() {
    let r = this.palette.slice();

    r[7] = cm.saturate(cm.brighten(r[0], 0.55), 0.05)
    r[8] = cm.saturate(cm.brighten(r[0], 0.35), 0.1)
    r[15] = cm.brighten(r[0], 0.75)

    if (!this.conf.c16) { // darken
      for (let i = 9; i < 15; i++) r[i] = cm.darken(this.palette[i-8], 0.25);
    } 
    else { // lighten
      for (let i = 1; i < 7; i++) r[i] = cm.darken(r[i], 0.25)
    }

    return r;
  }
}

const run = (colors, { scheme, c16 }) => {
  // console.log(scheme, c16)
  return new mapColors(colors, scheme, c16).generate()
}

export default {
  run
}