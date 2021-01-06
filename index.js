const fs = require('fs')
const path = require('path')
const args = require('./args.js')

const replaceColor = () => {
  const str_file_theme_path = path.join(__dirname, 'theme-seti/icons/vs-seti-icon-theme.json')
  const str_file_theme = fs.readFileSync(str_file_theme_path).toString()
  const regFontColor = new RegExp(`"fontColor": ".+"`, 'g')
  const sColor = args.color
  str_file_theme_new = str_file_theme.replace(regFontColor, `"fontColor": "${sColor}"`)
  fs.writeFileSync(str_file_theme_path, str_file_theme_new)
}

const copyToPackageJson = () => {
  const s_packageJson_path = path.join(__dirname, 'theme-seti/package.json')
  const s_packageJson = fs.readFileSync(s_packageJson_path).toString()
  const o_packageJson = JSON.parse(s_packageJson)
  Object.keys(args.copyToPackageJson).forEach((key_pkgName) => {
    o_packageJson[key_pkgName] = args.copyToPackageJson[key_pkgName]
  })
  fs.writeFileSync(s_packageJson_path, JSON.stringify(o_packageJson, null, 2))
}

const wirtePackageNLS = () => {
  fs.writeFileSync(path.join(__dirname, 'theme-seti/package.nls.json'), JSON.stringify(args.packageNLS, null, 2))
}

replaceColor()
copyToPackageJson()
wirtePackageNLS()
