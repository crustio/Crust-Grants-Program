# Crust Grant Proposal

* Project Name: CCS - Cross Chain Storage Platform
* Team Name: Zhu, Wenfeng (朱文峰); Gao, Le (高乐); Wang, Ruijun (王瑞俊); Sang, Junjun (桑俊俊); Dong, Yuansheng (董远胜); Liu, Qi (刘琦)
* Payment Address: 0x17389d755cb720e5e7e12d0fb926c0d53a2846d6 (USDT)
* Receivable Token: USDT – ERC20


### Overview

* A project name: CCS - Cross Chain Storage Platform
* A brief description of your project: In the ear of data explosion and related storage request, we want to create a decentralized, highly motivated storage platform. We will provide customer (individual and business) with a more secure, privacy-protected and cost-effective data storage service. 
* CCS will build multiple connection adapter incentive layers; Crust will be the pilot and main storage channel layer for CCS.
* Our team sees an opportunity to consolidate multiple decentralized storage providers to build a platform like “去哪儿” in air-tickets booking network, which provide business clients with most optimized data / files storage solutions.


### Project Details 

* Mockups/designs of any UI components
![image](https://user-images.githubusercontent.com/47582549/124770266-c89b1200-df6c-11eb-8737-0cafd60aba4a.png)
![image](https://user-images.githubusercontent.com/47582549/124770364-da7cb500-df6c-11eb-96e7-b0f025cd60ee.png)
![image](https://user-images.githubusercontent.com/47582549/124770380-dd77a580-df6c-11eb-886a-659e0d41cb58.png)

* Data models / API specifications of the core functionality
CCS AI engine layer provide the core app layer，collect each chain value base on different Chain Feature （like cost，speed, etc) value and user Preference to use AI select best chain when upload files。Also Provide single&simple interface  that reduce complex for end user。Following are RestAPI for main entries for CCS AI engine.
![image](https://user-images.githubusercontent.com/47582549/124771299-9938d500-df6d-11eb-954d-f393c4caf8fa.png)

* Example data for strategies. Base on each chain & strategy feature to train AI mode for selecting chain against different requirement.
![image](https://user-images.githubusercontent.com/47582549/124771382-aa81e180-df6d-11eb-9936-5763e0d22d18.png)

* An overview of the technology stack to be used
CCSUI Mainly use react,ipfs framework/technology stack.  For each 3rd chains, use each chain’s(like Crust,FileCoin,Swarm) API to interact(login, get CID, upload etc)
CCS AI engine use nodejs,js technology to develop AI selector.
![image](https://user-images.githubusercontent.com/47582549/124771461-b7063a00-df6d-11eb-8267-fa20fd41202e.png)

* PoC/MVP or other relevant prior work or research on the topic.
* 1, why need cross chain storage compatibility
In the storage industries, there are several different use cases. Like for example, government surveillance data which is normally with large incremental size but with low frequent download/upload (only in case of needed); while for the emerging AI industry the data size grows very fast and with high frequent usage (for training/testing). In general, the specific customer demand requires different characteristic for storage platforms, so cross chain compatibility is essential for approaching different customers.
* 2, Current IPFS based layer like Crust, Filecoin and other storage platform like Sia, Storj and Swarm, they will have different strengths and development phase, with that in different time phase we will always have optimal choice among these different layers. Another technical preference is that for example Crust has TEE environment which is quite helpful for clients with high security requirement.
* 3, As an MVP, it should have API/adapter connected to Crust network and with capability to a second non-IPFS layer like Swarm to utilize our advantage to choose layers with internal selection criterions for our clients. Also, with an easy-to-use UI for clients’ same functions that centralized storage platform have.




### Ecosystem Fit 

* Where and how does your project fit into the ecosystem?
Provide real and up-to-date business data from modern industry like AI companies which generate huge amounts of data day by day. The ecosystem shall feed with these real-world data and enable more parties to actually step in from traditional storage vendors.

* What need(s) does your project meet?
As described in project background, our solutions meet the needs of clients who rapidly consuming data storage and eager to seeking for another price-worthy and safe place to store their data.

* Are there any other projects similar to yours in the IPFS/Crust ecosystem?
* If so, how is your project different?
There do have a lot of storage applications based on IPFS/Crust ecosystem, the differentiator of ours is we enable multiple storage chains.



## Team

### Team members
* Zhu, Wenfeng (朱文峰);
* Gao, Le (高乐); Wang, Ruijun (王瑞俊); Sang, Junjun (桑俊俊); Dong, Yuansheng (董远胜); Liu, Qi (刘琦)

### Contact
* **Contact Name:** Wang, Ruijun (王瑞俊)
* **Contact Email:** wruijun@umich.edu
* **Website:**

### Legal Structure 
* **Registered Address:** 上海市长宁区仙霞路1225弄106号301室
* **Registered Legal Entity:** 峰乐瑞（上海）信息科技有限公司

### Team's experience

* Wenfeng Zhu：Used work for Oracle for 16+ years, had led several R&D projects for supply chain management product across different industry customers like High-tech, Medical, Aviation areas.  Founder of an IT company to provide supply chain management solution to the business customer. He is also familiar with underlying frameworks such as Bitcoin, Ethereum etc.  Founder of eosTrust supper node for EOSC blockchain network for 3 years and participate in several blockchain project like an Oracle project for EOSC chain.

* Wang, Ruijun: Applied Data Scientist from UMSI, over 10 years of working experience in top 100 listing company as Project manager, Corporate Consulting and Lean expert. Full time MBA of Shanghai Jiao Tong university of China Leadership Global Operation program. Proficient in using science of management tools to build up models to simulate business situation and machine learning model to build up automated prediction functions. Had leaded digital transformation projects for several huge organization like Huawei, MTR HK and so on. Blockchain early researcher and investor, dedicate in utilize blockchain technology to enable modern company digitization.

* Neo Gao: has more than 10 years of relevant work experience in computer technology, including more than 5 years of experience in  product manager and marketing job. He is proficient in Linux/Objective-C/Python/Swift/Rails/Js and Docker container technologies. He is also familiar with underlying frameworks such as Bitcoin, Ethereum, etc., and proficient in the application of blockchain.


### Team Code Repos
* https://github.com/CrossChainStorage


## Development Roadmap

### Overview
* Overview
•	Total Estimated Duration: Duration of the whole project (6 months)
•	Full-Time Equivalent (FTE): Required workload of a full-time employee for the whole project: 2 FTE in average
•	Total Costs: $30,000

* Milestone 1 – Architecture Design & UI-MVP
•	Estimated Duration: 1 month
•	FTE: 1.5
•	Costs: 3,000 USD
•	Deliverables: 1, Design work of architecture overview; 2, Demo UI – Version 0.0.1 with basic functions (upload / download)

* Milestone 2 — Connect to Crust and other storage layer 
•	Estimated Duration: 1 month
•	FTE: 2.5
•	Costs: 8,000 USD
•	Deliverables: 1, Adapter components for Crust and other layer (Demo 1, upload file; 2, display file list; 3, Download file) for both chains.

* Milestone 3— Implement Cross Chain Capability with CCS engine (Automated Selection)
•	Estimated Duration: 1 month
•	FTE: 2
•	Costs: 6,000 USD
•	Deliverables: CCS engine components including rest API – 1, Demo with automated selection; 2, Provide rest API specification

* Milestone 4— Full set of function / deployment including testing
•	Estimated Duration: 1 month
•	FTE: 2
•	Costs: 4,000 USD
•	Deliverables: 1, UI for client account; 2, Upgrade version of CCS engine; 3, CCS Online (URL); 4, Testing report

* Milestone 5— Documentation / Pilot client engaging
•	Estimated Duration: 1 month
•	FTE: 2
•	Costs: 5,000 USD
•	Deliverables: 1, User guide dock and API dock; 2, Pilot use case specification

* Milestone 6— Pilot project go live
•	Estimated Duration: 1 month
•	FTE: 2
•	Costs: 4,000 USD
•	Deliverables: Field running result / report

## Future Plans

Please include here

* Including more storage chains to enable multiple chains compatibility, and with more sophisticated CCS model, we are able to provide smart / proper solution for different kinds of clients.
* Engaging more industry with expending system capacity and getting fund through marketing campaign.
* In long-term, we will also extend the capability of serving individual customer with proper solution for them.

