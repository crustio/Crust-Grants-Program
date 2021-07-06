const WkCrustSdk = require('./index')
const Config = require('./config')
const wkCrust = new WkCrustSdk(Config)

// wkCrust.uploadFileToCrust(path.resolve(__dirname, 'filePath'), resolve => {
// 	console.log(resolve)
// })

// wkCrust.getFileFromCrust('cid', resolve => {
// 	console.log(resolve)
// })

// wkCrust.getFileStatusToCrust('cid', resolve => {
// 	console.log(resolve)
// })

// wkCrust.orderRenewal('cid', 'fileSize',  resolve => {
// 	console.log(resolve)
// })
