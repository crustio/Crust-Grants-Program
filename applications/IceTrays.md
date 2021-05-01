* # Crust Grant Proposal

  * **Project Name:** IceTrays 
  * **Team Name:** YYDS Team
  * **Payment Address:** 0x3b61504b021669ef375217bBeEe9f6689792E4d4
  * **Receivable Token:** USDT

  > ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

  > ⚠️ *When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them.*

  ### Overview

  IceTrays is a multitiered file storage API cluster built on Crust and IPFS,  and it's based on raft consensus. It also provide a mutable file system .It will serve for developers.

  ### Project Details 

  Here's a high-level overview of the main components.

  ![image-20210412183532989](https://user-images.githubusercontent.com/19503475/115512688-d36ed080-a2b4-11eb-954a-c896d63e349e.png)

  IceTrays cluster based on raft consensus, combined with IPFS and CRUST technology, combines multiple IPFS nodes into a cluster to provide users with hot storage, while crust network is used as cold storage to ensure reliability. IceTrays node supports both file path and CID retrieval, which provides an easy-to-use  combined API for IPFS and CRUST. 

   I have written a general framework to familiarize  with the raft consensus. The [minimum viable product](https://github.com/ysh0566/ipfs-fs-cluster) can add, move, delete file and make directory, and  other nodes in network can sync directory root state from leader. Recently I noticed the crust project. I think crust is well integrated with it, which gives me motivation to improve the project.

   It's a golang project.

  

  ### Ecosystem Fit 

  Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

  * Where and how does your project fit into the ecosystem? 

     IPFS cluster gateway on Development Tool Layer.

  * What need(s) does your project meet? 

    Providing  Helping users to pin their files in IPFS and Crust network.

  * Are there any other projects similar to yours in the IPFS/Crust ecosystem? 

    [Powergate](https://github.com/textileio/powergate) is a multitiered file storage API built on Filecoin and IPFS, and an index builder for Filecoin data. IceTrays provides a more reliable  and easy-to-used service because it is decentralized and its nodes store file path message.

  ## Team

  ### Team members

  * Shenghui Yu
  * Shiwei Huang	

  ### Contact

  * **Contact Name:** Shenghui Yu
  * **Contact Email:** ysh0566@qq.com
  * **Website:** https://github.com/ysh0566

  ### Legal Structure 

  none

  ### Team's experience

  We are from a blockchain technology team. Our work a year ago was related to public chain development, and our work in the latest year was related to filecoin. We participated in slingshot and won the [community call-out award](https://github.com/filecoin-project/slingshot/blob/master/participants/ChainsData.md).

  ### Team Code Repos

  * https://github.com/IceTrays

  ### Team LinkedIn Profiles

  None

  ## Development Roadmap

  ### Overview

  * **Total Estimated Duration:** 3 months
  * **Full-Time Equivalent (FTE):**  2 FTE
  * **Total Costs:**  $20k

  ### Milestone 1 — Implement a minimum viable product

  * **Estimated Duration:** 6 weeks (Keep two extra weeks to learn about crust ecology)
  * **FTE:**  2
  * **Costs:** 8, 000 USD

  | Number | Deliverable              | Specification                                                |
  | -----: | ------------------------ | ------------------------------------------------------------ |
  |     0. | Documentation            | A dockerfile with deploying a 3 nodes **itsd** cluster and A document with how to use **itsc**. |
  |     1. | command-line application | We will provide a raft cluster with at least three nodes running. Cluster supports uploading files to IPFS and crust network. At the same time, we will provide an easy-to-use command-line tool **itsc**, which supports uploading, downloading, moving, deleting files and querying files and cluster status. |

  

  ### Milestone 2 — Additional features

  * **Estimated Duration:** 4 weeks
  * **FTE:**  2
  * **Costs:** 7, 000 USD

  | Number | Deliverable   | Specification                                                |
  | -----: | ------------- | ------------------------------------------------------------ |
  |     1. | code&unitest  | Hot storage garbage collection.                              |
  |     2. | code&unitest  | follower node and voter node can join and left cluster.      |
  |     3. | test          | Performance test of various network conditions and multiple number of nodes. Need to rent multiple servers. |
  |     4. | documentation | Documentation update.                                        |

  

  ### Milestone 3 — SDK

  * **Estimated Duration:** 4 weeks
  * **FTE:**  2
  * **Costs:** 5, 000 USD

  | Number | Deliverable   | Specification                                                |
  | -----: | ------------- | ------------------------------------------------------------ |
  |     1. | code&unitest  | Java, golang, python SDK(We hope that we can implement signing transaction easily...) |
  |     2. | documentation | Java, golang, python SDK  documentation                      |
  |     3. | documentation | Technical articles about IceTrays                 |


  ## 

  

  ## Future Plans

  - Maybe we can use GeoIP and optimize GC logic then we can use the cluster as a P2P-CDNs?
  - Access to filecoin network(But i don't think filecoin is a good choice for cold storage. )
  - More detailed documentation.
  - Provide help to developers who use IceTrays.


  ## Additional Information 

  * None
