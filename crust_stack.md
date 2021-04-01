# Crust Stack

The goal of this page is to provide an overview of the open-source Crust technology stack. Please feel free to make edits and additions via Pull Requests. We apologize if we missed your project!


<!-- markdownlint-disable MD040 -->
```
|-------------------------------------------------------------------------------------|
|  Content Storage&Delivery, NFT, Website Hosting Tools  /   User Based Applications  |
|-------------------------------------------------------------------------------------|
|                Explorers, Wallets                    / Blockchain Based Applications|
|-------------------------------------------------------------------------------------|
|      API Documents, Multi-Language SDKs            /        Development Tools       |
|-------------------------------------------------------------------------------------|
|       Storage Management, Disk Management        /             Strategies           |
|-------------------------------------------------------------------------------------|
|                  IPFS, BT                      /             File systems           |
|-------------------------------------------------------------------------------------|
|               MPoW, GPoS, DSM                /              Chain Protocols         |
|-------------------------------------------------------------------------------------|
```


### User based applications
To develop more applications & senarios for Crust.
Components |Existing Projects|Protentially Interesting Projects|
|:----|:----|:----|
|NFT|    |Marketplaces, Games, Collectibles, which stores NFT related multimedia files in Crust Network|
|Website hosting tools|    | CI/CD tools that can automatically host websites on Crust|
|Content storage and delivery|    | Accelerated P2P-CDNs|


### Blockchain based applications
Components |Existing Projects|Protentially Interesting Projects|
|:----|:----|:----|
|Decentralized Pinning Service|    |Helping users to pin thier files in Crust network|

|Wallet|    |    |
|Storage and Node Explorer|    |    |

### Development Tools
To develop useful API and SDK available for muti-languages.

Components |Existing Projects|Protentially Interesting Projects|
|:----|:----|:----|
| Muti-language |    |Rust SDK|
| Documents |    | Development/integration guidances; All-round document for Crust interface  |


### Strategy
To develop better storage, ordering strategies.

Components |Existing Projects|Protentially Interesting Projects|
|:----|:----|:----|
|  Storage Management  |    | Strategy enhancement for Storage Management(sManager)   |
|  Disk Management  |    | Strategy enhancement for Disk management    |


### File systems
Enhancing the compatibility between Crust Network and various distributed file systems

Components |Existing Projects|Protentially Interesting Projects|
|:----|:----|:----|
|  File systems   |    |  Enabling Crust to be more compatible to multiple file systems such as Dat, Bittorrent, Swarm, etc.  |


### Chain Protocols
To enhance the design for GPoS,  MPoW and Decentralized Storage Market (DSM).

Components |Existing Projects|Protentially Interesting Projects|
|:----|:----|:----|
|Chain |    |    |
|Storage worker (sWorker, the key module for Crust storage proof mechanism)|    |Enhanced file sealing mechanism|
|TEE compatibility|    |Enhanced compatibility with Intel SGX and with other TEE architecture such as ARM Trustzone, AMD SEV ,etc.|


