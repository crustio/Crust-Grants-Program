# Crust Grant Proposal

* **Project Name:** SkyeKiwi Protocol
* **Team Name:** SkyeKiwi Team
* **Payment Address**: 0xa5E4E1BB29eE2D16B07545CCf565868aE34F92a2
* **Receivable Token:** USDT

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

> ⚠️ *When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them.*

### Overview

SkyeKiwi is developing an open-source, decentralized secret sharing protocol. 

### Project Details 

The SkyeKiwi protocol is off-chain tools to divide and encrypt any arbitrary data into multiple parts and encrypt each parts with public keys with a given encryption schema. We use Shamir Secret Sharing cryptography with elliptic curve asymmetric encryption to deliver such result. 

​	

For instance, given a file `file.txt` and an encryption schema as following:

```javascript
{
    pieces: 6, 
    quorum: 3,
    publicSharesCount: 0,
    metadata_ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"},
    members: [{
      publicKey: "publickey1",
      ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"}
    }, {
      publicKey: "publickey1",
      ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"}
    }, {
      publicKey: "publickey1",
      ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"}
    }, {
      publicKey: "publickey2",
      ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"}
    }, {
      publicKey: "publickey3",
      ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"}
    }, {
      publicKey: "publickey4",
      ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"}
    }]
}
```



Shamir's Secret Sharing will divide the original file `file.txt` into 6 parts and each part will be encrypted with the according `publicKey` and upload to the IPFS as instructed in `ipfs`.



This sample schema will instruct the protocol to generate an encryption that gives the owner of  `publickey1` access to 3 pieces of the encryption, while 1 piece to the rest of the members. So the original creator of the schema (i.e. owner of `publickey1`  always has access to the secret), while in case of the owner is not available, the rest of the team members can still decrypt the secret together.



The protocol will then generate an metadata for the file and uploads the metadata as instructed by `metadata_ipfs`. A sample encryption schema will look like:

```javascript
{
    name: 'file.txt',
    notes: 'some note to tell what is this file ....',
    nonce: 12,
    pieces: 6, 
    quorum: 3,
    publicSharesCount: 0,
    publicShares: [ ],
    pieces: [{
        publicKey: 'publickey1',
        cid: 'cid1.....'
    } .... ]
}
```



Some other use cases for the encryption schema: 



1. Public File

    ```javascript
    {
        pieces: 1, 
        quorum: 1,
        publicShares: 1,
        metadata_ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"},
        members: []
    }
    ```

2. Equal Access Right for all team members

    ```javascript
    {
        pieces: 4, 
        quorum: 2,
        publicSharesCount: 1,
        metadata_ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"},
        members: [{
          publicKey: "publickey1",
          ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"}
        }, {
          publicKey: "publickey2",
          ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"}
        }, {
          publicKey: "publickey3",
          ipfs: {host: "ipfs.infura.io", port: 5001, protocol: "https"}
        }]
    }
    ```

    In such case, each member can all fetch the public piece and use their own encrypted piece to recover the original file. 



#### Updates & Multi-parties recovery

We use a smart contract to facilitate updating and version history management. Because of the sequential nature of blockchain, each changes to the metadata can be preserved and reconstructed. A smart contract with the following interface would be sufficient: 

**Storage**

- `fileOwner: Map<FileId, AccountId>`
- `fileOperator: Set<(FileId, AccountId)>`
- `fileMetadataCID: Map<FileId, ipfsCID>`

**Messages**

- `createFile(metadataCID) -> Result<(fileId), Error>` Auth: anyone
- `updateFile(fileId, newMetadataCID) -> Result<(), Error>` Auth: operators, owner
- `nominateMember(fileId, newUserAccountId) -> Result<(), Error>` Auth: owner
- `deleteMember(fileId, userAccountId) -> Result<(), Error>` Auth: owner
- `removeFile(fileId) -> Result<(), Error>` Auth: owner
- `authorizeOwner(fileId, AccountId) -> bool` Auth: anyone
- `authorizeMember(fileId, AccountId) -> bool `Auth: anyone
- `ownerOf(fileId) -> AccountId` Auth: anyone
- `fetchMetadata(fileId) -> metadataCID `Auth: anyone



When a user is trying to update a file, the user will first check in if the remote nonce version matches the local ones. We want to leave such conflict handling capacity to the client side. 



When multiple parties are needed to decrypt and recover a file, a `Host` client (one of the parties) will initiate the process and generate an ephemeral key pair and distribute the public key to all other parties, all parties will have to structure a message and pass it on encrypted with the ephemeral public key. The `Host` client can, therefore, recover the original file. A sample message will be structured as such:

```javascript
{
	message: 'a decrypted piece of the original file.......',
    signer: 'a publickey',
    signature: 'a signature of the signer onto the message'
}
```


### Ecosystem Fit 

