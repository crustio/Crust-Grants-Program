# Crust Grant Proposal

* **Project Name**: Log Store
* **Team Name**: Usher
* **Payment Address:** 0xc6D330E5B7Deb31824B837Aa77771178bD8e6713
* **Receivable Token:** CRU

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

> ⚠️ *When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them.*

### Overview

**Log Store** is a decentralised event log storage solution developed on existing and utilised networks such as Streamr, Kyve and ideally, the Crust Network. Log Store is analogous to Elastic's Logstash, but architected for decentralisation.

Log Store nodes are designed to receive real-time data via the Streamr Network, behave as a cache for this data in order to serve query requests, and then perform Kyve’s storage, proposal and validation mechanisms in order to move data to the Crust Network in a fully decentralised manner.

The Usher team is interested in realising the Log Store to enable open and collaborative telemetry for dApps, such that events triggered within websites and mobile apps can have cumulative effects on other dApps or even blockchain Smart Contracts. The Log Store solution is also a component of a much larger data platform being designed with the support of the Usher team. 

### Project Details 

#### Solution

This solution is comprised of leveraging four technologies:

* Streamr
  Necessary for transporting data anywhere. Streamr is a pub/sub network capable of transporting data messages from just about any compute environment, whether a website, mobile app, IoT device or centralised server. 
* Kyve
  A two layer decentralised network with the purpose of archiving data.
  On the Chain layer, validator nodes secure a Tendermint-based blockchain managing consensus on whether the stored data is valid.
  On the Protocol layer, up to 50 nodes (that form a Pool), cooperate to submit votes to the chain on whether a bundle proposed by a single node is valid.
  Each validator can be an independent entity securely participating by staking via Kyve’s platform.
* Crust
  A network & blockchain to facilitate the storage of data on IPFS and subsequent IPFS pinning.
* EVM Smart Contract — `logstore.sol`
  A decentralised authority over which data streams are stored by the validator nodes.
  A value-based stake (in ETH, MATIC, DATA, etc.) is required to be included in the parameterised Log Store to finance the compute and storage costs.

By integrating these technologies, we form a decentralised data pipeline governed by an EVM Smart Contract, such that Streamr data is moved to Crust for IPFS-powered decentralised storage by a Kyve Pool (a decentralised network of nodes).
  
