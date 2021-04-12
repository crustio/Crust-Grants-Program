# Crust Grant Proposal

- **项目名称: crust-explorer**

- **Team Name:** 草猪科技

- **Payment Address:** crust wallet -
    5EtKPUiw6BuF8C7EDVVeCY5sAecm3w7vq4vrmgKHFQui7ozB

- **Receivable Token:** 30 CRU

## Overview

- gp-crust-explorer

- 一个建立在crust网络上的crust开源浏览器及浏览器开发模板.

- 我们将会把我们的浏览器部署在crust网络上，并且将crust链上数据进行整合，扩展，并将所有数据的api开放，并且我们会将各个模块之间解耦合，使其非常容易地扩展到crust其他的生态项目里面去。

- 目前crust的浏览器存在着很多的问题：

1. 目前速度慢，由于目前的官方的区块链浏览器完全使用的是链上api获取数据，所以速度很慢，打开浏览器后需要漫长的时间与服务器进行连接，然后一个一个刷新出数据。常常卡顿，使用体验感很差。

2. 数据分散。目前区块链浏览数据分散在三个浏览器中——存储浏览器，subscan浏览器与crust
    app浏览器，这三个浏览器部署在不同的地方与域名上，虽然通过了导航栏进行链接，但是不可避免的造成了使用感上的割裂。

3. 使用困难。Crust
    app使用的是波卡的浏览器进行二次开发，但是目前的版本更多的是面向开发者和矿工、早期参与者，对普通人来说使用难度很高。

4. 重要数据缺失。一些矿工与普通投资者真正所关心的数据如奖励明细、担保真实收益、矿池担保回报率、节点稳定性、全网总有效质押量等等重要的数据均无法提供。

5. 可视化问题。目前官方的区块链浏览器在可视化的展现上是存在着很大的问题，由于substrate与crust的api所能提供的信息有限，而普通参与者所关心的东西无法有效而透明地展现，这大大阻碍了crust的推广与发展。

## Project Details

针对官方浏览器存在的上述问题，我们提出了以下的改进要点 :

1. 不仅仅是信息整合。我们将采集所有polkadot与crust
    api中的信息，如实反馈到区块链浏览器中，并且我们还会根据自己与参与者的一些意见，创造一些大家所关心的统计数据甚至是概念，让所有参与者能够知其所想知，见其所想见，屏蔽掉所有目前存在的不透明问题。为净化投资、参与环境出一份力。

2. 高度模块化的代码实现。我们将会把浏览器各个模块解耦合，使其非常容易地进行扩展，方便其他crust生态的开发者进行修改、使用。

3. 简洁美观的UI设计。我们将设计出简洁而直观的UI界面，每个有效信息均可以无缝衔接到其他界面，使用体验非常顺滑，并且速度极快。界面中添加漂亮而直观的可视化图表，让用户可以赏心悦目地参与到crust项目中来。

4. 开放http远程api接口。我们不仅会将我们的代码开源，并且还会开放我们的api接口，因为crust生态并不能靠着垄断和专制发展起来，而是需要千千万万个矿工和开发者共同努力，我们将提供我们所有数据的api给矿工和开发者使用，让整个crust生态更加开放，更加繁荣。

5. 浏览器持续优化。我们将对浏览器进行持续的优化，未来可能会接入crust钱包甚至是官方的网盘，并且我们会增加意见栏一项，广泛地听取参与者的意见，不断地改进我们的浏览器。

## Ecosystem Fit

我们所有的内容将免费开放，免费使用，并且遵循GNU
GPL开源协议，可自由复制、修改、盈利。

## Team

### Team members

- Name of team leader：曹靖彬

- Names of team members：姜佳晨、朱向杰、廖广强、虞国京、吴华益

### Contact

- **Contact Name:朱向杰**

- **Contact Email:** xiangjie0704@gmail.com

### Legal Structure

- **Registered Address: 1302 Esun Creative Technology Building, BaoAn
    District，Shenzhen， China**

- **Registered Legal Entity:** 草猪科技（深圳）科技有限公司

### Team's experience

我们团队在传统应用软件开发领域有着多年的开发经验，在客户中保留了较好的口碑，最近开始转型向区块链及波卡生态领域发力，我们的Polkaname波卡域名项目参加了3月的波卡黑客马拉松。波卡是web3最有希望的项目，而crust是我们最看好的波卡存储类项目，对我们自己的polkaname项目也可以起到互相促进的作用。但是我们看到了目前crust浏览器的存在一些问题，因此想在这一方面进行一个改进。

### Team Code Repos

- <https://github.com/HuaZhuangNan/crust-explorer>

## Development Roadmap

For each milestone,

- 4月15日\~5月15日：整合crust与波卡api，将ws接口改造成http，开发一套较简单而完善区块链浏览器，并上线1.0版浏览器。

- 5月15日\~6月15日：对1.0的版本进行一个解耦合和优化，并增加国际化模块。将浏览器各个模块配置化，模块化，api自动化，并部署到crust存储网络上去。

- 6月15日\~：对浏览器持续优化、改进、维护。

### Overview

- **Total Estimated Duration:** 2 months

- **Full-Time Equivalent (FTE):** 3 FTE （廖广强，吴华益，虞国京）

- **Total Costs:** The total amount of funding *needs to be below \$4k*

### Milestone 1 — Implement UI Modules

- **Estimated Duration:** 1 month

- **Costs:** 3k USD

| **Number** | **Deliverable** | **Specification**                                                                                      |
|------------|-----------------|--------------------------------------------------------------------------------------------------------|
| 0a.        | License         | GNU GPL                                                                                                |
| 0b.        | Documentation   | 我们将提供全面的api文档，源代码                                                                        |
| 0c.        | Detail          | UI的设计与实现我们将外包给专业的UI设计团队与前端开发公司。我们团队会负责代码审核、改造等等一系列流程。 |

### Milestone 2 — Implement Data&Api Modules

- **Estimated Duration:** 2 month

- **FTE:** 2

- **Costs:** 1,000 USD

| **Number** | **Deliverable** | **Specification**                                                 |
|------------|-----------------|-------------------------------------------------------------------|
| 0a.        | Detail          | 预算主要用于api服务器的费用，代码开发实现费用我们团队会自行承担。 |

## Future Plans

- 我们申请的所有费用均为外部费用，如UI设计等等，所有内部开发费用均团队自行承担，我们希望通过这个项目全面熟悉crust存储生态，以便日后深度参与到波卡生态建设中去。
