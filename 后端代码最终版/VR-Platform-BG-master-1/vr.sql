-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: vr
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adminname` text,
  `password` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin`
--

LOCK TABLES `Admin` WRITE;
/*!40000 ALTER TABLE `Admin` DISABLE KEYS */;
INSERT INTO `Admin` VALUES (1,'vrroot','123456');
/*!40000 ALTER TABLE `Admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AllInOnePC`
--

DROP TABLE IF EXISTS `AllInOnePC`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AllInOnePC` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Remark` text,
  `Brand` text,
  `Salesmodel` text,
  `Productmodel` text,
  `Screentype` text,
  `Monocularresolution` text,
  `Weight` text,
  `Workingtemperature` text,
  `Bluerayirradiance` text,
  `Soundpressurelevel` text,
  `Maximumoutputvoltage` text,
  `Broadbandcharacteristicvoltageofearphone` text,
  `Boundarywarning` text,
  `Radiationdisturbance` text,
  `Electrostaticdischarge` text,
  `Fieldangle` text,
  `Refreshrate` text,
  `Systemdelay` text,
  `Trackingmode` text,
  `Trackingrange` text,
  `Meanchangeofvisualacuity` text,
  `SSQmean` text,
  `CVSmean` text,
  `CPU` text,
  `Memory` text,
  `Battery_capacity` text,
  `pic_location` text,
  `Hot` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AllInOnePC`
--

LOCK TABLES `AllInOnePC` WRITE;
/*!40000 ALTER TABLE `AllInOnePC` DISABLE KEYS */;
INSERT INTO `AllInOnePC` VALUES (130,NULL,'大朋','DeePoon M2','DeePoon M2','AMOLED','1280*1440','0.398','54.1','1.9','98.24','95.8','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','96.0','70.0','19.0','9轴','固定','0.1','110.0','124.0','2.1','3.0','3000.0','http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg',NULL),(131,'','大朋','DeePoon M2','DeePoon M2','AMOLED','1280*1440','0.398','54.1','1.9','98.24','95.8','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','96.0','70.0','19.0','9轴','固定','0.1','110.0','124.0','2.1','3.0','3000.0','http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg',NULL),(132,'','大朋','DeePoon M2','DeePoon M2','AMOLED','1280*1440','0.398','54.1','1.9','98.24','95.8','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','96.0','70.0','19.0','9轴','固定','0.1','110.0','124.0','2.1','3.0','3000.0','http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg',NULL),(133,NULL,'大朋','DeePoon M2','DeePoon M2','AMOLED','1280*1440','0.398','54.1','1.9','98.24','95.8','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','96.0','70.0','19.0','9轴','固定','0.1','110.0','124.0','2.1','3.0','3000.0','http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg',NULL);
/*!40000 ALTER TABLE `AllInOnePC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Answer`
--

DROP TABLE IF EXISTS `Answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `questionid` int(11) DEFAULT NULL,
  `Answer` mediumtext,
  `productname` text,
  `producttype` text,
  PRIMARY KEY (`id`),
  KEY `user_idx` (`userid`),
  KEY `FK_5ghr2nkmfka77xwcsbkwl71kn` (`questionid`),
  CONSTRAINT `FK_5ghr2nkmfka77xwcsbkwl71kn` FOREIGN KEY (`questionid`) REFERENCES `Question` (`id`),
  CONSTRAINT `user` FOREIGN KEY (`userid`) REFERENCES `User` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Answer`
--

LOCK TABLES `Answer` WRITE;
/*!40000 ALTER TABLE `Answer` DISABLE KEYS */;
INSERT INTO `Answer` VALUES (1,1,7,'1','DeePoon M2','AllInOnePc'),(2,1,8,'erer','DeePoon M2','AllInOnePc'),(3,1,7,'1','DeePoon M2','AllInOnePc'),(4,1,8,'ewew','DeePoon M2','AllInOnePc'),(5,1,7,'2','小米VR眼镜','MobileBox'),(6,1,8,'454','小米VR眼镜','MobileBox');
/*!40000 ALTER TABLE `Answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Editor`
--

DROP TABLE IF EXISTS `Editor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Editor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` int(11) DEFAULT NULL,
  `username` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Editor`
--

LOCK TABLES `Editor` WRITE;
/*!40000 ALTER TABLE `Editor` DISABLE KEYS */;
/*!40000 ALTER TABLE `Editor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MessageLeaving`
--

DROP TABLE IF EXISTS `MessageLeaving`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MessageLeaving` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` text,
  `user_id` int(11) DEFAULT NULL,
  `upvote` int(11) DEFAULT NULL,
  `belong` varchar(45) DEFAULT NULL,
  `releasetime` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MessageLeaving`
--

LOCK TABLES `MessageLeaving` WRITE;
/*!40000 ALTER TABLE `MessageLeaving` DISABLE KEYS */;
INSERT INTO `MessageLeaving` VALUES (1,'dwr',1,0,'130','2017-07-25 20:52:09'),(2,'gertreter',1,0,'130','2017-07-25 21:26:07'),(3,'jhjh',1,0,'130','2017-07-25 21:27:04'),(4,'iuouioi',1,0,'130','2017-07-25 21:28:33'),(5,'qwqweqe',1,0,'130','2017-07-25 21:32:39'),(6,'weweq',1,0,'130','2017-07-25 21:33:53'),(7,'ooooooo',1,0,'130','2017-07-25 21:58:52'),(8,'很好',1,0,'130','2017-07-25 22:07:11');
/*!40000 ALTER TABLE `MessageLeaving` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MessageResponse`
--

DROP TABLE IF EXISTS `MessageResponse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MessageResponse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_response` mediumtext,
  `message_leaving_id` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `releasetime` mediumtext,
  PRIMARY KEY (`id`),
  KEY `userid_idx` (`user`),
  KEY `messageleavingid_idx` (`message_leaving_id`),
  CONSTRAINT `messageleavingid` FOREIGN KEY (`message_leaving_id`) REFERENCES `MessageLeaving` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userid` FOREIGN KEY (`user`) REFERENCES `User` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MessageResponse`
--

LOCK TABLES `MessageResponse` WRITE;
/*!40000 ALTER TABLE `MessageResponse` DISABLE KEYS */;
INSERT INTO `MessageResponse` VALUES (1,'oooooo',6,1,'2017-07-25 21:59:03'),(2,'sadwsadwd',6,1,'2017-07-25 21:59:36'),(3,'今后将会就',7,1,'2017-07-25 22:07:24');
/*!40000 ALTER TABLE `MessageResponse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MobileBox`
--

DROP TABLE IF EXISTS `MobileBox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MobileBox` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Remark` text,
  `Brand` text,
  `Salesmodel` text,
  `Productmodel` text,
  `Weight` text,
  `Workingtemperature` text,
  `Bluerayirradiance` text,
  `Broadbandcharacteristicvoltageofearphone` text,
  `Boundarywarning` text,
  `Radiationdisturbance` text,
  `Electrostaticdischarge` text,
  `Fieldangle` text,
  `Systemdelay` text,
  `Trackingmode` text,
  `Trackingrange` text,
  `Meanchangeofvisualacuity` text,
  `SSQmean` text,
  `CVSmean` text,
  `Adapterphone` text,
  `pic_location` text,
  `Hot` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MobileBox`
--

LOCK TABLES `MobileBox` WRITE;
/*!40000 ALTER TABLE `MobileBox` DISABLE KEYS */;
INSERT INTO `MobileBox` VALUES (2,NULL,'小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(3,NULL,'小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(4,NULL,'小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(5,'','小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(6,'','小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(7,'','小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(8,'','小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(9,'','小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(10,'','小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(11,'','小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL),(12,'','小米','小米VR眼镜','MIV1','0.398','34.7(适配小米note2)','44(适配小米note2)','55.9','保持坐姿或固定状态下使用','链接到图片','链接到图片','103.0','16.0','9轴','固定','0.1','134.0','145.0','小米5、小米5s、小米5s Plus、小米Note 2、小米6','http://img14.360buyimg.com/n5/jfs/t1960/61/2323495776/145925/52f9c81e/56fb777cN83cb09c7.jpg',NULL);
/*!40000 ALTER TABLE `MobileBox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `News`
--

DROP TABLE IF EXISTS `News`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `News` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `downvote` int(11) DEFAULT NULL,
  `editor_id` int(11) DEFAULT NULL,
  `is_push` int(11) DEFAULT NULL,
  `last_edit_time` varchar(255) DEFAULT NULL,
  `news_abstract` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `pic_location` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `upvote` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `News`
--

LOCK TABLES `News` WRITE;
/*!40000 ALTER TABLE `News` DISABLE KEYS */;
INSERT INTO `News` VALUES (1,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 12:36:41','如果你是虚拟现实(VR)头戴式显示器(HMD)以及VR展览会的爱好者，那么当你沉浸在虚拟现实世界里的','home/news/test0','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/68d804bda722d934258257aa3956cf5a.jpg','来源：913VR',NULL,'VR Cover提供Vive专用一次性卫生护罩',NULL),(2,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 12:22:21','昂贵的高端PC硬件是造成VR体验成本居高不下的部分原因。早期的VR-Ready电脑售价通常在1500','home/news/test1','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/5e1e6718287b8aa0fde2d2a6c197fc39.png','来源：913VR',NULL,'Steam平台VR-Ready电脑用户达到2500万',NULL),(3,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 12:13:35','在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只','home/news/test2','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/74ba6748a8a88ed7b083e961a7ff9da4.jpg','来源：POPPUR',NULL,'痛失手机江山的联想，想要在VR热潮中分一杯羹',NULL),(4,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 12:05:41','据BUSINESS WIRE报道，AR公司Meta日前已向位于加利福尼亚北部地区的联邦法院提出诉讼，','home/news/test3','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/cb64745cb9c06abcedffb42353cd92c6.jpg','来源：',NULL,'涉嫌盗用信息，Meta起诉AR创业公司DreamWorld',NULL),(5,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 12:00:02','强现实和虚拟现实(AR / VR)将成为科技巨头竞争的下一个平台。根据最近的报道，Facebook和','home/news/test4','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/ec317f8fe274ca74e47ad3162f0e1490.png','来源：199IT',NULL,'CB Insights：2017年Q1 AR / VR投资增长60%',NULL),(6,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 11:51:13','据卫报报道，加拿大蒙特利尔一个研究团队正尝试利用VR识别恋童癖，进而评估这些人所可能给社会带来的风险','home/news/test5','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/456eb67cc65d446c58b75e3b18e71c8c.jpg','来源：网易科技',NULL,'技术会不会被滥用？加拿大用VR测试恋童癖引争议',NULL),(7,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 11:47:48','现在虚拟现实、360度视频可是非常流行的消费级新技术，因此一切能与VR沾边的产品，看起来都非常高大上','home/news/test6','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/b600e247d166f69107c1f571588660b9.jpg','来源：腾讯数码',NULL,'这个“鹅蛋”其实是VR摄像机 一只手随用随拍',NULL),(8,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 11:44:24','“要情怀还是要面包?”把这个简单粗暴的问题抛给VR内容从业者，听听他们的答案。巨头或大厂的负责人会斩','home/news/test7','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/1e28d1a2eebfe38069a50bbd395a26ef.jpg','来源：',NULL,'国内VR内容变现难，海外就更容易吗？',NULL),(9,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 11:30:50','增强现实在微软，苹果，Facebook和Google的开发者大会上均发挥成为了焦点，这是业界正在向空','home/news/test8','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/c21a3d7cb622a7b6077350694dd23633.jpg','来源：vrsat',NULL,'深度传感器技术受热捧，谷歌Tango加入虚拟商店',NULL),(10,'作者：',NULL,NULL,NULL,'发布时间：2017-06-11 11:24:20','“Oculus VR For Good”是 Oculus 在 2016 年的 OC 开发者大会上提出','home/news/test9','http://www.vrrb.cn/d/file/kuaixun/2017-06-11/200c7226b667beef8fda634d5c1b3e52.jpg','来源：vrsat',NULL,'Oculus发布全景视频响应世界海洋日',NULL),(11,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:59:50','印度首部关于亲密关系暴力的VR电影，告诉你“关心”与“控制”之间的区别。上个月，印度电影《摔跤吧!爸','home/news/test10','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/7305c4f96b2e29ff99651c78fb48a9f0.jpg','来源：黑匣VR',NULL,'除了《摔跤吧！爸爸》，关怀女性意识的还有这部印度VR影片',NULL),(12,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:58:10','把VR绑死在桌面，苹果在告诉你：AR才是主流。在本周的WWDC大会上，苹果不仅宣布了其新产品Home','home/news/test11','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/78a11acbe4bc8c340f616953e7d23f1b.jpg','来源：黑匣VR',NULL,'苹果的未来蓝图：VR是桌面的，AR是移动的',NULL),(13,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:56:03','健力士和格兰菲迪纷纷打造VR体验提高产品销量，世界闻名的白兰地生产商人头马，当然不愿意因为错过新技术','home/news/test12','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/b551afbb7629784fcb67899e6700aab5.png','来源：黑匣VR',NULL,'人头马联手HoloLens打造MR香槟之旅',NULL),(14,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:54:21','6月8日，在“2017iVR+全球虚拟现实大会”，公司高级副总裁段有桥回顾了过去一年所实现的事情，并','home/news/test13','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/aa1be344eb624b16e63cefe37c381a38.jpg','来源：黑匣VR',NULL,'爱奇艺发布VR产业白皮书，公布一年来的VR成果',NULL),(15,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:51:42','《飞天小女警》是一部1998年推出的美国动画片，该片描绘了3位具有神奇力量的小女警成为罪恶克星，与各','home/news/test14','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/c076310ed0885096d8b7a7f8a7f7b661.jpg','来源：黑匣VR',NULL,'VR游戏《飞天小女警VR》推出预告片',NULL),(16,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:48:14','在经历了一年左右的发展之后，VR 背包类的产品现在似乎进入了成熟期，越来越多的主流大厂也开始看到该领','home/news/test15','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/388b7f7adf810323b8775b2bd0bd1ab7.jpg','来源：魔多VR',NULL,'联想首款VR背包来了！预售价14999元起',NULL),(17,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:46:08','Epic Games的全球创意总监唐纳德·马萨德(Donald  Mustard)似乎是一名VR信徒','home/news/test16','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/f3c265ab015ca7a8c443b8eb6a8ef206.jpg','来源：',NULL,'Epic: 现在VR像iPod前的MP3播放器，更好的还在后头',NULL),(18,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:26:13','美国加州大学圣地亚哥分校的工程师正在使用柔性机器技术来制造轻便的数据手套，从而让用户在与虚拟环境交互','home/news/test17','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/985218c56c1a2f4d93ecdcc6f1e57c7c.jpg','来源：',NULL,'在VR中弹钢琴，加州大学研发柔性人造肌肉数据手套',NULL),(19,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:24:10','VR直播明显在慢慢成熟，但这一用例在真正走向主流之前仍需要解决许多困难。在谈及VR将要革新的行业时，','home/news/test18','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/c1f1196572e8d4968b776427b795f2c1.jpg','来源：',NULL,'正走向成熟的VR体育直播仍缺少什么呢？',NULL),(20,'作者：',NULL,NULL,NULL,'发布时间：2017-06-10 11:19:23','苹果于本周宣布广泛地拥抱VR，这表明了他们其实早就在为虚拟现实做准备。在WWDC大会上，苹果和Val','home/news/test19','http://www.vrrb.cn/d/file/kuaixun/2017-06-10/f42d093e7b4c569993e7e0bce2876e61.jpg','来源：',NULL,'为给果粉带来VR，苹果和Valve合作有一年之久',NULL),(21,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:55:21','htc vive的订阅服务最早仅面向自家平台，不过为了拓宽用户数量以及提高收入，htc vive的订','home/news/test20','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/fe28ec7003424a0e2b10e19952106ccf.jpg','来源：913VR',NULL,'越来越和谐？Viveport订阅服务有望延伸到Oculus平台',NULL),(22,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:43:34','去年年初，来自柏林的猛男Thorsten  Wiedemann就开创先河连续48小时生活在虚拟现实世','home/news/test21','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/4e0f65acf192cf8a6df3ed37bc58d335.jpg','来源：17173vr',NULL,'这两个人在VR里连续待了48小时，期间还走了20公里',NULL),(23,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:30:53','在这篇文章中，我们将针对关闭 Steam 青睐之光而转至 Steam Direct 进行探讨。如果您','home/news/test22','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/44027d709bcc8336b0d829f36974072a.jpg','来源：Steam',NULL,'Steam新审核机制将于6月13日启动',NULL),(24,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:29:50','根据一项最新发表于期刊PLOS  ONE的研究论文，科学家能够使用VR头盔创造抽离式的(out-of','home/news/test23','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/11db9de8c26f2e0078eb6e935daeead0.jpg','来源：VR观察网',NULL,'巴塞罗那大学研究：VR模拟抽离式体验有助于人们减轻对死亡恐惧',NULL),(25,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:27:42','帕尔默•拉奇5月底的一条推文里表示，“如果我要投资《Re：从零开始的异世界生活》的蕾姆IF篇动画，应','home/news/test24','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/1e833be5b0fd643348b3409b9a62927e.jpg','来源：GCORES',NULL,'有钱真的能为所欲为，Oculus创始人意图投资蕾姆IF篇动画',NULL),(26,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:27:07','Cognata宣布他们已经成功完成了500万美元的融资，投资者包括Emerge、Maniv Mobi','home/news/test25','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/274047c29642b87b0a911baebcb1eb17.jpg','来源：',NULL,'Cognata完成500万美元融资，发力自动驾驶汽车VR测试平台',NULL),(27,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:25:43','德国技术公司MAGIX计划在2018年推出vr产品，并已经收购了VR软件公司Simplitec德国技','home/news/test26','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/265a78df91b7ccfbe385e68019a7249b.jpg','来源：',NULL,'MAGIX收购VR软件商Simplitec，明年将推VR产品',NULL),(28,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:23:13','GoPro即将推出5.2K分辨率的360度相机FusionFusion代表着GoPro进军球面相机市','home/news/test27','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/ba577b851e54d73a95769001a503aadb.jpg','来源：',NULL,'影像清晰无缝，GoPro 5K Fusion相机初体验',NULL),(29,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:21:29','VR神经技术初创公司MindMaze收购了运动分析开发商Gait UpMindMaze是一家位于瑞士','home/news/test28','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/2a9c2131130ba2a2d6a5f8cf7fc56996.jpg','来源：',NULL,'为VR集成人类完整动态范围，MindMaze收购Gait Up',NULL),(30,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:21:04','雅虎是美国著名的互联网门户网站，也是 20 世纪末互联网奇迹的创造者之一，经历过技术行业的跌宕起伏，','home/news/test29','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/1694463a1f19c85b9f1ebfdaaa22dbf4.jpg','来源：魔多',NULL,'瘦死的骆驼比马大，雅虎日本加入The VR Fund基金',NULL),(31,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:19:56','德国欧司朗光电半导体日前推出了体积最小的侧向扫描红外LED。基于已经验证的Firefly平台(广泛用','home/news/test30','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/f33405aedef541ee06d45c04b52d101f.jpg','来源：',NULL,'体积最小，欧司朗为VR/AR眼动追踪推出侧向扫描红外LED',NULL),(32,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:17:53','瑞士医疗 VR 独角兽 MindMaze 不久前将其 VR 医疗系统带到美国，最近他们又有新的动作：','home/news/test31','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/4e9e01aff036ffd63194978008f92a4d.jpg','来源：',NULL,'VR医疗机构MindMaze频繁发力，打了一套收购融资的组合拳',NULL),(33,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:10:40','苹果可能最快在明年推出搭载微型LED屏幕的可穿戴设备早在2016年2月份，有报道说苹果或许将在虚拟现','home/news/test32','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/1954f04beb2a013956029c1f1f75a0e9.jpg','来源：',NULL,'苹果或于2018年推出微型LED增强现实头显',NULL),(34,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:10:40','Mozilla 早在四年前已经开始由 Vlad Vukicevic(Mozilla工程师主管)带领的','home/news/test33','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/7f34cb9e014d29c375b62156c0662226.jpg','来源：vrsat',NULL,'Firefox 55将正式启用WebVR，8月8日起',NULL),(35,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:05:51','实际测试过HoloKit的反馈说，实际效果很差，定位乱飘，根本没有定位追踪效果可言。昨天一篇《神级开','home/news/test34','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/5b377b7fd0c42a67b77169116b0922dc.jpg','来源：',NULL,'为什么拳打Magic Leap、HoloLens的Holokit是垃圾势力',NULL),(36,'作者：',NULL,NULL,NULL,'发布时间：2017-06-09 09:03:20','人们与数字环境之间的无缝互动，单单实现追踪手部和手指的速度和精度是不够的，虚拟对象还需要根据用户的手','home/news/test35','http://www.vrrb.cn/d/file/kuaixun/2017-06-09/a739c2f846c14233c94854aca13da7af.jpg','来源：vrsat',NULL,'Leap Motion发布交互引擎1.0：让你在VR中“摸”得更爽',NULL),(37,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 10:03:08','根据最近发表的一项研究，科学家正在用VR头显打造体外体验，可以帮助减少对死亡的恐惧。研究作者之一Me','home/news/test36','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/4a8b9b4215156b6a41024a9b971e8116.jpg','来源：heix',NULL,'研究表明：VR让我们不那么怕死',NULL),(38,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:55:26','真的是万万没想到!大名鼎鼎的《铁拳7(Tekken  7)》在正式发售前一直强调增强其安全性，游戏开','home/news/test37','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/a1083530cc2aa7f16c0a83539bec70fa.jpg','来源：83830',NULL,'D加密真的不行了，《铁拳7》仅4天就被破解',NULL),(39,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:46:07','苹果WWDC2017对于VR/AR最振奋的消息就是，为iOS系统宣布了一个AR开发工具ARKit。这','home/news/test38','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/d6e8c732bb66a5f462d7fa1a04518fe5.jpg','来源：',NULL,'ARKIT是苹果最终通往AR眼镜的一小块铺路石吗？',NULL),(40,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:43:32','普华永道(PwC)预测：美国传统视频游戏的增长将有所放缓，VR和电竞将快速增长。这家国际审计和顾问机','home/news/test39','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/782834c19e967aa61b04186f8db1dbde.jpg','来源：',NULL,'传统电子游戏正在放缓 VR和电子竞技将快速增长',NULL),(41,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:37:25','6月7日，是VR圈子较为热闹的一天，大多数的从业者在上海CES  Asia大会上，探讨着VR/AR行','home/news/test40','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/9b1ce0526ff540285cf8d6a380f13a9e.jpg','来源：',NULL,'北京语文高考出现VR题，这6分你能得到吗？',NULL),(42,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:32:39','据悉，联想将在 CES Asia 现场召开发布会，发布一款名叫 Avalon 的 VR 背包电脑。值','home/news/test41','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/0a0a36795cea11426a684c5ef8d2ce98.jpg','来源：动点科技',NULL,'联想发布Avalon VR背包电脑，但只能全负荷运行1.5小时',NULL),(43,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:28:17','移动VR头显厂商Merge  VR日前宣布成立一个总值100万美元的基金，专门面向Merge平台的虚','home/news/test42','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/5d18938fb2999ea78b9103506fc1b558.jpg','来源：',NULL,'Merge VR为VR开发者提供100万美元基金',NULL),(44,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:26:46','如果试点计划取得成功，加利福尼亚州里图书馆将需要分配和筹集更多的资金。今天，Oculus与美国加利福','home/news/test43','https://cdn.yivian.com/wp-content/uploads/2017/06/Oculus_Library_Training__0012_DSC_6040.JPG.jpg','来源：',NULL,'100台Oculus Rift，美国90间图书馆启动VR教育试点',NULL),(45,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:25:07','Neuston拥有“雄心勃勃的目标”，致力于开发“高品质的VR社交动作游戏”。《愤怒的小鸟 2》的首','home/news/test44','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/878ccf8a75c37a2b9ce8a2014c2a49a7.jpg','来源：',NULL,'《愤怒的小鸟 2》首席码农成立VR游戏工作室',NULL),(46,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:23:10','市场研究IHS  Markit在报告中指出，VR头显的全球安装基数将由2016年的1800万上升至2','home/news/test45','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/d66d2404074bd00bd27aabdb4159ba3a.jpg','来源：',NULL,'IHS报告：2021年VR头显销量将达9100万台',NULL),(47,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:22:40','Nyko Technologies 宣布正式成为三星的官方授权合作伙伴，并公布了首款合作产品——Pl','home/news/test46','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/200a1d7469ee8c2a00400ec622868597.jpg','来源：vrsat',NULL,'Nyko开发Gear VR无线控制器，获三星授权',NULL),(48,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:21:37','MelodyVR最近与华纳和环球公司签署了合作协议。英国虚拟现实音乐初创公司MelodyVR已经完成','home/news/test47','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/2390da09ca555ffa7b9dc71ddd1b0e6e.jpg','来源：',NULL,'VR音乐初创公司MelodyVR完成650万美元融资',NULL),(49,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:19:26','这是继切特·法力斯责克(Chet Faliszek)之后，又一名人才离开了V社。据Faceboook','home/news/test48','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/f1c925347266d8a0c5948a653ed3c77e.jpg','来源：',NULL,'《传送门 2》游戏编剧杰伊·平克顿已从V社离职',NULL),(50,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:17:17','苹果一位供应商宣布计划在2019-2020期间推出5nm处理器。日前，苹果一位供应商宣布计划在201','home/news/test49','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/db7d65024a66ed83b2584988ff3180e3.jpg','来源：',NULL,'未来苹果手机或采用5纳米AR/VR/AI芯片',NULL),(51,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:15:12','根据美国市场调查公司 SuperData Research 的调查报告显示，htc vive 销量大','home/news/test50','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/40aaff431d215535cf91e6f11e9a34ab.jpg','来源：vrsat',NULL,'数据显示，HTC Vive的Steam用户利用率不到1%',NULL),(52,'作者：',NULL,NULL,NULL,'发布时间：2017-06-08 09:11:48','一次次的小改动在最后带来了大大的不同如果你是订购HTC  Vive发售版本的众多用户之一，当你走进商','home/news/test51','http://www.vrrb.cn/d/file/kuaixun/2017-06-08/4a6ea6cf80d77cd057062927515d8e73.jpg','来源：',NULL,'一次次的小改动，带来大大不同的HTC Vive小新版',NULL),(53,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 10:04:16','下周就是 E3 展了，届时微软会宣布 Xbox 天蝎座的更多信息，那么：它究竟会不会支持 VR?现在','home/news/test52','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/749290f0ddde1afd0ac1db68e95116de.jpg','来源：',NULL,'赶在E3之前微软就告诉你了：别指望今年Xbox有VR，但是......',NULL),(54,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:54:21','在亚马逊忙着打造自己的Prime Air无人机帝国时，增强现实新公司Edgybees发布了《Dron','home/news/test53','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/4d83fe17cf27877a98b8baacce0c9def.jpg','来源：83830',NULL,'《Drone Prix》：一款要用到无人机的AR游戏',NULL),(55,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:49:01','我们已经看惯了黑白主调蓝色点缀的psvr，而随着6月5日日本每年夏天必定上映的特摄片《假面骑士》剧场','home/news/test54','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/577efc6b14bf4895ec7955a48e5bd35f.jpg','来源：VR之家',NULL,'索尼联动《假面骑士》，推出“定制版”PSVR',NULL),(56,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:39:54','最近，一则流言在各大游戏网络和玩家社区广为流传——似乎在即将在洛杉矶举行的E3大会上，B社将会发布另','home/news/test55','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/1df7debe535358ac8200e6c64f4920d0.jpg','来源：站长之家',NULL,'E3展前谣言四起，传《上古卷轴5》也要支持VR',NULL),(57,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:36:02','为了让高端的VR体验更加亲民，Oculus在不断努力。几个月前，Oculus宣布永久下调Oculus','home/news/test56','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/750bc834910c2e990c969feedc00fd6d.jpg','来源：17173vr',NULL,'亚马逊推出Oculus Rift套餐 返100美元礼品卡',NULL),(58,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:30:21','苹果WWDC2017发布的关于在VR/AR上的应用，惊喜吗?兴奋吗?你要说4999美元的iMAC  ','home/news/test57','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/92f95036f0adac9d22bef63527df49c8.jpg','来源：',NULL,'VR/AR：苹果家也没余粮了 大牲口都歇了吧',NULL),(59,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:27:18','有一个执念，在VR圈内可谓根深蒂固——VR的价值在于高度保真。AFrame投资者Fabien  Be','home/news/test58','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/1133f2aabe4ec936b596a9b9627e9d87.jpg','来源：黑匣VR',NULL,'第一号误解：VR真的需要如此逼真吗？',NULL),(60,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:24:04','著名冒险游戏《神秘岛》的开发商 Cyan Worlds 最近在 Twitter 上宣布，他们的 VR','home/news/test59','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/d20d93b0f5a1dbc537bc548accb57c4a.jpg','来源：魔多VR',NULL,'《仰冲异界》将成为支持Mac首款VR游戏之一',NULL),(61,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:20:28','今天，惠普发布了一款“轻量级”的 VR 背包电脑——Omen X Compact。Omen X Co','home/news/test60','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/9685a10054d5de09e997859f2c0dc3a4.jpg','来源：魔多VR',NULL,'惠普发布轻量级VR背包电脑：内置GTX 1080，引入坞站设计',NULL),(62,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:17:03','微视酷科技的“IES沉浸式教育管理系统”获第72届中国教育装备展示会金奖。中国教育装备行业协会于5月','home/news/test61','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/7ba7a8b9e108ab7e4dbfa5b16a7b29ce.jpg','来源：',NULL,'微视酷VR教育系统获中国教育装备展金奖',NULL),(63,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:16:11','Epic Games 首席执行官 Tim Sweeney 认为，苹果即将在今年秋季推出的 iOS 1','home/news/test62','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/f1d4dd20bf2de0a97a4ed78ab5d20d4f.jpg','来源：vrsat',NULL,'Epic Games：大批开发者将涌入苹果AR平台',NULL),(64,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:15:03','索尼日前谈论了关于PlayStation的未来。请你暂时把目光从任天堂的Switch主机移开，并转向','home/news/test63','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/9aff4a4ec77dc3337e0eaacdc7d11491.jpg','来源：',NULL,'索尼说PS VR实际市场需求量高达500万',NULL),(65,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:12:35','对苹果的粉丝乃至整个VR/AR行业而言，他们仍有许多值得期待的事情。在WWDC大会上，苹果展示了一系','home/news/test64','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/2f17ae4655f7969c5cae9f1c6bc76204.jpg','来源：',NULL,'苹果入场，下半年VR将迎来小春天',NULL),(66,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:11:37','索尼公司6月5日宣布，他们成功开发出具有最低10μm像素间距的背照式ToF(time-of-flig','home/news/test65','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/78299d689666e81432b0661e66229fbf.jpg','来源：vrsat',NULL,'索尼开发最高精度ToF图像传感器，或将惠及VRAR',NULL),(67,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:10:20','现在是时候为无线VR欢呼了吗?如果你问HTC  Vive的粉丝当前头显需要在什么方面实现优化，通常第','home/news/test66','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/fde27c50ed1ed5c87f384f5a3382f39d.jpg','来源：',NULL,'英特尔的无线VR方案为什么是采用WiGig技术',NULL),(68,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:08:43','Oculus在未来很有可能会添加对MacOS的支持。虽然在WWDC大会之后MacOS已经开始支持St','home/news/test67','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/949161aa36a62d7276727375575e7177.jpg','来源：',NULL,'Oculus表态仍无计划支持苹果MacOS系统',NULL),(69,'作者：',NULL,NULL,NULL,'发布时间：2017-06-07 09:04:28','微软认为主机VR也应该属于无线，但现在微软专注于为个人电脑而不是主机开发混合现实体验。微软Xbox ','home/news/test68','http://www.vrrb.cn/d/file/kuaixun/2017-06-07/26ed7ee4d20e7a6fba687c2925bfb791.jpg','来源：',NULL,'微软暗示Scorpio主机的VR形态属于无线',NULL),(70,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 11:31:51','科技博客VentureBeat近日撰文称，虽然在HTC等巨头的推动下，VR行业正在一步步走出幻灭的低','home/news/test69','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/9e9487ba3732db9e5cb31e57ca6c4acf.jpg','来源：腾讯科技',NULL,'VentureBeat：受消费市场需求低的影响，VR初创企业进入沉寂期',NULL),(71,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 11:24:25','CES Asia(亚洲国际消费类电子产品展览会)将于6月7日-9日在上海开幕。这个展会脱胎于已有50','home/news/test70','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/07d21c85544430094e9d6c08992a25fe.jpg','来源：',NULL,'CES Asia 2017看点：VR/AR/AI、自动驾驶等黑科技齐登场',NULL),(72,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 10:18:43','2017年的E3电子娱乐展览即将于下周，也就是6月13至6月15日在洛杉矶会展中心举行。在E3开展前','home/news/test71','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/bf88d4f9a4d6a7e9c1d24c45398ab501.png','来源：17173vr',NULL,'E3大展快来了，关于VR我们做了6个预测',NULL),(73,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 10:15:11','上周，创新工场董事长，人工智能专家李开复在接受国外财经媒体Quartz的专访时表示，人工智能不会发展','home/news/test72','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/e0d6673b5bb37405c71232c31585aecc.jpg','来源：17173vr',NULL,'李开复: VR游戏让人不能自拔，坚决不投资',NULL),(74,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 10:07:03','过去几年，VR头显激起万丈波澜，这颗技术新星无疑引起了各大行业的注意，公众的兴趣也未见丝毫消退。然而','home/news/test73','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/f1ca89d31ada9dedae1789c2ff79f540.png','来源：一点资讯',NULL,'福布斯机构理事会：VR，到底是昙花一现，还是广告媒体的未来？',NULL),(75,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 10:03:17','《Sleep No More》作为一部“沉浸式”戏剧，是同样冠以“沉浸式”的VR叙事首先联想到的借鉴','home/news/test74','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/f3dd24f4cecbd42a48d102b30ca8ad50.jpg','来源：',NULL,'简化到极致？当代戏剧提供给VR叙事的另一种维度',NULL),(76,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:54:59','根据纽约时报报道，Oculus创始人、神奇少年Palmer  Lucky今年3月从Facebook离','home/news/test75','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/bc1f671c278ebb77ca9206d6859ccff2.jpg','来源：',NULL,'Oculus元老帕胖创办国防技术公司，还获得了特朗普顾问的青睐',NULL),(77,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:37:57','VR关键技术的突飞猛进，其所产生的“VR+”带动力，必将推动包括航空航天、装备制造、医疗健康、教育培','home/news/test76','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/7a56f434019d691ac715176d8f4d0f2c.jpg','来源：VR观察网',NULL,'虚拟现实在医疗领域的应用是刚需',NULL),(78,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:32:50','今天，由 LYRobotix(凌宇智控科技)自主研发的 VR/AR 交互产品 NOLO 在淘宝开启预','home/news/test77','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/0e976d3fa6cffd0efc8965623de38287.jpg','来源：魔多VR',NULL,'VR/AR交互产品NOLO正式开启淘宝预售，售价849元',NULL),(79,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:27:32','在今天的苹果新闻发布会上，苹果公司发布了其 IOS 移动操作系统的最新版本 IOS 11，并介绍了一','home/news/test78','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/72607ea2b1b4e47f2b47f59396616014.jpg','来源：vrsat',NULL,'苹果公布了一个AR平台，还想让它的效果比肩Hololens',NULL),(80,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:26:18','索尼于今天宣布psvr头显的销量已经超过100万台。索尼最初于今年2月宣布，psvr自去年10月开始','home/news/test79','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/9e56db60cfc0752abfcbf8ca6d4142be.jpg','来源：',NULL,'索尼：PS VR销量超100万，将制作《绝命毒师》VR体验',NULL),(81,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:23:19','iMac和iMac Pro直接内置AMD 500系列VR规格显卡。苹果于WWDC  2017全球开发','home/news/test80','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/59ebc84e153b6f03a4ac3aa2551534c5.jpg','来源：',NULL,'AMD RX 500系列显卡让苹果MacBook正式拥抱VR体验',NULL),(82,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:19:53','Wingnut AR团队的AR体验将于今年下半年上线苹果的WWDC  2017是一场相对低调的活动，','home/news/test81','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/90ebe3b6f8106135ace3a7fd036f419a.jpg','来源：',NULL,'指环王导演用ARkit为苹果开发AR体验',NULL),(83,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:17:27','新版本SteamVR定位器/基站即将推出除了在今天的WWDC大会上为Mac带来SteamVR测试版之','home/news/test82','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/55197f31020d6198a81330da8c6c8956.jpg','来源：',NULL,'更便宜，新版SteamVR定位器即将上市发售',NULL),(84,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:11:49','iPad Pro的增强现实demo演示。苹果WDCC大会中最令人兴奋的一个时刻是iPad  Pro的','home/news/test83','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/4cb12e9b49fc6e1290f52a63008b1fd3.jpg','来源：',NULL,'老司机已亲手玩上苹果AR，效果如何速上车瞧瞧',NULL),(85,'作者：',NULL,NULL,NULL,'发布时间：2017-06-06 09:06:36','苹果全面拥抱AR-VR。今天凌晨苹果在其年度开发者大会WWDC  2017宣布了一系列跟AR/VR有','home/news/test84','http://www.vrrb.cn/d/file/kuaixun/2017-06-06/6d9704d42ef65dbb3f5ce5f0f8b1357d.jpg','来源：',NULL,'WWDC上苹果公布 七大 AR/VR动作',NULL),(86,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 10:20:12','Brian Green教授使用VR来将完整的理论物理模型解释为VR对象。弦理论是理论物理学领域中最复','home/news/test85','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/f4f3498d62059c437ebc5f315ab025b5.jpg','来源：ARA增强现实',NULL,'VR深入科研领域 用于演示字符串理论的复杂性',NULL),(87,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 10:14:23','每年Android新版本亮相，最幸福的当属谷歌的亲儿子Pixel和Nexus系列了，它们都能在第一时','home/news/test86','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/8938e9ada9797f7eab558ca0f0115a6a.jpg','来源：驱动之家',NULL,'Google Pixel 2配置曝光，能更好的支持VR吗？',NULL),(88,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 10:02:32','早早“上车”的IMAX，现在决定比原计划提速两倍：将6家试点体验店的数量翻一番增加到11家。自今年初','home/news/test87','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/c03600a93c695fff45f7ba5bf6c8319b.jpg','来源：',NULL,'IMAX VR：洛杉矶VR影院表现满意 计划全球增加体验店',NULL),(89,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:43:05','Google  Cardboard带给我们的启示是，当你的手机非常靠近你的眼睛时，它就可以变成一个V','home/news/test88','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/77e73b0c56ce4d7bc5ccc27b9a4fd6c6.jpg','来源：vrsat',NULL,'喜闻乐见的DIY纸盒版AR头显：HoloKit',NULL),(90,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:37:23','真正的增强现实设备制造商你用一只手就可以数出来，Osterhout Design Group(ODG','home/news/test89','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/1b8a7428dd3b1714d2be89995b7f233a.jpg','来源：vrsat',NULL,'6DOF升级，ODG的AR眼镜跟踪效果媲美HoloLens',NULL),(91,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:32:36','VR和AR成了人们茶余饭后的话题。VR的发展毋庸置疑。但在AR成为主流前，仍有很长的路要走。营销人员','home/news/test90','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/68fbdc6f16b3902abc0117513ce1f8b5.jpg','来源：',NULL,'不懂编码，也可以创建VR、AR程序，Appy Pie做到了',NULL),(92,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:30:14','你有没有想过做一下你的胸部，但是又觉得太厉害不敢随便下刀?现在，据称新的VR眼镜可以向女性展示新加的','home/news/test91','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/39e00ddfc2005092e2c199da067903f5.png','来源：黑匣VR',NULL,'隆胸之前，先用VR看看效果自不自然',NULL),(93,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:24:15','Massless 公司的首席执行官 Jack A. Cohen 表示，这是把虚拟现实技术带进机械设计','home/news/test92','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/14669f5bd6e72fdc470cae990fa41987.jpg','来源：vrsat',NULL,'为设计师而生，Massless VR笔型外设精度可达0.05mm',NULL),(94,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:19:44','物联网和 AR 技术提供商 PTC 在 AWE 上宣布正在开发一款应用，叫做 Project Cha','home/news/test93','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/8b1a88b39cb7291160cbbbeebf340934.jpg','来源：魔多VR',NULL,'PTC推出一款新AR应用：今秋上线，供Vuforia开发者调用',NULL),(95,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:17:53','备受果粉期待的苹果全球开发者大会(简称“WWDC”)召开在即，总避免不了的是各“内部人士”的提前剧透','home/news/test94','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/24a5ab64fef0f5c54f9d9346ce98b0a6.jpg','来源：vrsat',NULL,'WWDC大会新看点：苹果或将公布AR眼镜信息',NULL),(96,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:17:35','VR线下体验店VRkade近日在加拿大西南部城市卡尔加里开幕。其营销经理RileyGrieveson','home/news/test95','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/3cce65e43972a874d5f4034c49e2d881.jpg','来源：',NULL,'北美最大VR体验店开幕 设置20个体验区',NULL),(97,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:15:35','近日，世嘉在Twitter上宣布，原定于5月31日开幕的秋叶原VR体验中心，因为设备原因宣布推迟。秋','home/news/test96','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/667f5550528b9450ef413097d7ecd7c6.jpg','来源：',NULL,'秋叶原世嘉VR体验店因设备原因将推迟开业',NULL),(98,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:12:44','根据富士康泄露消息，苹果AR眼镜还处于早期测试阶段。过去我们讨论了很多iPhone  8可能具备的A','home/news/test97','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/0d98a1afb675c2baae9f61177be5d734.jpg','来源：',NULL,'富士康员工爆料，苹果AR眼镜有望在2019年上市',NULL),(99,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:11:40','三星 Gear VR 是撬开移动虚拟现实的关键，它主要依靠 Galaxy 系列智能手机为用户提供沉浸','home/news/test98','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/89cb1dad5e1b5d06a187ce55e3a80f97.jpg','来源：vrsat',NULL,'Gear VR曝光新专利，将增加全景拍摄和无人机组件',NULL),(100,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:10:08','拉奇并没有给出任何时间表，只是说项目目前仍处于非常早期阶段。虽然帕尔默·拉奇在数月前正式离开了自己于','home/news/test99','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/fda813d276ba5b8fd3bdc82659599833.jpg','来源：',NULL,'Oculus创始人拉奇：为刀剑神域开启新VR旅程',NULL),(101,'作者：',NULL,NULL,NULL,'发布时间：2017-06-05 09:05:16','“安卓之父”安迪·鲁宾的新硬件公司Essential在数天前发布了首个产品，而大部分的评论家都认为这','home/news/test100','http://www.vrrb.cn/d/file/kuaixun/2017-06-05/4df03059e7280717f7fbc4ea27e9d1d8.jpg','来源：',NULL,'安卓之父新公司申请AR眼镜专利',NULL),(102,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 11:07:46','据外媒报道，虽然从总体销量来看，虚拟现实的好日子还没来，但这个初生的市场确实已经显现出一些生机盎然的','home/news/test101','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/b623b7dcdf7cd76ac1b84c00d38cfb30.jpg','来源：腾讯科技',NULL,'IDC报告：第一季度卖得最好的还是Gear VR',NULL),(103,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 11:03:08','在过去的一年中，随着Facebook(Oculus)、Google、Sony、HTC等巨头纷纷推出V','home/news/test102','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/5222ac15fba3b503cfc02c6cf336eceb.jpg','来源：创事记',NULL,'Facebook关闭Oculus Story，VR内容何去何从？',NULL),(104,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 10:57:35','在台北 Computex 期间，3D 打印机制造商 XYZprinting 宣布和 htc vive','home/news/test103','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/a896e30ffb8d6830888d01dfd82833ef.jpg','来源：魔多',NULL,'HTC联合3D打印商XYZprinting，在VR里建模',NULL),(105,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 10:54:17','在加州圣克拉拉举行的 AWE(Augmented World Expo) 上，联想和 Wikitud','home/news/test104','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/cd3dcaacdb30e915c155bd701465f66a.jpg','来源：魔多',NULL,'联想和Wikitude推出AR云平台，为工业提供一站式解决方案',NULL),(106,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 10:51:54','在今年的 Computex 上，Machina 公司推出了一款具备体感与操控的 VR 联网衣 OBE','home/news/test105','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/2d11ec582f23728df382f49100df38cc.jpg','来源：魔多',NULL,'Machina的这款VR外套让你全面浸入虚拟现实',NULL),(107,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 10:49:24','一家位于德克萨斯州奥斯汀地区的初创公司Aceable通过360度视频让移动驾车教育成为了可能。Ace','home/news/test106','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/ecf28effb6400fffc9c5b17b4f43d9bc.jpg','来源：中关村在线',NULL,'Aceable利用虚拟现实让驾校学员认知驾驶危险',NULL),(108,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 10:46:29','在本届的台北国际电脑展上，宏基设置了一个特别的展馆型摊位，展出的一系列产品中包括了Predator系','home/news/test107','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/457be7a6f12699742278b6e326ff4faf.jpg','来源：新浪科技',NULL,'5K超清影院级VR眼镜StarVR高调亮相',NULL),(109,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 10:42:34','谷歌眼镜曾是备受关注的AR可穿戴设备，但遗憾的是，怪异的造型背离了眼镜本身的形态，所以无法在消费市场','home/news/test108','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/a0923118957e6ffda70306206fa6109e.jpg','来源：腾讯数码',NULL,'Google Glass升级版！Solos骑行AR眼镜粉墨登场',NULL),(110,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 10:40:10','“阅后即焚”照片分享应用Snapchat母公司Snap的智能眼镜Spectacles终于要登陆欧洲了','home/news/test109','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/b727c5014fba83a2101472cc498e0d05.jpg','来源：BI中文站',NULL,'Snapchat智能眼镜Spectacles最终登陆欧洲市场',NULL),(111,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 10:34:07','按照科技发展的规律，重大的技术平台每10 - 15年会改变一次，而新的平台在原有平台基础上会继续兴起','home/news/test110','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/bd84703039377dd3df21c59ce35eebc0.jpg','来源：',NULL,'风险资本Loup Ventures：如何站在VR/AR/AI浪潮之巅创造最大价值？',NULL),(112,'作者：',NULL,NULL,NULL,'发布时间：2017-06-04 10:29:07','摩茲工寮是 MozTW(Mozilla 台湾社群)为社群所设计，并由社群共同管理的 Mozilla ','home/news/test111','http://www.vrrb.cn/d/file/kuaixun/2017-06-04/61e7ff11184dfd164e083d4c18604b6c.jpg','来源：vrsat',NULL,'WebVR福利：《A-Frame学院》中文版免费上线',NULL),(113,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 10:21:36','好的VR体验实在不多，然而只要足够好，就会在这个平庸的世界中难以被逾越——即使眼下的技术和硬件同样平','home/news/test112','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/52d8da79c71a9ce3c84b951996f46ef8.jpg','来源：',NULL,'MLF VR：流萤飞旋 化身一只古老的夏虫冷眼看看这个世界',NULL),(114,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 10:12:53','2015年1月，微软发布了一款跨时代的产品——HoloLens增强现实眼镜。炫酷的外观和科幻般的增强','home/news/test113','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/c81ac3b262701b4caf9b944e3f82c9a5.jpg','来源：POPPUR',NULL,'Meta公布操作平台演示：可以从手机中“拖出”AR内容',NULL),(115,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 10:07:35','与刚开始不同，现在精良的VR游戏比比皆是。《Raw  Data》《生化危机7》《无限》这些都是当下热','home/news/test114','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/15d6c6fabf6dd8d5a9dc08d97fc8265b.jpg','来源：POPPUR',NULL,'有了Hapto VR触控装置，《夏日课堂》还怕摸不到吗？',NULL),(116,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 09:50:11','（映维网原标题:“ 不完美但极具前景，MindMaze面部追踪技术体验手记”）神经技术初创公司Min','home/news/test115','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/c6a7ab4fc9bcbd7ce01402cc1f8499d8.jpg','来源：映维网',NULL,'捕捉每一瞬间的喜怒哀乐，MASK面部追踪让VR更真实',NULL),(117,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 09:45:51','在智能穿戴领域，Spectacles眼镜可谓是让人印象深刻，一经上市就掀起了抢购的浪潮。近日又有消息','home/news/test116','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/f0255a9dd9695d08e805f47c95c62fae.png','来源：',NULL,'安卓之父又要搞事了？Essential公布最新智能眼镜专利',NULL),(118,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 09:37:10','在今天举办的增强现实/虚拟现实科技博览会(AWE)上，歌尔股份有限公司联合 Kopin 打造了一款 ','home/news/test117','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/6c32ba9ffd2dc5f401e4d16446973afe.png','来源：魔多',NULL,'打造PC VR显示新标准 歌尔联手Kopin放肆入局',NULL),(119,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 09:35:22','三星Gear  VR头显可将智能手机的屏幕作为VR显示屏，但是就算是FHD或者更高分辨率的显示屏，在','home/news/test118','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/fb1ffeac36f59d950e78b394cc8ebcfe.jpg','来源：',NULL,' 三星发布VR专用屏幕 像素密度高达858ppi',NULL),(120,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 09:28:22','NBA勇士队与骑士队总决赛正式开始。然而，恰逢周五，有些朋友可能要错过决赛直播。所幸，本赛季NBA决','home/news/test119','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/faaea852277626ea1f4e83726a3373af.jpg','来源：',NULL,'担心看不到NBA总决赛？NextVR合集将带来零距离精彩镜头',NULL),(121,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 09:19:09','相信喜欢格斗游戏的玩家对《铁拳》系列都不会感到陌生。现在《铁拳7》已经正式上线PS4、Xbox  O','home/news/test120','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/cd4ee9423674b13af60cef51e9f56920.jpg','来源：',NULL,'《铁拳7》全平台上线，支持PSVR',NULL),(122,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 09:11:29','虽然htc vive、Oculus Rift和现在的三星Gear  VR都配备运动控制器，但它们不能','home/news/test121','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/55b6cde9f7f04f598101834c8e34eb0e.jpg','来源：',NULL,'数据手套模块化，Bebop为VR提供实惠的操控解决方案',NULL),(123,'作者：',NULL,NULL,NULL,'发布时间：2017-06-03 09:05:04','《Tilt  Brush》可以说是虚拟现实中的高级画图工具，你可以在3D空间中绘画和涂抹，自由自在地','home/news/test122','http://www.vrrb.cn/d/file/kuaixun/2017-06-03/c7cb02ffa278e21373e58600ab6c9570.jpg','来源：',NULL,'有了VR应用《Tilt Brush》，无人机也能成为艺术家了',NULL),(124,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 16:40:12','炫魔方(国际)VR虚拟现实影像季由国家对外文化贸易基地(上海)国际高科技文化装备产业基地联合多家国际','home/news/test123','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/9ee0bdd225153e9a69972fe3668f2205.jpg','来源：',NULL,' NAB Show Shanghai炫魔方构建VR数字内容生态圈',NULL),(125,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:25:38','虚拟现实让你觉得你在另一个世界。但一旦你尝试使用你的手，这个幻想就会被打破。这就是为什么Manomo','home/news/test124','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/6124cbf0f2e1304b6c4b07b258233b36.jpg','来源：',NULL,' 低成本手势捕捉技术，只用智能手机相机就行了?',NULL),(126,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:23:58','今天，在加州圣克拉拉举行的 AWE(Augmented World Expo) 上，联想和 Wiki','home/news/test125','http://img.moduovr.com/170602_sarah_1_2.jpg-moduo','来源：魔多VR',NULL,'联想和Wikitude联合推出AR云平台，为工业提供一站式解决方案',NULL),(127,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:23:03','有了本周宣布的这一新功能，你将能把你的Gear VR“体验”用Chromecast直播到你的电视上去','home/news/test126','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/cf7991193b65784b25f6fd53a35d4975.jpg','来源：',NULL,'VR将能进行直播，Oculus为Gear VR添加直播功能',NULL),(128,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:21:23','根据IDC的报告，VR(虚拟现实)设备和AR(增强现实)设备在第一季度“继续增加”，230万设备被发','home/news/test127','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/2f9bee6dc5d41da2b0ab307893740938.jpg','来源：',NULL,' IDC报告：第一季VR设备销量仍不高',NULL),(129,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:20:55','OminiVirt正在向所有的虚拟现实应用开放他们的平台，为其提供营收解决方案。OminiVirt此','home/news/test128','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/c90eb0783bce477426f4e079147b7ef1.jpg','来源：',NULL,'VR广告平台OminiVirt向所有VR应用开放',NULL),(130,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:18:31','Scope AR，一家为实时视频通话添加智能指导解决方案的增强现实公司。其已经宣布将在2017Aug','home/news/test129','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/c9441e89986ce1907cf0c064da357de3.jpg','来源：vrsat',NULL,' Scope AR新增无痕追踪功能，实现远程AR指导',NULL),(131,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:16:44','不断亏损的Kopin能否在VR/AR市场中翻身呢?随着Oculus  Rift和其他主要头显的上市，','home/news/test130','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/3f2e691881fb7ce219df853ab99a612a.jpg','来源：',NULL,'能否借AR/VR翻身？上市公司Kopin在努力转型',NULL),(132,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:13:11','世界上最大的零售商沃尔玛很快便会通过虚拟现实技术进行员工培训。美国200间“沃尔玛学院(Walmar','home/news/test131','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/7d41930103eca5ff4cc1ecd229fbb948.jpg','来源：',NULL,'沃尔玛将通过VR技术进行员工培训',NULL),(133,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:09:09','太阳眼镜般大小的虚拟现实头显或许比我们想象中更快到来。虚拟现实头显背后的数字世界十分震撼，但我们对头','home/news/test132','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/f36e5a184f67610bbaed264246ce9c9d.jpg','来源：',NULL,'目标太阳镜大小，Kopin联手歌尔展示4K屏VR头显',NULL),(134,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:07:24','SDK将以免费增值模式向开发者提供。计算机视觉技术公司ManoMotion日前推出了软件开发套件，让','home/news/test133','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/90f4220ee6c5f96292128943c4b99844.jpg','来源：',NULL,'ManoMotion免费开放3D手势识别开发者套件SDK',NULL),(135,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:05:19','Firefox 55(火狐)版本将默认启用WebVR API。Mozilla日前宣布，于8月8日发布','home/news/test134','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/a22ee4038e5d85b741aafd872c6ff021.jpg','来源：',NULL,'火狐浏览器Firefox 55本将默认启用WebVR',NULL),(136,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:02:37','加州大学圣地亚哥分校雅各布工程学院的一个团队正试图通过他们最新的创新为虚拟现实增加额外的沉浸感。该团','home/news/test135','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/b64a4a716c5529e41c6fe80f30a7a4da.jpg','来源：vrsat',NULL,' 加州大学团队研制“气动肌肉”力反馈VR手套',NULL),(137,'作者：',NULL,NULL,NULL,'发布时间：2017-06-02 09:02:24','英特尔的VR内容将包括赛后杂锦和每场比赛的点播。根据与MLB(美国职棒大联盟)签署的三年协议，英特尔','home/news/test136','http://www.vrrb.cn/d/file/kuaixun/2017-06-02/faf924d79265c68926a793bd898ca9bd.jpg','来源：',NULL,'英特尔与美国职棒大联盟签署的三年VR直播协议',NULL),(138,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 11:28:16','近日，虚拟现实行业创业团队造梦科技宣布完成千万元PreA轮融资，用于进一步巩固国内知名线下VR游戏分','home/news/test137','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/eac79be0204f6523bdd9b823ac9d3a1e.png','来源：913VR',NULL,' 国内知名线下VR游戏平台造梦科技，获蔡文胜隆领资本千万投资',NULL),(139,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:47:46','有许多研究和试点计划都在探索虚拟现实(VR)和增强现实(AR)如何在医疗保健领域起到更大的作用。Vi','home/news/test138','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/4b62fa6ba84039480e25fb83fa8a5933.jpg','来源：vrsat',NULL,'Virtual Rehab与Securli合作保护患者数据',NULL),(140,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:39:05','在战争中掌握更多的信息往往意味着具备更多的主动权。能够精准定位战友和敌人的位置是顺利开展任务以及避免','home/news/test139','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/bc8a6bf5cd49059640c1967caa4b1fc6.jpg','来源：魔方VR网',NULL,'美军为士兵提供战术优势 研发出基于AR技术的“战术AR”头显',NULL),(141,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:35:26','随着网购热潮的不断兴起，服装业实体店的压力越来越大了。在网上轻轻那么一点，就能瞬间找到数以万计的服饰','home/news/test140','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/aef9dc4f76368cef5ba8e55bcf923636.jpg','来源：POPPUR',NULL,'Topshop旗舰开设VR游乐设施，营业额上涨30%',NULL),(142,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:29:35','3D扫描公司Matterport推出了新一代产品Pro2 3D摄像机。与上一代产品Pro  3D摄像','home/news/test141','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/6e7b2a41abd5ff68f018062654c2c1ac.jpg','来源：',NULL,'Matterport推出Pro2相机，内置GPS可供谷歌全景拍摄',NULL),(143,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:26:56','“喂，你知道AR盒子吗?”“什么AR盒子?你说的是AR眼镜?”“不是啊，AR盒子，就是类似于VR盒子','home/news/test142','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/8ec45cd6e0d7372e80e4b5ea5cd1f32c.jpeg','来源：',NULL,'走了VR又来了AR手机盒子，是真需求还是骗钱货？',NULL),(144,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:24:16','今日，Oculus宣布，三星GearVR支持Chromecast，用户可以在谷歌Chrome上轻松分','home/news/test143','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/cc0aa442464f06968697496ce501cb3d.jpg','来源：',NULL,'GearVR新增Chromecast支持，一键分享VR游戏体验',NULL),(145,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:21:11','StrikerVR推出了一组针对Vive和Oculus Rift的枪型外设Arena  Infini','home/news/test144','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/b1e73a875c9a52626f06f46cb8500c67.jpg','来源：',NULL,'StrikerVR推出枪型外设，2800美元你会买账吗？',NULL),(146,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:21:06','HTC最新的移动VR头显名为Link。有趣的是，这款设备并没有使用Vive品牌，同时也没有使用跟Vi','home/news/test145','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/0dba684863e1775a23d1ba5d64314b1b.jpg','来源：魔多',NULL,'由外向内追踪！HTC新移动VR头显采用Ximmerse追踪系统',NULL),(147,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:17:22','Occipital为一体机头显设计的追踪平台允许用户通过低成本的集成传感器和IMU穿行空间。对虚拟现','home/news/test146','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/25f559319ddef3f2b513f5bfb0f548be.jpg','来源：',NULL,'Occipital展示6 DoF内向外移动VR定位追踪方案',NULL),(148,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:15:41','这一最新的图形API宣称是OpenGL ES的真正继任者，可为移动平台带来主机级别的图形质量。Vul','home/news/test147','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/ad55b0b8ac61895e0d50e5f7ff634bca.jpg','来源：',NULL,'Vulkan API对安卓Nougat系统意味着什么',NULL),(149,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:15:32','一家专注于制定增强现实、虚拟现实和混合现实的USB-C接口标准的机构ICVR在本周成立了。标志着在A','home/news/test148','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/d78196f4fb01a45b49d96eb0d8f45ae6.jpg','来源：PCHOME',NULL,'ICVR欲推标准化AR/VR头显接口，腾讯、戴尔相继入局',NULL),(150,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:13:11','M6 GT3艺术车本身采用碳纤维结构，但增强现实赋予了M6 GT3生命。从1975年开始，宝马便一直','home/news/test149','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/426f2a8b3fdebcece036c90470be19e3.jpg','来源：',NULL,'中国艺术家曹裴用AR设计宝马BMW M6 GT3艺术车',NULL),(151,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:08:57','最新的Max-Q设计让高端游戏本将能实现更加轻薄的外形尺寸。从6月27日起，Clevo、华硕和微星等','home/news/test150','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/436c361ebb4a68ca1507a20101fb62b4.jpg','来源：',NULL,'英伟达VR规格笔电设计Max-Q轻如Mac Air',NULL),(152,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:05:59','微软在Build 2017大会上展示了惠普和宏碁的Windows混合现实头显。现在，据了解微软在台北','home/news/test151','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/e358c4a4da2f258baa1d592570279443.jpg','来源：',NULL,'微软公布Windows头显设计，各厂商略有不同',NULL),(153,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 09:05:10','造梦科技获蔡文胜隆领资本千万元投资。近日，虚拟现实行业创业团队造梦科技宣布完成千万元Pre-A轮融资','home/news/test152','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/24400d01ff6b0a37a0a7a46d5c285b27.jpg','来源：',NULL,'造梦科技完成千万元Pre-A融资，蔡文胜隆领资本领投',NULL),(154,'作者：',NULL,NULL,NULL,'发布时间：2017-06-01 08:58:10','增强现实和虚拟现实背后的技术一直在发展。许多领域正不断寻求改进，其中就包括在景深和聚焦领域。VR成像','home/news/test153','http://www.vrrb.cn/d/file/kuaixun/2017-06-01/b26eeef7168117ad83398e97fc38fffa.jpg','来源：',NULL,'Deep Optics将于AWE展示首款变焦AR/VR透镜',NULL),(155,'作者：',NULL,NULL,NULL,'发布时间：2017-05-31 16:15:03','2017年5月31日——今天，育碧宣布创新VR游戏《星际迷航：舰桥成员》现已正式登陆Oculus R','home/news/test154','http://www.vrrb.cn/d/file/kuaixun/2017-05-31/2626a385b58e712cf668675869a39c12.jpg','来源：',NULL,' 整备船员开启你的跃迁之旅!《星际迷航：舰桥成员》今日正式发售',NULL),(156,'作者：',NULL,NULL,NULL,'发布时间：2017-05-31 14:24:21','AR 和 MR 的设备形状和大小各异，从消费级别的 Pokemon GO 到高端产品微软 HoloL','home/news/test155','http://www.vrrb.cn/d/file/kuaixun/2017-05-31/24f704d5ce2d98c3c26c4ec7196be35e.jpg','来源：魔多',NULL,' AR纸板眼镜Aryzon：24小时超额完成众筹目标25000欧元',NULL),(157,'作者：',NULL,NULL,NULL,'发布时间：2017-05-31 14:20:18','虚拟现实(VR)涉及沉浸时有两个重要因素。第一个是视觉呈现，如果图片太糟糕了，你不能相信你的眼睛，你','home/news/test156','http://www.vrrb.cn/d/file/kuaixun/2017-05-31/edf91ffd6a850aa403cc06cc78011a8e.png','来源：',NULL,' 谷歌：VR显示效果亟待首要解决',NULL),(158,'作者：',NULL,NULL,NULL,'发布时间：2017-05-31 09:47:28','虽然VR会话可以让你和屈原聊聊天，也但也可能成为谣言制造机器。你发现自己在摄像头的另一边，接受面试，','home/news/test157','http://www.vrrb.cn/d/file/kuaixun/2017-05-31/5c8df156248df7c64d55ca5f39387c28.jpg','来源：黑匣',NULL,'VR会话的含义是什么 —— 语音，记忆？',NULL),(159,'作者：',NULL,NULL,NULL,'发布时间：2017-05-31 09:44:30','Playsnak的种子轮融资额达到了250万美元。虚拟现实游戏公司Playsnak宣布，他们已经完成','home/news/test158','http://www.vrrb.cn/d/file/kuaixun/2017-05-31/d66fb37dc3cadfe19a675ecb9b75cff7.jpg','来源：',NULL,'VR游戏公司Playsnak完成250万美元种子融资',NULL),(160,'作者：',NULL,NULL,NULL,'发布时间：2017-05-31 09:37:16','ICVR标准希望确保不同的设备可以使用同一个标准。一个名为ICVR的组织机构于本周正式成立，专注于制','home/news/test159','http://www.vrrb.cn/d/file/kuaixun/2017-05-31/1653152e207c1d09b3fcb709f5b513bc.jpg','来源：',NULL,'ICVR将用USB-C标准化AR-VR头显接口',NULL);
/*!40000 ALTER TABLE `News` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PCHeadSet`
--

DROP TABLE IF EXISTS `PCHeadSet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PCHeadSet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Remark` text,
  `Brand` text,
  `Salesmodel` text,
  `Productmodel` text,
  `Screentype` text,
  `Monocularresolution` text,
  `Weight` text,
  `Workingtemperature` text,
  `Bluerayirradiance` text,
  `Soundpressurelevel` text,
  `Maximumoutputvoltage` text,
  `Broadbandcharacteristicvoltageofearphone` text,
  `Boundarywarning` text,
  `Radiationdisturbance` text,
  `Electrostaticdischarge` text,
  `Fieldangle` text,
  `Refreshrate` text,
  `Systemdelay` text,
  `Trackingmode` text,
  `Trackingrange` text,
  `Meanchangeofvisualacuity` text,
  `SSQmean` text,
  `CVSmean` text,
  `pic_location` text,
  `Hot` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PCHeadSet`
--

LOCK TABLES `PCHeadSet` WRITE;
/*!40000 ALTER TABLE `PCHeadSet` DISABLE KEYS */;
INSERT INTO `PCHeadSet` VALUES (132,NULL,'HTC','HTC VIVE','VR-VIVE','AMOLED','1200*1080','pp','37.9','1.4','95.21','92.0','55.9','系统虚拟边界','链接到图片','链接到图片','110.0','90.0','18.0','360°','＞3','0.2','67.0','56.0','http://img11.360buyimg.com/n1/s450x450_jfs/t6148/79/447364098/202154/ebb72637/593f9c1fN1d2fc379.jpg',NULL),(133,NULL,'HTC','HTC VIVE','VR-VIVE','AMOLED','1200*1080','pp','37.9','1.4','95.21','92.0','55.9','系统虚拟边界','链接到图片','链接到图片','110.0','90.0','18.0','360°','＞3','0.2','67.0','56.0','http://img11.360buyimg.com/n1/s450x450_jfs/t6148/79/447364098/202154/ebb72637/593f9c1fN1d2fc379.jpg',NULL),(134,NULL,'HTC','HTC VIVE','VR-VIVE','AMOLED','1200*1080','pp','37.9','1.4','95.21','92.0','55.9','系统虚拟边界','链接到图片','链接到图片','110.0','90.0','18.0','360°','＞3','0.2','67.0','56.0','http://img11.360buyimg.com/n1/s450x450_jfs/t6148/79/447364098/202154/ebb72637/593f9c1fN1d2fc379.jpg',NULL),(135,NULL,'HTC','HTC VIVE','VR-VIVE','AMOLED','1200*1080','pp','37.9','1.4','95.21','92.0','55.9','系统虚拟边界','链接到图片','链接到图片','110.0','90.0','18.0','360°','＞3','0.2','67.0','56.0','http://img11.360buyimg.com/n1/s450x450_jfs/t6148/79/447364098/202154/ebb72637/593f9c1fN1d2fc379.jpg',NULL);
/*!40000 ALTER TABLE `PCHeadSet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Profile`
--

DROP TABLE IF EXISTS `Profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Profile`
--

LOCK TABLES `Profile` WRITE;
/*!40000 ALTER TABLE `Profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `Profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Question`
--

DROP TABLE IF EXISTS `Question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Question` text,
  `Questiontype` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Question`
--

LOCK TABLES `Question` WRITE;
/*!40000 ALTER TABLE `Question` DISABLE KEYS */;
INSERT INTO `Question` VALUES (7,'1.你会推荐该网站给别人吗？','single'),(8,'2.你对该网站有何建议？','essay');
/*!40000 ALTER TABLE `Question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Thumbsupdown`
--

DROP TABLE IF EXISTS `Thumbsupdown`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Thumbsupdown` (
  `type` varchar(45) DEFAULT NULL,
  `upvote` int(11) DEFAULT NULL,
  `downvote` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Thumbsupdown`
--

LOCK TABLES `Thumbsupdown` WRITE;
/*!40000 ALTER TABLE `Thumbsupdown` DISABLE KEYS */;
INSERT INTO `Thumbsupdown` VALUES ('130',0,0,1);
/*!40000 ALTER TABLE `Thumbsupdown` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activated` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `banned` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `votedflag` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,1,NULL,0,'1272623349@qq.com','dwerw','afb474cfdcabd182880cbe153d260ea8',NULL,0,NULL,NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VotedUser`
--

DROP TABLE IF EXISTS `VotedUser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `VotedUser` (
  `userid` int(11) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`userid`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VotedUser`
--

LOCK TABLES `VotedUser` WRITE;
/*!40000 ALTER TABLE `VotedUser` DISABLE KEYS */;
/*!40000 ALTER TABLE `VotedUser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-25 22:09:26
