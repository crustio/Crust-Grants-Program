# Crust Grant Proposal

* **Project Name:** CruTransfer
* **Team Name:** CruTransfer
* **Payment Address:** 0x19515227da37BABcFAAfB781F0F16B47959C2fb1 
* **Receivable Token:** USDT

### Overview

Please provide the following:
  * A project name: CruTransfer
  * A brief description of your project: An fully decentralized platform designed to allow user to transfer different types of files for free to other users. The use of platform is very simple and especially it allows user to send easily very heavy files. 
  * An indication of how your project relates to / integrates into Crust.
The platform is built on ipsf/crust using Angular/NodeJS. The files of user will be transfered through ipfs/crust network.
  * An indication of why your team is interested in creating this project.
  In our day, the managing and sharing all types of files over the Internet are more and more popular and important. Files can be shared between friends, colleagues, between companies and customers, or even more, between companies both by email and through other digital channels. But these ways always have their limitations. The most common way is to attach the files to an email, but most platform has a limit of the size of the attached files (For example, 25Mb on Google Gmail, 20Mb on Outlook). This is really a problem when users want to share the large files. This causes users to look for other digital channels. However, these platforms are mostly centralized and the fees are quite high. Moreover, users do NOT know whether their files were stored somewhere by someone, especially the important, confidential files. For the above reasons, we create CruTransfer - a decentralized platform that allows sharing files, even large files quickly, securely with low fees. 
    * With CruTransfer, the sender uploads the files by providing through a simple form for the sender's email, recipients's email, a optional message or a optional custom password. The platform provides two options: Send email transfer OR Get transfer link.
    * The senders do not have to create a account but they can create one to have access to a dashboard page to see the transfer history log. 
    * Thanks to the file's direct access link (and password if required) that is sent by email or by sender, the recipients can access to the file. Once they have downloaded them, the sender will receive an email that confirm that they have done that.
    * Once all recipients have downloaded, the files will be immediately removed. But for the signed-in user, the files can be reserved for 7 days. 

### Project Details 
The project includes the following tasks:

- Product and interaction design
- Client-side development using Angular
    - Integrate the ipfs/Crust storage-related functions.
    - Homepage with form to upload files.
    - Sign in / Sign up page.
    - Dashboard page to display transfer history logs.
    - Download page when the recipients click the direct access link.
    
- Server-side development: NodeJS/MongoDb
    - Store the transfer infos into database MongoDB.
    - Send email to recipients with the direct access link.

### Ecosystem Fit 

Help us locate your project in the Crust landscape and what problems it tries to solve by answering each of these questions:

* Where and how does your project fit into the ecosystem? Making use of the power of Crust.Network with high speed and low latency, CruTransfer provide a solution that can convince people about the privacy, the convenience and the stability when using distributed storage platforms.
* What need(s) does your project meet? CruTransfer provide a fully decentralized platform.  
* Are there any other projects similar to yours in the IPFS/Crust ecosystem? 
  * No.

## Team

### Team members
* Name of team leader: HO Hong Quan

### Contact
* **Contact Name:** HO Hong Quan
* **Contact Email:** hohongquan.bk@gmail.com 
* **Website:** https://h2qutc.github.io/angular-material-components

### Legal Structure 
* No legal structure

### Team's experience
Certified Microsoft MCSD App Builder and skilled .NET/Angular Developer with 5+ years of experience in Fullstack development, I experienced with all stages of the development cycle for web-mobile projects in numerous programming Framework including .NET, Microsoft Azure, Angular, Ionic Framework. 

I am also the author of project @angular-material-components (~1M downloads) that is an Angular Material Library that provides extra components for every project (Datetime Picker, Time Picker, Color Picker, File Input...). Please feel free to check it out at https://h2qutc.github.io/angular-material-components or https://github.com/h2qutc/angular-material-components.

### Team Code Repos
* https://github.com/h2qutc/CruTransfer
* https://github.com/h2qutc

### Team LinkedIn Profiles
* https://www.linkedin.com/in/hohongquan/

## Development Roadmap


### Overview
* **Total Estimated Duration:** 2 months
* **Full-Time Equivalent (FTE):**  1 FTE
* **Total Costs:** 20,000 USD

### Milestone 1: MVP website
* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Integrate Crust to Angular project | Set up Angular project with Crust/IPFS |
| 2. | Develop Server-side NodeJS/MongoDB | Develop the backend (email service, database) |
| 2. | Landing/Home Module | Home page with form so that user can share the files |
| 3. | Account Module | Sign in, Sign out, Reset Password... |
| 4. | Download Module | Recipients can download the files thanks to direct access link | 
| 5. | Dashboard Module | Transfer history logs for signed-in user |  



### Milestone 2: 

* **Estimated Duration:** 1 month
* **FTE:**  1
* **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | Integrate Pro plan  | Integrate Pro plan to make the payment for uploading very heavy files |
| 2. | Social media promotion | Promote the platform on social media by writing the articles/tutorials |



## Future Plans

- Support CRU payment
- Social media promotion
- Strengthen the security to avoid malicious attacks


## Additional Information 


* Are there are any teams who have already contributed (financially) to your project? No
* Do you have a community of users or open-source developers who are contributing to your project? No
