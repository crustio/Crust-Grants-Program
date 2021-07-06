
# wk-crust-sdk
## 基于Crust network提供了分散存储网络， 实现了开箱即用的分布式存储sdk。

<br/>

* ## <font style="color:rgba(86,156,203);">uploadFileToCrust</font> 上传文件
* ## <font style="color:rgba(86,156,203);">uploadCatalogueToCrust</font> 批量上传文件
* ## <font style="color:rgba(86,156,203);">getFileFromCrust</font> 下载文件
* ## <font style="color:rgba(86,156,203);">getFileStatusToCrust</font> 获取文件链上状态
* ## <font style="color:rgba(86,156,203);">orderRenewal</font> 订单续费
* ## <font style="color:rgba(86,156,203);">expireSoon</font> 查看即将到期文件
* ## <font style="color:rgba(86,156,203);">autoRenewals</font> 查看自动续费列表
* ## <font style="color:rgba(86,156,203);">bulkRenewalOrders</font> 批量订单续费
* ## <font style="color:rgba(86,156,203);">bulkOrder</font> 批量下单

## 使用说明

``` shell
一、安装

// 根据需要选择一种安装
npm install wk-crust-sdk
yarn add wk-crust-sdk
bower install wk-crust-sdk
```
```javascript
二、在js中使用

import WkCrustSdk from 'wk-crust-sdk' // 引入wk-crust-sdk
import config from './config'
// config配置内容例：
{
    chainWsUrl: 'ws://127.0.0.1:9933', // 链url
    seeds: "echo xxxx soccer xxxx catch xxxx stone xxxx pumpkin nest merge xxxx", // 助记词
    auto: 0, // 是否自动续费
    gateway: 'https://ipfs.io/', // 网关
    expireSoonOfTime: '7', // 提前自动续费时间

}
const wkCrust = new WkCrustSdk(config)
// 功能
wkCrust.uploadFileToCrust() // 上传文件
wkCrust.uploadCatalogueToCrust() // 批量上传文件
wkCrust.getFileFromCrust() // 下载查看文件
wkCrust.getFileStatusToCrust() // 查询文件信息
wkCrust.orderRenewal() // 订单续费
wkCrust.expireSoon() // 查看即将到期文件
wkCrust.autoRenewals() // 查看自动续费列表
wkCrust.bulkRenewalOrders() // 批量订单续费
wkCrust.bulkOrder() // 批量下单

```
<br/>

## 1、上传数据、文件 wkCrust.uploadFileToCrust(fileContent, callBack)

<br/>
传参

```javascript

/**
 * @param fileContent 文件内容
 * @param callBack 回调函数
 */
{
    fileContent: 'Crust Network',
    callBack: Function
}
```

返回

```javascript
{
    cid: "QmRf22bZar3WKmojipms22PkXH1MZGmvsqzQtuSvQE3uhm",
    size: 12
}
```

## 2、批量上传数据、文件 uploadCatalogueToCrust(path, callBack)

<br/>
传参

```javascript
/**
 * @param path 文件夹路径
 * @param callBack 回调函数
 */
{
    path: 'E:\myCode\test',
    callBack: Function
}
```

返回

```javascript
[
  {
    path: 'test/labi.jpg',
    cid: CID(QmeQBAQBxG43QFDYFNjPo2Zd9CueCDzL8FatgR7FsHaY1P),
    size: 11977
  },
  {
    path: 'test',
    cid: CID(QmNvtgHaP39rum13MfxUAQ9jre322zSAJcSgyvtFFHBZLZ),
    size: 12032
  },
  {
    path: '',
    cid: CID(QmPYSwxt8uHHCkzMQqpa47XficqvwDt3RVRKUgLXqEaLW2),
    size: 12083
  }
]
```


## 3、查询文件 wkCrust.getFileFromCrust(cid, callBack)

<br/>
传参

```javascript
/**
 * @param cid 文件id
 * @param callBack 回调函数
 */
{
    cid: 'QmeQBAQBxG43QFDYFNjPo2Zd9CueCDzL8FatgR7FsHaY1P',
    callBack: Function
}
```

返回

```javascript
{
    cid: 'https://ipfs.io/ipfs/QmeQBAQBxG43QFDYFNjPo2Zd9CueCDzL8FatgR7FsHaY1P'
}

```

