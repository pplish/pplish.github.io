# MACD
**指数平滑异同移动平均线**（英语：Moving Average Convergence / Divergence, **MACD**）是股票交易中一种常见的技术分析工具，由Gerald Appel于1970年代提出，用于研判股票价格变化的强度、方向、能量，以及趋势周期，以便把握股票买进和卖出的时机。MACD指标由一组曲线与图形组成，通过收盘时股价或指数的快变及慢变的指数移动平均值（EMA）之间的差计算出来。“快”指更短时段的EMA，而“慢”则指较长时段的EMA，最常用的是12及26日EMA。  

>1. [计算公式](#计算公式 "计算公式")
	1. [一、DIF](#一、DIF "一、DIF")
	1. [二、DEA](#二、DEA "二、DEA")
	1. [三、MACD](#三、MACD "三、MACD")
1. [应用场景](#应用场景 "应用场景")
	1. [一、MACD金叉](#一、MACD金叉 "一、MACD金叉")
	1. [二、MACD死叉](#二、MACD死叉 "二、MACD死叉")
	1. [三、MACD底背离](#三、MACD底背离 "三、MACD底背离")
	1. [四、MACD顶背离](#四、MACD顶背离 "四、MACD顶背离")
1. [参考资料](#参考资料 "参考资料")

## 计算公式
MACD指标由DIF、DEA、MACD三个子指标构成。  
### 一、DIF  
**公式：**  
>![equation](http://www.sciweavers.org/tex2img.php?eq=DIF%3DEMA%28close%2C%20N1%29%20-%20EMA%28close%2C%20N2%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)  
12
**参数：**  
>N1、N2。

### 二、DEA
**公式：**  
>![equation](http://www.sciweavers.org/tex2img.php?eq=DIF%3DEMA%28DEA%2C%20M%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)    

**参数：**  
>M。

### 三、MACD
**公式：**  
>![equation](http://www.sciweavers.org/tex2img.php?eq=MACD%3D2%20%5Ctimes%20%28DEA-DIF%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)    

**参数：**  
>无。

## 应用场景
### 一、MACD金叉
**说明：**  
差离值由下而上穿过讯号线代表市场气氛利好股价。  

**图形：**  
![](assets/004/101-e9bb2548.png)

### 二、MACD死叉
**说明：**  
差离值由上而下穿过讯号线代表市场气氛利空股价。  

**图形：**  
![](assets/004/101-5bf30b97.png)

### 三、MACD底背离
**说明：**  
当股价创新低，但MACD并没有相应创新低（牛市背离），视为利好（利多）讯息，股价跌势或将完结。
### 四、MACD顶背离
**说明：**  
若股价创新高，但MACD并没有相应创新高（熊市背离），视为利淡（利空）讯息。

## 参考资料
1. [MACD技术指标](http://baike.baidu.com/link?url=X-wsUYuQytr188q585HJyva0KiJGeTFuqvtNYEBlSRszXalumuAr8B6wosMjENwYGwf7kqera3gHdr36QPVgDfErxKsWOg-nFLIKUJ9vF4Fszv9tyLSOoAz610Gcgtf_gfJ2u3zVqVWSCWA4QPgF1q)
