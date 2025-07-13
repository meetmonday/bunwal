import commandLineUsage from 'command-line-usage'

const sections = [
  {
    header: 'bunwal demo',
    content: 'pywal but js'
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'image',
        alias: 'i',
        typeLabel: '{underline path_to_img}',
        description: 'Image to generate palette'
      },
      {
        name: 'help',
        alias: 'h',
        type: Boolean,
        description: 'Print this usage guide.'
      },
      {
        name: 'light',
        alias: 'l',
        type: Boolean,
        description: 'Generate a light colorscheme'
      },
      {
        name: 'cols16',
        type: String,
        typeLabel: 'method',
        description: "Darken / lighten"
      }
    ]
  },
  {
    header: "Configuration file",
    content: `
    $XDG_CONFIG_HOME/bunwal/config.json
`
  }
]
const usage = commandLineUsage(sections)
export default usage;