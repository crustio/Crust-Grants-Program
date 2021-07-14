# Crust Grant Proposal

* **Project Name:** box
* **Team Name:** Functionland
* **Payment Address:** 0x42DD4709a336B8cE54b873069A5c09Ed27ec9Dd8
* **Receivable Token:** USDT

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

> ⚠️ *When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them.*

### Overview

Please provide the following:

  * A project name: box
  
  * A brief description of your project: 
  
  The mainstream developer experience in the world of independent front-end developers is to purchase a managed service provided by a cloud vendor, which abstracts away the complexity of dealing with back-end development and enable front-end developers to focus on end-to-end user experience for their clients. Currently, there is no option for a front-end developer to build on top of IPFS with a "Developer Experience" similar to serverless functions. They need to run a full js-ipfs node on the platform they want to develop on, for example on Android, which has different file system access than iOS or other operating systems. "box" is an IPFS node which aims to separate the server from front-end development and provides front-end APIs for developers to connect to, using Libp2p, giving them the same experience as a cloud server for any "box" node. To give a full application server experience to the developer, two protocols are being developed in "box" for a start:

File Protocol

Data Protocol

Front-end developers work with a "box" like a server without the need to run a full IPFS node on the platform they develop for, and interface with the "box" node to store or fetch data using libp2p. End users, their clients, can treat "box" like a server to keeps their data safe and gives them all functionalities of IPFS like cluster synchronization. If they lose their phone with the application installed, their files are safe in the "box" node.
  
  * An indication of how your project relates to / integrates into Crust: We will use crust as a pinning service to allow extra level of resiliance for those who want to have their files pinned out of their box
  
  * An indication of why your team is interested in creating this project:
  
  It was two years ago when cryptocurrencies and blockchain were the news page highlight, yet again. Everyone was excited about the potential of blockchain for decentralizing traditional central banks, however, the news didn’t have many headlines about the work that was being done to decentralize the whole web.

At that time my friend, an AI geek, and I, a full-stack developer,  discussed this and started to search on the internet. We came across several promising projects aimed to decentralize the web and finally, after analysing many of them, IPFS and IPLD, both open-source, caught our eyes.

They seemed promising to us, since they had a mature structure and a big community of open-source developers contributing to them.

So we thought, this was great, why were people not using them instead of central storage servers? And the answer was not hard.

As we spoke to our developer and non-developer friends, it became apparent that even many developers were not aware of these projects and many non-developers did not have the technical knowledge to set them up on their computers, even though it was just a few lines of command.

Besides, there were not many applications that could connect to them or their UX were not as appealing as those developed by big-tech.

We thought a framework that combines easy-to-use backend APIs, easy enough for an average front-end developer, and a pre-setup hardware, plug and play for a non-technical person, can fill this gap and bring decentralized web to everyone’s home.

### Project Details 
We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (with urls or IPFS file CIDs included) at following :

