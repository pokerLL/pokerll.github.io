(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{651:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mro和super"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mro和super"}},[t._v("#")]),t._v(" MRO和super")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"类的多重继承-菱形继承-c3-类广度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类的多重继承-菱形继承-c3-类广度"}},[t._v("#")]),t._v(" 类的多重继承-菱形继承-C3（类广度）")]),t._v(" "),s("p",[t._v("Python中的MRO（方法解析顺序）。在没有多重继承的情况下，向对象发出一个消息，如果对象没有对应的方法，那么向上（父类）搜索的顺序是非常清晰的。如果向上追溯到"),s("code",[t._v("object")]),t._v("​类（所有类的父类）都没有找到对应的方法，那么将会引发"),s("code",[t._v("AttributeError")]),t._v("​异常。")]),t._v(" "),s("p",[t._v("但是当出现多重继承尤其是菱形继承的时候，向上追溯到底应该找到那个方法就得确定MRO。Python 3中的类以及Python 2中的新式类使用"),s("a",{attrs:{href:"https://www.jianshu.com/p/a08c61abe895",target:"_blank",rel:"noopener noreferrer"}},[t._v("C3算法"),s("OutboundLink")],1),t._v("来确定MRO，它是一种类似于广度优先搜索的方法；Python 2中的旧式类（经典类）使用深度优先搜索来确定MRO。在搞不清楚MRO的情况下，可以使用类的"),s("code",[t._v("mro")]),t._v("​方法或"),s("code",[t._v("__mro__")]),t._v("​属性来获得类的MRO列表。")]),t._v(" "),s("blockquote",[s("p",[t._v("新式类可以直接通过 "),s("code",[t._v("类名.__mro__")]),t._v("​ 的方式获取类的 "),s("code",[t._v("MRO")]),t._v("​，也可以通过 "),s("code",[t._v("类名.mro()")]),t._v("​ 的形式，旧式类是没有 "),s("strong",[t._v("mro")]),t._v(" 属性和 mro() 方法的。")])]),t._v(" "),s("p",[s("strong",[t._v("方法解析顺序")]),t._v(" "),s("code",[t._v("Method Resolution Order")]),t._v("​，简称 "),s("code",[t._v("MRO")]),t._v("​。主要用于在多继承时判断方法，属性的调用路径。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在搜索方法时，是按照 "),s("code",[t._v("mro()")]),t._v("​ 输出的结果，从左到右的顺序查找")])]),t._v(" "),s("li",[s("p",[t._v("如果找到，在当前类中找到方法就直接执行，不在搜索")])]),t._v(" "),s("li",[s("p",[t._v("没有找到，就依次查找下一个类中是否有对应的方法，找到执行，不在搜索")])]),t._v(" "),s("li",[s("p",[t._v("如果最后一个类，还没有找到方法，程序报错")])]),t._v(" "),s("li",[s("p",[t._v("可以通过"),s("code",[t._v("super")]),t._v("​方法来调用父类的函数，其被设计用来解决多重继承问题")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("单继承中与父类名调用无区别")])]),t._v(" "),s("li",[s("p",[t._v("多重继承中能保证父类名只调用一次")]),t._v(" "),s("blockquote",[s("p",[t._v("父类名调用则还是会调用多次")])])]),t._v(" "),s("li",[s("p",[t._v("在python2.x中，函数super()需要两个实参：子类名和对象self。为帮助python将父类和子类联系起来，这两个参数必不可少。")])]),t._v(" "),s("li",[s("p",[t._v("在python3.x中，函数super()可以不携带实参-解释器会自动将当前类和self传入。如果携带了参数，例如"),s("code",[t._v("super(B, self)")]),t._v("​中self指向B则是指找到self的mro表中B的下一个类")])])])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# encoding: utf-8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\tparent --- 爱吃饭"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"son1 --- eat()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\tson1  ---  爱吃蔬菜\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Son2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"son2 --- eat()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\tson2  ---  爱吃水果\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Grandson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Son1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Son2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"grandson --- eat()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\tgrandson --- 爱吃零食"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Son1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Grandson"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Grandson"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__mro__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (<class '__main__.Grandson'>, <class '__main__.Son1'>, <class '__main__.Son2'>, <class '__main__.Parent'>, <type 'object'>)")]),t._v("\n\n    g"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    grandson --- eat()\n    son1 --- eat()\n    son2 --- eat()\n            parent --- 爱吃饭\n            son2  ---  爱吃水果\n\n            son1  ---  爱吃蔬菜\n\n            grandson --- 爱吃零食\n    """')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# g.eat2()")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    son2 --- eat()\n        parent --- 爱吃饭\n        son2  ---  爱吃水果\n    """')]),t._v("\n\n\n")])])]),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"super"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#super"}},[t._v("#")]),t._v(" super")]),t._v(" "),s("p",[t._v("注意到"),s("code",[t._v("super")]),t._v("​是有四种用法的。")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("super()")]),t._v("​与"),s("code",[t._v("super(__class__,self)")]),t._v("​等价。")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("super(type, instance)")]),t._v("​用于调用"),s("code",[t._v("instance")]),t._v("​继承链上位于"),s("code",[t._v("type")]),t._v("​后的下一个类的同名方法。")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("super(type, type2)")]),t._v("​用于调用"),s("code",[t._v("type2")]),t._v("​类在"),s("code",[t._v("type")]),t._v("​的继承链上的下一个类（MRO中的下一个类）的同名方法。在使用"),s("code",[t._v("super(type, type2)")]),t._v("​时，首先需要确保"),s("code",[t._v("type2")]),t._v("​是"),s("code",[t._v("type")]),t._v("​的子类，否则会抛出"),s("code",[t._v("TypeError")]),t._v("​异常。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" same "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__class__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("first argument"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" unbound "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bound "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" requires "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bound "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" requires "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("issubclass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  Typical use to call a cooperative superclass method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("meth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  This works "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("methods")]),t._v(" too"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("      @"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("classmethod")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cmeth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cmeth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("‍")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"mro例题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mro例题"}},[t._v("#")]),t._v(" MRO例题")]),t._v(" "),s("h3",{attrs:{id:"题目-阅读下面的代码说出运行结果。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目-阅读下面的代码说出运行结果。"}},[t._v("#")]),t._v(" 题目：阅读下面的代码说出运行结果。")]),t._v(" "),s("div",{staticClass:"language-Python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("who")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("who")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("who"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("who")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("who"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("D")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("who")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("who"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nitem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nitem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("who"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("点评")]),t._v("：这道题考查到了两个知识点：")]),t._v(" "),s("ol",[s("li",[t._v("Python中的MRO（方法解析顺序）。在没有多重继承的情况下，向对象发出一个消息，如果对象没有对应的方法，那么向上（父类）搜索的顺序是非常清晰的。如果向上追溯到"),s("code",[t._v("object")]),t._v("​类（所有类的父类）都没有找到对应的方法，那么将会引发"),s("code",[t._v("AttributeError")]),t._v("​异常。但是有多重继承尤其是出现菱形继承（钻石继承）的时候，向上追溯到底应该找到那个方法就得确定MRO。Python 3中的类以及Python 2中的新式类使用"),s("a",{attrs:{href:"https://www.jianshu.com/p/a08c61abe895",target:"_blank",rel:"noopener noreferrer"}},[t._v("C3算法"),s("OutboundLink")],1),t._v("来确定MRO，它是一种类似于广度优先搜索的方法；Python 2中的旧式类（经典类）使用深度优先搜索来确定MRO。在搞不清楚MRO的情况下，可以使用类的"),s("code",[t._v("mro")]),t._v("​方法或"),s("code",[t._v("__mro__")]),t._v("​属性来获得类的MRO列表。")]),t._v(" "),s("li",[t._v("​"),s("code",[t._v("super()")]),t._v("​函数的使用。在使用"),s("code",[t._v("super")]),t._v("​函数时，可以通过"),s("code",[t._v("super(类型, 对象)")]),t._v("​来指定对哪个对象以哪个类为起点向上搜索父类方法。所以上面"),s("code",[t._v("B")]),t._v("​类代码中的"),s("code",[t._v("super(B, self).who()")]),t._v("​表示以B类为起点，向上搜索"),s("code",[t._v("self")]),t._v("​（D类对象）的"),s("code",[t._v("who")]),t._v("​方法，所以会找到"),s("code",[t._v("C")]),t._v("​类中的"),s("code",[t._v("who")]),t._v("​方法，因为"),s("code",[t._v("D")]),t._v("​类对象的MRO列表是"),s("code",[t._v("D --\x3e B --\x3e C --\x3e A --\x3e object")]),t._v("​。")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)\nACBD\n")])])]),s("p",[t._v("‍")])])}),[],!1,null,null,null);s.default=e.exports}}]);