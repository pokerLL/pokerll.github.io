(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{379:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"struct-二进制数据处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#struct-二进制数据处理"}},[t._v("#")]),t._v(" struct-二进制数据处理")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("struct模块是Python中用于处理二进制数据的模块。它提供了一组用于处理C语言风格的基本数据类型（如整型、浮点型、字符串等）的函数，能够实现二进制数据与Python数据类型之间的相互转换。")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("struct")]),t._v("​模块中的函数主要有以下几个：")]),t._v(" "),s("ul",[s("li",[t._v("​"),s("code",[t._v("struct.pack(format, v1, v2, ...)")]),t._v("​: 根据给定的格式"),s("code",[t._v("format")]),t._v("​将一组值打包成二进制数据，并返回一个包含打包数据的bytes对象。其中，"),s("code",[t._v("format")]),t._v("​是一个字符串，用于指定打包的数据类型及其顺序；"),s("code",[t._v("v1, v2, ...")]),t._v("​是要打包的数据值。")]),t._v(" "),s("li",[t._v("​"),s("code",[t._v("struct.unpack(format, buffer)")]),t._v("​: 根据给定的格式"),s("code",[t._v("format")]),t._v("​从二进制数据中解包出一组数据，并返回一个包含解包数据的元组。其中，"),s("code",[t._v("format")]),t._v("​和"),s("code",[t._v("buffer")]),t._v("​分别表示解包的数据格式和数据源。")]),t._v(" "),s("li",[t._v("​"),s("code",[t._v("struct.calcsize(format)")]),t._v("​: 根据给定的格式"),s("code",[t._v("format")]),t._v("​计算出打包后的二进制数据的大小（以字节为单位），并返回这个大小。")])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" format")]),t._v(" "),s("h3",{attrs:{id:"类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字符")]),t._v(" "),s("th",[t._v("C类型")]),t._v(" "),s("th",[t._v("Python类型")]),t._v(" "),s("th",[t._v("字节数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("​"),s("code",[t._v("b")]),t._v("​")]),t._v(" "),s("td",[t._v("signed char")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("B")]),t._v("​")]),t._v(" "),s("td",[t._v("unsigned char")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("h")]),t._v("​")]),t._v(" "),s("td",[t._v("short")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("H")]),t._v("​")]),t._v(" "),s("td",[t._v("unsigned short")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("2")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("i")]),t._v("​")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("I")]),t._v("​")]),t._v(" "),s("td",[t._v("unsigned int")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("l")]),t._v("​")]),t._v(" "),s("td",[t._v("long")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("L")]),t._v("​")]),t._v(" "),s("td",[t._v("unsigned long")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("q")]),t._v("​")]),t._v(" "),s("td",[t._v("long long")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("8")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("Q")]),t._v("​")]),t._v(" "),s("td",[t._v("unsigned long long")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("8")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("f")]),t._v("​")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("4")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v("d")]),t._v("​")]),t._v(" "),s("td",[t._v("double")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("8")])])])]),t._v(" "),s("h3",{attrs:{id:"格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字符")]),t._v(" "),s("th",[t._v("格式")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("​"),s("code",[t._v("<")]),t._v("​")]),t._v(" "),s("td",[t._v("小端对齐")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("code",[t._v(">")]),t._v("​"),s("br")]),t._v(" "),s("td",[t._v("大端对齐")])])])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("h3",{attrs:{id:"_1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1"}},[t._v("#")]),t._v(" 1")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" struct\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将一组值打包成二进制数据")]),t._v("\ndata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3s i f'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解包出一组数据")]),t._v("\nvalues "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3s i f'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印解包后的数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出: (b'abc', 100, 3.140000104904175)")]),t._v("\n\n")])])]),s("p",[t._v("在上面的示例中，我们使用"),s("code",[t._v("pack")]),t._v("​函数将一个字符串、一个整数和一个浮点数打包成二进制数据，然后使用"),s("code",[t._v("unpack")]),t._v("​函数从这个二进制数据中解包出这三个值，并将它们打印出来。")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("'3s i f'")]),t._v("​是"),s("code",[t._v("pack")]),t._v("​和"),s("code",[t._v("unpack")]),t._v("​中的格式字符串，表示打包和解包的数据类型及其顺序。"),s("code",[t._v("3s")]),t._v("​表示一个长度为3的字符串，"),s("code",[t._v("i")]),t._v("​表示一个整数，"),s("code",[t._v("f")]),t._v("​表示一个浮点数。")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h3",{attrs:{id:"解析pyc文件元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析pyc文件元数据"}},[t._v("#")]),t._v(" 解析pyc文件元数据")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    magic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<l'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"magic number = ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("magic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    bit_field "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<l'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"bit filed = ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bit_field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<l'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"time = ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asctime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    file_size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<l'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"file size = ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("file_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("‍")])])}),[],!1,null,null,null);s.default=r.exports}}]);