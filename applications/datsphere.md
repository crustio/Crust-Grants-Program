# Crust Grant Proposal

* **Project Name:** DatSphere  
* **Team Name:** DatSphere  
* **Payment Address:** 0xdd2f8a0e413ddd58bf60a1c9218723f312671e33  
* **Receivable Token:** USDT ERC20  

### Overview
Please provide the following:
  * A project name: DatSphere  
  * A brief description of your project: An open-source, decentralized drive service built on dat, ipfs, Crust.  
  * An indication of how your project relates to / integrates into Crust: We will backup every file to Crust. We can also provide specific file's direct access link through ipfs hash.
  * An indication of why your team is interested in creating this project: We've always been interested in decentralized drive service, the advent of dat, ipfs, Crust, let us realize that we can develop something special service.

### Project Details 
#### Comparison
|    |  Dat(Hyper)  |  IPFS  |
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
|  Interface  |  web, rest api, sdk  |
|  Service  |  encryption, drive, chain  |
|  Protocol  |  dat, ipfs  |
|  Data  |  MySQL, Crust  |

### Ecosystem Fit 

Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem? We provide centralized personal drive service on top of Crust. Which will lower the barrier to entry. We also provide handlful toolkit to help user integrate crust to their application.
* What need(s) does your project meet? : User can easily set up their own decentralized drive service.
* Are there any other projects similar to yours in the IPFS/Crust ecosystem? 
  No. 

## Team
### Team members
* Name of team leader: ChengGuo Piao  
* Names of team members: ChengGuo Piao, YaZhou Li, GuiHu Shen	 

### Contact
* **Contact Name:** ChengGuo Piao
* **Contact Email:** piaocg@outlook.com
* **Website:** datsphere.org

### Legal Structure 
* **Registered Address:** Shinden Fujimino Saitama2-3-26, Saitama, Japan 

### Team's experience
As a full-stack software developer with decade long experience. Currently interested in dapp development. 


### Team Code Repos
* https://github.com/datsphere  

### Overview
* **Total Estimated Duration:** 4-6 months
* **Full-Time Equivalent (FTE):**  5 FTE
* **Total Costs:** 20,000 USD

### Milestone 1 — Implement Basic Features 
* **Estimated Duration:** 2.5 month
* **FTE:**  3.5
* **Costs:** 14,000 USD
 
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will implement the architecture of our product. |
| 1. | Implement Basic Features | We will implement basic features such as upload file/folder, pin remote hash, sync remote drive |  
| 2. | Integrate Crust | All files will be uploaded to Crust network | 
| 3. | Encryption/Decryption | Files will be encrypted before upload to crust. Decrypt it before download it through service. |   

### Milestone 2 

* **Estimated Duration:** 1.5 month
* **FTE:**  1.5
* **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | SDK | We will provide handful toolkit, help developers set up their own service.  | 


## Future Plans

- As Crust mature, we will provide more features to service.
- We plan to provide decentralized multi-tenant drive service, which powered by datsphere. This is commercial product, will not open source.
