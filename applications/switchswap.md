# Crust Grant Proposal

* **Project Name:** Switchswap
* **Website:** switchswap.io
* **Blockchain domain:** switchswap.nft (claimed but didn't point to the current CID)
* **Team Name:** Web3 CheerLeaders
* **Payment Address:** Ethereum address 
* **Receivable Token:** USDT

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

> ⚠️ *When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them.*

### Overview
  * **Brief description:** after more than 6 months of researching/learning/developping application on IPFS, namely on Crust Network, we started an ambitious/scalable/ longterm/realistic project - Switchswap to develop ecosystem of blockchains mainly using web3 technology.
  * **What we do:** at the first period, we build a platform to create/trade D-NFT on Polygon/ Crust, the reason we use the letter "D" before NFT because most NFT in the market aren't decentralized and can be manipulated by its creator easily. On Switchswap, these NFT do not depend on any factor and can't be deleted by anyone. They are also compatible with big marketplaces such as Opensea.
  * **Why we do:** blockchains are created to be independent but most applications on blockchains are not. We see a lot of unstable points in the blockchain world: NFT using centralized metadata, DeFi using centralized server for its UI (that would create harmful consequences if UI is down). The valuable technologies in blockchains are not widely used, some remarkable technologies can be named: blockchain domain, decentralized IPFS pinning service. We create a common place - switchswap to apply multiple interresting blockchain applications here.

## Project Details 

### **First phase**
We create a platform that allows users to mint NFT freely, all data is stored on Crust Network and NFT is mint via Polygon smartcontract.

We also create a smart contract which allow users to swap their NFT to valuable assets (e.g. $MATIC)

**Technical specifications:**

* **Interface stack:** ReactJS, Typescript
* **Interface Hosting:** IPFS/Crust
* **Blockchain Domain:** [unstoppabledomains.com](https://unstoppabledomains.com/), [ens.domains](https://ens.domains/)
* **IPFS Gateway:** Light Node inside web browser (create by package JS ipfs-core), Crust IPFS W3Auth Gateway (could pin to multiple gateways to increase retrieving speed)
* **IPFS Pinning Service:** Crust Network
* **Database:** smart contract on Polygon
* **Smart contract Stack:** Solidity, Hardhat, ethers.js, web3.js
* **Micro Service:** NodeJS, Heroku (the server sometime is required to process centralized tasks such as faucet $CRU, retrieving CID periodically to spread important files into IPFS network,...)
* **Designing Style:** Material, Flat

## **NFT collections**
### **Type 1: Without switchswap NFT card**

This is simply a type of NFT that all other platforms offer, it's suitable for low quality image NFT

### **Type 2: With Switchswap NFT Card, with author registration**

This type of NFT could be used to register properties that need to identify the author. E.g. intellectual properties, art,...

In the example bellow, when the left QR code is scanned, it will redirect to the actual asset of the NFT, the asset could be a very high quality image, video, whatever file, markdown articles,...

The right QR code will redirect to the author registration, actually it's the hash of the transaction where the author use their own Crust Wallet to upload the asset to Crust Network. From this hash, people can check which Crust Address was used to upload the file, when the file is uploaded, what is the CID of file. If this Crust address registered the identity on Crust Chain, people can also check the identity of the file's author.

**Questions that can be usually asked:**
1. Why do we need to register the author? To answer this question, take an example of NFT for digital pictures, the author is one factor that makes art valuable. Furthermore, author can be used to prove the intellectual property of an asset in case there is the dispute.
2. Can this type of NFT be transferable? The answer is yes, author is unchangeble but ownwer is. Owner identity is registered on Polygon blockchain.

![WithAuthor](https://ipfs.io/ipfs/QmckT69HTa9jA1d4K6Wc4Q8AsRfq2t4ND8yeVKQ5sq1eu3)
![WithAuthor](https://ipfs.io/ipfs/QmShXm8UAbSoBoCxGKfLZ1gNMeDggkrHZpRKFCERVb4fip)
![WithAuthor](https://ipfs.io/ipfs/QmancaZnBm6utimvHasa6jdcibRnFDa4LKwQN1JtdZ3aZ7)
![WithAuthor](https://ipfs.io/ipfs/QmYism4P37qHUnvYzs3DPBSZqinXovvW2Az9QWXehfKRWp)

### **Type 3: With Switchswap NFT Card, without author registration**
This type of NFT is used to register anonymous files which don't require author registration.
This NFT can be used to replace NFT type 1 to offer higher quality NFT, it can be understand as the representation of NFT type 1. If other want to access the real content of NFT, they can scan the QR code or access by its CID.

![WithoutAuthor](https://ipfs.io/ipfs/QmbchXePzUNJS6GyV8nkRZ2LJrqLca8dbYBzXJg6erp56C)
![WithoutAuthor](https://ipfs.io/ipfs/QmSb81yb47uu3ZqqDCh3JKHxp8a4BUUSbKJBKFhXDqKga1)
![WithoutAuthor](https://ipfs.io/ipfs/QmWm5vhrYyDL2jvRwhDfVX4sRyneFsYMbtozcUopnQ8pav)
![WithoutAuthor](https://ipfs.io/ipfs/QmUx3c8zAJPUhFni4kS556tyWXUC5CyTD7NgqAnBknbKR4)


### **Type 4 and more: Cryptopunks alike NFT**
Cryptopunks has shown its success over the last period, but it has the limitation because all data must be stored on chain.
Currently at Switchswap, we use an opensource avatar library that offers up to 140 millions different avatars. The avatar is devided into different zones, each zone has a category of design, by combining randomly all these diffent zones we can obtain a random asset.

We could create a collection of NFT based on that idea, all categories will be stored on Crust Network with high renew pool to ensure the persistency of this NFT collections. More details on this type of NFT will be discussed later.
![CryptoPunksAlike](https://ipfs.io/ipfs/QmUWzLqn3zkWgBqxWg4Dd71JzgCb7Ft46grqXkBwyqGqtH)

## **UI components**
Switchswap is aimed to be longterm and is used for different applications so we care about the user experience on the interface.
We give user as much information as possible to guide them how to use the platform/ wallets. All these features are being hardly developped, some features are at the MVP level.

**Minting Page**
![MitingPageWithAuthor](https://ipfs.io/ipfs/QmWFYZrnAgZLsGnA7TvEqietCVZYBHcecJYzTxpi7PoT8K)

**Upload status**
![MitingPageUpload](https://ipfs.io/ipfs/QmWgiv1ZcuNsKMFsELZgatn4JxRHp2MCLtaTWrjZWhmQZT)

**Adding metadata**
![Metadata](https://ipfs.io/ipfs/QmbGyBtqLSDdp6bfukwzn7d4d6262z6HboRy38ysJ5vwyk)

**Home page**

![Homepage](https://ipfs.io/ipfs/QmRKjBQNJM8CxwSPrnJbXKXQdBSWNTMCfjdYhgnNNcfDu6)


Their will be many things added on home page, such as total NFT minted, development progress, user proposals,... we are currently focusing on NFT Minting page, all small features will be added on Home Page later

![Statistic](https://ipfs.io/ipfs/QmW6EZpdDd5jSE2QT6ndodyvdXVe5HCkDQrGtcfxa7be7G)

Design of development progress
![Progress](https://ipfs.io/ipfs/QmVQRi7nHL5c1CUCMVodGtMSFgzy3PMjWU4L44azQsmECZ)

**Wallet Management**
![Wallet](https://ipfs.io/ipfs/Qmbj1vxx1bVBtKwFY5x8z9Y5SebYRHNpoMg3fyHnNQifcm)

**Design of Gallery Page (In dev.)**

In this page, users can place the sell order of their NFT through a swap smart contract, it's could be considered as a NFT market place, their will be many categories, each cattegory will have different parameters and has a seperate page.
![Gallery](https://ipfs.io/ipfs/QmP5bgkhk3H3gCKTc48xeU9RsRiwa3sh5TKLcpwD1T4Mmy)


### Ecosystem Fit 

Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem? 
* What need(s) does your project meet? 
* Are there any other projects similar to yours in the IPFS/Crust ecosystem? 
  * If so, how is your project different?
  * If not, are there similar projects in related ecosystems?

## Team

### Team members
* Team Leader: Nghia Nguyen
* Tech Researcher & Dev: Huy Dung Nguyen
* Designer: Khoa Nguyen
* Potential future members: Vu Tuan Trung, Tran Thanh Luan, Nguyen Duc Canh

### Contact
* **Nghia Nguyen:** ng@switchswap.io
* **Huy Dung Nguyen:** huydungasd@switchswap.io

### Team's experience
We build multiple projects on IPFS
* [socbay.io](https://socbay.io) - decentralized videos platform on IPFS
* [unstoppabledefi.org](https://unstoppabledefi.org) - decentralizing DeFi
* [cruscan.com](https://cruscan.com) - file status order on Crust Network - Mainnet


### Team Code Repos
* https://github.com/<your_repo_1>
* https://github.com/<your_repo_2>

### Team LinkedIn Profiles
* https://www.linkedin.com/<person_1>
* https://www.linkedin.com/<person_2>

## Development Roadmap

This section should break the development roadmap down into milestones and deliverables. Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to IPFS/Crust. We *recommend* that the scope of the work can fit within a three-month period and that teams structure their roadmap as 1 milestone ≈ 1 month. 

For each milestone,

* make sure to include a specification of your software. _Treat it as a contract_; the level of detail must be enough to later verify that the software meets the specification.
* include the amount of funding requested _per milestone_.
* include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
* provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
* commit to providing Dockerfiles for the delivery of your project. 
* indicate milestone duration as well as number of full-time employees working on each milestone, and include the approximate number of days along with the cost per day.
* _Deliverables 0a-0d are mandatory_ and shall not be removed, unless you explicitly specify a reason within the PR's `Additional Notes` section (e.g. Milestone X is research oriented and as such there is no code to test).

> If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Teams that submit others' work without attributing it will be immediately terminated.**

### Overview
* **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
* **Full-Time Equivalent (FTE):**  Required workload of a full-time employee for the whole project (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent)) (e.g. 2 FTE)
* **Total Costs:** Amount of payment in USD for the whole project. The total amount of funding *needs to be below $30k*  (e.g. 12,000 USD)

### Milestone 1 Example — Implement Crust Order Modules 
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Crust nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 1. | Crust module: X | We will create a Crust module that will... (Please list the functionality that will be coded for the first milestone) |  
| 2. | Crust module: Y | We will create a Crust module that will... |  
| 3. | Crust module: Z | We will create a Crust module that will... |  



### Milestone 2 Example — Additional features

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 4,000 USD

...


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.


## Additional Information 

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

* Are there are any teams who have already contributed (financially) to your project?
* Do you have a community of users or open-source developers who are contributing to your project?
