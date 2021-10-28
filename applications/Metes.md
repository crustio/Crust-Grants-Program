# Crust Grant Proposal

* **Project Name:** Metes
* **Team Name:** Metes
* **Payment Address:** 0x88dB6F9809d9f11E85734230Cf57b581b8bAFee7 
* **Receivable Token:** USDT

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

> ⚠️ *When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them.*

### Overview

Metes is a distributed storage project built on IPFS + Crust.
Compared with other similar projects, 
we have implemented end-to-end encryption. 
Others cannot obtain the real file when the files CID is leaked. 
Each file corresponds to a decryption key, 
and the server will not store the user password and file key, 
which can prevent library collision and resist relevant review





### Project Details 
We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (with urls or IPFS file CIDs included) at following :
Metes is a project built using Java / nodejs / Vue.

As a security and user privacy-focused storage project in Meets, we have learned some ideas from the block chain:

1. User registration generates a unique private key for the user, which we call master Key, encrypts the password the user enters with MD5 encryption, encrypts the master Key with the encrypted user password, generates an RSA pair, and encrypts the RSA private key with MasterKey as the key

2. Users log on using the MD5 encrypted user password to decrypt the master key, then use the master key to decrypt the RSA private key, and then use the RSA private key to decrypt the server to encrypt the Token using the RSA public key

3. When a user uploads a file, a fileKey is generated on the client to encrypt the file and stored in the cloud using the master key to encrypt the fileKey.

4. The user decrypts the fileKey through masterKey while downloading, and decrypts the file in fetch through fileKey.

This is a demo with a certain degree of completion:
https://metes.me/

![images](https://github.com/Metesme/Metes_web/blob/main/doc/img/1.gif?raw=true)
![images](https://github.com/Metesme/Metes_web/blob/main/doc/img/2.gif?raw=true)
![images](https://github.com/Metesme/Metes_web/blob/main/doc/img/3.gif?raw=true)


### Ecosystem Fit 

Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem?
  As the upper application, our project realizes persistence through crust at the bottom.
* What need(s) does your project meet?
  Provide users with enough secure end-to-end file encryption storage, and enable users to easily store data on crust.
* Are there any other projects similar to yours in the IPFS/Crust ecosystem?

   Mega.io on the traditional web

    Peergos.net on the IPFS
  * If so, how is your project different?
    
      Meters faster

  * If not, are there similar projects in related ecosystems?

## Team

### Team members
* Name of team leader:Mooz
* Names of team members	:3m2ten,qiugy163670

### Contact
* **Contact Name:** Mooz
* **Contact Email:** biulifan@gmail.com
* **Website:** none

### Legal Structure 
* **Registered Address:** none
* **Registered Legal Entity:** none

### Team's experience
We have three experienced developers, including a front-end and two full stack engineers
### Team Code Repos
* https://github.com/Metesme


### Team LinkedIn Profiles
* none


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
* **Total Estimated Duration:**  3 months
* **Full-Time Equivalent (FTE):**  3 FTE 
* **Total Costs:** 20,000 USD

### Milestone 1 Metes-Core functions
* **Estimated Duration:** 1.5 month
* **FTE:**  3
* **Costs:** 12,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Basic User Module  | We will design a safe and fast non-password authentication |  
| 2. | Encrypted Upload Module| We will create a Encrypted Upload that will implement encryption on the client and then upload |  
| 3. | Decryption Download Module | We will create a Crust module that will decrypt on client during download |  



### Milestone 2 Metes — Optimization and matching

* **Estimated Duration:** 1.5 month
* **FTE:**  3
* **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Background Management System  | We will create a Background management system for report and gateway scheduling  |  
| 2. | Optimize Experience| We will Accept user feedback and optimize the process or UI|  


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.
  In the future, encrypted sharing or public files will be realized, and social attributes will be added

## Additional Information 

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

* Are there are any teams who have already contributed (financially) to your project?
* Do you have a community of users or open-source developers who are contributing to your project?
  none
