const { Keyring } = require('@polkadot/keyring')
/**
 * Send tx to crust network
 * @param krp On-chain identity
 * @param tx substrate-style tx
 * @returns tx already been sent
 */
exports.sendTx = async function sendTx(krp, tx) {
	return new Promise((resolve, reject) => {
		tx.signAndSend(krp, ({ events = [], status }) => {
			console.log( `  ↪ 💸 [tx]: Transaction status: ${status.type}, nonce: ${tx.nonce}`)
			if (status.isInvalid || status.isDropped || status.isUsurped || status.isRetracted) {
				reject(new Error('Invalid transaction.'));
			} else {
				// Pass it
			}
			if (status.isInBlock) {
				events.forEach(({ event: { method, section } }) => {
					if (section === 'system' && method === 'ExtrinsicFailed') {
						conso.log(`  ↪ 💸 ❌ [tx]: Send transaction(${tx.type}) failed.`);
						// Error
						resolve(false);
					} else if (method === 'ExtrinsicSuccess') {
						console.log( `  ↪ 💸 ✅ [tx]: Send transaction(${tx.type}) success.`)
						// success
						resolve(true);
					}
				});
			} else {
				// Pass it
			}
		}).catch(e => {
			reject(e);
		});
	});
}

/**
 * Load keyring pair with seeds
 * @param seeds Account's seeds
 */
exports.loadKeyringPair = function loadKeyringPair(seeds) {
	const kr = new Keyring({
		type: 'sr25519',
	});
	const krp = kr.addFromUri(seeds);
	return krp;
}
exports.delay = async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}