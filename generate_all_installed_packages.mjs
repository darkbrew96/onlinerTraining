import fs from 'fs'

const obj = JSON.parse(fs.readFileSync('package.json', 'utf8'));
let dependencies = obj['dependencies']

let packs = Object.keys(dependencies)
fs.writeFileSync('installed_packages.txt', '')
for (let pack of packs){
    let res = (pack +" - " + dependencies[pack] + '\n')

    fs.appendFileSync('installed_packages.txt', res )
}
dependencies = obj['devDependencies']
let devpacks = Object.keys(dependencies)
for (let devpack of devpacks){
    let res = (devpack +" - " + dependencies[devpack] + '\n')

    fs.appendFileSync('installed_packages.txt', res )
}