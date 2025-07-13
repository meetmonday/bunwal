import magick from './extractors/magick'
import mapColors from './mapper'

const main = async () => {
  const config = await Bun.file(`${Bun.env.XDG_CONFIG_HOME}/bunwal/config.json`).json()

  console.log(config.wallpaper.path)
  const rawPalette = await magick(config.wallpaper.path, 16)
  
  const res = new mapColors(rawPalette, 'light', "darken").generate();

  for(let i = 0; i < 8; i++) {
    console.log(
      Bun.color(res[i], 'ansi'), "████", i, res[i],
      Bun.color(res[i+8], 'ansi'), "████", i+8, res[i+8]
  )
  }
}

main()