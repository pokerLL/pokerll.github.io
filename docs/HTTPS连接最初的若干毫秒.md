---
title: HTTPS连接最初的若干毫秒
date: '2022-10-30 02:35:57'
meta: []
permalink: /post/https-connects-the-initial-several-milliseconds-z1s0lxd.html
author:
  name: terwer
  link: https://github.com/pokerll
---


<!-- more -->




---

* [https://www.infoq.cn/article/HTTPS-Connection-Jeff-Moser](https://www.infoq.cn/article/HTTPS-Connection-Jeff-Moser)
* HTTPS连接最初的若干毫秒当你在浏览了一个网站上面的商品之后，点击“继续并结帐”时会发生什么？本文即将对（浏览器）与Amazo
* 2022-10-30 02:35:32

---

当你在浏览了一个网站上面的商品之后，点击“继续并结帐”时会发生什么？本文即将对（浏览器）与 Amazon 建立安全连接的整个过程中最初的若干毫秒进行分析。当你点击继续按钮时一个新的页面将被加载：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/0624e09ef8983348d901fe16c936153d-20221030023556-2kcgkpj.png)​

在短暂的 220 毫秒内，发生了很多有趣的事情，Firefox 修改了地址栏的颜色，并在其右下角放置了一个锁状的图标。在我最喜爱的网络工具[ Wireshark ](http://www.wireshark.org/)以及略微修改的 Firefox 调试版的帮助下，我们可以对正在发生的事情看个究竟。

根据[ RFC 2818 ](http://tools.ietf.org/html/rfc2818)协议的规定，Firefox 明白“https”意味着它应该连接 Amazon.com 的[ 443 端口](http://tools.ietf.org/html/rfc2818#section-2.3)：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/392c40324b7073d16c73b0e0c5830a42-20221030023556-bc2u85w.png)​

大多数人将 HTTPS 和[ SSL ](http://en.wikipedia.org/wiki/Secure_Sockets_Layer)(Secure Sockets Layer) 联系起来，SSL 是[ Netscape 公司在 90 年代中期发明的](http://www.mozilla.org/projects/security/pki/nss/history.html)。随着时间的推移这种说法就渐渐变得不准确了。由于 Netscape 失去了市场份额，它将 SSL 的维护工作移交给因特网工程任务组（[ IETF ](http://en.wikipedia.org/wiki/IETF)）。第一个后 Netscape 版本被重新命名为安全传输层协议（[ TLS ](http://en.wikipedia.org/wiki/Secure_Sockets_Layer)），TLS1.0 是在 1999 年 1 月份发布的。由于 TLS 诞生都 10 年了， 所以真正的“SSL”传输其实是几乎见不到。

#### Client Hello

TLS 将所有的网络传输打包成不同的“记录”类型。我们看到从浏览器出来的第一个字节是一个十六进制（hex）字节 0x16=22，这[说明](http://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml)它是一个“握手”记录：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/019801e2f7ca78ed47964359db8b48ae-20221030023556-jod8arx.png)​

后面的两个字节是0x0301，意味着它的版本是3.1，事实上TLS1.0 就是SSL3.1。

“握手”记录被分解成若干消息。第一个就是“Client Hello”消息（0x01）。这里面有很重要的几点：

#### Server Hello

对应于 Client Hello，Amazon.com 也返回一个“握手”记录，它是两个庞大的数据包 (2,551 字节)。该记录的版本号是 0x0301，也就意味这 Amazon 支持我们使用的 TLS1.0 版本的请求。这个记录分成三个子消息，他们包含着一些有趣的信息。

1. “Server Hello” 消息（2）：  
    ​![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/64f5898204fe1ffcc3f4ea1a0b33f1a4-20221030023556-92efj0d.png)​

* 我们得到服务器返回的四字节的 Unix 时间戳以及 28 字节的随机数，它也将在后面使用（译注：注 Clien Hello 是发了一个随机数，这两个随机数将用于产生最后的对称密钥）。
* 一个 32 字节的会话标识，有了它，随后重连服务器就不需要再执行一个完整的握手过程了。
* 从我们提供的 34 个可选的密码套件中，Amazon 选择的套件“TLS_RSA_WITH_RC4_128_MD5”（0x0004）。也就是说它将使用“[ RSA ](http://en.wikipedia.org/wiki/RSA)” [公钥](http://en.wikipedia.org/wiki/Public-key_cryptography)算法来验证证书以及交换密钥，用[ RC4 ](http://en.wikipedia.org/wiki/RC4)加密算法对数据进行加密，使用[ MD5 ](http://en.wikipedia.org/wiki/MD5)哈 希算法来校验消息内容。后面会对它们做详细介绍。我个人认为 Amazon 选择这个密码套件的原因是出于自私的考虑（译注：这里说“自私”的意思 是，Amazon 出于性能的考虑，降低了安全的强度）。这个套件是这 34 个套件中消耗 CPU 最少的一个，因此 Amazon 选择它就是为了节省一些 CPU 来 处理更多的用户连接。还有一个不大可能的原因是他们要特别地向[ Ron Rivest ](http://en.wikipedia.org/wiki/Ronald_L._Rivest)致敬，这个套件中所用到的三个算法都是他发明的。

2. 证书消息（11）：  
    ​![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/5e8ff9b50ad355d52393b0a47a7d3012-20221030023556-4dgblmm.png)​

这个巨大的消息占据了 2464 个字节，它是一个证书，客户端用它对 Amazon 进行认证。它并不是什么花哨的玩意，通过浏览器就可以看到它的大部分内容：  
 ![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/e50b15984e23401a9e51dd68e253d1a8-20221030023556-i20pbml.png)  
 3. “Server Hello 结束”消息（14）：  
 ![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/41b9ceb50b5dbca47e0d8206b22d17d9-20221030023556-am0xceo.png)​

这是一个 0 字节的消息，它告诉客户端“hello”过程已经完成，也就意味着服务端将不验证客户端的证书。

#### 校验证书

浏览器必须要[确定](http://www.koders.com/c/fid340AB659241B7C717B5B3E0095BBA4245FCE34FD.aspx#L862)它是否要信任Amazon.com，在这里是通过证书判断的。它检查Amazon 的证书并且[检查](http://www.koders.com/c/fid9207CD3EB61F5F08E38858D14997264BEDB5B62C.aspx#L1091)现在的时间是否在证书的有效期之内，该有效期规定的是“不能早于”2008 年8 月26 日且“不能晚于”2009 年8 月27 日。此外，它还要[确保](http://www.koders.com/c/fid9207CD3EB61F5F08E38858D14997264BEDB5B62C.aspx?s=CERT_CheckCertValidTimes#L1211)该证书的公钥已经被授权在进行密钥交换的过程中使用。

为什么我们应该相信这个证书呢？

在证书上附有一份“签名”，这个签名事实上是一个[ big-endian ](http://en.wikipedia.org/wiki/Endianness#Big-endian)（译注：Big-Endian 和 Little-Endian 是一种二进位资料储存或传输的格式，Big-Endian 的最高位字节在最前头，而 Little-Endian 的最高位字节在最后面）格式的长整型数：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/2ebe7d44858d5a8406840f45b4681794-20221030023556-xtdcpro.png)​

任何人都有可能发给我们这些字节，为什么我们要相信这个签名呢？为了回答这个问题，有必要先到这里[ mathemagic land ](http://en.wikipedia.org/wiki/Donald_in_Mathmagic_Land)去速成一些相关知识：

#### 穿插：简短的，不那么可怕的 RSA 向导

[有时候人们想知道](http://stackoverflow.com/questions/575561/do-programmers-have-to-be-good-in-mathematics-closed)数学和编程有何联系。证书就是应用数学的一个非常实际的例子。Amazon 的证书告诉我们应该用RSA 算法来校验其签名。[ RSA ](http://en.wikipedia.org/wiki/RSA)是 MIT 的教授[ Ron Rivest ](http://people.csail.mit.edu/rivest/)，[ Adi Shamir ](http://en.wikipedia.org/wiki/Adi_Shamir)和[ Len Adleman ](http://en.wikipedia.org/wiki/Leonard_Adleman)在 70 年代创造出来的，他们三人创造了一个[巧妙的方法](http://people.csail.mit.edu/rivest/Rsapaper.pdf)将[ 2000 多年来](http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm); [数学](http://en.wikipedia.org/wiki/Euler_totient_function)发展的思想汇合起来形成了一个[漂亮而简单的算法](http://mathworld.wolfram.com/RSAEncryption.html)：

首先[选择](http://en.wikipedia.org/wiki/Primality_test)两个很大的质数“p”和“q”，并对他们求积得到“n=p*q”。接下来，取一个较小的“e”作为[指数](http://en.wikipedia.org/wiki/Exponentiation)，它用作“加密指数”，而对e 的进行特殊的逆反函数计算所得到的“d”作为“解密指数”。然后将“n”和“e”公开出去，而对“d”要保密，对于“p”和“q”你可以把它们扔掉，也可以像“d”一样保密起来。真正重要的要记住“d”和“e”是相互的逆反。

现在，如果你有一些消息，那么你只需要将该消息的字节翻译成一个数“M”，若要对这个消息进行“加密”形成“密文”的话，你就这么计算：

C ≡ Me (mod n)

它意思是先求“M”的“e”次方，然后对它应用模数“n”求余。举个例子，11AM +3 hours ≡ 2 （PM）（mod 12 hours）。接收者知道（解密用的）“d”，而“d”可以对已加密的消息进行反转并还原消息：

Cd ≡ (Me)d ≡ Me*d ≡ M1 ≡ M (mod n)

另一件有意思的事情是拿着“d”的人可以对一个文档进行签名，其做法是文档“M”求“d”次幂然后应用模数“n”求余数“S”：

Md ≡ S (mod n)

这种做法成立的原因是“签名者”将“S”，“M”，“e”以及“n”公开出去，任何人都可以通过这样一个简单的计算来验证“S”是否由“签名者”所签（译 注：因为每个“e”都是某个签名者所独有的，而“e”和“d”是成对出现的，所以签名者用自己的“d”签名，只能拿这个“d”所对应的“e”才能还原消 息，这就到了签名的作用）：

Se ≡ (Md)e ≡ Md*e ≡ Me*d ≡ M1 ≡ M (mod n)

像 RSA 这样的公钥密码算法经常被称之为“非对称”算法，因为加密的密钥（本例子中的“e”）和解密的密钥是不相同的（本例子中是“d”）。对所有的数应用“mod n”的目的是使攻击者不可能使用简单的技术（如过去我们使用的[对数](http://en.wikipedia.org/wiki/Logarithm)）破解它。RSA 的神奇之处是你可以[很快](http://en.wikipedia.org/wiki/Modular_exponentiation)计算 / 加密 C ≡ Me (mod n)，而在不知道“d”的情况下计算 / 解密 Cd ≡ M (mod n) 是非常困难的。如前面所说，“d”来自于对“n”的[因子分解](http://en.wikipedia.org/wiki/Integer_factorization)，而“n”来自于“p”和“q”，求解“d”是一件[复杂](http://en.wikipedia.org/wiki/NP_%28complexity%29)的事情。

#### 签名验证

在现实世界里使用 RSA 时应该谨记的重要的一点是，前文提到的所有数字都应是很大的数，只有这样才能保证，即使用[目前最好的算法](http://en.wikipedia.org/wiki/General_number_field_sieve)也 很难攻破上述算法。到底多大才算很大的数呢？Amazon.com 的证书是由“VeriSign Class 3 Secure Server CA.” 签名的。从这个证书中我们可以看出，VeriSign 所使用的模数“n”是一个 2048 比特长的数字，表示成 10 进制数的长度是 617 位：

> 1890572922 9464742433 9498401781 6528521078 8629616064 3051642608 4317020197 7241822595 6075980039 8371048211 4887504542 4200635317 0422636532 2091550579 0341204005 1169453804 7325464426 0479594122 4167270607 6731441028 3698615569 9947933786 3789783838 5829991518 1037601365 0218058341 7944190228 0926880299 3425241541 4300090021 1055372661 2125414429 9349272172 5333752665 6605550620 5558450610 3253786958 8361121949 2417723618 5199653627 5260212221 0847786057 9342235500 9443918198 9038906234 1550747726 8041766919 1500918876 1961879460 3091993360 6376719337 6644159792 1249204891 7079005527 7689341573 9395596650 5484628101 0469658502 1566385762 0175231997 6268718746 7514321

（如果你要试图从这个“n”中找到“p”和“q”那就祝你好运，假如你能找到他们，那么你能产生像真的一样的 VeriSign 证书了）

VeriSign 的“e”的值是 2^16 + 1 = 65537。当然，他们对相应的“d”保密，也许被放在一个安全的硬件设备上，由视网膜扫描机和武装部队保护着。在签名之前，VeriSign 要通过现实世界的“握手”来验证 Amazon.com 声明的证书内容，包括[审查他们的很多商务文档](http://www.verisign.com/ssl/ssl-information-center/ssl-basics/index.html#a7)。一旦VeriSign 对这些文档满意了，他们使用[ SHA-1 ](http://en.wikipedia.org/wiki/SHA_hash_functions#SHA-0_and_SHA-1)哈希算法对包含所有声明的证书进行计算获得一个哈希值。在 Wireshark 中看到整个证书的样子如下图“signedCertificate”部分所示：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/06172b1995327cd9a69730e0ebf439fb-20221030023556-tuqndqq.png)​

上面的说法（整个证书如同 signedCertificate 所示）说有点用词不当，因为证书的实际含义是签名者将要进行签名的部分，而不是已经包含了签名信息的字节。

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/5bb5c4b5981753b5a7fde6671847b8e9-20221030023556-kstt53z.png)​

实际的签名，也就是“S”，是 Wireshark 包中简单地称为“encrypted”的部分（见上图）。如果我们求“S”的“e”次幂（“e”是 VeriSign 公开的），然后在对该结果取模“n”并得到余数，那么我们得到的“已解密”十六进制签名是：

> 0001FFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFF FFFFFFFF00302130 0906052B0E03021A 05000414C19F8786 871775C60EFE0542 E4C2167C830539DB

[基于PKCS #1 v1.5 标准](http://tools.ietf.org/html/rfc2313#page-9)， 最开始的字节是“00”，它“保证了加密块被转换成整数之后，大小不会超过模数”。第二个字节“01”说明这是一个私钥操作（如，它是一个签名）。后面是 一大堆“FF”，用他们填充这个结果，使之足够大。填充字节以“00”结束，后面跟的是"30 21 30 09 06 05 2B 0E 03 02 1A 05 00 04 14"，[ PKCS #1 v2. ](http://tools.ietf.org/html/rfc3447#page-43)就是这样来指定[ SHA-1 ](http://en.wikipedia.org/wiki/SHA_hash_functions#SHA-0_and_SHA-1)哈希算法。最后的 20 个字节是对“signedCertificate”部分的 SHA-1 哈希摘要。

因为解密的值[有着正确的格式](http://www.matasano.com/log/558/public-key-signature-forgery-collected/)并且最后的字节和我们独立计算得到的哈希值相同，我们可以认为这就是由拥有“VeriSign Class 3 Secure Server CA”私钥的人所签名的，而我们隐含地信任只有VeriSign 知道这个私钥“d”。

但我们为什么要信任它呢？因为在信任链上已经没有更高级别了。

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/46a096fac600b7d5404701e61425168a-20221030023556-rwwfny1.png)​

最上层的“VeriSign Class 3 Public Primary Certification Authority”是自签名的。这个证书自从网络安全服务（Network Security Services[ NSS ](http://www.mozilla.org/projects/security/pki/nss/)）库中[ certdata.txt 的 1.4 版本](http://bonsai.mozilla.org/cvslog.cgi?file=mozilla/security/nss/lib/ckfw/builtins/certdata.txt&rev=NSS_3_12_2_WITH_CKBI_1_73_RTM&mark=1.51)之后就已经被嵌入 Mozilla 的产品中作为一个隐含的受信证书。它是由 NetScape 的 Robert Relyea 在 2000 年 9 月 6 日登记进去的，当时他还留下以下评注：

> "用这个框架来收集其他网络安全服务，它包括这一个“实时的”certdata.txt ，里面存放了那些我们已经获得许可权可以推向开源的证书（当我们从所有者那里获得许可权之后，会有更多的证书加入这个文档中）”

由于该证书的有效期范围是从 1996 年 1 月 28 日到 2028 年 8 月 1 日，所以这个决定是意义深远的。

Ken Thompson 在他的“[ Reflection on Trusting Trust ](http://www.ece.cmu.edu/~ganger/712.fall02/papers/p761-thompson.pdf)”中解释的非常好，你最终不得不隐式地信任某人。在这个问题上别无选择。本例中我们隐含地信任 Robert Relyea 做了个好的选择，我们也希望[ Mozilla 的内建证书策略](http://www.mozilla.org/projects/security/certs/policy/)对其他的内建证书也是合理的。

这里要记住的一点是所有这些证书和签名都简单地用来形成一个信任链。在公共网络中，在你还未上任何网站之前，Firefox 就已经隐含地信任了 VeriSign 的根证书。在一个公司内，你可以创建你自己的根证书 CA，并将它安装在每个人的电脑上。

或者，你还可以付钱给 VeriSign 这样的公司并把所有的证书信任链的工作交给它。证书用来通过可信的第三方（这里是 VeriSign）建立信任 关系。如果你可以安全地和别人共享密钥，比如“在某人耳边轻声告诉他一长串密码”，那么你就可以使用预共享密钥（PSK，Pre-shared Kay）认证来建立信任关系。TLS 对此也有扩展，比如[ TLS-PSK ](http://tools.ietf.org/html/rfc4279)，以及我本人所喜欢的[ TLS 的安全远程密码扩展](http://tools.ietf.org/html/rfc5054)。然而，这些扩展没能被广泛地使用和支持，所以他们通常是不切实际的。此外，这些方法增加了负担，它们要求必须通过安全的方式交换密钥，而这比通过 TLS 来建立信任连接的负担更重（要不然我们何不都这么用呢？）。

我们要做的最后的检查是验证证书上的主机名是否是我们期待访问的。 [ Nelson Bolyard ](http://www.linkedin.com/in/nelsonbolyard) 在 [ SSL_AuthCertificate 函数](http://www.koders.com/c/fid1C807D78F4E4CA73466FEEAA78EA9F0B2D618199.aspx#L260)中的注释是这样解释的：

> ```
> /* 证书是没问题的。这是 SSL 连接的客户端。* 现在要检查证书中的名字和所期待的主机名是否一致。* 注意：这是我们防范中间人（Man-In-The-Middle）攻击的唯一途经 */
> ```

这个检查防范了[中间人](http://en.wikipedia.org/wiki/Man-in-the-middle_attack)攻击，因为我们隐含地相信拥有证书的人不会干坏事，例如，只有它真是Amazon.com，它才会对一个证书签名说它是Amazon.com。如果一个攻击者能够通过类似 [ DNS 缓存破坏](http://en.wikipedia.org/wiki/DNS_cache_poisoning)的技术修改我们的 DNS 服务器，你可能被蒙蔽了，以为自己正访问正确的网站（如 Amazon.com），因为你的浏览器的地址栏看起来就是这个网站。这最后的检查就隐含地信任证书的授权机构可以防止坏事的发生。

#### Pre-Master Secret

现在我们已经验证了 Amazon.com 的那些声明，并且知道其公开的加密指数“e”和模数“n”。任何在网络上侦听的人当然也知道这两个数（这点 很明显，因为我们是通过 Wireshark 获取它们的，别人也可以）。现在我们要创建一个攻击者或偷听者不能辨别的随机密钥，这件事做起来不像听起来那么 简单。在 1996 年，研究者发现[ Netscape Navigator ](http://en.wikipedia.org/wiki/Netscape_Navigator)1.1 仅使用三个数据源来作为他们的伪随机数生产器的种子（[ PRNG ](http://en.wikipedia.org/wiki/Pseudorandom_number_generator)），它们是：当前时间，进程号和父进程号。研究显示，这些“随机”源并不那么随机，而且相对比较容易被猜出来。

由于其他的所有东西都是从这三个“随机”源产的，在 1996 年当时的机器上可能只需 25 秒中就可以“攻破”SSL“安全”。如果你还不相信寻找随机数是件困难的事，只要问问[ Debian OpenSSL 维护者](http://www.schneier.com/blog/archives/2008/05/random_number_b.html)就知道了。如果随机数搞乱了，那么基于它之上的所有安全都是可疑的。

在 Windows 上，用于加解密的随机数是通过调用[ CryptGenRandom 函数](http://msdn.microsoft.com/en-us/library/aa379942%28VS.85%29.aspx)对[来自125 个源的抽样数据](http://blogs.msdn.com/michael_howard/archive/2005/01/14/353379.aspx#353493)求hash 值产生的。Firefox 将该函数产生的随机数和[它自己的函数](http://www.koders.com/c/fidBC778BD3666AA64522D1FD4F4EC3331E44B4D204.aspx?s=RNG_GetNoise)产生的比特码一起作为[伪随机数生成器的种子](http://www.koders.com/c/fidD184CA9064625C0ADF48025F3FA0588FCD664057.aspx)。

虽然这个48 字节的“pre-master secret”随机数并不直接使用，但是保证其私密性是非常重要的，因为很多东西都是由它而来的。毫无疑问，Firefox 让我们很难看到这个数。我不得不编译了一个调试版本并设置[ SSLDEBUGFILE ](http://www.koders.com/c/fidCFCD763A9E0B2BEF3FB9D4D6C17B4094CBF21548.aspx#L2092)和[ SSLTRACE ](http://www.koders.com/c/fidCFCD763A9E0B2BEF3FB9D4D6C17B4094CBF21548.aspx#L2101)两个环境变量才能看到它。

在本次会话中，SSLDEBUGFILE 中显示的这个 pre-master secret 是这样的：

> 4456: SSL[131491792]: Pre-Master Secret [Len: 48]  
> 03 01 bb 7b 08 98 a7 49 de e8 e9 b8 91 52 ec 81 …{…I…R…  
> 4c c2 39 7b f6 ba 1c 0a b1 95 50 29 be 02 ad e6 L.9{…P)…  
> ad 6e 11 3f 20 c4 66 f0 64 22 57 7e e1 06 7a 3b .n.? .f.d"W~…z;

需要指出的是这并非全是随机数， [按约定](http://tools.ietf.org/html/rfc2246#page-44)，最前面的两个字节是 TLS 版本（03 01）。

#### 密钥交换

现在要把这个密钥传给 Amazon.com。由于 Amazon 选择的是“TLS_RSA_WITH_RC4_128_MD5”，我们将使用 RSA 算 法来做这件事。输入消息可以是正好 48 字节的 pre-master secret，但是公钥密码学标准（PKCS）#1，RFC1.5 要求用一些随机数来填充这个数使其长度等于模数的长度（1024 比特，或者 128 字节）。这样做就使得攻击者更难找出我们的 pre-master secret 了，另外，万一有人做傻事，比如重用相同的密钥，它还为我们提供最后一层保护。通过这样一填充，即使我们重用密钥，偷听者在网络上两次看到的 数也是不一样的。

又，因为 Firefox 让我们很难看到这些随机数，我不得不在[填充函数](http://www.koders.com/c/fid1EB31A222A560045DBF9EC54457A1E0339825D58.aspx#L190)中加入一些调试语句才能看到发生的事情：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/127782555f8497173d2cb179a3b1c56d-20221030023556-nhgo318.png)​

在这次会话中，填充后的消息如下所示：

> 00 02 12 A3 EA B1 65 D6 81 6C 13 14 13 62 10 53 23 B3 96 85 FF 24 FA CC 46 11 21 24 A4 81 EA 30 63 95 D4 DC BF 9C CC D0 2E DD 5A A6 41 6A 4E 82 65 7D 70 7D 50 09 17 CD 10 55 97 B9 C1 A1 84 F2 A9 AB EA 7D F4 CC 54 E4 64 6E 3A E5 91 A0 06 00 03 01 BB 7B 08 98 A7 49 DE E8 E9 B8 91 52 EC 81 4C C2 39 7B F6 BA 1C 0A B1 95 50 29 BE 02 AD E6 AD 6E 11 3F 20 C4 66 F0 64 22 57 7E E1 06 7A 3B

Firefox 拿这个数进行计算“C ≡ Me (mod n)”，得到的数是我们在[客户密钥交换记录](http://tools.ietf.org/html/rfc2246#page-43)中所看到的

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/9a5f53bfaef47b05856f575c103aaee4-20221030023556-zn3evm6.png)​

最后Firefox 发出最后一条没加密的消息，一个“[ Change Cipher Spec ](http://tools.ietf.org/html/rfc2246#page-24)”记录：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/72ded826e3d2504ad4402b8469b3b706-20221030023556-ydripu8.png)​

Firefox 使用这种方式通知 Amazon，它将使用前面协商好的密钥来加密下一条消息。

#### 生成 Master Secret

如果前面所有事情都正确完成，则双方（且只有这双方，客户端和服务端）现已知道这个 48 字节的 pre-master secret。从 Amazon 的角度来看这里有一个很小的信任问题：pre- master secret 只包含客户端生成的比特位，他们没有考虑到服务端或者我们前面所提到的那些随机数（译注：Client hello 和 Server hello 过程中产生的随机数）。我们将通过计算“master secret”来解决这个问题。[根据规约](http://tools.ietf.org/html/rfc2246#page-47)，应该这么计算：

master_secret = PRF(pre_master_secret, “master secret”, ClientHello.random + ServerHello.random)

“pre_master_secret”是客户端之前发送的；“master secret”用的是一个字符串的[ ASCII ](http://en.wikipedia.org/wiki/ASCII)值（例如：“6d 61 73 74 65 72 …”）。然后我们将本文最开始看到的 ClientHello 和 ServerHello 发送的随机数拼接起来。

PRF 是一个“伪随机数函数”，这个函数很聪明，[在规约中也有定义](http://tools.ietf.org/html/rfc2246#page-11)。它使用基于哈希的消息验证码（[ HMAC ](http://en.wikipedia.org/wiki/HMAC)）的[ MD5 ](http://en.wikipedia.org/wiki/MD5)和[ SHA-1 ](http://en.wikipedia.org/wiki/SHA_hash_functions#SHA-0_and_SHA-1)两种哈希函数将密钥，ASCII 字符以及我们给的种子结合起来。对每个哈希函数发送一半的输入。说它聪明的原因是即使面对[ MD5 ](http://www.win.tue.nl/hashclash/rogue-ca/)​[和SHA-1 的弱点](http://www.schneier.com/blog/archives/2005/02/sha1_broken.html)，它的防攻击能力还很强。这个过程可以自我反馈并不停地循环，而且我们要多少字节就能生成多少。

依照这个过程，我们获得以下48 字节的“master secret”：

4C AF 20 30 8F 4C AA C5 66 4A 02 90 F2 AC 10 00 39 DB 1D E0 1F CB E0 E0 9D D7 E6 BE 62 A4 6C 18 06 AD 79 21 DB 82 1D 53 84 DB 35 A7 1F C1 01 19

#### 多个密钥的生成

现在双方都有了“master secrets”，规约[描述了](http://tools.ietf.org/html/rfc2246#page-21)我们如何生成会话所需的所有的密钥，我们需要使用 PRF 函数来创建一个“key block”，然后从这个块中提取所需的密钥：

> key_block = PRF(SecurityParameters.master_secret, “key expansion”, SecurityParameters.server_random + SecurityParameters.client_random);

“key_block”被用来提取以下密钥：

> client_write_MAC_secret[SecurityParameters.hash_size]  
> server_write_MAC_secret[SecurityParameters.hash_size]  
> client_write_key[SecurityParameters.key_material_length]  
> server_write_key[SecurityParameters.key_material_length]  
> client_write_IV[SecurityParameters.IV_size]  
> server_write_IV[SecurityParameters.IV_size]

由于这里使用的是[序列密码](http://en.wikipedia.org/wiki/Stream_cipher)而非[分组密码（如高级加密标准](http://en.wikipedia.org/wiki/Block_cipher)​[ AES ](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard)），所以不需要初始向量（Initialization Vectors [ IV ](http://en.wikipedia.org/wiki/Initialization_vector)），而只是双方各需要一个 16 字节（128 比特）的消息验证码（Message Authentication Code [ MAC ](http://en.wikipedia.org/wiki/Message_authentication_code)），这是因为指定的 MD5 哈希摘要大小是 16 字节。另外，RC4 加密算法使用的 16 字节的密码也是双方都需要的。最后，我们需要 key block 中的 2*16 + 2*16 = 64 个字节：

运行 PRF，我们得到：

> client_write_MAC_secret = 80 B8 F6 09 51 74 EA DB 29 28 EF 6F 9A B8 81 B0  
> server_write_MAC_secret = 67 7C 96 7B 70 C5 BC 62 9D 1D 1F 4A A6 79 81 61  
> client_write_key = 32 13 2C DD 1B 39 36 40 84 4A DE E5 6C 52 46 72  
> server_write_key = 58 36 C4 0D 8C 7C 74 DA 6D B7 34 0A 91 B6 8F A7

#### 准备加密！

客户端发出的最后一条“握手”消息是“[ Finished message ](http://tools.ietf.org/html/rfc2246#page-46)”。 这个消息非常巧妙，它不仅能证明没有人篡改了握手过程，还能证明我们确实知道密钥。客户端将所有的“握手”消息放入一个 “handshake_messages”缓存区，然后使用伪随机函数，“client finished”字符串以及 MD5 和 SHA-1 哈希运算后“handshake_messages”计算出 12 字节的“verify_data”：

> verify_data = PRF(master_secret, “client finished”, MD5(handshake_messages) + SHA-1(handshake_messages)) [12]

我们在这个结果的前面加上一个记录头字节“0x14”指明“完成”和长度字节“00 00 0c”指明我们将发送 12 字节的“verify data”。然后，像所有接下来的加密消息一样， 我们要确保解密后的内容没有被篡改。因为选择使用的密码套件是 TLS_RSA_WITH_RC4_128_MD5，所以我们将使用 MD5 哈希函数。

有些人一听到 MD5 就感到恐慌，因为它存在一些弱点，我原先也很不提倡使用它。然而，TLS 很聪明，他并不直接使用 MD5，而使用它的[ HMAC ](http://en.wikipedia.org/wiki/HMAC)版本。TLS 是这样使用 MDB 进行计算的：

> HMAC_MD5(Key, m) = MD5((Key ⊕ opad) ++ MD5((Key ⊕ ipad) ++ m)

（⊕指的是[异或（XOR）](http://en.wikipedia.org/wiki/Exclusive_or)，++ 指的是拼接，“opad”是一串“5c 5c … 5c”字节，“ipad”是另一串“36 36 … 36”）。

这里我们对以下内容进行计算：

> HMAC_MD5(client_write_MAC_secret, seq_num + TLSCompressed.type + TLSCompressed.version + TLSCompressed.length + TLSCompressed.fragment));

也许你已经看到，我们加入了一个序列号（“seq_num”）和明文消息（这里被称为 TLSCompressed）的一些其他属性。序列号可以迷惑 攻击者，他可能会在中途把一个先前加密的消息插入。如果他这么干，则序列号一定和我们所期待的不一样，这就保护了我们不受攻击者们扔消息的攻击。

剩下就是加密消息了。

#### RC4 加密算法

从前文已知双方协商的密码套件是 TLS_RSA_WITH_RC4_128_MD5。这就意味着我们将使用[ Ron’s Code ](http://people.csail.mit.edu/rivest/faq.html) #4 ([ RC4 ](http://en.wikipedia.org/wiki/RC4)) 对传输信息进行加密。[ Ron Rivest ](http://en.wikipedia.org/wiki/Ron_Rivest)开发了基于 256 字节的密钥生成随机数的 RC4 加密算法。这个算法非常简单，以至于几分钟内你就可以记住它。

RC4 从创建一个 256 字节的数组“S”开始，并从 0 到 255 对其进行填充。然后从“S”的第 0 位开始循环，将“S”和密钥中的字节进行混合，这样做是为了创建用于产生“随机”数的状态机。为了生成随机数，我们将“S”数组进行洗牌（译注：参考[百度百科 RC4 ](http://baike.baidu.com/view/904005.htm)）

图形化描述是这样的：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/ef24e1e4411cef1d985512903ebf50de-20221030023556-f3op008.png)​

对一个字节进行加密，我们对伪随机字节和要加密的字节进行[异或](http://en.wikipedia.org/wiki/Exclusive_or)运算。记住将一个比特和 1 进行异或的话是使这个比特反转（译注：0<sup>1=1, 1</sup>1=0）。因为前面产生的是随机数，所以大约会有一半的比特码会被反转，这种随机的比特反转在加密数据时非常有效。你已经看到，这并不复杂，而且运行起来很快。我想这也许就是 Amazon 用它的原因吧。

回想一下，我们有“client_write_key”和“server_write_key”。这意味这我们需要创建两个 RC4 实例，一个用于加密浏览器发送的消息，另一个用于解密服务器返回的消息。.

“client_write”最前面的随机字节是“E 20 7A 4D FE FB 78 A7 33 …”，如果我们用这些字节和未加密的消息头（经查证，该消息的字节为“4 00 00 0C 98 F0 AE CB C4 …”）进行异或运算的话，我们将得到在 Wireshark 中看到的已加密的部分：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/180776d0d19f64a86abaa87373b1bd9f-20221030023556-zqsqix9.png)​

服务器做的事情几乎一样。它发出一条“Change Cipher Spec”消息，然后发出的“Finished Message”消息，这条消息包括所有的“握手”消息，以及解密的客户端发过来的“Finished Message”，这也向客户端表明了服务端可以正确解密客户端发过来的消息。

#### 欢迎回到应用层！

现在，220 毫秒过去了，我们最终为应用层准备好了，现在我们可以发送通过 TLS 层使用 RC4 的写实例加密过的普通 HTTP 消息，也可以解密服务端 RC4 写实例发过来的消息。此外，TLS 层还会通过计算消息内容的 HMAC_MD5 哈希值来校验每一条消息是否被篡改。

至此，“握手”过程已经完成，现在 TLS 记录的 content type 变成 23（0x17）。加密的数据流以“17 03 01”开始，这几个字节表明了记录类型和 TLS 版本，后面是包含了 HMAC 哈希的加密数据。

对如下明文的加密：

> GET /gp/cart/view.html/ref=pd_luc_mri HTTP/1.1  
> Host: www.amazon.com  
> User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.0.10) Gecko/2009060911 Minefield/3.0.10 (.NET CLR 3.5.30729)  
> Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8  
> Accept-Language: en-us,en;q=0.5  
> Accept-Encoding: gzip,deflate  
> Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7  
> Keep-Alive: 300  
> Connection: keep-alive  
> …

将得到下面这些字节：

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/9fdbeedd8b140628321fce12396d33a1-20221030023556-5ta2q40.png)​

剩下的唯一有趣的事是每个消息的序列号是依次递增的，现在是 1（下一个消息将会是 2，以此类推）。

服务端做的事情是一样的，不过它使用“server_write_key”这个密钥。我们看到它的响应消息，包括泄露秘密的应用数据头。

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/47dbf49872ea4704c6ed22f35bd97f11-20221030023556-wmevdzn.png)​

这个消息解密后得到：

> HTTP/1.1 200 OK  
> Date: Wed, 10 Jun 2009 01:09:30 GMT  
> Server: Server  
> …  
> Cneonction: close  
> Transfer-Encoding: chunked

这是一个普通的 HTTP 返回消息，它包含一个非描述性“Server: Server”HTTP 头和一个来自 Amazon 负载均衡器的“[ Cneonction: close ](http://www.nextthing.org/archives/2005/08/07/fun-with-http-%0A%0Aheaders)”头，显然拼写有误。

TLS 就在应用层之下。HTTP 服务器上的软件可以就像发送非加密数据一样工作，而唯一的区别是它们（指软件）将数据写到一个库，由这个库统一做加密。[ OpenSSL ](http://www.openssl.org/)是 TLS 的一个非常流行的开源库。

在双方发送和接受加密数据的过程中，链接一直保持活动状态，直到任何一端发出一条“[ closure alert ](http://tools.ietf.org/html/rfc2246#page-25)”消息并接着关闭连接。如果在断开后的很短时间内重连，则可以重用前面协商好的密钥（前提是服务器还缓存着他们），这样就不需要公钥操作，否则，就需要重新执行一次完全的握手过程。

应用数据消息可以是任何信息，这点很重要。“HTTPS”特别的唯一原因是因为 Web 太流行了，还有其他基于 TCP/IP 的协议运行在 TLS 之上。例如，TLS 也用于[ FTPS ](http://tools.ietf.org/html/rfc4217)和[ SMTP 的安全扩展](http://tools.ietf.org/html/rfc3207)。使用 TLS 肯定比你自己发明解决方案要好，另外，使用经得起仔细的[安全分析](http://tools.ietf.org/html/rfc5246#appendix-F)的协议，你能从中获益。

#### ……顺利完工！

[ TLS RFC ](http://tools.ietf.org/html/rfc5246)中还包含很多我们这里遗漏的 内容，它是一份可读性非常好的规范。我们覆盖的内容是对 Firefox 和 Amazon 之间的 220 毫秒的舞蹈进行观察所看到的一条路径。这个过程很大程度 上受 Amazon 在 ServerHello 消息中所选择的 TLS_RSA_WITH_RC4_128_MD5 密码套件的影响，这是一个合理的选择，因为它 对速度的倾向比对安全的倾向更多一点。

如我们所看到的，如果有人能将 Amazon 的模数“n”分解成“p”,“q”，那么他就可以有效解密所有的“安全”流通，直到 Amazon 换掉它的证书。所以 Amazon 通过每年替换一次证书的方式来平衡这方面的担心。

![](https://raw.githubusercontent.com/pokerll/pokerll.github.io/main/images/19dccd21540e6900dc3a6ca10f9cebf7-20221030023556-sg1596i.png)​

其中有一个密码套件是“TLS_DHE_RSA_WITH_AES_256_CBC_SHA”，它使用[ Diffie-Hellman 密钥交换算法](http://en.wikipedia.org/wiki/Diffie-Hellman_key_exchange)，这个算法具有良好的 “[正向安全](http://en.wikipedia.org/wiki/Perfect_forward_secrecy)”的特点。也就意味这如果某人破解了密码交换的数学原理，对于解密下一个会话也没有什么益处。这个算法的缺点是需要计算更大的数字，所以对于一个很忙的服务器来说计算成本更大。“高级加密标准”（[ AES ](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard)）出现在我们提供的很多密码套件中。它与 RC4 的不同在于它一次加密 16 字节的“数据块”而不是一个字节，由于它的密钥可以大到 256 比特，所以很多人认为它比 RC4 要更安全。

仅需 220 毫秒中，网络中两个端点连接到一起，提供了足够资料来信任对方，建立加密算法，并开始进行加密的信息传输。

我写了一个[程序](http://github.com/moserware/TLS-1.0-Analyzer/tree/master)对文章中所提及的握手协议走了一遍。

#### 关于作者

Jeff 是一个软件开发工程师，他在[ http://www.moserware.com/ ](http://www.moserware.com/)上有一个自己的博客。

**注意：** 这篇文章最初发表在[ Moserware ](http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html)上面，也就是 Jeff Moser 的博客里。

**查看英文原文：**​[ The First Few Milliseconds of an HTTPS Connection ](http://www.infoq.com/articles/HTTPS-Connection-Jeff-Moser)。

---

感谢[黄璜](http://www.infoq.com/cn/bycategory.action?authorName=%E9%BB%84%E7%92%9C)对本文的审校。

给InfoQ 中文站投稿或者参与内容翻译工作，请邮件至[ editors@cn.infoq.com ](mailto:editors@cn.infoq.com)。也欢迎大家加入到[ InfoQ 中文站用户讨论组](http://groups.google.com/group/InfoQChina)中与我们的编辑和其他读者朋友交流。