SkyeKiwi will be a unique component in the ecosystem of a storage solution network. We are providing an off-chain encryption and metadata handling toolkit combined with on-chain NFT-like smart contract solution to achieve decentralized secret sharing. Such protocol shall unlock the potential for permission NFTs or decentralized and verifiable contract signature. 

## Team

#### Team members

* Song Zhou (Full stack developer) https://github.com/RoyTimes
* Zoe Sun (Lead Designer)
* ... More to be hired 

#### Contact
* **Contact Name:** Song Zhou (song.zhou@skye.kiwi)

#### Legal Structure 
* No legal entity yet

#### Team's experience
Besides private work for companies that cannot be shared, a password manager based on the SkyeKiwi protocol SkyePass is now officially supported by the Web3 Foundation Grant Program

#### Team Code Repos
* https://github.com/skyekiwi/

## Development Roadmap

### Overview
* **Total Estimated Duration:** 8 weeks
* **Full-time equivalent (FTE):**  2.5 FTE 
* **Total Costs:** $16,800

### Milestone 1 — Core Protocol
* **Estimated Duration:** 4 Weeks

* **FTE:**  2

* **Costs:** \$11,200 (2 FTE * 35 Hours per week * 4 Weeks * $40Hourly Wage.)

    
  
  Generally, we will build the core protocol libraries as described above, and provide a sample smart contract for developer team to use. We will provide a brief deployment guide but will not deploy the smart contract to any blockchains. It will be totally up to the user's discretion as of how to use it. 
  
  

| Number | Deliverable           | Specification                                                |
| ------ | --------------------- | ------------------------------------------------------------ |
| 0a.    | License               | Apache 2.0 on all repos                                      |
| 0b.    | Documentations        | A guideline of how to run and test all functionalities described below. |
| 1.     | Sample Smart Contract | The core smart contract that stores IPFS hash, generate unique vault ID and implement access management. <br/>We are using ink! and the smart contract development suite maintained and developed by [Patract Labs](https://patract.io/) for developing environment, unit testing and deployment. |
| 2.     | Protocol Library      | 1. 3 sample encryption schema as described above and tooling to build customized encryption schema. <br/>2. Core metadata handler that takes in a file and the encryption schema to generate a sharable metadata file. <br/>3. Use a sample smart contract to facilitate authorization management and file updating. <br/>4. Persistent storage with Crust Network APIs<br/>5. Unit tests and integration test |

### Milestone 2 — Ready for Release
* **Estimated Duration:** 2 Weeks

* **FTE:**  2

* **Costs:** \$5,600 (2 FTE * 35 Hours per week * 2 Weeks * $40Hourly Wage.)

    
  

| Number | Deliverable    | Specification                                                |
| ------ | -------------- | ------------------------------------------------------------ |
| 0a.    | License        | Apache 2.0 on all repos                                      |
| 0b.    | Documentations | **Medium Post** for:<br/>A guideline of how to run and test all functionalities described below.<br/>A guideline of how to integrate the library for developers.<br/>A guideline of how to run a sample NFT market with encrypted image files |
| 1.     | Demos          | 1. Demo for encrypting and sharing a small password database<br/>2. Demo for encrypting an artwork image. <br/>3. Demo for encrypting and sharing a multi-gigabytes large video file<br/> |


## Future Plans

- **Credential as NFTs**: We plan to develop a DAPP of decentralized credential marketplace for people to trade or rent other's credentials, 
-   **NFT with Permission**: strict permission to which users can read the actual content of the NFT. 
-   **Contract Signing**: facilitate verifiable and permeant records of contract signature without publishing the contract itself. 


## Additional Information 

We have applied and got accepted into the [Web3 Foundation - Open-Grant-Program](https://github.com/w3f/Open-Grants-Program/pull/212) Our applications to these grant programs are similar but different in milestone deliveries, fine-turned to the ecosystem needs accordingly. Our application to the Open-Grant-Program was also months old, and we have updated a lot on future plans and deliverables specifications. We want this application to be more about a standard layer to help developers securely store data for NFTs and SkyePass as a working product of doing so with the most sensitive and private data we can think of. While our application to the Open-Grant-Program focus more on the front-end implementations(usage of the community toolchain and Polkadot.js) and the smart contract(Ink!) of the application. As of submitting of this application, we have not received payments from the Web3 Foundation. As of now, when we are updating this application, our first milestone to our Web3 Foundation application has been accepted. 

We took the project and participate in the [Polkadot Hackathon Asia 2021 Spring](https://github.com/ParityAsia/hackathon-2021-spring). We have received CNY 30,000 (~USD 4578.07) from the hackathon. (CNY 20,000 from the Polkadot Treasury and CNY 10,000 from Patract Labs). All prize were paid and received as of submitting this application. 

