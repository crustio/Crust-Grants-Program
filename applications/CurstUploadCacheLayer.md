# Crust Grant Proposal

* **Project Name:** Curst Upload Cache Layer
* **Team Name:** Yoghourt Team
* **Payment Address:** cTGW1KoXVrVJWjH8XTDo2Dto9XArfHxkUTF4A49op6JzcTKAk
* **Receivable Token:** CRU

### Overview

This project aims to improve the stability of IPFS gateways and the efficiency of replica distribution through configuration and code optimization, focusing on Crust's gateways and third-party gateways. We will develop a management panel for gateway nodes that handle uploads, facilitating better management of third-party gateways. After small-scale validation of these gateways' upload capabilities, we will collaborate with Crust to migrate and customize the latest version of Kubo (IPFS) for the Crust network. The main goal is to optimize the load-balancing strategy of public gateways and to fully utilize the performance of gateway machines by automating hardware resource configuration adjustments, ensuring a stable file upload experience. Our short-term goal is to handle 1TB of uploads daily, with mid-term goals set at 5TB, and a long-term target of 10TB.

### Project Details 
Our team is currently developing and optimizing the following features:

Kubo Research and Optimization: We will study the Kubo source code and adapt it to the Crust network, improving the stability of the upload cache layer. By optimizing the code and configurations, we aim to resolve the instability of the public gateway's upload cache layer and increase the success rate of replica retrieval by miner nodes.

Load Balancing: We will design and implement a load-balancing system for gateway upload requests based on users’ geographic locations and gateway resource utilization to ensure efficient network operation.

Automated Node Configuration: By detecting and analyzing machine hardware resources, we will implement automatic IPFS node configuration adjustments, maximizing the hardware performance of machines and improving node response efficiency. Once verified, this setup could be extended to miner nodes.

Gateway Management System: We will develop a gateway management system to allow administrators to manage third-party gateways efficiently. The system will include node management, monitoring, configuration, and image updates.

**Technical Draft**：https://yoghourt.feishu.cn/docx/AQcddf1HhowcDhxPG15ckLOOnk8

### Ecosystem Fit 

**Positioning**: This project focuses on improving the stability and upload cache layer of IPFS public gateways within the Crust network. Through load balancing and automated hardware resource configuration, the project enhances the upload stability and replica distribution efficiency of public gateway nodes. Our observation reveals that Crust’s daily storage orders are not growing rapidly, and the current 10 public gateway nodes should suffice for long-term needs. However, configuration issues prevent these gateways from fully utilizing their performance, leading to significant resource wastage.
**Addressing the Demand**：This project addresses the instability caused by uneven gateway resource usage and outdated IPFS versions, significantly improving the performance of uploads and the caching layer.
**Strengthening the Infrastructure**：We aim to provide a more stable public upload service for all builders within the Crust ecosystem.

## Team

### Team members
* JunYou Wu
* WenJie Fu
* ZhiChong Yang

### Contact
* **Contact Name:** JunYou Wu
* **Contact Email:** official@yoghourt.cloud
* **Website:** https://www.yoghourt.cloud

### Legal Structure 
* **Registered Address:** Room 8-1198, 4th Floor, Building 2, No. 55 Xinhua North Road, Tongzhou District, Beijing City
* **Registered Legal Entity:** Yoghourt Technology(BeiJing) Company Limited

### Team's experience
Our team has extensive research experience optimizing IPFS, Kubo, and their applications in the Crust network. We also have expertise in high-concurrency environments and have developed the Yoghourt Cloud, a Crust-based cloud storage service currently handling over 300GB of daily uploads. Additionally, we have tested the performance of public gateways and verified the existence of replica distribution issues. Our next step is to optimize network stability continuously and ensure the smooth operation of Yoghourt Cloud as it scales up.

### Overview
* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  2 FTE
* **Total Costs:** $20k

### Milestone 1  — Core Functionality
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 10，000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT  |
| 0b. | Documentation | Deployment documentation |
| 0c. | Testing Guide | Testing suite | 
| 1. | Gateway Management Panel - Alpha Version | Collects basic information from multiple gateway nodes |  
| 2. | Gateway Node Image - Alpha Version| Extracts basic usage information from the gateway machine and Kubo|  
| 3. | Kubo/libp2p Code Review| Source code analysis and customization for optimization |  



### Milestone 2  — Load Balancing and Panel Expansion
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 8000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Gateway Management Panel - Beta Version | Adds node management functions |
| 2. | Load Balancing Module | Developed to route requests to gateways based on usage and user location |
| 3. | Gateway Node Image - Beta Version| Supports upgrades and management operations|
| 4. | Kubo/libp2p Code Review | Further source code analysis and optimization | 

### Milestone 3  — Test and Enhancement
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 2000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Testing | Load testing and system verification |
| 1. | Security Enhancement | Assess and enhance the security of the system to ensure the safety of each module during operation |

## Future Plans

- **Improved Public Infrastructure**：We will enhance the control panel with a blacklist system to intercept and report illegal file CIDs.
- **File Retrieval Optimization**：While this project focuses on optimizing the upload cache layer, we believe there is significant room for improvement in file retrieval as well. Despite adding peer nodes, retrieving files is still slow. We plan to optimize miner node configurations to improve retrieval speeds.


## Additional Information 

Here’s a link to our Crust-based multi-segment supported cloud storage:https://crustnetwork.medium.com/introducing-yoghourt-cloud-99ec552fd505