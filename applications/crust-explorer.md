# Crust Grant Proposal

- **Project Name: crust-explorer**

- **Team Name:** GrassPig Technology

- **Payment Address:** crust wallet -
    5EtKPUiw6BuF8C7EDVVeCY5sAecm3w7vq4vrmgKHFQui7ozB

- **Receivable Token:** USDT & CRU

## Overview

- GP-Crust-Explorer

- A crust open-source browser and browser development template built on the crust network.

- We will deploy an explorer of the crust network, which integrates and expands the data of the Crust chain, and open-source all data APIs, and we will decouple all modules to make it very easy to expand to other crust’s ecological projects.

- At present, there are many problems with the explorer of crust：

1. The opening speed is extremely slow. Because the current official blockchain explorer uses the on-chain API to obtain data, the browsing speed is really slow. After opening the explorer, it takes a long time to connect to the server, and then refresh the data one by one. It often freezes has a poor user experience.

2. The data is scattered. At present, the blockchain browsing data is scattered in three explorers: storage explorer, sub-scan browser, and crust apps. These browsers were deployed in different places and domains. Although they were linked by the navigation bar, However, it inevitably caused a split in the sense of use.

3. It’s difficult to use. Crust app used Polkadot's browser for secondary development, but the current version is more for developers, miners, and early participants, which is very difficult for ordinary people to use.

4. Some important data is missing. Many important data that miners and investors care about, such as reward details, guaranteed real income, a guaranteed return rate of mining pools, node stability, total effective pledge amount of the entire network, etc. Current crust apps cannot provide.
5. Gui issues. At present, the official blockchain browser has a big problem with the visual display. Because of the limit of the information provided by the substrate and crust APIs, and the data that ordinary participants care about cannot be displayed effectively and transparently, which greatly hindered the promotion and development of the crust.

## Project Details

In response to the above-mentioned problems in official browsers, we have proposed the following improvement points :

1. It's not only just information integration. We will collect all the API which Polkadot and crust API provides, and truthfully feed it back to the blockchain explorer, and we will also create some statistics and even concepts that everyone cares about based on some opinions of ourselves and participants, so that everyone can know what they need, and see what they want, and eliminate all data opacity issues exist in current explorer, purify investment and participate environment.

2. Highly modular code implementation. We will decouple all modules of the explorer to make it very easy to expand so that it is convenient for other developers in the crust ecosystem to modify and use。

3. Simple and beautiful UI design. We will design a simple and intuitive GUI, each effective data can be seamlessly linked to another UI interface, with a smooth user experience, and display speed is extremely fast. Beautiful and intuitive visual charts will be added to the UI interface, allowing users to participate in the crus project pleasingly.

4. Open HTTP remote API interface. We will not only open-source our code, but also open up our API interface, because the crust ecosystem cannot develop in a monopoly and autocracy environment, but requires the joint efforts of thousands of miners and developers. We will provide all data APIs to miners and developers for free, making the entire crust ecosystem more open and more prosperous.

5. We will continuously optimize our explorer. In the future, we may access the crust wallet even the official net disk. we will also add an opinion button to listen to the opinions of participants widely and continuously improve our explorer.

## Ecosystem Fit

All of our content will be free and open-source, free to use, and follow the GNU GPL open-source agreement, it is free to copy, modify, and profit.
## Team

### Team members

- Name of team leader：Jingbin Cao

- Names of team members：Jiacheng Jiang、Jack Zhu、addis Liao、Guojing Yu、Enmarn Wu
- Team member introduction: 
Jingbin Cao: Cao graduated from the University of Hong Kong with a master's degree. He has a very deep understanding with the development and technology of block chain. He has been committed to the development of polkadot ecology for a long time and has a small reputation in the community.
Jiacheng Jiang: Jiang is a programmer for rust and substrate. He is the major implementer of our polkaname project who proficient in substrate.
Addis Liao:Liao is a programmer for traditional software. He used to organize the development of an exchange, having a rich experience in software development .
Enmarn Wu:Wu is a hacker who get familiar with hardware, block chain, and other advance technology, he used to write many articles about crust and polkadot in “CaoZhu Finance and Economic”.

### Contact

- **Contact Name:Jack Zhu**

- **Contact Email:** xiangjie0704@gmail.com

### Legal Structure

- **Registered Address: 1302 Esun Creative Technology Building, BaoAn
    District，Shenzhen， China**

- **Registered Legal Entity:** Grass Pig Technology（Shen Zhen）

### Team's experience

Our team has many years of development experience in the field of traditional application software development and has retained a good reputation among customers. Recently, we have begun to transform into the blockchain and Polkadot ecological field. Our Polkaname Polkaname domain name project participated in March Polkadot Hackathon. Polkadot is the most promising project of web3, and Crust is the most potential Polkadot storage project, and it can also promote our polkaName project. But there are some problems with the current crust explorer, so we want to improve in this area.
### Team Code Repos

- <https://github.com/HuaZhuangNan/crust-explorer>

## Development Roadmap

For each milestone,

- April 15.th\~May 15.th：Integrate crust and Polkadot API, transform the WS interface into HTTP, develop a relatively simple but complete blockchain browser, and launch the 1.0 version browser。

- May 15.th\~June 15.th：Carry out a decoupling and optimization to the 1.0 version and increase the internationalization module. The explorer modules are configured, modularized, and API automated, and deployed in the crust storage network.

- June 15.th\~：Continuously optimize, improve the project。

### USD for,durationduration Overview

- **Total Estimated Duration:** 2 months ( 1.5 months + 7 days + 7days)

- **Full-Time Equivalent (FTE):** 3 FTE （Addis Liao，Enmarn Wu，Guojin Yu）

- **Total Costs:** The total amount of funding needs to be below  33 k USD

### Milestone 1 — User Interface and The Design and Implementation of Database

- **Estimated Duration:** 7 days

**Costs:** 2000 USD for UI Design 、1000 USD for SQL Server、10 K for Server and 4K for Database)
| **Number** | **Deliverable** | **Specification** |
| --- | --- | --- |
| 0a. | Detail | UI design and implementation will be outsourced to a professional design team. Our team will be responsible for the database, functional design, as well as the technical selection, operation and maintenance and other pre-development preparation work. |

### Milestone 2 — Front-end and back-end development specific implementation

- **Estimated Duration:** 1.5 month 

- **FTE:** 2

- **Costs:** 7000 USD for Front-end、8000  USD for Back-end

| **Number** | **Deliverable** | **Specification** |
| --- | --- | --- |
| 0a. | License | GNU GPL |
| 0b. | Documentation | We will provide comprehensive API documentation, source code |
| 0c. | Detail | Building Front-end pages, back-end function，specific the code implementation; front-end and back-end coupling; API Document writing. |

### Milestone 3 — Test optimization is online

- **Estimated Duration:** 7 days

- **Costs:** 1000 USD

| **Number** | **Deliverable** | **Specification** |
| --- | --- | --- |
| 0a. | Detail | Perform functional testing, stress testing, code optimization work, and then launch. |

## Future Plans

- All the expenses we applied for are external expenses, such as UI design, Cloud services, etc. We hope to get familiar with the Crust storage ecology through this project so that we can deeply participate in the construction of the Polkadot ecology in the future.

