const fs = require('fs')
const path = require('path')

module.exports = {
  prompts: {
    name: {
      type: 'string',
      message: 'project name'
    },
    usage: {
      type: 'string',
      message: 'what is this use for'
    }
  },
  helpers: {
    pascalify: str => {
      const camelized = str.replace(/-([a-z])/g, c => c[1].toUpperCase())
      return camelized.charAt(0).toUpperCase() + camelized.slice(1)
    },
    kebabify: str => {
      return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase()
    },
    lowercase: str => str.toLowerCase()
  },
  complete(data = {}) {
    const componentName = this.helpers.kebabify(data.name)
    const from = path.join(data.destDirName, 'src/component.vue')
    const to = path.join(data.destDirName, `src/${componentName}.vue`)

    fs.renameSync(from, to)
  },
  skipInterpolation: ['.grenrc.js']
}
