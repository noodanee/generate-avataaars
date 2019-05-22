const { generateRandomAvatar } = require('../generator/generateAvatar')

const avatar = generateRandomAvatar('Circle')('png', 200)

console.log(avatar)