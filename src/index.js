import args from "./misc/args";
import usage from "./misc/help";
import extractors from './extractors/atlas';
import mappers from './mappers/atlas';
import demoOutput from "./helpers/demoOutput";

const main = async (args) => {
  if (args.help) return console.log(usage);
  if (Object.keys(args).length === 2) console.log('No args - Using config.json')

  const config = await Bun.file(`${Bun.env.XDG_CONFIG_HOME}/bunwal/config.json`).json();

  const imageFile = args.image === undefined ?
    config.wallpaper.path :
    args.image

  const rawColors = await extractors.magick(imageFile, 16)

  const mappedColors = mappers.pywal.run(rawColors,
    {
      scheme: args.light === true ? 'light' : 'dark',
      c16: args.cols16
    }
  )

  demoOutput(mappedColors)
}


main(args)