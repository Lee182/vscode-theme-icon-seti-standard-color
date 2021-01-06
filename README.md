# vscode theme seti standard color.
This script generates an extension icon theme for vscode from vscode source extension changing all icons to the same color.


## Generate theme
### Download Folder
```
npm i -g degit
degit microsoft/vscode/extensions/theme-seti ./theme-seti
```

### run Replace Colors scirpt
Modify args.js
```
module.exports = {
  color: '#666',
  copyToPackageJson: {
    name: 'vscode-theme-seti-666',
    version: '21.1.6',
    license: 'MIT',
    publisher: 'lee182',
    repository: {
      type: 'git',
      url: 'https://github.com/Lee182/vscode-theme-seti-666'
    }
  },
  packageNLS: {
    displayName: 'Seti Desaturated #666',
    description: 'Seti theme with standard color #666 desaturated gray color',
    themeLabel: 'Seti Desaturated #666'
  }
}
```
```
$ node index.js
```


# Generate extension
$ cd theme-seti
$ vsce package
$ vsce publish
```