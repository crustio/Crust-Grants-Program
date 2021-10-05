# Crust Grant Proposal

- **Project Name:** switchswap
- **Website:** [switchswap.io](https://switchswap.io)
- **Blockchain domain:** switchswap.nft (claimed but didn't point to the current CID)
- **Team Name:** Web3 CheerLeaders
- **Payment Address:** 0x04a02f853711D04Eb0E009D3d1554C7eCeD580E6
- **Receivable Token:** USDT

> ⚠️ _The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe._

> ⚠️ _When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them._

### Overview

- **Brief description:** after more than six months of researching/learning/developing applications on IPFS, namely on Crust Network, recently we started an ambitious/long-term/realistic project - switchswap to develop the ecosystem of blockchains mainly using web3 technology.
- **What we do:** at the first period, we build a platform to create/trade D-NFT on Polygon/Crust. We use the letter "D" before NFT because most NFT in the market isn't decentralized and can be easily manipulated by its creator. On switchswap, these NFT do not depend on any factor and can't be deleted by anyone. They are also compatible with big marketplaces such as Opensea.
- **Why we do:** blockchains are created to be independent, but most applications on blockchains are not. We see a lot of unstable points in the blockchain world: NFT using centralized metadata/storage, DeFi using the centralized server for its UI (that would create harmful consequences if UI is down). The valuable technologies in blockchains are not widely used; some remarkable technologies can be named: blockchain domain, decentralized IPFS pinning service. We create a common place - switchswap to apply multiple interesting blockchain applications here.

  Over the last months, we have built socbay.io on IPFS, intending to show users how does decentralized storage works. But the reality is not pink, videos platform is not in the interest of the blockchain community, we only got two users posted video on Socbay over the last 5 months, one from Crust Network team member and another from a curious user. Centralized applications such as youtube, Vimeo, etc... are doing so well in that field so the interest of users for socbay.io is diluted.

  Our philosophy is: If we want to reach public users, decentralized storage networks must reach users in our community first (blockchains community). So we decided to build something that the blockchain community cares about. NFT is the product of collaboration with blockchain projects, therefore it will bring the attention of decentralized storage to members in the target blockchain community. We recognized that the community started having concerns about the persistency of NFT, some NFT projects started using IPFS instead of an API for storing metadata and NFT content, but IPFS is not fully decentralized because it relies on centralized pinning serive. It's a good time to bring Crust decentralized pinning service to NFT world.

## Project Details

### **First phase**

In the first phase, our primary products are:

1. D-NFT minting page allows users to customize the NFT Card and mint their NFT freely via Polygon smart contract. The different types of NFT will be presented in the next part.
2. NFT gallery: for exhibiting, trading NFT in a decentralized way via a swap smart contract on Polygon.
3. NFT manager: for managing user-own NFT

**Technical specifications:**

- **Interface Stack:** ReactJS, Typescript
- **Interface Hosting:** IPFS/Crust
- **Blockchain Domain:** [unstoppabledomains.com](https://unstoppabledomains.com/), [ens.domains](https://ens.domains/)
- **IPFS Gateway:** Light Node inside web browser (create by package JS ipfs-core), Crust IPFS W3Auth Gateway (could pin to multiple gateways to increase retrieving speed)
- **IPFS Pinning Service:** Crust Network
- **Database:** smart contract on Polygon
- **Smart Contract Stack:** Solidity, Hardhat, ethers.js
- **Micro Service:** NodeJS, Heroku, MongoDB as a service (the server sometimes is required to process centralized tasks such as faucet $CRU, retrieving CID periodically to spread important files into the IPFS network, etc...)
- **Designing Style:** Material, Flat
- **Coding Style:** Git-flow for git management; using as much as possible automation tools for fast developing such as: Github Action/ Bash

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

Switchswap is aimed to be long-term and will be used for different applications in web3 world, so we care about the user experience on the interface and the product quality.

We give the user as much information as possible to guide them on using the platform/ wallets. All these features are being hardly developed; some features are at the MVP level.

**Minting Page**
![MitingPageWithAuthor](https://ipfs.io/ipfs/QmWFYZrnAgZLsGnA7TvEqietCVZYBHcecJYzTxpi7PoT8K)

**Upload status**
![MitingPageUpload](https://ipfs.io/ipfs/QmWgiv1ZcuNsKMFsELZgatn4JxRHp2MCLtaTWrjZWhmQZT)

**Adding metadata (not beautiful, to be modified)**
![Metadata](https://ipfs.io/ipfs/QmbGyBtqLSDdp6bfukwzn7d4d6262z6HboRy38ysJ5vwyk)

**Home page**

![Homepage](https://ipfs.io/ipfs/QmRKjBQNJM8CxwSPrnJbXKXQdBSWNTMCfjdYhgnNNcfDu6)

Many things will be added on the home page, such as total NFT minted, development progress, user proposals, etc... We are currently focusing on the NFT Minting page. All small features will be added to Home Page later.

<img src="https://ipfs.io/ipfs/QmW6EZpdDd5jSE2QT6ndodyvdXVe5HCkDQrGtcfxa7be7G" width="300" />

Design of development progress
![Progress](https://ipfs.io/ipfs/QmVQRi7nHL5c1CUCMVodGtMSFgzy3PMjWU4L44azQsmECZ)

**Wallet Management**

![Wallet](https://ipfs.io/ipfs/Qmbj1vxx1bVBtKwFY5x8z9Y5SebYRHNpoMg3fyHnNQifcm)

**Design of Gallery Page (In dev.)**

It could be considered an NFT exhibition; there will be many exhibitions in switchswap, each show will have different parameters and is located at a separate page.

At the gallery, users can view NFT and buy them if interested.

![Gallery](https://ipfs.io/ipfs/QmP5bgkhk3H3gCKTc48xeU9RsRiwa3sh5TKLcpwD1T4Mmy)

**Fun box**
![Funbox](https://ipfs.io/ipfs/Qmdauwq5gYTGPH9mSmyvVVizsnAC2iZjPZVfTpUvC4Xjvq)

**And more**

We are planning to build many other things on switchswap; some page are in our development plan:

1. Dedicated NFT viewer: to view the content of the user's NFT, users can check the storage status of their file on Crust Network from these pages
2. NFT manager: to view all NFT the user has in their wallet
3. Proposal page: this page lets user propose their opinions, suggestions for switchswap, the data will be stored in Polygon Network.
4. Funbox: this page has multiple small tools that are useful for users, e.g.:

   $CRU faucet box that allows users to receive $CRU if they tweet a status on Twitter including required keywords

   File checking box to check their file status on Crust Network, the list of files to be monitored will be stored in localStorage or maybe in Polygon if we see users' needs.

   And more...

5. Small things but helpful for users are also in our development plan: click to copy the address, multi-languages, warning/error notifications with valuable links, etc...

**Some works around we have done**

Customize github action ipfs-crust-action to retrieve the transaction hash. The transaction hash is used to prove our copyright of the release.

![copyright](https://ipfs.io/ipfs/QmRxjXkpmpZYnnULAuKbznAaVdPbrKeaps2CcNyQiTpqHp)

Repo customized-ipfs-crust-action: https://github.com/switchswapbox/ipfs-crust-action

### Ecosystem Fit

Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

#### Where and how does your project fit into the ecosystem?

Switchswap team will develop the ecosystem for different blockchains. In the first phase, it will be NFTs. NFT content is stored on Crust Network. The more products we create, the higher influence Crust Network will be in the blockchains world.

#### What need(s) does your project meet?

The project allows users to create NFT like other projects offer, a decentralized storage network - Crust Network guarantees the metadata and data of NFT.

We present to the market new types of NFT: NFT to register author, NFT card,...

We offer a decentralized trading platform of NFTs.

#### Are there any other projects similar to yours in the IPFS/Crust ecosystem?

No NFT projects allow users to customize their NFT card and register the asset's author.

There is no decentralized trading platform of NFT.

## Team

### Team members

- Team Leader: Nghia Nguyen
- Tech Researcher & Dev: Huy Dung Nguyen
- Designer: Khoa Nguyen
- Potential future members: Vu Tuan Trung, Tran Thanh Luan, Nguyen Duc Canh

### Contact

- **Nghia Nguyen:** ng@switchswap.io
- **Huy Dung Nguyen:** huydungasd@switchswap.io

### Team's experience

We built multiple projects on IPFS.

- [socbay.io](https://socbay.io) - decentralized videos platform on IPFS
- [unstoppabledefi.org](https://unstoppabledefi.org) - decentralizing DeFi
- [cruscan.com](https://cruscan.com) - file status order on Crust Network - Mainnet

But these projects are not the main advantages of our team. We are strong at the fast adaptability in new tech environments and have a great passion for building products.

Furthermore, we care about small details and always put ourselves in the customer's shoes, it is a plus point that ensures we will deliver a user-oriented/easy-to-use product.

### Team Code Repos

- https://github.com/nghianguyen119
- https://github.com/huydung179

### Team LinkedIn Profiles

- https://www.linkedin.com/in/trongnghia/
- https://www.linkedin.com/in/huydungnguyen/

## Development Roadmap

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 3 FTE
- **Total Costs:** 30,000USDT

### Milestone 1 Basic NFT minting platform

- **Estimated Duration:** 1 month
- **FTE:** 3
- **Costs:** 20,000 USD

| Number | Deliverable                                                     | Specification                                                                                                                                                                                                           |
| -----: | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     1. | NFT Minting Page                                                | We create a page for minting different types of NFT on Polygon                                                                                                                                                          |
|    1a. | Minting NFT without card (Type 1)                               | The NFT use IPFS W3Auth Gateway and IPFS W3Auth pinning service                                                                                                                                                         |
|    1b. | Minting NFT with a card, without author's registration (Type 3) | The NFT use IPFS W3Auth Gateway and IPFS W3Auth pinning service                                                                                                                                                         |
|    1c. | Minting NFT with a card, with author's registration (Type 2)    | User has to use their Crust Wallet to be able to pin their file                                                                                                                                                         |
|   1d\* | Page to customize NFT card                                      | This part is the heaviest work for D-NFT Minting Page. We already designed some proof of concept NFT Cards presented above. The customization section will let the user choose their preferred NFT card style/QR styles |
|    1e. | Support W3auth gateway and W3auth pinning service               | Supported networks: Substrate, Polygon, Ethereum, Avalanche, Solana, Near                                                                                                                                               |
|     2. | NFT smart contract on Polygon                                   | A smart contract to mint NFT, the smart contract uses the newest golden standards.                                                                                                                                      |
|     3. | Deploy the website on IPFS                                      | Customize ipfs-crust-action and use Github action to pin the website on Crust Network                                                                                                                                   |
|     4. | Basic functions of the website                                  | Using the design style presented above to complete all essential functions of the website                                                                                                                               |
|    4a. | Homepage                                                        | Home page represents remarkable information about the website                                                                                                                                                           |
|    4b. | Multilanguage                                                   | Multi-languages function                                                                                                                                                                                                |
|    4c. | Wallet management                                               | Allow users to connect wallets to the website, get information in case of error, learn how to install/connect the wallets to the website                                                                                |
|     5. | $CRU faucet                                                     | $CRU faucet if users posted the tweet with required keywords (e.g. #switchswap #crustnetwork #web3)                                                                                                                     |
|     6. | $MATIC faucet                                                   | $MATIC faucet if users posted the tweet with required keywords (e.g. #switchswap #crustnetwork #web3)                                                                                                                   |
|     7. | Dedicated NFT view page                                         | View each NFT in detail, users can check file status on this page                                                                                                                                                       |
|     8. | NFT management                                                  | View all NFTs user created from switchswap smart-contract                                                                                                                                                               |
|     9. | Writing articles on Medium, Twitter                             | NFT/web3 related articles                                                                                                                                                                                               |
|    10. | Discord/telegram channel                                        | Helping users how to user switchswap to create NFT on discord/telegram                                                                                                                                                  |
|    11. | And more                                                        | During the development, if we see some functions need to be developed, we will not need to stay with the planning.                                                                                                      |

### Milestone 2 NFT exchange

- **Estimated Duration:** 2 months
- **FTE:** 2
- **Costs:** 10,000 USD

| Number | Deliverable                                                                            | Specification                                                                                                                |
| -----: | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
|     1. | Swap smart contract                                                                    | Writing a smart contract that allows user to swap their NFT against $MATIC                                                   |
|     2. | NFT gallery                                                                            | The gallery allows users to watch the NFT in sell/buy NFT                                                                    |
|     3. | Proposal smart contract                                                                | Writing a Polygon smart contract that allows users to propose a feature for switchswap, others can vote for posted proposals |
|     4. | Proposal UI                                                                            | UI that allows user to interact with the proposal smart contract/ see the proposals/ vote the proposals                      |
|     5. | Writing articles on Medium, Twitter                                                    | NFT/web3 related articles                                                                                                    |
|     6. | Optional: create a campaign to create NFTs (need the collaboration with Crust Network) | Create NFTs and get rewards                                                                                                  |
|     7. | And more                                                                               | During the development, if we see some functions/pages need to be developed, we will not need to stay with the planning.     |

## Future Plans

- Promote: get the collaboration with Crust Network/blockchain network to create a campaign in which users can get rewards if they create the NFT
- Develop new types of NFT that attract new users (such as Cryptopunks style NFT on IPFS)

## Additional Information

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

- Are there are any teams who have already contributed (financially) to your project? NO
- Do you have a community of users or open-source developers who are contributing to your project? NO
