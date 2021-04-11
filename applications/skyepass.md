# Crust Grant Proposal

* **Project Name:** SkyePass
* **Team Name:** SkyeKiwi Team
* **Payment Address**: 0xa5E4E1BB29eE2D16B07545CCf565868aE34F92a2
* **Receivable Token:** USDT or DAI

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

> ⚠️ *When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them.*

### Overview

SkyeKiwi is developing an open-source, decentralized secret sharing protocol. SkyePass as the first product built on top of this protocol to deliver user-friendly UI/UX to end-users in a way similar to how a typical password manager functions. 

### Project Details 
As a long-term password manager software user myself, I have been really frustrated of the services like LastPass, 1Password for either lack of functionalities or the idea of storing ones entire digital identity on their corporate servers. Existing open-source solutions are too technically complicated to use. 

At the very basis of it, a password manager is no more than an encrypted database, an APP and a browser extension to interact with the database. 

Therefore, our team create a new password manger software that has pretty and intuitive UI/UX, fully decentralized (i.e. our team own no backend servers) and hackable by providing an open API for people to develop extensions with. 

Users who signup will first create a blockchain wallet and have the mnemonic (and a master password) as their sole identity credentials (pretty standard blockchain wallet stuff). Later, each database instance is called a `vault` (standard name for all password managers) and they are light-weight file based databases ([lowDB](https://github.com/typicode/lowdb) seems to be a great choice). User can be given options to choose the encryption behavior of their database. By default, the vault will be split into some pieces with a Shamir's secret sharing mechanism. 

For instance, for a simplest sharing schema, when the vault is created to be shared with 2 other family members, the vault will be split into 4 parts (we call them `horcrux`, for those who do not know [the Harry Potter reference](http://harrypotter.shoutwiki.com/wiki/Horcrux#:~:text=A%20Horcrux%20is%20a%20powerful,one%20is%20to%20true%20immortality.) ) with a minimum quorum of 2 to be decrypted. One piece will be sent to IPFS without encryption, the other 3 pieces will be encrypted by each member's public key and be sent to IPFS. An NFT will be minted for the owner. The ID of the NFT will be the `vault ID` and the NFT's URI will be a metadata piece that only the owner can change as exampled below: 

```json
{
    "pieces": 4,
    "quorum": 2,
    "nonce": 20,
    "owner": "5Ef9ES1SLQZU4KucGsjvs8qexvppQFmDgHiqoqVptJ9nZDeu",
    "members": [
        "5EKj6S1SLQZU4KucGsjvs8qexvppQFmDgHiqsdsdtJ9nZ123",
        "5EJK1S1SLQZjkLKucGsjvs8qekdjpQFmDgHiqoqVptJ9nZ978"
    ],
    "unencrypted_cid": "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",
    "encrypted_cids": [
        {
            "cid":       "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",
            "member": "5EKj6S1SLQZU4KucGsjvs8qexvppQFmDgHiqsdsdtJ9nZ123"
        },{
            "cid":       "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",
            "member": "5EJK1S1SLQZjkLKucGsjvs8qekdjpQFmDgHiqoqVptJ9nZ978"
        }, {
            "cid":       "QmaTX2v2QuwkQvEERw17w2xACcr2WZhy9t3NAEPBjvqPSX",
            "member": "5Ef9ES1SLQZU4KucGsjvs8qexvppQFmDgHiqoqVptJ9nZDeu"
        }
    ]
}
```

The reason why we design such mechanism serves 3 purposes. 

1. Reserve the capacity for advanced users to create more complicated sharing schema. 
    - For instance, a user can create a vault and assign trustee to take over one's estate when the user passes away. The user can split the vault to 5 `horcrux` and set the minimum decryption quorum to 3. 2 pieces encrypted with the user's own public key, 1 piece encrypted with a trustee A's public key, 1 piece encrypted with another trustee B's public key and 1 last piece to the user's lawyer. In event of death, A and B can go to the lawyer and decrypt the vault and inherit the user's digital identities. 
    - A team can create a vault that requires 2 members to decrypt a vault, or require the owner's piece to decrypt a vault etc.
2. Because the historical metadata states are all stored on the blockchain, it is not hard to rebuild the change history of the vault.
3. Make it easier to check the integrity of the vault and recover the vault.
4. Leave the option open for future commercial projects to offer zero-knowledge vault backup service. 

To manage access for users, we assume two common roles: `write` and `read` and, of course, `owner`. Because each time when the database is updated (i.e. new password saved), the IPFS CID will be updated, managing access is easy. The owner can add the member's address to be `approved` to change the URI in the smart contract and be responsible to update all CIDs when a client is updating the database. While those who have a `horcrux` but not in the `approved list` in the smart contract, they cannot update the database because they cannot update the metadata. 

So far, we have discussed a system to securely create, share and manage a minimalism decentralized file-based database. Our team believe there are more we can do with the database file itself and that's why we are calling SkyePass hackable. If we think about blockchain wallet applications, they are web applications that store some private keys and call APIs like `Web3.js`. Taking inspiration from Ledger, we believe if we expose some APIs for developers to make extensions(like the idea of Applications for Ledger), we can make a password manager infinitely interesting. Because the vault is shareable to others, users can share a whole workspace to others will all sensitive information included. These extensions can be made both in a desktop applications or a browser extension. 

Some ideas we have had so far:

- `Crypto Wallet`: shared hot wallet. The owner of the vault can install an `Ethereum` extension and store the private key with it. And, of course, DApp browsers. 
- `SSH Login Tool`: a whole team can share login credential to their server effortlessly. 
- `Shared Phone Number`: a shared Google account that registered on `Google Voice` can be stored, and the whole family can receive verification code for services. 



### UI/UX Mockups

![MacBook Pro - 5](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l2kl90j31c00u0ac0.jpg)

![MacBook Pro - 1](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l4ozqkj31c00u0dl4.jpg)

![MacBook Pro - 2](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l3k86lj31c00u0431.jpg)

![MacBook Pro - 4](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l5w0ujj31c00u0tc0.jpg)

![MacBook Pro - 3](https://tva1.sinaimg.cn/large/008eGmZEly1gmh1l6q8c4j31c00u0778.jpg)




### Ecosystem Fit 

SkyeKiwi can be a very unique component in the ecosystem of a storage solution network. We are providing an off-chain encryption and metadata handling toolkit combined with on-chain NFT-like smart contract solution to achieve decentralized secret sharing. Please refer to the `Future Plan` section for more details. 

## Team

#### Team members

* Song Zhou (Full stack developer) https://github.com/RoyTimes
* Zoe Sun (Lead Designer)
* ... More to be hired 

#### Contact
* **Contact Name:** Song Zhou (song.zhou@ponder.capital)

#### Legal Structure 
* No legal entity yet

#### Team's experience
Besides private work for companies that cannot be shared, Song developed a simple server-less React.js Blog system(can be seen on his Github profile); a private event participation checkin application, based on Ethereum smart contract, React.js for frontend, Coda.io API and a Telegram bot for administration. 

#### Team Code Repos
* https://github.com/skyekiwi/

## Development Roadmap

### Overview
* **Total Estimated Duration:** 16 weeks
* **Full-time equivalent (FTE):**  2.5 FTE 
* **Total Costs:** $30,000

### Milestone 1 — PoC
* **Estimated Duration:** 3 Weeks

* **FTE:**  2

* **Costs:** \$7,980 (2 FTE * 35 Hours per week * 3 Weeks * $38 Hourly Wage.)

    

| Number | Deliverable           | Specification                                                |
| ------ | --------------------- | ------------------------------------------------------------ |
| 0a.    | License               | Apache 2.0 on all repos                                      |
| 0b.    | Documentations        | A guideline of how to run and test all functionalities described below. |
| 1.     | Crust API Integration | - Connect to the Crust network and publish secret vaults to the network<br/>- related unit tests in JavaScript |
| 1.     | Smart Contract        | The core smart contract that stores IPFS hash, generate unique vault ID and implement access management. <br/>We are using ink! and the smart contract development suite maintained and developed by [Patract Labs](https://patract.io/) for developing environment, unit testing and deployment. |
| 2.     | Client Side PoC       | 1. Local data storage schema and adapters with lowDB <br/>2. IPFS (add, cat, pin) on the Crust network; <br/>3. ECIES encryption & decryption with [eccrypto](https://github.com/bitchan/eccrypto) <br/>4. Shamir secret sharing with a simplest 4/2 schema powered by audited lib [Secrets.js](https://github.com/grempe/secrets.js) <br/>5. A full run down of the process (from a user creating a vault, add in some password items, to the encryption, publish to IPFS, interact with a local blockchain, to access management when sharing with two other users)<br/>6. Unit testing for most of these functionalities |
| 3.     | Client Side UI/UX     | **Desktop App**  Not necessarily all wired up to logic yet<br/>- Wallet Creation / Backup Phase / Create Master Password<br/>- Wallet Import / Signin<br/>- Autolock after timed inactivity or manually lock the App <br/>- Create/Share/Manage Vaults<br/>- Application Marketplace<br/> |

### Milestone 2 — Core Encryption/Identity Management Smart Conctracts/Basic Desktop App 

* **Estimated Duration:** 7 Weeks

* **FTE:**  2

* **Costs:** \$18,620 (2 FTE * 35 Hours per week * 7 Weeks * $38 Hourly Wage. Of course, I'll be surprised if we will actually work less than 50 hours per week.) 



| Number | Deliverable                    | Specification                                                |
| ------ | ------------------------------ | ------------------------------------------------------------ |
| 0a.    | License                        | Apache 2.0                                                   |
| 0b.    | Documentations/Project Website | A minimalism project homepage with a user manual that documents how to use SkyePass from account creation to manage passwords, and install extensions and browser extensions. <br/>A developer documentation that describes the encryption mechanism in details; Basic API documentation for extension development. |
| 1.     | Desktop App/Browser Extension  | **Desktop App**<br/>A React.js + Electron App to start with. The App will implement as close as possible to the graphic design (per 3). <br/>- Add/Update/Delete Password Items (with 2FA OTP support)<br/>- Add/Update/Delete Secure Note/Credit Card <br/>- Basic ETH wallet extension<br/>- Basic Polkadot wallet extension <br/> - Application Marketplace<br/>- sharing a single password item directly to another user<br/><br/>**Browser Extension** <br/>- Communication to Desktop Application<br/>- Auto-fill account/passwords<br/> <br/> |
| 2.     | UI/UX Design Standards         | Color Schema, Composition & Balance, Typography, Animation, Navigation, Icon Set, Brand Logo |
| 3.     | Basic Marketing Efforts        | send out private alpha invitation                            |
| 4.     | Testing                        | Unit Testing                                                 |
### Milestone 3  — Ready for Beta Release

* **Estimated Duration:** 6 Weeks

* **FTE:**  4

* **Costs:** \$3,400is what we are requesting for this phase. We understand that there is a $30,000 limit and we will fill in the funding gap in other ways. 

* **Actually Costs**: \$35,920 (4 FTE * 35 Hours per week * 6 Weeks * \$38Hourly Wage + A security Auditing \$4,000 ) We will be far less stressed at this phase. It's gonna be more about tweaking here and there and security auditing. 

    

| Number | Deliverable                                    | Specification                                                |
| ------ | ---------------------------------------------- | ------------------------------------------------------------ |
| 0a.    | License                        | Apache 2.0                                                   |
| 0b.    | Developer Resource/API Documentation/Community | - A comprehensive API spec documentation <br/>- Riot group for support, suggestions and questions<br/> |
| 0c.     | **Security Auditing**                          | Audited by a trusted 3rd party                               |
| 1.     | Desktop App/Browser Extension                  | Create an open Github repo for `extensions`, build a management system for open PR of new integrations. The "marketplace" in the desktop app will pull a list of available integrations from the repo.  <br/>Support at least 2 password importing source<br/>Support unencrypted password exporting<br/>Add in support for browser extension to inject hot wallet like Metamask<br/> |
| 2.     | Smart Contracts                                | All contract tested and audited and we will deploy the V1.0 contract to the appropriate parachains. |
| 3.     | Partnership                                    | Build partnerships for developer/marketing/user support resources |


## Future Plans

- **SkyeKiwi Protocol**: We plan to publish an open-source toolkit of the core secret sharing mechanism as a stand-alone developer kit. 
- **Credential as NFTs**: We plan to develop a DAPP of decentralized credential marketplace for people to trade or rent other's credentials, 
-   **Single-Sign-On Utility**: a developer kit to integrate functionalities similar to how `Sign In with Google` or `Sign In with Apple` works but decentralized and secure by cryptographic methods. 
- **SkyePass Pro**: a advanced & consultancy service we will provide to teams to deploy a private version of our IAM solution.


## Additional Information 

We have applied and got accepted into the [Web3 Foundation - Open-Grant-Program](https://github.com/w3f/Open-Grants-Program/pull/212) Our applications to these grant programs are similar but different in milestone deliveries, fine-turned to the ecosystem needs accordingly. Our application to the Open-Grant-Program was also months old, and we have updated a lot on future plans and deliverables specifications. We want this application to be more about a standard layer to help developers securely store data for NFTs and SkyePass as a working product of doing so with the most sensitive and private data we can think of. While our application to the Open-Grant-Program focus more on the front-end implementations(usage of the community toolchain and Polkadot.js) and the smart contract(Ink!) of the application. As of submitting of this application, we have not received payments from the Web3 Foundation.

We took the project and participate in the [Polkadot Hackathon Asia 2021 Spring](https://github.com/ParityAsia/hackathon-2021-spring). We have received CNY 30,000 (~USD 4578.07) from the hackathon. (CNY 20,000 from the Polkadot Treasury and CNY 10,000 from Patract Labs). All prize were paid and received as of submitting this application. 