## 4、查询文件存储状态 wkCrust.getFileStatusToCrust(cid, callBack)
<br/>
传参

```javascript
/**
 * @param cid // 文件ID
 * @param callBack 回调函数
 */
{
    cid: 'QmQ6XDDJg6BC4JQ8BempLvCXTqTvMQo3MihSbEYpEczyg4'
    callBack: Function
}
```
返回

```javascript

{
    "file_size": 2247325,
    "expired_on": 896600,
    "claimed_at": 12164,
    "amount": 92812500,
    "reported_replica_count": 43,
    "replicas": [
        {
            "who": "5Ck95aKKQHiFd2W8gfrbqiF8u7L4DSEYqBazA3iqbCgncj4H",
            "valid_at": 12094,
            "anchor": "0x9a59000c5a3e5f8f6261e09cc8b77c98d2c45bac0a2af7a151d97a392b927b074c6d580053e50f11325ca0dc3f2135eb4372b6f4e73329f99705208a31c4d728",
            "is_reported": true
        }
    ]
}

```


## 5、订单续费 wkCrust.orderRenewal(fileCID, fileSize, tip, callBack)
<br/>
传参

```javascript
/**
 * 上传参数
 * @param fileCID // 文件ID
 * @param fileSize // 文件大小
 * @param tip // 此订单提示
 * @param callBack 回调函数
 */
{
    fileCID: 'QmQ6XDDJg6BC4JQ8BempLvCXTqTvMQo3MihSbEYpEczyg4',
    fileSize: 8688,
    tip: 0,
    callBack: Function
}
```
返回
```javascript
true/false
```

## 6、查看即将到期文件 wkCrust.expireSoon(fileCidList, callBack)

<br/>
传参

```javascript

/**
 * @param fileCidList // 文件cid列表
 * @param callBack 回调函数
 */
{
    fileCidList: [],
    callBack: Function
}
```

返回

```javascript
[{
    cid: "QmRf22bZar3WKmojipms22PkXH1MZGmvsqzQtuSvQE3uhm",
    size: 12
}]
```
<br/>

## 7、查看自动续费列表 wkCrust.autoRenewals(expireSoonList, callBack)

<br/>
传参

```javascript

/**
 * @param expireSoonList 临期列表
 * @param callBack 回调函数
 */
{
    expireSoonList: [],
    callBack: Function
}
```

返回

```javascript
[{
    cid: "QmRf22bZar3WKmojipms22PkXH1MZGmvsqzQtuSvQE3uhm",
    size: 12
}]
```




## 8、批量订单续费 wkCrust.bulkRenewalOrders(expireSoonList, callBack)

<br/>
传参

```javascript

/**
 * @param renewList 续费列表
 * @param callBack 回调函数
 */
{
    renewList: [],
    callBack: Function
}
```

返回

```javascript
true/false
```

## 9、批量下单 wkCrust.bulkOrder(type, typeParams, expireSoonCid, callBack)

<br/>
传参

```javascript

/**
 * @param type 1:文件个数 2:时间 3:文件总大小
 * @param typeParams 50(个)/1(小时)/1(g)
 * @param expireSoonCid 临期文件夹
 * @param callBack 回调函数
 */
{
    type: 1,
    typeParams: 50,
    expireSoonCid: '',
    callBack: Function
}
```

返回

```javascript
[
  {
    path: 'test/labi.jpg',
    cid: CID(QmeQBAQBxG43QFDYFNjPo2Zd9CueCDzL8FatgR7FsHaY1P),
    size: 11977
  },
  {
    path: 'test',
    cid: CID(QmNvtgHaP39rum13MfxUAQ9jre322zSAJcSgyvtFFHBZLZ),
    size: 12032
  },
  {
    path: '',
    cid: CID(QmPYSwxt8uHHCkzMQqpa47XficqvwDt3RVRKUgLXqEaLW2),
    size: 12083
  }
]
```


数据将存储 6 个月（180天），可以在 6 个月后续订您的订单。<br/>
费用标准180天存储的基础费 （cru）：0.001<br/>
初始每MB大小（cru）：0.000001 <br/>
存储订单费用由网络根据文件大小，存储期限以及总体存储需求和供应量计算得出
