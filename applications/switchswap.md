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

  Over the last months, we have built socbay.io on IPFS, intending to show users how does decentralized storage works. But the reality is not as expected, videos platform is not in the interest of the blockchain community, we only got two users posted video on Socbay over the last 5 months, one from Crust Network team member and another from a curious user. Centralized applications such as youtube, Vimeo, etc... are doing so well in that field so the interest of users for socbay.io is diluted.

  Our philosophy is: If we want to reach public users, decentralized storage networks must reach users in our community first (blockchains community). So we decided to build something that the blockchain community cares about. NFT is the product of collaboration with blockchain projects, therefore it will bring the attention of decentralized storage to members in the target blockchain community. We recognized that the community started having concerns about the persistency of NFT, some NFT projects started using IPFS instead of an API for storing metadata and NFT content, but IPFS is not fully decentralized because it relies on centralized pinning servive. It's a good time to bring Crust decentralized pinning service to NFT world.

## Project Details

### **First phase**

In the first phase, our primary products are:

1. D-NFT minting page allows users to customize the NFT Card and mint their NFT freely via Polygon smart contract. The different types of NFT will be presented in the next part.
2. Graphical tool to create NFT Cards presented bellow
3. NFT gallery: for exhibiting, trading NFT in a decentralized way via a swap smart contract on Polygon.
4. NFT manager: for managing user-own NFT

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

<img src="https://user-images.githubusercontent.com/16051365/136270083-1e56ddbc-3878-44ec-b3b4-452ca413bc76.png" width="400" />
<img src="https://user-images.githubusercontent.com/16051365/136270243-ef052cd1-487c-4c10-8f1b-5844fcc4e610.png" width="400" />
<img src="https://user-images.githubusercontent.com/16051365/136270306-f0a45ae0-c3f0-4ec7-aa43-33dc3231eee2.png" width="400" />
<img src="https://user-images.githubusercontent.com/16051365/136270375-ae075990-87d1-4abd-bac6-366767a03719.png" width="400" />

### **Type 3: With switchswap NFT Card, without author registration**

This type of NFT is used to register anonymous files which don't require author registration. The file could be image/video/article/software/etc...

This NFT can be used to replace NFT type 1 to offer high quality NFT. In this case, the NFT Card can be considered as the representation of NFT type 1. If others want to access the actual content of NFT, they can scan the QR code or access by its CID.

<img src="https://user-images.githubusercontent.com/16051365/136270788-10e62465-1484-45d3-a94e-660546fe52d7.png" width="400" />
<img src="https://user-images.githubusercontent.com/16051365/136270883-bc24a12f-394c-4c47-a376-a317d3c67ef8.png" width="400" />
<img src="https://user-images.githubusercontent.com/16051365/136270902-03f01c59-ffeb-4573-87ab-61d2a705d2ae.png" width="400" />
<img src="https://user-images.githubusercontent.com/16051365/136270923-290afc2b-0824-4559-a724-2786f6649044.png" width="400" />

### **Some QR Code styles that user can use in their NFT Card**

![image](https://user-images.githubusercontent.com/16051365/136271008-14f58909-d27e-49c9-bb79-c4225ad17e33.png)
![image](https://user-images.githubusercontent.com/16051365/136271039-ad002375-7b90-4331-819f-d3ebb162d6ab.png)

### **Type 4 and more: Cryptopunks style NFT**

Cryptopunks has shown its success over the last period, but it has limitations because all data must be stored on-chain.

At switchswap, we use an open-source avatar library that offers up to 140 million different avatars. The avatar is divided into different zones. Each zone has a category of design; by combining all these different zones randomly, we can obtain a random asset.

We could create a collection of NFT based on that idea; all categories will be stored on Crust Network with a high renew pool to ensure the persistency of this NFT collection. More details on this type of NFT will be discussed later.

<img src="https://user-images.githubusercontent.com/16051365/136271070-153f84a4-9bd3-4a14-a2c4-2b106bcc71fc.png" width="400" />

## **UI components**

Switchswap is aimed to be long-term and will be used for different applications in web3 world, so we care about the user experience on the interface and the product quality.

We give the user as much information as possible to guide them on using the platform/ wallets. All these features are being hardly developed; some features are at the MVP level.

**Minting Page**

![image](https://user-images.githubusercontent.com/16051365/136271136-4f4f1ed6-fc68-4c1d-9d92-4b9379f575f2.png)

**Upload status**

![image](https://user-images.githubusercontent.com/16051365/136271160-3a701a61-e2ce-4e29-9466-148800afd731.png)

**Adding metadata (not beautiful, to be modified)**

![image](https://user-images.githubusercontent.com/16051365/136271183-de956c7f-37a0-4b87-9155-a89b35eebcec.png)

**Home page**

![image](https://user-images.githubusercontent.com/16051365/136271203-3383bada-f735-46a7-9cea-1d3b0d3c4ba5.png)

Many things will be added on the home page, such as total NFT minted, development progress, user proposals, etc... We are currently focusing on the NFT Minting page. All small features will be added to Home Page later.

<img src="https://user-images.githubusercontent.com/16051365/136271222-a35ba131-701b-4ccb-9e1c-02419ae6554a.png" width="300" />

Design of development progress

![image](https://user-images.githubusercontent.com/16051365/136271317-fb34bc80-292f-436a-8441-a7a346c50f64.png)

**Wallet Management**

<img src="https://user-images.githubusercontent.com/16051365/136271339-d39ee25e-8c20-4c22-8969-d1b142c48318.png" width="400" />

**Design of Gallery Page (In dev.)**

It could be considered an NFT exhibition; there will be many exhibitions in switchswap, each show will have different parameters and is located at a separate page.

At the gallery, users can view NFT and buy them if interested.

![image](https://user-images.githubusercontent.com/16051365/136271452-6b7de5f3-3f23-42a0-9eb4-f5b286f328de.png)

**Fun box**

![image](https://user-images.githubusercontent.com/16051365/136271491-8ddb89e6-644f-4c9b-a557-209f9f42e447.png)

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

![image](https://user-images.githubusercontent.com/16051365/136271531-506988e3-e8f5-402c-a2ea-e0057d18cb4f.png)


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

- **Nghia Nguyen:** ng.nguyen@switchswap.io
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
|    10. | Discord/telegram channel                                        | Helping users how to use switchswap to create NFT on discord/telegram                                                                                                                                                  |
|    11. | And more                                                        | During the development, we'll develop other functions/features if needed                                                                                                    |

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
|     7. | And more                                                                               | During the development, we'll develop other functions/features if needed      |

## Future Plans

- Promote: get the collaboration with Crust Network/blockchain network to create a campaign in which users can get rewards if they create the NFT
- Develop new types of NFT that attract new users (such as Cryptopunks style NFT on IPFS)
- Develop minigame we feel motivated to develop: lottery, funny betting events,...
- Develop small tools in Funbox: check approvals of tokens and revoke (this tool is very useful for ERC20 holders to check whether their account has risk to be hacked), check APY of some projects. These tools and minigames are not related to Crust Network but in reality it'll attract users to the platform.

## Additional Information

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

- Are there are any teams who have already contributed (financially) to your project? NO
- Do you have a community of users or open-source developers who are contributing to your project? NO
