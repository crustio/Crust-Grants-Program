const { create, globSource, urlSource } = require('ipfs-http-client')
const { typesBundleForPolkadot, crustTypes } = require('@crustio/type-definitions')
const { ApiPromise, WsProvider } = require('@polkadot/api')
const { sendTx, loadKeyringPair, delay } = require('./utils')
const WkCrustSdk = function (config) {
	this.seeds = config.seeds
	this.chain_ws_url = config.chain_ws_url
	this.ipfsApi = create(config.ipfsApi)
	this.uploadFileToCrust = async function (fileContent, callBack) {
		let api = new ApiPromise({
			provider: new WsProvider(this.chain_ws_url),
			typesBundle: typesBundleForPolkadot,
		});
		api = await api.isReady;
		let krp = await loadKeyringPair(this.seeds);
		const fileInfo = await this.addFile(this.ipfsApi, fileContent).then()
		const poRes = await this.placeOrder(api, krp, fileInfo.cid, fileInfo.size, 0)
		if (callBack) {
			if (!poRes) {
				callBack(false)
			} else {
				callBack(fileInfo)
			}
		}
	}
	this.getFileFromCrust = async function (cid, callBack) {
		let edata = []
		for await (const chunk of this.ipfsApi.cat(cid)) {
			edata.push(chunk)
		}
		if (callBack) {
			callBack(edata)
		}
	}
	this.getFileStatusToCrust = async function (cid, callBack) {
		let api = new ApiPromise({
			provider: new WsProvider(this.chain_ws_url),
			typesBundle: typesBundleForPolkadot
		})
		api = await api.isReady
		const orderState = await this.getOrderState(api, cid);
		if (callBack) {
			callBack(JSON.stringify(orderState))
		}
	}
	this.orderRenewal = async function (cid, fileSize, callBack) {
		let api = new ApiPromise({
			provider: new WsProvider(this.chain_ws_url),
			typesBundle: typesBundleForPolkadot,
		});
		api = await api.isReady;
		let krp = await loadKeyringPair(this.seeds);
		const poRes = await this.placeOrder(api, krp, cid, fileSize, 0)
		console.log(poRes, 'poRes')
		const orderState = await this.getOrderState(api, cid);

		if (callBack) {
			if (!poRes) {
				callBack(false)
			} else {
				callBack(JSON.stringify(orderState))
			}
		}
	}
	this.placeOrder = async function placeOrder(api, krp, fileCID, fileSize, tip) {
		await api.isReadyOrError;
		const pso = await api.tx.market.placeStorageOrder(fileCID, fileSize, tip);
		const txRes = JSON.parse(JSON.stringify((await sendTx(krp, pso))));
		return JSON.parse(JSON.stringify(txRes));
	}
	this.getOrderState = async function getOrderState(api, cid) {
		await api.isReadyOrError;
		return await api.query.market.files(cid);
	}
	this.addFile = async function addFile(ipfsPro, fileContent) {
		const cid = await ipfsPro.add(
			fileContent,
			{ progress: (prog) => console.log(`Add received: ${prog}`) }
		);
		const fileStat = await ipfsPro.files.stat("/ipfs/" + cid.path);
		return {
			cid: cid.path,
			size: fileStat.cumulativeSize
		};
	}
}

module.exports = WkCrustSdk