* Mockups/designs of any UI components: We are working on our first DApp that works with IPFS network and box. It is a replacement for "Google Photos" that let the users to store their photos on a "box" and on IPFS. Github project is here: [https://github.com/functionland/photos](https://github.com/functionland/photos)

Below is a GIF demo from "Photos" application, which is a react native app, as the first demo of how an application interacts with "box"

![https://dev.to/fx/google-photos-open-source-alternative-with-react-native-80c](https://raw.githubusercontent.com/functionland/blog/main/photos-intro-dev-to/photos.gif)

* Data models / API specifications of the core functionality

![https://dev.to/fx/google-photos-open-source-alternative-with-react-native-80c](https://raw.githubusercontent.com/functionland/functionland.github.io/main/static/images/box-diagram.jpg)

* An overview of the technology stack to be used

"box" is a collection of integrations for creating a server software that runs js-ipfs in a Node.js environment to serve application data. We use libp2p to create the required protocols for front-end developers to interface with the back-end "box" node, which is running on ipfs. Developers can send commands such as fetch files, upload, or access database. This is achieved by importing a single library that exposes the "box" functionalities to them, @functionland/graph (inspired by [Microsoft Graph workflow](https://docs.microsoft.com/en-us/graph/use-the-api)). These commands are then transferred to "box" node using libp2p. On the back-end the commands are interpreted by the "box" and are sent to js-ipfs or database library to get executed. Database library is using IPLD, specifically DAG-JSON/DAG-JOSE. Multiple "box"es are synchronized and accessible using ipfs-cluster.

Finally, as an availability guarantee for sensitive data, "box" provides the capability to pin data with Crust network, to give them a peace of mind over data safety. They have the option to backup their data to Filecoin network to preserve their important information from data loss.


* Documentation of core components, protocols, architecture, etc. to be deployed
* PoC/MVP or other relevant prior work or research on the topic:

You can find the initial code for box here: [https://github.com/functionland/box](https://github.com/functionland/box)

### Ecosystem Fit 

Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem? We want to make it easier for front-end developers to build appications for decentralized web as well as close the gap between non-tech-savvy individuals and decentralized web. For this purpose we combine IPFS, Libp2p, IPLD and Crust to build the platform.
* What need(s) does your project meet? 
* Are there any other projects similar to yours in the IPFS/Crust ecosystem? No, closest ones are FleekHQ and Ceramic.
  * If so, how is your project different? Below is a comparison between "box" and simillar projects:
  
- **Fleek:** Managed IPFS hosting + gateway
- **Ceramic:** protocols and chain for data persistence + decentralized identity
- **Textile:** backend stack for building on IPFS and Filecoin + backend-as-a-service
- **Box:** on-premise Web 3 with protocols for a Client-Server model + integrations for hybrid on-premise and on-chain options

  * If not, are there similar projects in related ecosystems?

## Team

### Team members
* Name of team leader: Keyvan Mirmohammadsadeghi

* Names of team members: Ehsan Shariati, Kate Withers Hess, Ehsan Emami

### Contact
* **Contact Name:** Ehsan Shariati Varnosfaderani
* **Contact Email:** shariati@directionx.ca
* **Website:** [https://fx.land](https://fx.land)

### Legal Structure 
* **Registered Address:** (not registered yet)
* **Registered Legal Entity:** Functionland (not registered yet)

### Team's experience
Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting code commits made by team members in past projects. For research-related grants, references to past publications and projects in a related domain are helpful. 

**Keyvan** is an avid open-source contributor since 2012 (when he joined OpenCog's AGI development team). He holds an MSc in Artificial Intelligence from University of Southampton, UK. He's served in various technical executive positions for about a decade and been affiliated with many start-ups, including two that he co-founded.

Relevant code code commits:
- [box project](https://github.com/functionland/box)
- [Assister.ai](https://github.com/assister-ai/assister)

Publications:
- Keyvan Mir Mohammad Sadeghi, Ben Goertzel: Uncertain Interval Algebra via fuzzy/probabilistic modeling. FUZZ-IEEE 2014: 591-598
- Ben Goertzel, Shujing Ke, Ruiting Lian, Jade O'Neill, Keyvan Sadeghi, Dingjie Wang, Oliver Watkins, Gino Yu: The cogprime architecture for embodied Artificial General Intelligence. CIHLI 2013: 60-67
- Ruiting Lian, Ben Goertzel, Shujing Ke, Jade O'Neill, Keyvan Sadeghi, Simon C. K. Shiu, Dingjie Wang, Oliver Watkins, Gino Yu: Syntax-Semantic Mapping for General Intelligence: Language Comprehension as Hypergraph Homomorphism, Language Generation as Constraint Satisfaction. AGI 2012: 158-167
- Jade O'Neill, Ben Goertzel, Shujing Ke, Ruiting Lian, Keyvan Sadeghi, Simon C. K. Shiu, Dingjie Wang, Gino Yu: Pattern Mining for General Intelligence: The FISHGRAM Algorithm for Frequent and Interesting Subhypergraph Mining. AGI 2012: 189-198

**Ehsan Shariati** studied electrical engineering and got his master's degree from University of Colorado at Boulder. He is a full stack developer with over 10 years of professional application development, who is experienced in Javascript frameworks, such as Angular, AngularJS, React and React Native, as well as PHP, C, C++, C#, JAVA, Python, MySQL, MSSQL, Linux. He is also a project manager, and has PMP, ITIL and SCRUM certificates. He has developed a shopping mall ERP system for the largest shopping mall in Iran(Isfahan City Center), as well as an insurance ERP for Dana insurance in Iran.

Relevant code code commits:
- [photos project](https://github.com/functionland/photos)
- [Jsonld-resume](https://github.com/Jsonldresume/lab-web)
- [PASAJ POS](https://github.com/directionXcorporation/pasajpos)

**Kate** is a business development and commercialization specialist and has worked with multiple startups and SMEs to realize their non-dilutive funding, investment, and revenue generation goals. Strategic project advisor to Centennial College's projects involving machine learning. Bootstrapping a B2B marketplace technology startup in the construction sector. PhD in Plant Agriculture, Ontario Agricultural College, Msc. from Michigan State University in Crop and Soil Science with focus on statistical analysis. 

**Ehsan Emami** is a senior hardware development lead, currently working at Amazon and previously at Apple and Gopro. With 12 years of hardware/software architecture experience, he has been a key contributer in defining, developing and fine-tuning many mass market products. Ehsan obtained his master's degree from University of Waterloo in Electrical Engineering.

### Team Code Repos
* https://github.com/keyvan-m-sadeghi
* https://github.com/ehsan6sha
* https://github.com/kitty2121
* https://github.com/ehsan-git-dev

### Team LinkedIn Profiles
* https://www.linkedin.com/in/keyvanmsadeghi/
* https://www.linkedin.com/in/ehsanehsan/
* https://www.linkedin.com/in/kate-withers-hess-phd-33530023/
* https://www.linkedin.com/in/ehsan-emami-0005bb6/

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
* **Total Estimated Duration:** 3 months
* **Full-Time Equivalent (FTE):**  3 months as we are working on it full-time
* **Total Costs:** $28K

### Milestone 1 — Implement Crust Order Modules 
* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Crust nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. | 
| 1. | File transfer module from applications to box | We will create an IPFS+Libp2p module that transfers the file from application to the box backend |  
| 2. | File transfer functionality from box to applications | We will create an IPFS+Libp2p module that transfers the file from box to the front-end application on request | 
| 3. | Reading photos in photos app from box | We will connect photos app to store and read photos from box backend. We do not provide IPFS gateway service as it is not required. A box app knows the peerIds of it's host box nodes (through scanning a QR code while initiating the app) and dials files protocol directly on a libp2p swarm that is connecting all destination boxes. |  


### Milestone 2 — Additional features

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Database module specifications | We will create the specifications of a IPLD+Libp2p module to store json data to act as the database |  
| 2. | Database storage functionality for application | We will create an IPLD+Libp2p module that store sent data from front-end in the backend database |  
| 3. | Database read functionality for application | We will create an IPLD+Libp2p module that sends stored data from back-end database to the front-end on request |  

### Milestone 3 — Additional features

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | File pinning on crust | We will create a Crust module that will allow user to pin box files to crust on demand |  
| 2. | Secure File sharing with other users | We will create a secure file sharing functionality to share files securely to users out of box and Crust |  
| 3. | Synchronize functionality of multiple box backends together | We will create a functionality to allow users synchronize data between multiple box backends | 
| 4. | Beta version of photos app on Google Play | We publish a beta version of photos app on Google Play | 


## Future Plans

Please include here

- In short-term we are planning to make "box" application development incentivised for developers without imposing costs on users. To do this, we want to build a mining module, which by user's permission, mine coins for the user, and then user can pay the developers with the mined coins.
- In long-term we are planning to build a loyal-agent for the box. Meaning if Netflix wants to suggest movies to you, they do not get your information. You store your information on your own box and install the movie suggestion application provided by the community (it can even be Netflix itself). Netflix connects to your box and sends a list of movies it has. “box” processes Netflix data, cross checking it with your data and suggests the movies to you. No data goes out of your box to Netflix, but it still allows you to get personalized movie suggestions or to share whatever you want with whoever you want in an encrypted and safe way.


## Additional Information 

Any additional information that you think is relevant to this application that hasn't already been included.

* Are there are any teams who have already contributed (financially) to your project? DFinity provided us with a grant and we are implemnting Internet Identity in our photos application.
* Do you have a community of users or open-source developers who are contributing to your project? In out github page we have 420+ stars from thte community and 5 contributors and 1 more contributor who requested to join us and is working on a pull request, which totals the current contributors to 6.
