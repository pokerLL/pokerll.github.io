(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{508:function(a,s,t){"use strict";t.r(s);var r=t(14),n=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[a._v("#")]),a._v(" Java")]),a._v(" "),s("h2",{attrs:{id:"思路1-jar包-容器java环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路1-jar包-容器java环境"}},[a._v("#")]),a._v(" 思路1:jar包+容器java环境")]),a._v(" "),s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("blockquote",[s("p",[a._v("需要在运行环境下安装java，如果涉及到的服务比较多需要一个个安装环境还是比较麻烦的。")])]),a._v(" "),s("p",[a._v("简单来说就是把java代码打包成jar文件，sh运行java命令并传参，最后 python调用 sh 命令。")]),a._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),s("p",[a._v("java主函数：")]),a._v(" "),s("p",[a._v("​"),s("img",{attrs:{src:"https://assets.b3logfile.com/siyuan/xxxxxx/assets/image-20230912104829-2gw4qas.png",alt:"image"}}),a._v("​")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("生成 Class文件")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("javac PhoneDecode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java\n")])])])]),a._v(" "),s("li",[s("p",[a._v("打包成jar文件并添加清单（其中--main-class后跟类名）")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("create "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("verbose "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("file")]),a._v(" PhoneDecode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("main"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PhoneDecode")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("python通过 subprocess.getoutput(java -jar PhoneDecode.jar $1$2) 获取解密手机号")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("subprocess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("getoutput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"java -jar PhoneDecode.jar $1 $2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])]),a._v(" "),s("p",[a._v("‍")]),a._v(" "),s("h2",{attrs:{id:"思路2-打成二进制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路2-打成二进制"}},[a._v("#")]),a._v(" 思路2:打成二进制")]),a._v(" "),s("blockquote",[s("p",[a._v("这个思路适用于大部分语言。")])]),a._v(" "),s("blockquote",[s("p",[a._v("java打二进制包可能会出现各种各样的依赖问题。尝试过"),s("code",[a._v("native-image")]),a._v("​、"),s("code",[a._v("install4j")]),a._v("​都有问题，终放弃。")])]),a._v(" "),s("p",[a._v("‍")]),a._v(" "),s("p",[a._v("‍")]),a._v(" "),s("h2",{attrs:{id:"思路3-jar包-便携式java环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路3-jar包-便携式java环境"}},[a._v("#")]),a._v(" 思路3:jar包+便携式java环境")]),a._v(" "),s("h3",{attrs:{id:"概述-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述-2"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("p",[a._v("参考Linux配置Java环境，仔细研究一下linux下java环境的安装过程，可以发现就是解压jdk并把jdk下的一些路径加到环境变量中去以保证java的正常运行，对于jdk文件夹我们可以下载下来并挂载进容器，关于环境变量的设置则可以在shell脚本中来实现。")]),a._v(" "),s("p",[a._v("这样做就不用重新打镜像（尤其是需要修改的镜像比较多的时候），并且我们可以把要运行的jar包和jdk环境放在一个目录下，使用一个shell脚本作为调用的入口，整体体验下来和打成二进制包没有太大差异。")]),a._v(" "),s("p",[a._v("‍")]),a._v(" "),s("h3",{attrs:{id:"示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),s("blockquote",[s("p",[a._v("假设当前目录是"),s("code",[a._v("/data/test")]),a._v("​")]),a._v(" "),s("p",[a._v("最终目录结构：")]),a._v(" "),s("p",[a._v("."),s("br"),a._v("\n├── java"),s("br"),a._v("\n│   ├── _init.sh"),s("br"),a._v("\n│   └── jdk1.8.0_221"),s("br"),a._v("\n│       ├── bin"),s("br"),a._v("\n│       ├── COPYRIGHT"),s("br"),a._v("\n│       ├── include"),s("br"),a._v("\n│       ├── javafx-src.zip"),s("br"),a._v("\n│       ├── jre"),s("br"),a._v("\n│       ├── lib"),s("br"),a._v("\n│       ├── LICENSE"),s("br"),a._v("\n│       ├── man"),s("br"),a._v("\n│       ├── README.html"),s("br"),a._v("\n│       ├── release"),s("br"),a._v("\n│       ├── src.zip"),s("br"),a._v("\n│       ├── THIRDPARTYLICENSEREADME-JAVAFX.txt"),s("br"),a._v("\n│       └── THIRDPARTYLICENSEREADME.txt"),s("br"),a._v("\n├── pub.sh"),s("br"),a._v("\n└── sofa.jar")])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("将java程序打成jar包")])]),a._v(" "),s("li",[s("p",[a._v("下载需要的"),s("code",[a._v("jdk_xxxxx.tar.gz")]),a._v("​")])]),a._v(" "),s("li",[s("p",[a._v("创建"),s("code",[a._v("java")]),a._v("​​文件夹并将"),s("code",[a._v("jdk")]),a._v("​​解压到"),s("code",[a._v("java")]),a._v("​文件​​夹​下")])]),a._v(" "),s("li",[s("p",[a._v("在"),s("code",[a._v("java")]),a._v("​文件夹下创建"),s("code",[a._v("_init.sh")]),a._v("​文件并写入")]),a._v(" "),s("ul",[s("li",[a._v("自动找到脚本所在目录下的jdk并根据这个jdk设置需要的环境变量")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 获取脚本所在的目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_SCRIPT_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"$( cd "'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dirname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("BASH_SOURCE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("}")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\n\n# 查找脚本所在目录下以 "')]),a._v("jdk"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" 开头的目录\njdkp="')]),a._v('"\n'),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[a._v("dir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_SCRIPT_DIR")]),a._v('"')]),a._v("/*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$jdkp")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"JDK found, exiting loop"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("break")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$dir")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("basename")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$dir")]),a._v('"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" *jdk* "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("jdkp")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$dir")]),a._v('"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("break")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-z")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$jdkp")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Error: not found dir for JDK"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"JDK dir: '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$jdkp")]),a._v('"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$jdkp")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v('/jre/lib"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(":"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v('/jre/bin"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" CLASSPATH JAVA_HOME\n")])])])]),a._v(" "),s("li",[s("p",[a._v("将jar包上传到test目录下")])]),a._v(" "),s("li",[s("p",[a._v("创建入口shell脚本")]),a._v(" "),s("ul",[s("li",[a._v("在脚本的开头"),s("code",[a._v("source")]),a._v("​java目录下的"),s("code",[a._v("_init.sh")]),a._v("​脚本即可正常使用"),s("code",[a._v("java")]),a._v("​命令")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("rlp")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"$( cd "'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dirname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("BASH_SOURCE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("}")]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\n. "')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rlp")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/java/_init.sh\n\nwhile getopts "')]),a._v("t"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" opt; do\n  case '),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$opt")]),a._v(' in\n    t)\n      # 执行测试，使用预定义的数据\n      java -jar "')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rlp")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/sofa.jar pub 192.168.0.15 9603 com.alipay.test.demo.service:1.0@DEFAULT 223.104.68.55:9090?xx=re\n      exit 0\n      ;;\n    \\?)\n      echo "')]),a._v("无效的选项: -"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$OPTARG")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\n      exit 1\n      ;;\n  esac\ndone\n\n# 获取四个参数\nshift '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("OPTIND"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v('\nsofa_host="')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\nsofa_port="')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$2")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\nid="')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$3")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\nurl="')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$4")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\n\n# 执行带参数的命令\njava -jar "')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$rlp")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/sofa.jar pub "')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$sofa_host")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$sofa_port")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$id")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" "')]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$url")]),a._v('"\n')])])])]),a._v(" "),s("li",[s("p",[a._v("将整个"),s("code",[a._v("/data/test")]),a._v("​挂载进容器并假设路径不变")])]),a._v(" "),s("li",[s("p",[a._v("在项目需要的地方通过调用命令行即可执行java程序")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("subprocess.getoutput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"java -jar /data/test/pub.jar -t"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);