(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{359:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"click-cli工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#click-cli工具"}},[t._v("#")]),t._v(" click-CLI工具")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("click 是一个 Python 包，它提供了一个用于创建命令行界面（CLI）工具的框架。通过 click，开发者可以方便快捷地创建命令行工具，而无需编写大量的样板代码。")]),t._v(" "),s("p",[t._v("click 提供了一组简单的装饰器和函数，可以轻松定义命令行接口、参数选项、子命令等，帮助用户处理命令行输入并将命令行输出显示为用户友好的格式。")]),t._v(" "),s("p",[t._v("click 还具有非常好的文档和测试套件，因此您可以在使用它时轻松地获得帮助和支持。")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("p",[t._v("下面是一个使用 click 的经典示例：一个简单的命令行工具，用于将某个字符串转换为大写。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" click\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--uppercase'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-u'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" is_flag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("help")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Convert string to uppercase.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argument")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("convert_string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uppercase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Converts a string to uppercase if --uppercase flag is provided."""')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" uppercase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("upper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    convert_string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("在这个示例中，使用 click.command() 装饰器定义了一个命令，该命令可通过 convert_string() 函数实现。使用 click.option() 装饰器定义了 --uppercase/-u 选项，并使用 click.argument() 装饰器定义了字符串参数。")]),t._v(" "),s("p",[t._v("在 convert_string() 函数中，首先通过 if 条件判断确定是否将字符串转换为大写形式，然后使用 click.echo() 函数将结果打印到命令行中。")]),t._v(" "),s("p",[t._v("要运行这个命令行工具，存储该代码到一个文件中，例如 myconverter.py，并通过终端进入该文件所在目录，然后执行以下命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("python myconverter.py hello\n")])])]),s("p",[t._v("运行结果将会是：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hello\n")])])]),s("p",[t._v("现在，让我们试着使用 --uppercase 选项将它转换为大写形式：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("python myconverter.py --uppercase hello\n")])])]),s("p",[t._v("运行结果将会是：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("HELLO\n")])])]),s("p",[t._v("这就是使用 click 创建简单命令行工具的经典示例。")])])}),[],!1,null,null,null);s.default=e.exports}}]);