A proposal, [Streamr Governance Proposal (SIP-13)](https://vote.streamr.network/#/proposal/0x87a023191e4525265c0f1c3a68b5b63e4dd758e8dbbdec2cb3ec721828773f1c), for the Log Store solution has already been approved by the Streamr community with the potential of making this solution the default storage mechanism for the Streamr Network.

#### Processes

##### Log Store Node

Each node follows the same deterministic process:

1. Pull/Refresh data streams from `logstore.sol` Smart Contract.
2. Listen to data streams
3. Move events into a local “bundle”
4. Kyve Blockchain selects the Node as a Data Bundle “Proposer” or “Validator”
5. If Proposer
   1. Propose the bundle of data, comprised of events from different streams by uploading it to Storage (Crust/IPFS)
   2. Use the Storage ID (IPFS CID) to submit a proposal for a new bundle to the Kyve Blockchain
6. If Validator
   1. Download the proposed bundle of data from Storage (IPFS)
   2. Compare foreign proposed bundle with local bundle
   3. Prepare a vote on whether the data bundle is valid
   4. Submit the vote to the Kyve Blockchain
7. Clear local “bundle”
8. Repeat Step 1

In the circumstance where a Log Store configuration is insufficiently funded, all Bundles of data on IPFS will be scanned, and if unfunded data exists, it will be removed. New Bundles that exclude the unfunded data will be re-uploaded to Crust, and a mapping of CIDs will be persisted inside of a Log Store configured especially for the Log Store Network. This means that the Log Store nodes will re-use their own data storage interface to store a history of events indicating CID changes, as well as persisting this mapping of CIDs locally.  

##### `logstore.sol`

This Smart Contract will allow anyone to create a new decentralised log store, powered by Streamr.  
The user experience is like so:

1. Create a Log Store by submitting a transaction with Streamr identifiers and a financial stake
2. Receive an NFT representing ownership over the new log store.
3. When log store funds deplete, top up your funds to continue log storage.  
   Funding Log Stores is open to anyone with a vested interest in maintaining a log store.
4. Burn the log store NFT to delete the log store.
5. Use the log store NFT to amend the log store.

To ensure funds are being re-allocated continuously, the following processes will be included:

1. A validator node will be selected to notify the Smart Contract when a new dataset/bundle is validated and uploaded.
2. Within this transaction, an Oracle Network will be tasked to bring validated metadata about the latest dataset onto the Smart Contract.
   *This may or may not use Kyve’s GraphQL interface depending on Oracle compatibility.*
3. This data is used to reallocate funds to compensate the validators accordingly.
   Price Feeds provided by Oracles, such as Redstone, will ensure fee accuracy between disparate cryptocurrencies staked and expensed.

Storage Costs and Kyve Staking will be managed by Node Operators participating in the Kyve Pool. Node Operators will earn funds within Kyve and a proportional amount will be reflected as fees in the EVM Smart Contract.

##### Fee Calculation

The stake requirement to facilitate a decentralised log store compensates the Kyve Pool Validators.  
Fees are calculated for each log store.  
Fees are reallocated after a given dataset/bundle has been stored.  
The total fee is the sum of the:  

* fees incurred from data stored
* validator rewards for facilitating storage
* treasury fees to fund the maintenance & development of the Log Store solution

Validator rewards and treasury fees should & will be governable in a decentralised manner.  
While a new governance token offers a breadth of options for scale and purpose, Kyve already offers a governance platform, and therefore, the first version of the Log Store platform will leverage Kyve’s existing governance technology.  
This enables validators staking in Kyve’s platform to participate and vote.  

#### Implementation

The objectives of this technology are to:

* be compatible with Streamr interfaces
* determine which Streamr streams to store as defined in a Smart Contract
* ingest real-time data from the Streamr network
* store ingested data ephemerally -- ie. cache data
* respond to queries rapidly using this stored data
* use stored data to produce bundles for validation
* perform validation and movement of data bundles to Crust as per Kyve's process
* request and load data from Crust/IPFS when incoming Streamr queries request data that has expired from the ephemeral cache
* re-uploading bundles to IPFS, and persisting a mapping of updated CIDs where insufficient funds are detected for a given log store configuration.

These objectives are achieved by developing a hybridised node comprising of the Streamr Broker Node and the Kyve Protocol Node integrated with a new Storage Provider, the Crust Network, such that each of these disparate processes are embedded into a single executable binary.

The independent nodes are each developed in Typescript which makes the integration simpler with regard to inter-library dependency. The unification of logic into a single executable keeps Node Operation simple, and ensures that Kyve's KYSOR tool can be used to manage runtime upgradability.

Despite the integration of logic, an effort will be made to retain the disparate libraries' frameworks. This way any upgrades made by the Kyve or Streamr teams to their corresponding libraries can be applied to the hybrid Log Store node, ideally through dependency versioning.

As the data ingested in the Node is now purposefully ephemeral, Streamr's default Storage Plugin which depends on management and uptime of a Cassandra DB will be modified to work with an embedded time-series database while keeping all of the interfacing intact.

The architecture of the Log Store Node can be found here: 
![Log Store Node Architecture for Crust Network](https://usher-pub.s3.amazonaws.com/misc/Log+Store+on+Crust+Architecture+%232.jpeg)

A codebase has been started off the back of the ETHOnline 2022 hackathon, but requires much more work to be ready for utility:
[https://github.com/usherlabs/logstore/](https://github.com/usherlabs/logstore/)

### Ecosystem Fit 

Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

* *Where and how does your project fit into the ecosystem?*  
  The Crust Network is a decentralised solution for pay-as-you-go data storage. This project aims to be a perfect use case for the Crust Network demonstrating that the underlying decentralised storage mechanism can be utilised by another node network to deliver data composition in the form of an append-only log store. Beyond the storage utility, the Crust Network is out performing AWS S3 on storage costs as of the time of this grant application. Therefore, this log store solution can be a viable alternative log management solution for other Web3 (or Web2) initiatives that incorporate telemetry.
* *What need(s) does your project meet?*  
  Decentralised data composability in a time-series format, accessible from any software environment. Creation of an open and validated source of truth for some log-based dataset enables multi-party collaboration, whereby data can be aggregated from different sources, and then analysed on Analytics platforms or Business Intelligence tools. 
* *Are there any other projects similar to yours in the IPFS/Crust ecosystem?*  
  * *If so, how is your project different?*  
    Potentially [Robonomics](https://robonomics.network/), as they're delivering a decentralised cloud with support for IoT devices, however, the Log Store solution is designed to be quite versatile. While IoT devices can ship their logs directly to Crust via the Log Store Network, logs can also come from anywhere else, like websites, mobile apps, servers and even other node networks.
  * *If not, are there similar projects in related ecosystems?*  
    Log Store is designed to be quite open in its utility. While it can be utilised as a generalised log storage and management solution, it can also serve as a mechansim for transporting and aggregating data in IPFS for compatibility with other decentralised networks that make use of IPFS.
    

## Team

### Team members
* Name of team leader
  * Ryan Soury
* Names of team members
  * Christie Soury
  * Victor Shevtsov

### Contact
* **Contact Name:** Ryan Soury
* **Contact Email:** ryan@usher.so
* **Website:** https://www.usher.so

### Legal Structure 
* **Registered Address:** 79 George Street, Parramatta NSW 2150, Australia
* **Registered Legal Entity:** Usher Labs Pty Ltd (ABN 35658656332)

### Team's experience
Usher delivers software to support partner & ecosystem management for Web3 businesses. The team has experience developing software that integrates with blockchain data, as well as decentralised data networks like Ceramic. Examples of this work can be found in Usher's open source libraries.

Usher's team is comprised of two developers Ryan and Victor, each with deep experience in Web2 service-based custom software development. 
Prior to Usher, Victor developed data management software for businesses in the field of industrial warehousing and manufacturing. Victor learned Rust through this experience, and managed to apply that understanding to Rust Smart Contract development in a priorietary project that incorporated Solana & Wormhole. 
Ryan used NFT development as a catalyst to develop for the Web3 industry, learning Solidity, different networks for managing decentralised data, and modules for integrating with Blockchains. Ryan required a marketing solution for this NFT development, and proceeded to incubate Usher within Arweave's Open Web Foundry program. 
Separately to Usher, Ryan & Christie lead a software studio in Australia. 

### Team Code Repos
* [Programs](https://github.com/usherlabs/programs) is a repository of software packages that enables dApps to embed Usher's link sharing and affiliate marketing technology into their own applications.
* [Usher.js](https://github.com/usherlabs/usher.js) is a library to support cookie-based conversion tracking within websites. 
* [Log Store](https://github.com/usherlabs/logstore) is the current version of the Log Store solution developed during a hackathon. Demonstrates example fo Smart Contract developmet in Solidity.
  
### Team Associated (Past/Personal) Code Repos
* [https://github.com/webdoodle-aus/mautic-whitelabeler](https://github.com/webdoodle-aus/mautic-whitelabeler) - a plugin for a Marketing Automation platform developed by Ryan's team
* [https://github.com/rsoury/serverless-web-crawler](https://github.com/rsoury/serverless-web-crawler) - delivers long serverless job-based website crawls
* [https://github.com/rsoury/react-dynamic-sheet](https://github.com/rsoury/react-dynamic-sheet) - a react component module
* [https://github.com/rsoury/buyte](https://github.com/rsoury/buyte) - payment orchestration software to simplify integration of Google Pay and Apple Pay

### Team LinkedIn Profiles
* https://www.linkedin.com/in/ryan-soury-904072100/
* https://www.linkedin.com/in/christie-soury-9a124817b/
* https://www.linkedin.com/in/victor-shevtsov-3a772258/

## Development Roadmap

### Overview
* **Total Estimated Duration:** 2 - 3 months
* **Full-Time Equivalent (FTE):** 1 FTE
* **Total Costs:** 25,000 USD

### Milestone 1 — Concept to Production
* **Estimated Duration:** 6 - 9 weeks
* **FTE:** 1
* **Costs:** 20,000 USD

This phase includes developing just enough of the solution to demonstrate that it can work within production parameters such that ingestion of data into the node network represents Streamr’s live environment. This demonstration will be emulated through benchmarks against an operable test/staging version of the Node Network.

The objectives within this scope are to develop the:

1. Log Store Node — which operates the Kyve Pool and includes integration of Crust/IPFS file storage and Crust order creation.
2. `logstore.sol` Smart Contract
   1. An EVM Compatible Smart Contract that requires an arbitrary financial stake in MATIC, ETH or DATA
   2. A list of Streamr data stream identifiers

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide documentation of the code in the form of a README.md and a video tutorial that explains how a Node Operator can engage the Kyve Blockchain to participate, and spin up one of the Log Store nodes. Once the node is up, it will be possible to receive data over the Streamr Network to show how the nodes coorperate to move data to Crust in a decentralised manner. |
| 0c. | Unit Testing Suite | Core Node functions and Smart Contract methods will be fully covered by unit tests to ensure functionality and robustness. The documentation will outline the steps requried to run unit tests locally. | 
| 1. | Architecture Planning and Testing | Preparing an architecture for the node that delivers on the short and long term objectives of the project. | 
| 2. | Crust x Kyve Storage Provider Module | We will create a module compatible with any Kyve Node that allows Crust to be a Storage Provider for the archiving network. |  
| 3. | Log Store Node Development | We will develop a binary that incorpoates the Kyve, Streamr and Crust processes |  
| 4. | `logstore.sol` Smart Contract | We will develop an EVM Smart Contract to govern which Streamr data streams are stored on Crust | 
| 5. | Local Node Testing | Testing the Node in a local capacity to ensure a working prototype. While this includes Unit Tests, it also involves operation of the Node to ensure networking capabilities | 
| 5. | End-to-end Testing & Improvements | End-to-end testing of the Node; operation of the Node in a private network that conforms to a Kyve Pool's security measures and processes | 
| 5. | Benchmarks & Optimisations | Benchmarks will be captured throughout this testing process and included in the open-source repository | 

The outcome of this development will be a stable Log Store Node capable of operation within a Kyve Pool to deliver on the objectives outlined in the scope. The EVM Smart Contract will be purely programmatically accessible.

### Milestone 2 — Improvements, Tooling and Integrations
* **Estimated Duration:** 4 weeks
* **FTE:** 1
* **Costs:** 5,000 USD

This phase will primarily focus on developer tooling, deeper integration into the Streamr tools/UI and further production-grade improvements to the Node and Smart Contract.  
This phase will allow all new Streamr developers to simply add Crust as a storage provider for their data through the Streamr UI.  
A simple UI will also be included to demonstrate activity specifically for the Log Store network.  
Among other Smart Contract improvements, CRU (ERC20 compatibile version) can be added as a payment currency to power storage using the Log Store.  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 1. | Node Improvements | Production data gathered from node operation will open dialogue around how to better improve the Node Operation experience, as well as highlight performance optimisations. This line item encapsulates the developments aligned with this objective. |  
| 2. | Smart Contract Improvements | While the Smart Contract will be designed to minimise upgrade requirements, these improvements can include new currencies, or additional Smart Contracts that extend the logic of the original. |  
| 3. | Streamr Tools & UI Integration | Considering the node interfaces with the Streamr Network, its important to allow Streamr developers to publish and pull data from the network using the native client libraries and interfaces. |  
| 4. | Basic Log Store UI | While integration into Streamr UI can simplify the process of Log Store creation, and Kyve's UI can indicate the state of the Log Store's data bundle creation, a Log Store explorer and dedicated UI can add more visibility into how data is managed and the network's traffic and performance. |  

## Future Plans

Log Store is designed as a standalone solution that any network or dApp can use to transport logs and events to a decentralised storage network like Crust.
The immediate strategy upon production deployment is to:
1. Contact teams already using the Streamr Network and offer managed decentralised storage.
2. Reach out to large dApps and offer open and transparent log-based telemetry that can be safely integrated into open source projects.
   This way integrated dApp communities, and the teams behind these dApps have product analytics that is not siloed, centralised and obsecured from stakeholders.
3. Beyond dApp telemetry, node networks and oracle networks may be interested in transporting their event-based data to a storage network.

Log Store is also designed to be incorporated into a larger decentralised data platform that Usher is supporting the creation of. 
Once fully developed, this data platform will be capable of using data stored on Crust, through Log Store, as input data for decentralised computation capable of yielding fully verifiable data served to Oracle Networks.
This way custom data ingested via Log Store can be combined and cross-verified against Blockchain data in a fully decentralised manner to yield verifiable data Smart Contracts can use to manage digital assets.
The purpose of the data platform is to remove any centralised computational components and related security risks involved in using custom data in Smart Contracts to manage assets. 

## Additional Information 

* Usher is venture backed having raised through a small pre-seed round after incubating within Arweave's Open Web Foundry. 
* Usher will continue to develop tools that simplify partner management in Web3. 
* Log Store is a solution Usher intends to integrate that will allow Web3 businesses the own and utilise all data accrued through partner and referral activities. 
* The Data Platform that Log Store will be integrated into will allow Web3 businesses to develop their own Smart Contracts to manage how their partners' assets are managed based on decentralised data. 
* The Streamr Network community has approved financial contributions to develop a solution for decentralised storage of Streamr data. 
* The Kyve Network and community has embraced the development and operation of the Log Store Node in order to form a Kyve Pool. 
