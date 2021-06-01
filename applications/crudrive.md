# Crust Grant Proposal

* **Project Name:** CruDrive  
* **Team Name:** CruDrive  
* **Payment Address:** 0xdd2f8a0e413ddd58bf60a1c9218723f312671e33  
* **Receivable Token:** USDT ERC20  

### Overview
Please provide the following:
  * A project name: CruDrive  
  * A brief description of your project: An open-source, decentralized drive service built on hyper, ipfs, crust.  
  * An indication of how your project relates to / integrates into Crust: We will backup every file to Crust. We can also provide specific file's direct access link through ipfs hash.
  * An indication of why your team is interested in creating this project: We've always been interested in decentralized drive service, the advent of hyper, ipfs, Crust, let us realize that we can develop something special service.

### Project Details 
CruDrive offers decentralized storage service by its server while lending power from Crust network.   
Hitherto, file storage market's on chain transaction speed unable fully fulfills users' expectation. Therefore, we would like to take an asynchronous approach to tackle this problem. CruDrive kept users' uploaded file on server in the first place, then distributed them on Crust blockchain.  
CruDrive lower threshold for users to use file storage market since it offers a conciser user interface. Non-professional users might be able to understand how Crust works in an easy manner.
* An overview of the technology stack to be used: Egg, Vue, Hyper, IPFS, Crust
* Documentation of core components, protocols, architecture, etc. to be deployed: Hyper/IPFS/Crust White Paper
#### Hyper IPFS Comparison
|    |  Hyper  |  IPFS  |
| ---- | ---- | ---- |
|  Pros  |  P2P filesystem  | Distributed addressing system |
|    |  append-only(Git-like), support version control  |  |
|    |  Each drive has unique address, User can download all files with simple commands  | Each file(folder) has a unique hash, user can access specific file easily. |
|  Pros  |  Can’t access specific file directly  | No relation between hash |
#### Solution
Store all files in one drive, each file has unique ipfs-hash, stored in crust network.

#### Architecture
|  Layer  |  content  |
| ---- | ---- |
|  Interface  |  web, sdk  |
|  Service  |  drive, chain  |
|  Protocol  |  hyper, ipfs  |
|  Data  |  MySQL, Crust  |

### Ecosystem Fit 

Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem? We provide centralized drive service on top of Crust. Which will lower the barrier to entry. We also provide handlful toolkit help them integrate drive service to their application.
* What need(s) does your project meet? : We provide decentralized drive service.
* Are there any other projects similar to yours in the IPFS/Crust ecosystem? 
  No. 

## Team
### Team members
* Name of team leader: ChengGuo Piao  
* Names of team members: ChengGuo Piao, YaZhou Li, GuiHu Shen	 

### Contact
* **Contact Name:** ChengGuo Piao
* **Contact Email:** piaocg@outlook.com
* **Website:** crudrive.app

### Legal Structure 
* **Registered Address:** Shinden Fujimino Saitama2-3-26, Saitama, Japan 

### Team's experience
As a full-stack software developer with decade long experience. Currently interested in dapp development. 


### Team Code Repos
* https://github.com/crudrive  

### Overview
* **Total Estimated Duration:** 4-6 months
* **Full-Time Equivalent (FTE):**  5-7 FTE
* **Total Costs:** 20,000 USD

### Milestone 1 — Implement Basic Features 
* **Estimated Duration:** 2 month
* **FTE:**  2
* **Costs:** 14,000 USD
 
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will implement the architecture of our product. |
| 1. | Implement Basic Features | We will implement basic features such as create folder/file(text), upload file/folder | 
| 2. | Integrate Crust | All files will be uploaded to Crust network | 

### Milestone 2 

* **Estimated Duration:** 2 month
* **FTE:**  3
* **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | SDK | We will provide handful toolkit, help them integrate drive service to their application.  | 
| 2. | Payment | Implement payment system.  | 
| 3. | Import | Import remote IPFS hash  |


## Future Plans

- As Crust mature, we will provide more features to service.
- Will consider add import from hyper feature.
