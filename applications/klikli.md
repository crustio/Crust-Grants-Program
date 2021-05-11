# Crust Grant Proposal

* **Project Name:**   klikli Video Store Service
* **Team Name:** klikli  ITS
* **Payment Address:** 0x51e13efd1e44a0d7dc388710612d6fd7ea9971cd
* **Receivable Token:**  USDT

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*
> ⚠️ *When you submit an application for a Grant，You confirm that you have read these Terms and Conditions carefully and that you agree to be bound by them.*

## Overview

klikli Video Store Service千隼视频存储服务是我们基于crust+IPFS网络结合我们业务特点构建的存储服务，解决了大规模短视频的非实时性数据存取需求。

klikli Video Store Service is a storage service built based on the Crust+IPFS network combined with our business characteristics, which solves the non-real-time data access requirements of large-scale short videos.

### Project Details

详见项目中专门的开发文档:

For details, please refer to the special development doc in the project: 

http://cloudflare-ipfs.com/ipfs/QmRb88USyckW25F73ewdEMz7ScT1Ljt6sDPMD95AfvCAm4

(PS: 链接内容为中文)

### Ecosystem Fit

在智能交通领域中，大规模影像数据的存储一直是一个难题，用传统的方法解决需要投入大量的资金和人员，对于任何单独的机构或者个人都很难承担，导致大量的数据无法长期保存，给行业发展带来了不利的影响。我们希望通过这个项目的开发，使我们的业务过程中的视频数据能通过crust+IPFS网络长期保存下来，同时也可以降低存储成本。在满足我们自有业务需求的情况下，我们也计划将其作为我们公司的一个开放行业解决方案向全行业推广，让更多的用户加入到crust+IPFS网络中来。

In the intelligent transportation field, the storage of large-scale image data has always been a big concern. Using traditional methods to solve the problem requires a large amount of capital and personnel. It is difficult for any individual or organization to bear it, resulting in a large amount of data that cannot be stored for a long time, thereby adversely affecting the development of the industry. We hope that through the development of this project, not only the video data in the business process can be stored for a long time via Crust+IPFS network, but also the storage cost can be reduced. In the condition of meeting our own business needs, we also plan to promote it as an open industry solution of our company to the entire industry, letting more users join the Crust+IPFS network.

## Team

### Team members

* 闵敢 Gan Min
* 田山川 Shanchuan Tian
* 李晓天 Xiaotian Li
* 何标 Biao He
* 王车贵 Chegui Wang

### Contact

* **Contact Name:** Gan Min
* **Contact Email:** 182050540@qq.com
* **Website:**

### Legal Structure

* **Registered Address:** 上海杨浦区国权北路湾谷科技园C7栋7楼 - 7F, Building C7, Wangu Science and Technology Park, North Guoquan Road, Yangpu District, Shanghai
* **Registered Legal Entity:** 江西千隼智能科技有限公司 - Jiangxi Qiansun Intelligent Technology Co., Ltd.

### Team's experience

  团队在智能交通，车联网数据采集，地理信息等多个相关领域有超过十年以上的经验，曾获得多家知名投资机构投资。

The team has more than 10 years working experience in some related fields, such as intelligent transportation, big data collection in Internet of Vehicles, geographic information. The company has received  investment from many well-known investment institutions.

### Team Code Repos

* https://github.com/mg00736448/Crust-Grants-Program

### Team LinkedIn Profiles

无

N/A

### Overview

* **Total Estimated Duration:**  3 months
* **Full-Time Equivalent (FTE):**   3 FTE
* **Total Costs:**  28,500 USD

### Milestone 1 — Implement Crust Order Modules

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will implement the architecture of our product. |
| 1. | 数据上传 - Data Upload | 视频上传接口和数据记录 - Video upload interface and data recording |
| 2. | 数据存储 - Data Storage | 异步打包和数据本地存储 - Asynchronous packaging and data local storage |
| 3. | 上传至IPFS - Upload to IPFS | 压缩包IPFS节点上传和更新记录数据 - Compressed file of IPFS node  uploaded and update record data |
| 4. | 集成Crust - Integrate Crust | 调用CRUST网络下单和定时更新状态 - Call the CRUST network to place an order and update the status regularly |

### Milestone 2 - Completed functions

* **Estimated Duration:** 1 month
* **FTE:**  3
* **Costs:** 14,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 1. | 视频压缩包下载功能 Compressed files of video download function | 视频下载申请记录和定时下载压缩包 - Video download application record and regular download compressed files |
| 2. | 压缩包解压功能 - Uncompress function | 视频压缩包解压和回调申请地址 - Uncompress the compressed files of video and callback application address |
| 3. | 定期删除已下载的压缩包 - Delete downloaded compressed files regularly | 定时删除已下载的压缩包 - Delete the downloaded compressed files regularly |
| 4. | 后台页面 - Backend | 管理后台的页面和相关数据 - Manage backend and related data |
| 5. | 测试 - Test | 小规模测试 - Small-scale test |

## Future Plans

完成项目开发后，首先将存量的视频数据选取一部分，批量导入到项目中，并观察数据存储的实际运行情况，包括可用性，数据副本数，国内不同区域获取数据的时长，记录各个组件的运行情况，调整定时脚本的时间间隔。为更高频率的数据导入和读取积累经验。

After completing the development of the project, first select a part of the stock footage video and import them into the project in batches, and observe the actual operation of the data storage, including the availability, the number of data copies, the length of time to obtain the data in different regions of the country. According to the recorded operation of each component, adjust the time interval of the timed script. Accumulate experience for higher frequency data import and read.

待项目小规模试运行稳定后，全面启动数据迁移工作。并制定专门的计划，在行业内加大推广，让更多的数据运行在crust+IPFS网络上。

Once the small-scale trial operation of the project is stable, we will start the data migration work in an all-round way. At the same time, we will formulate a special plan, strengthen promotion in the industry, and let more data run on the Crust+IPFS network.

## Additional Information

Any additional information that you think is relevant to this application that hasn't already been included.

Possible additional information to include:

* Are there are any teams who have already contributed (financially) to your project?
* Do you have a community of users or open-source developers who are contributing to your project?
