(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{493:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("h2",{attrs:{id:"参数传递-mutable和immutable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数传递-mutable和immutable"}},[t._v("#")]),t._v(" 参数传递：mutable和immutable")]),t._v(" "),s("p",[t._v("python 中一切都是对象，因此严"),s("strong",[t._v("格意义上我们不能说值传递还是引用传递，我们应该说传不可变对象和传可变对象。")])]),t._v(" "),s("p",[t._v("在python中，strings，tuples和numbers都是不可更改的对象，而list，dict则是可以修改的对象。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("不可变类型：")]),t._v("  变量赋值 "),s("strong",[t._v("a=5")]),t._v(" 后再赋值  "),s("strong",[t._v("a=10")]),t._v(" ，这里实际是新生成一个 int 值对象 10，再让 a 指向它，而 5 被丢弃，不是改变a的值，相当于新生成了a。")]),t._v(" "),s("li",[s("strong",[t._v("可变类型：")]),t._v("  变量赋值 "),s("strong",[t._v("la=[1,2,3,4]")]),t._v("  后再赋值 "),s("strong",[t._v("la[2]=5")]),t._v(" 则是将 list la 的第三个元素值更改，本身la没有动，只是其内部的一部分值被修改了。")])]),t._v(" "),s("p",[t._v("python函数的参数传递：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("不可变类型：")]),t._v("  类似 c++ 的值传递，如 整数、字符串、元组。如fun（a），传递的只是a的值，没有影响a对象本身。比如在 fun（a）内部修改 a 的值，只是修改另一个复制的对象，不会影响 a 本身。")]),t._v(" "),s("li",[s("strong",[t._v("可变类型：")]),t._v("  类似 c++ 的引用传递，如 列表，字典。如 fun（la），则是将 la 真正的传过去，修改后fun外部的la也会受影响")])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"参数类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数类型"}},[t._v("#")]),t._v(" 参数类型")]),t._v(" "),s("p",[t._v("以下是调用函数时可使用的正式参数类型：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("必需参数")]),t._v(" "),s("ul",[s("li",[t._v("必需参数须以正确的顺序传入函数。调用时的数量必须和声明时的一样。")])])]),t._v(" "),s("li",[s("p",[t._v("关键字参数")]),t._v(" "),s("ul",[s("li",[t._v("关键字参数和函数调用关系紧密，函数调用使用关键字参数来确定传入的参数值。")]),t._v(" "),s("li",[t._v("使用关键字参数允许函数调用时参数的顺序与声明时不一致，因为 Python 解释器能够用参数名匹配参数值。")])])]),t._v(" "),s("li",[s("p",[t._v("默认参数")]),t._v(" "),s("ul",[s("li",[t._v("调用函数时，如果没有传递参数，则会使用默认参数。")])])]),t._v(" "),s("li",[s("p",[t._v("不定长参数")]),t._v(" "),s("ul",[s("li",[t._v("你可能需要一个函数能处理比当初声明时更多的参数。这些参数叫做不定长参数，和上述 2 种参数不同，声明时不会命名。")])])])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# *args 单个参数-元组")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# **kwargs 关键词参数-字典")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"参数命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数命名"}},[t._v("#")]),t._v(" 参数命名")]),t._v(" "),s("ul",[s("li",[t._v("​"),s("code",[t._v("__xxx__")]),t._v("​变量/函数是特殊变量，虽可以被直接引用，但是有特殊的用途，比如说"),s("code",[t._v("__init__")]),t._v("​，"),s("code",[t._v("__new__")]),t._v("​等")]),t._v(" "),s("li",[t._v("​"),s("code",[t._v("_xxx")]),t._v("​表示半私有的变量，只能在类或者子类内使用，不能用from module import *的方式引入")]),t._v(" "),s("li",[t._v("​"),s("code",[t._v("__xxx__")]),t._v("​表示私有的变量，只能在类内使用，解析器会用 "),s("code",[t._v("_classname__foo")]),t._v("​来代替这个名字，以区别和其他类相同的命名，无法直接像公有成员一样随便访问，但是也可以通过"),s("code",[t._v("对象名._类名__xxx")]),t._v("​的方式进行访问")])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"默认参数的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认参数的坑"}},[t._v("#")]),t._v(" 默认参数的坑")]),t._v(" "),s("p",[t._v("有如下代码，请给出其运行结果：")]),t._v(" "),s("div",{staticClass:"language-Python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend_list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" items"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" items\n\nlist1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" extend_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlist2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" extend_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlist3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" extend_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("点评")]),t._v("：Python函数在定义的时候，默认参数"),s("code",[t._v("items")]),t._v("​的值就被计算出来了，即"),s("code",[t._v("[]")]),t._v("​，然后存储在了函数对象的__defaults__中，即对默认参数的肤质只会在函数定义的时候绑定一次。因为默认参数"),s("code",[t._v("items")]),t._v("​引用了对象"),s("code",[t._v("[]")]),t._v("​，每次调用该函数，如果对"),s("code",[t._v("items")]),t._v("​引用的列表进行了操作，下次调用时，默认参数还是引用之前的那个列表而不是重新赋值为"),s("code",[t._v("[]")]),t._v("​，所以列表中会有之前添加的元素。如果通过传参的方式为"),s("code",[t._v("items")]),t._v("​重新赋值，那么"),s("code",[t._v("items")]),t._v("​将引用到新的列表对象，而不再引用默认的那个列表对象。这个题在面试中经常被问到，通常不建议使用容器类型的默认参数，像PyLint这样的代码检查工具也会对这种代码提出质疑和警告。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[10, 'a']\n[123]\n[10, 'a']\n")])])]),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"仅关键词、仅位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仅关键词、仅位置"}},[t._v("#")]),t._v(" 仅关键词、仅位置")]),t._v(" "),s("h3",{attrs:{id:"仅关键词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仅关键词"}},[t._v("#")]),t._v(" 仅关键词")]),t._v(" "),s("p",[t._v("当指定可选的函数参数时，"),s("code",[t._v("keyword-only")]),t._v("​参数常常是一种提高代码可读性的好办法。我们可以在必须使用关键词传递的参数前加一个"),s("code",[t._v("*")]),t._v("​开头的参数或者一个单独的"),s("code",[t._v("*")]),t._v("​，"),s("code",[t._v("*")]),t._v("​其后的参数都只能以关键词的形式传入。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("recv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxsize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])]),s("h3",{attrs:{id:"仅位置-3-8引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仅位置-3-8引入"}},[t._v("#")]),t._v(" 仅位置（3.8引入）")]),t._v(" "),s("p",[t._v("我们可以在参数定义中插入一个类似单独"),s("code",[t._v("*")]),t._v("​的单独"),s("code",[t._v("/")]),t._v("​，在"),s("code",[t._v("/")]),t._v("​前的参数都只能以位置参数传入而不能以关键词的形式传入。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("recv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxsize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n")])])]),s("p",[t._v("在参数列表中，位于"),s("code",[t._v("/")]),t._v("​和"),s("code",[t._v("*")]),t._v("​之间的参数既可以由位置指定，也可以由关键词指定，这也是Python普通参数的默认指定方式。")]),t._v(" "),s("p",[t._v("‍")])])}),[],!1,null,null,null);s.default=e.exports}}]);