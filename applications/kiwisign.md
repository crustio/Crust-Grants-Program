# KiwiSign

### Overview

KiwiSign is an open-source, decentralized and privacy-preserving contract signature platform. 

### Project Details

The [SkyeKiwi Protocol]([https://github.com/crustio/Crust-Grants-Program/pull/9](https://github.com/crustio/Crust-Grants-Program/pull/9)) developed by the SkyeKiwi team is a secret sharing protocol that transfer files encrypted over the public IPFS internet and we are building our first application with the SkyeKiwi Protocol in form of a contract signature platform. 

In the SkyeKiwi Protocol, a file will be read in byte stream and symmetrically encrypted by a sealing key. The sealing key along with some other metadata will be packed into a binary format and will be divided into multiple parts and set a threshold needed to recover. Meanwhile, all parts are encrypted with the public key of the desired recipients and no information of the public keys are kept by default. The sealing key is the most important part of such a cryptographic schema. It's a 32 bytes random number generated on the file creator's side. It's multi-functional as it acting as both a symmetric encryption key and a shared private key of a public-key encryption schema.

Therefore, by default, for a file recipient have no information of other recipients, and they can prove that they have access to the file by signing a message with the shared private key. 

We are leveraging these properties for KiwiSign to be a privacy-preserving decentralized contract signature platform, with some extra features built-in. 

### Creating a contract

The contract creator will connect their wallet through the web extension of their choice to inject a wallet into the DApp. They will check for a few options: whether they want to pay upfront for all recipients' transaction fees or whether they want to see the under-hood process for curiosity. Later, they will be asked to upload the contract as a PDF file and submit a list of all recipients. Finally, an estimation of all fees collected and finish the process. The DApp will generate a sharable link looking like: "https://sign.skye.kiwi/signature/0x874632", while "0x874632" is the ID of the contract. The smart contract will record the CID of the metadata used to recover the file and the public address derived from the sealing key. The contract creator will then share the link to all recipients however they want. 

### Proof-of-Agreement

When a recipient receives a contract and if they is a desired recipient, they should have access to the sealing key and able to download the PDF file. If they want to generate a proof of agreement of the contract, they will sign a signature in the format of “contract_id+address” with the sealing key. Because the smart contract has record the public key derived from the sealing key, the smart contract should be able to verify that signature and send the recipient an NFT as “KiwiSignPoA” with URI storing a hash of the contract ID and the public address of themself. 

### Accord Management for Contract Creator

The contract creator is able to check how many recipients have signed the contract by the inventory of all recipients. 

### Meta-transaction & Payment 

We believe that only the contract creator should be charged, so that we will plug KiwiSign into a meta-transaction network and, by default, the contract creator will be responsible for all estimated charge for all recipients. Using meta-transaction will be optional and contract creator can opt-out of using this service. 

It might be easier to receive payments in a fixed price by the native network currencies. We won't be sure of how exactly this is gonna work. It will be a conversation to have with the desired network to deploy the smart contract onto. 

### Privacy

Elements for privacy as we have considered are:

- Content of the contract
- Number of recipients of the contract
- Identities of the recipients of the contract
- PoA of the contract

For:

1. Contract creators: have access to all these information.
2. Recipients: have access to the content of the contract. Information of other recipients is not available on chain but can be included in the content of the contract. Beyond that, the recipients have access to information as outlined in “3” as anyone who is not in the contract. 
3. Anyone not in the contract: have no access to the content of the contract nor the recipients of the contract. However, if given a contract_id and the recipients’ public address, they can prove their PoA of the contract. 

### Ecosystem Fit

The Crust Network is a critical part of KiwiSign and persists the data of the contracts. We believe KiwiSign will be a good use case of the Crust Storage Network. 

## Team

### Team members

- Song Zhou (Full stack developer) [https://github.com/RoyTimes](https://github.com/RoyTimes)
- Zoe Sun (Lead Designer)
- ... More to be hired

### Contact

- **Contact Name:** Song Zhou (song.zhou@skye.kiwi)

### Legal Structure

- No legal entity yet

### Team's experience

Besides private work for companies that cannot be shared, a password manager based on the SkyeKiwi protocol SkyePass is now officially supported by the Web3 Foundation Grant Program. Creator of the SkyeKiwi-Protocol

### Team Code Repos

- [https://github.com/skyekiwi/](https://github.com/skyekiwi/)

## Development Roadmap

### Overview

- **Total Estimated Duration:** 6 weeks
- **8Full-time equivalent (FTE):** 2 FTE
- **Total Costs:** $11,400 (+ \$ 16,600 payable by the smart contract platform )

### Milestone 1 — Version 0.1

- **Estimated Duration:** 6 Weeks
- **FTE:** 2
- **Costs:** $11,200 (+ \$5,600 payable by the smart contract platform)

At this stage, contracts are PDF files ready to be downloaded but not be able to be modified. 

| Number | Deliverable                 | Specification                                                |
| ------ | --------------------------- | ------------------------------------------------------------ |
| 0a.    | License                     | Apache 2.0                                                   |
| 0b.    | Documentations & Articles   | A guideline of how to run and test all functionalities described below. Articles with shout out to Crust. |
| 1.     | SkyeKiwi Protocol - Browser | Modified version of the SkyeKiwi Protocol to work in browser & take in FormData instead of files & Full browser compatibility |
| 2.     | Smart Contract              | Smart Contract to verify signature & do meta-tx              |
| 3.     | Web App                     | A Vue.js Web App for users to interact                       |

### Milestone 2 — Beta Release

- **Estimated Duration:** 4 Weeks
- **FTE:** 2
- **Cost**: $200 (+ \$11,000 payable by the smart contract platform)

| Number | Deliverable               | Specification                                                |
| ------ | ------------------------- | ------------------------------------------------------------ |
| 0a.    | License                   | Apache 2.0                                                   |
| 0b.    | Documentations & Articles | Usage Guide & Articles with shout out to Crust / private beta to the Crust Community|
| 1.     | Platform Economics        | Smart Contract to charge a platform fee for using the platform and using the meta-trasaction service |
| 2.     | Web App                   | Functionalities to fill in fields and encrypt filled contents. |
| 3.     | Transaction Relayer       | Deploy functions or VMs to handle meta-transaction relayer   |



## Future Plans

- integrate the SkyeKiwi Naming service for easier identity management 


