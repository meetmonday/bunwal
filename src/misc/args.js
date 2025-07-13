import { parseArgs } from "util";

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    help: {
      type: 'boolean',
      short: 'h'
    },
    image: {
      type: 'string',
      short: 'i',
    },
    light: {
      type: 'boolean',
      short: 'l',
      default: false
    },
    cols16: {
      type: 'string',
      default: 'darken'
    }
  },
  strict: true,
  allowPositionals: true,
});

export default values;