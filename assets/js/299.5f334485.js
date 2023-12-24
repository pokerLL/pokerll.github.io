(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{577:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"python-wsgi-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-wsgi-简介"}},[t._v("#")]),t._v(" python wsgi 简介")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://legacy.python.org/dev/peps/pep-0333/#rationale-and-goals",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档 PEP333"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cizixs.com/2014/11/08/understand-wsgi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cizixs.com/2014/11/08/understand-wsgi/ - Cizixs Write Here"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[t._v("#")]),t._v(" 基础知识")]),t._v(" "),s("blockquote",[s("p",[t._v("最好有的前置基础知识：")]),t._v(" "),s("ul",[s("li",[t._v("iterator 和 generator")]),t._v(" "),s("li",[t._v("函数的高级用法：嵌套函数，作为参数传递等等")]),t._v(" "),s("li",[t._v("了解 decorator 会对理解 wsgi 有很大的帮助")]),t._v(" "),s("li",[t._v("python 的 callable 概念")]),t._v(" "),s("li",[t._v("classmethod 和 staticmethod 的概念")]),t._v(" "),s("li",[t._v("web 编程的基础")])])]),t._v(" "),s("h3",{attrs:{id:"http-基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-基础"}},[t._v("#")]),t._v(" HTTP 基础")]),t._v(" "),s("p",[t._v("​"),s("img",{attrs:{src:"https://assets.b3logfile.com/siyuan/xxxxxx/assets/net-img-005yyi5Jjw1em3fj419m7j30i40g8gm5-20231110095544-l7eyniy.jpg",alt:"http"}}),t._v("​")]),t._v(" "),s("p",[t._v("对于 web 应用程序来说，最基本的概念就是客户端发送请求（request），收到服务器端的响应（response）。")]),t._v(" "),s("p",[t._v("下面是简单的 HTTP 请求：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" GET /Index.html HTTP/1.1\\r\\n\n Connection: Keep-Alive\\r\\n\n Accept: */*\\r\\n\n User-Agent: Sample Application\\r\\n\n Host: www.microsoft.com\\r\\n\\r\\n\n")])])]),s("p",[t._v("内容包括了 method、 url、 protocol version 以及头部的信息。而 HTTP 响应（不包括数据）可能是如下的内容：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" HTTP/1.1 200 OK\n Server: Microsoft-IIS/5.0\\r\\n\n Content-Location: http://www.microsoft.com/default.htm\\r\\n\n Date: Tue, 25 Jun 2002 19:33:18 GMT\\r\\n\n Content-Type: text/html\\r\\n\n Accept-Ranges: bytes\\r\\n\n Last-Modified: Mon, 24 Jun 2002 20:27:23 GMT\\r\\n\n Content-Length: 26812\\r\\n\n")])])]),s("p",[t._v("实际生产中，python 程序是放在服务器的 http server（比如 apache， nginx 等）上的。现在的问题是 "),s("strong",[t._v("服务器程序怎么把接受到的请求传递给 python 呢，怎么在网络的数据流和 python 的结构体之间转换呢？")]),t._v(" 这就是 wsgi 做的事情：一套关于程序端和服务器端的规范，或者说统一的接口。")]),t._v(" "),s("p",[t._v("​"),s("img",{attrs:{src:"assets/net-img-005yyi5Jjw1em3l4rsqdbj30ue0g80tz-20231110095544-9ybznmf.jpg",alt:""}}),t._v("​")]),t._v(" "),s("p",[t._v("我们先看一下面向 http 的 python 程序需要关心哪些内容：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("请求")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("请求的方法 method")])]),t._v(" "),s("li",[s("strong",[t._v("请求的地址 url")])]),t._v(" "),s("li",[s("strong",[t._v("请求的内容")])]),t._v(" "),s("li",[t._v("请求的头部 header")]),t._v(" "),s("li",[t._v("请求的环境信息")])])]),t._v(" "),s("li",[s("p",[t._v("响应")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("状态码 status_code")])]),t._v(" "),s("li",[s("strong",[t._v("响应的数据")])]),t._v(" "),s("li",[t._v("响应的头部")])])])]),t._v(" "),s("p",[t._v("WSGI（Web Server Gateway Interface） 的任务就是把上面的数据在 http server 和 python 程序之间简单友好地传递。它是一个标准，被定义在"),s("a",{attrs:{href:"http://legacy.python.org/dev/peps/pep-0333/#rationale-and-goals",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP 333"),s("OutboundLink")],1),t._v("。需要 http server 和 python 程序都要遵守一定的规范，实现这个标准的约定内容，才能正常工作。")]),t._v(" "),s("p",[t._v("​"),s("img",{attrs:{src:"https://assets.b3logfile.com/siyuan/xxxxxx/assets/net-img-wsgi-interface-20231110095546-85rjzkz.png",alt:"wsgi"}}),t._v("​")]),t._v(" "),s("h3",{attrs:{id:"应用程序端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用程序端"}},[t._v("#")]),t._v(" 应用程序端")]),t._v(" "),s("p",[t._v("WSGI 规定每个 python 程序（Application）必须是一个可调用的对象（实现了"),s("code",[t._v("__call__")]),t._v("​ 函数的方法或者类），接受两个参数 "),s("code",[t._v("environ")]),t._v("​（WSGI 的环境信息） 和 "),s("code",[t._v("start_response")]),t._v("​（开始响应请求的函数），并且返回 iterable。几点说明：")]),t._v(" "),s("ol",[s("li",[t._v("​"),s("code",[t._v("environ")]),t._v("​ 和 "),s("code",[t._v("start_response")]),t._v("​ 由 http server 提供并实现")]),t._v(" "),s("li",[t._v("​"),s("code",[t._v("environ")]),t._v("​ 变量是包含了环境信息的字典")]),t._v(" "),s("li",[t._v("​"),s("code",[t._v("Application")]),t._v("​ 内部在返回前调用 "),s("code",[t._v("start_response")]),t._v("​")]),t._v(" "),s("li",[t._v("​"),s("code",[t._v("start_response")]),t._v("​也是一个 callable，接受两个必须的参数，"),s("code",[t._v("status")]),t._v("​（HTTP状态）和 "),s("code",[t._v("response_headers")]),t._v("​（响应消息的头）")]),t._v(" "),s("li",[t._v("可调用对象要返回一个值，这个值是可迭代的。")])]),t._v(" "),s("p",[t._v("说了这么多的概念，再来看看代码的实现：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 可调用对象是一个函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n   response_body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The request method was %s'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'REQUEST_METHOD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP response code and message")]),t._v("\n   status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200 OK'")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应答的头部是一个列表，每对键值都必须是一个 tuple。")]),t._v("\n   response_headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Length'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response_body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调用服务器程序提供的 start_response，填入两个参数")]),t._v("\n   start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response_headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回必须是 iterable")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("response_body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 可调用对象是一个类")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""这里的可调用对象就是 AppClass 这个类，调用它就能生成可以迭代的结果。\n        使用方法类似于： \n        for result in AppClass(env, start_response):\n             do_somthing(result)\n    """')]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" environ\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start_response\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__iter__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200 OK'")]),t._v("\n        response_headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response_headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!\\n"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 可调用对象是一个实例 ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""这里的可调用对象就是 AppClass 的实例，使用方法类似于： \n        app = AppClass()\n        for result in app(environ, start_response):\n             do_somthing(result)\n    """')]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__call__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200 OK'")]),t._v("\n        response_headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response_headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!\\n"')]),t._v("\n")])])]),s("h3",{attrs:{id:"服务器程序端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器程序端"}},[t._v("#")]),t._v(" 服务器程序端")]),t._v(" "),s("p",[t._v("上面已经说过，标准要能够确切地实行，必须要求程序端和服务器端共同遵守。上面提到， "),s("code",[t._v("envrion")]),t._v("​ 和 "),s("code",[t._v("start_response")]),t._v("​ 都是服务器端提供的。下面就看看，服务器端要履行的义务。")]),t._v(" "),s("ul",[s("li",[t._v("准备 "),s("code",[t._v("environ")]),t._v("​ 参数")]),t._v(" "),s("li",[t._v("定义 "),s("code",[t._v("start_response")]),t._v("​ 函数")]),t._v(" "),s("li",[t._v("调用程序端的可调用对象")])]),t._v(" "),s("p",[t._v("PEP 333 里给出了一个 wsgi server 的简单实现，我又简化了一下——去除一些异常处理和判断，添加了一点注释：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sys\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run_with_cgi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# application 是程序端的可调用对象")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 准备 environ 参数，这是一个字典，里面的内容是一次 HTTP 请求的环境变量")]),t._v("\n    environ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wsgi.input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdin\n    environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wsgi.errors'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stderr\n    environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wsgi.version'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wsgi.multithread'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n    environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wsgi.multiprocess'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wsgi.run_once'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("        \n    environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wsgi.url_scheme'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),t._v("\n\n    headers_set "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    headers_sent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把应答的结果输出到终端")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flush"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实现 start_response 函数，根据程序端传过来的 status 和 response_headers 参数，")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置状态和头部")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start_response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response_headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exc_info"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        headers_set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response_headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" write\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调用客户端的可调用对象，把准备好的参数传递过去")]),t._v("\n    result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 处理得到的结果，这里简单地把结果输出到标准输出。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# don't send headers until body appears")]),t._v("\n                write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"中间层-middleware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间层-middleware"}},[t._v("#")]),t._v(" 中间层 middleware")]),t._v(" "),s("p",[t._v("有些程序可能处于服务器端和程序端两者之间：对于服务器程序，它就是应用程序；而对于应用程序，它就是服务器程序。这就是中间层 middleware。middleware 对服务器程序和应用是透明的，它像一个代理/管道一样，把接收到的请求进行一些处理，然后往后传递，一直传递到客户端程序，最后把程序的客户端处理的结果再返回。如下图所示：")]),t._v(" "),s("p",[t._v("​"),s("img",{attrs:{src:"assets/net-img-005yyi5Jjw1em2p14p5z9j30rs0cqwg1-20231110095546-vdhrxus.jpg",alt:""}}),t._v("​")]),t._v(" "),s("p",[t._v("middleware 做了两件事情：")]),t._v(" "),s("ol",[s("li",[t._v("被服务器程序（有可能是其他 middleware）调用，返回结果回去")]),t._v(" "),s("li",[t._v("调用应用程序（有可能是其他 middleware），把参数传递过去")])]),t._v(" "),s("p",[t._v("PEP 333 上面给出了 middleware 的可能使用场景：")]),t._v(" "),s("ul",[s("li",[t._v("根据 url 把请求给到不同的客户端程序（url routing）")]),t._v(" "),s("li",[t._v("允许多个客户端程序/web 框架同时运行，就是把接到的同一个请求传递给多个程序。")]),t._v(" "),s("li",[t._v("负载均衡和远程处理：把请求在网络上传输")]),t._v(" "),s("li",[t._v("应答的过滤处理")])]),t._v(" "),s("p",[t._v("那么简单地 middleware 实现是怎么样的呢？下面的代码实现的是一个简单地 url routing 的 middleware：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path_info "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        application "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PATH_INFO'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__call__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrapper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path_info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" application\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n\nrouter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("怎么在程序里面使用呢？")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#here is the application")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#调用 route 实例，把函数注册到 paht_info 字典")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200 OK'")]),t._v("\n    output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),t._v("\n    response_headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Length'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    write "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response_headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("world")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200 OK'")]),t._v("\n    output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'World!'")]),t._v("\n    response_headers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Length'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    write "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response_headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#here run the application")]),t._v("\nresult "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start_response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("注：上面的代码来自"),s("a",{attrs:{href:"http://linluxiang.iteye.com/blog/799163",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇博客"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"了解更多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解更多"}},[t._v("#")]),t._v(" 了解更多？")]),t._v(" "),s("p",[t._v("对于普通的开发者来说，了解到上面的知识已经足够，并不需要掌握每一个细节。")]),t._v(" "),s("blockquote",[s("p",[t._v("Only authors of web servers and programming frameworks need to know every detail and corner case of the WSGI design. You don’t need to understand every detail of WSGI just to install a WSGI application or to write a web application using an existing framework.")])]),t._v(" "),s("p",[t._v("想要更多的话，就去看 "),s("a",{attrs:{href:"http://legacy.python.org/dev/peps/pep-0333/#rationale-and-goals",target:"_blank",rel:"noopener noreferrer"}},[t._v("PEP333"),s("OutboundLink")],1),t._v("，文档里还有下面更多的知识：")]),t._v(" "),s("ul",[s("li",[t._v("错误处理")]),t._v(" "),s("li",[t._v("environ 变量包含哪些值，都是什么意思。")]),t._v(" "),s("li",[t._v("输入和输出的细节")]),t._v(" "),s("li",[t._v("start_response 的更多规范")]),t._v(" "),s("li",[t._v("content-length 等头部规范")]),t._v(" "),s("li",[t._v("缓存和文本流")]),t._v(" "),s("li",[t._v("unicode 和多语言处理")]),t._v(" "),s("li",[t._v("……参考资料")])])])}),[],!1,null,null,null);s.default=e.exports}}]);