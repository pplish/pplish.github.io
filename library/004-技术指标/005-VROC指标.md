# VROC
**量变动速率指标**（Volume Rate of Change，**VROC**）通过一段时间内成交量变动的幅度对成交量供需强弱进行探测，进而分析成交量的发展趋势及其将来是否有转势的意愿，属于反趋向的指标之一。该指标与ROC指标类似，区别在于分析的内容是成交量而不是收盘价。


## 计算公式
VROC指标由vroc、vroc_ma、vroc_ema三个子指标构成。

### vroc
**公式：**  
>![equation](http://latex.codecogs.com/gif.latex?vroc%5C%2C%3D%5C%2C100%5C%2C*%5C%2C%28close%5C%2C%2F%5C%2Cclose%28-vroc%5C_delta%29%5C%2C-%5C%2C1%29)

**参数：**  
>vroc_delta：交易量偏移长度，默认值：12。

### vroc_ma
**公式：**  
>![equation](http://latex.codecogs.com/gif.latex?vroc%5C_ma%5C%2C%3D%5C%2Cma%28vroc%2C%5C%2Cvroc%5C_ma%5C_len%29)

**参数：**  
>vroc_ma_len：ma窗口长度，默认值：6。

### vroc_ema
**公式：**  
>![equation](http://latex.codecogs.com/gif.latex?vroc%5C_ema%5C%2C%3D%5C%2Cema%28vroc%2C%5C%2Cvroc%5C_ema%5C_len%29)

**参数：**  
>vroc_ema_len：ema窗口长度，默认值：6。

## 应用场景

## 参考资料
1. [VROC指标](http://wiki.mbalib.com/wiki/VROC指标)
