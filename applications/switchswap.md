# Crust Grant Proposal

* **Project Name:** switchswap
* **Website:** switchswap.io
* **Blockchain domain:** switchswap.nft (claimed but didn't point to the current CID)
* **Team Name:** Web3 CheerLeaders
* **Payment Address:** Ethereum address 
* **Receivable Token:** USDT

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

> ⚠️ *When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them.*

### Overview
  * **Brief description:** after more than six months of researching/learning/developing applications on IPFS, namely on Crust Network, recently we started an ambitious/long-term/realistic project - switchswap to develop the ecosystem of blockchains mainly using web3 technology.
  * **What we do:** at the first period, we build a platform to create/trade D-NFT on Polygon/ Crust. We use the letter "D" before NFT because most NFT in the market isn't decentralized and can be easily manipulated by its creator. On switchswap, these NFT do not depend on any factor and can't be deleted by anyone. They are also compatible with big marketplaces such as Opensea.
  * **Why we do:** blockchains are created to be independent, but most applications on blockchains are not. We see a lot of unstable points in the blockchain world: NFT using centralized metadata, DeFi using the centralized server for its UI (that would create harmful consequences if UI is down). The valuable technologies in blockchains are not widely used; some remarkable technologies can be named: blockchain domain, decentralized IPFS pinning service. We create a common place - switchswap to apply multiple interesting blockchain applications here.

## Project Details 

### **First phase**
In the first phase, our primary products are:
1. D-NFT minting page allows users to customize the NFT Card and mint their NFT freely via Polygon smart contract. The different types of NFT will be presented in the next part.
2. NFT gallery: for exhibiting, trading NFT in a decentralized way via a swap smart contract on Polygon.
3. NFT manager: for managing user-own NFT


**Technical specifications:**

* **Interface Stack:** ReactJS, Typescript
* **Interface Hosting:** IPFS/Crust
* **Blockchain Domain:** [unstoppabledomains.com](https://unstoppabledomains.com/), [ens.domains](https://ens.domains/)
* **IPFS Gateway:** Light Node inside web browser (create by package JS ipfs-core), Crust IPFS W3Auth Gateway (could pin to multiple gateways to increase retrieving speed)
* **IPFS Pinning Service:** Crust Network
* **Database:** smart contract on Polygon
* **Smart Contract Stack:** Solidity, Hardhat, ethers.js, web3.js
* **Micro Service:** NodeJS, Heroku (the server sometimes is required to process centralized tasks such as faucet $CRU, retrieving CID periodically to spread important files into the IPFS network, etc...)
* **Designing Style:** Material, Flat

## **NFT collections**
### **Type 1: Without switchswap NFT card**

This is simply a type of NFT that other platforms offer. It's suitable for image/video/gif.

### **Type 2: With switchswap NFT Card, with author registration**

This type of NFT could be used to register assets that need to identify the author, e.g., intellectual properties, art,...

In the examples below, when the left QR code is scanned, it will redirect to the actual asset of the NFT. The asset could be a very high-quality image, video, markdown articles, whatever file, etc...

The right QR code will redirect to the author's registration. The author registration is the transaction's hash where the author uses their Crust Wallet to upload the asset to Crust Network. From this hash, people can check which Crust Address was used to upload the file, when the file is uploaded, what the file's CID is. If this Crust address registered the identity on Crust Chain, people could also check the identity of the file's author.

**Questions that can be usually asked:**
1. Why do we need to register the author? To answer this question, take an example of NFT for digital pictures. The author is one factor that makes art valuable. Furthermore, the author can be used to prove the intellectual property of an asset if there is a dispute.
2. Can this type of NFT be transferable? Yes, the author is unchangeable but the owner is. Owner identity is registered on Polygon blockchain.

<img src="https://ipfs.io/ipfs/QmckT69HTa9jA1d4K6Wc4Q8AsRfq2t4ND8yeVKQ5sq1eu3" width="400" />
<img src="https://ipfs.io/ipfs/QmShXm8UAbSoBoCxGKfLZ1gNMeDggkrHZpRKFCERVb4fip" width="400" />
<img src="https://ipfs.io/ipfs/QmancaZnBm6utimvHasa6jdcibRnFDa4LKwQN1JtdZ3aZ7" width="400" />
<img src="https://ipfs.io/ipfs/QmYism4P37qHUnvYzs3DPBSZqinXovvW2Az9QWXehfKRWp" width="400" />

### **Type 3: With switchswap NFT Card, without author registration**
This type of NFT is used to register anonymous files which don't require author registration. The file could be image/video/article/software/etc...

This NFT can be used to replace NFT type 1 to offer high quality NFT. In this case, the NFT Card can be considered as the representation of NFT type 1. If others want to access the actual content of NFT, they can scan the QR code or access by its CID.

<img src="https://ipfs.io/ipfs/QmbchXePzUNJS6GyV8nkRZ2LJrqLca8dbYBzXJg6erp56C" width="400" />
<img src="https://ipfs.io/ipfs/QmSb81yb47uu3ZqqDCh3JKHxp8a4BUUSbKJBKFhXDqKga1" width="400" />
<img src="https://ipfs.io/ipfs/QmWm5vhrYyDL2jvRwhDfVX4sRyneFsYMbtozcUopnQ8pav" width="400" />
<img src="https://ipfs.io/ipfs/QmUx3c8zAJPUhFni4kS556tyWXUC5CyTD7NgqAnBknbKR4" width="400" />

### **Some QR Code styles that user can use in their NFT Card**

![QR1](https://ipfs.io/ipfs/QmUG7qxZXwcFWwDBJo34FNR4nWVLqxiEF4E1R1d88VCj3R)

![QR2](https://ipfs.io/ipfs/QmWL4U8Uq3M3LdkKjCTf9yQaKFRK9zbZcyDLdKUkaGX2tx)
### **Type 4 and more: Cryptopunks style NFT**
Cryptopunks has shown its success over the last period, but it has limitations because all data must be stored on-chain.

At switchswap, we use an open-source avatar library that offers up to 140 million different avatars. The avatar is divided into different zones. Each zone has a category of design; by combining all these different zones randomly, we can obtain a random asset.

We could create a collection of NFT based on that idea; all categories will be stored on Crust Network with a high renew pool to ensure the persistency of this NFT collection. More details on this type of NFT will be discussed later.

<img src="https://ipfs.io/ipfs/QmUWzLqn3zkWgBqxWg4Dd71JzgCb7Ft46grqXkBwyqGqtH" width="400" />

## **UI components**
switchswap is aimed to be long-term and will be used for different applications in web3 world, so we care about the user experience on the interface and the product quality.

We give the user as much information as possible to guide them on using the platform/ wallets. All these features are being hardly developed; some features are at the MVP level.

**Minting Page**
![MitingPageWithAuthor](https://ipfs.io/ipfs/QmWFYZrnAgZLsGnA7TvEqietCVZYBHcecJYzTxpi7PoT8K)

**Upload status**
![MitingPageUpload](https://ipfs.io/ipfs/QmWgiv1ZcuNsKMFsELZgatn4JxRHp2MCLtaTWrjZWhmQZT)

**Adding metadata**
![Metadata](https://ipfs.io/ipfs/QmbGyBtqLSDdp6bfukwzn7d4d6262z6HboRy38ysJ5vwyk)

**Home page**

![Homepage](https://ipfs.io/ipfs/QmRKjBQNJM8CxwSPrnJbXKXQdBSWNTMCfjdYhgnNNcfDu6)


Many things will be added on the home page, such as total NFT minted, development progress, user proposals, etc... We are currently focusing on the NFT Minting page. All small features will be added to Home Page later.

![Statistic](https://ipfs.io/ipfs/QmW6EZpdDd5jSE2QT6ndodyvdXVe5HCkDQrGtcfxa7be7G)

Design of development progress
![Progress](https://ipfs.io/ipfs/QmVQRi7nHL5c1CUCMVodGtMSFgzy3PMjWU4L44azQsmECZ)

**Wallet Management**

![Wallet](https://ipfs.io/ipfs/Qmbj1vxx1bVBtKwFY5x8z9Y5SebYRHNpoMg3fyHnNQifcm)

**Design of Gallery Page (In dev.)**

It could be considered an NFT exhibition; there will be many exhibitions in switchswap, each show will have different parameters and is located at a separate page.

At the gallery, users can view NFT and buy them if interested.

![Gallery](https://ipfs.io/ipfs/QmP5bgkhk3H3gCKTc48xeU9RsRiwa3sh5TKLcpwD1T4Mmy)

**And more**

We are planning to build many other things on switchswap; some page are in our development plan:

1. Dedicated NFT viewer: to view the content of user's NFT, user can check the storage status of their file on Crust Network from this pages
2. NFT manager: to view all NFT the user have in their wallet
3. Proposal page: this page lets user propose their opinion, suggestion for switchswap, the data will be stored Polygon Network.
4. Funbox: this page has multiple small tools that are useful for users, e.g.:
    
    $CRU faucet box that allows users to receive $CRU if they tweet a status on Twitter including required keywords

    File checking box to check their file status on Crust Network, the list of files to be monitored will be stored in localStorage or maybe in Polygon if we see the needs of users

    And more...
    
    
### Ecosystem Fit 

Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

#### Where and how does your project fit into the ecosystem?
Switchswap team will develop the ecosystem for different blockchains. In the first phase, it will be NFTs. NFT content is stored on Crust Network. The more products we create, the higher influence Crust Network will be in the blockchains world.

#### What need(s) does your project meet? 
#### Are there any other projects similar to yours in the IPFS/Crust ecosystem? 
There are no NFT projects that allow users to customize their NFT card and register the asset's author. 
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
We built multiple projects on IPFS.
* [socbay.io](https://socbay.io) - decentralized videos platform on IPFS
* [unstoppabledefi.org](https://unstoppabledefi.org) - decentralizing DeFi
* [cruscan.com](https://cruscan.com) - file status order on Crust Network - Mainnet

But these projects are not the main advantages of our team. We are strong at the fast adaptability in new tech environments and have a great passion for building products. 

Furthermore, we care about small details and always put ourselves in the customer's shoes, it could be a plus point to deliver user-oriented products.

### Team Code Repos
* https://github.com/nghianguyen119
* https://github.com/huydung179

### Team LinkedIn Profiles
* https://www.linkedin.com/in/trongnghia/
* https://www.linkedin.com/in/huydungnguyen/

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
* **Total Costs:** Amount of payment in USD for the whole project. The total amount of funding *needs to be below $30k*  (e.g. 0,000 USD)

### Milestone 1 Minting NFT features 
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | NFT Minting Page | We create a page for minting different types of NFT on Polygon | 
| 1a. | Minting NFT without card (Type 1) |The NFT use IPFS W3Auth Gateway and IPFS W3Auth pinning service|
| 1b. | Minting NFT with card, without author's registration (Type 3) |The NFT use IPFS W3Auth Gateway and IPFS W3Auth pinning service|  
| 1c. | Minting NFT with card, without author's registration (Type 2) |User has to user their Crust Wallet to be able to pin their file|
| 1* | Customizing NFT card |This part is the heaviest work for D-NFT Minting Page, we already designed some proof of concept NFT Cards presented above, the customization section will let user choose their prefered|  
| 2. | Crust module: Y | We will create a Crust module that will... |  
| 3. | Crust module: Z | We will create a Crust module that will... |  



### Milestone 2 Example — Additional features

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 0,000 USD

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
