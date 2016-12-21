# VROC
**量变动速率指标**（Volume Rate of Change，**VROC**）通过一段时间内成交量变动的幅度对成交量供需强弱进行探测，进而分析成交量的发展趋势及其将来是否有转势的意愿，属于反趋向的指标之一。该指标与ROC指标类似，区别在于分析的内容是成交量而不是收盘价。


## 计算公式
VROC指标由vroc、vroc_ma、vroc_ema三个子指标构成。

### vroc
**公式：**  
>![equation](http://www.sciweavers.org/tex2img.php?eq=vroc%20%3D%20100%20%2A%20%28vol%20%2F%20vol%28-vroc%5C_delta%29%20-%201%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)

**参数：**  
>vroc_delta：交易量偏移长度，默认值：12。

### vroc_ma
**公式：**  
>![equation](http://www.sciweavers.org/tex2img.php?eq=vroc%5C_ma%20%3D%20ma%28vroc%2C%20vroc%5C_ma%5C_len%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)

**参数：**  
>vroc_ma_len：ma窗口长度，默认值：6。

### vroc_ema
**公式：**  
>![equation](http://www.sciweavers.org/tex2img.php?eq=vroc%5C_ema%20%3D%20ema%28vroc%2C%20vroc%5C_ema%5C_len%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)

**参数：**  
>vroc_ema_len：ema窗口长度，默认值：6。

## 应用场景

## 参考资料
1. [VROC指标](http://wiki.mbalib.com/wiki/VROC指标)
