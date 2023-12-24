(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{484:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"弱引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弱引用"}},[t._v("#")]),t._v(" 弱引用")]),t._v(" "),s("h2",{attrs:{id:"弱引用概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弱引用概述"}},[t._v("#")]),t._v(" 弱引用概述")]),t._v(" "),s("p",[t._v("我们已知Python的垃圾回收机制是基于引用计数的。每次引用对象都会让对象的引用计数+1，当对象引用计数归0后，垃圾回收机制就择机将对象销毁。")]),t._v(" "),s("p",[t._v("但是在缓存等场景中，存在着弱引用的使用场景：引用对象但不阻碍对象的销毁，即不增加对象的引用计数。或者我们可以使用弱引用来避免循环引用的问题。")]),t._v(" "),s("p",[t._v("可以使用"),s("code",[t._v("weakref.ref")]),t._v("​获取对象的弱引用，当对象不存在时会返回None。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n>>> import weakref\n>>> l = {1,2}  \n>>> wref = weakref.ref(l)\n>>> wref\n<weakref at 0x000001B54726C8B8; to \'set\' at 0x000001B547230908>\n>>> wref()\n{1, 2}\n>>> l.add(3) \n>>> wref()   \n{1, 2, 3}\n>>> l = {4,5,6} \n>>> wref()  \n{1, 2, 3} # 此处和下面都还能看到{1,2,3}和True的原因时控制台会自动把_变量指向上一条语句的执行结果，因此没有触发垃圾回收\n>>> wref() is None\nFalse # \n>>> wref() is None # 此时_指向了False，因此{1,2,3}被回收了\nTrue\n>>> wref() # None不会被打印\n>>> \n"""')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n>>> a = {1} \n>>> a\n{1}\n>>> _\n{1}\n"""')]),t._v("\n")])])]),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"弱引用内建对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弱引用内建对象"}},[t._v("#")]),t._v(" 弱引用内建对象")]),t._v(" "),s("p",[t._v("weakref模块提供了WeakKeyDictionary和WeakValueDictionary类来创建一些特殊的字典，其特别之处是前者的键和后者的值都只是弱引用，当键不存在后会自动从字典中剔除，当值不存在后会变成None。")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"弱引用局限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弱引用局限"}},[t._v("#")]),t._v(" 弱引用局限")]),t._v(" "),s("p",[t._v("由于弱引用是通过维护一个指向对象的指针（而不是跟踪对象的状态）来实现的，因此对于"),s("code",[t._v("list")]),t._v("​、"),s("code",[t._v("dict")]),t._v("​等存在动态扩缩容可能会导致内存地址变化的数据结构是无法使用弱引用的，但其子类可以轻松解决这个问题。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("可能会导致内存地址变化：因为扩缩容前会先尝试原地扩缩容，因此可能不会导致内存地址的变化")])]),t._v(" "),s("li",[s("p",[t._v("本质上支持支持弱引用的对象必须是实现了"),s("code",[t._v("__weakref__()")]),t._v("​方法的类的实例。如果我们试图将一个不支持弱引用的对象作为弱引用对象，Python会抛出一个"),s("code",[t._v("TypeError")]),t._v("​异常。而内建的"),s("code",[t._v("list")]),t._v("​类并没有实现"),s("code",[t._v("__weakref__()")]),t._v("​方法，因此"),s("code",[t._v("list")]),t._v("​对象本身不能作为弱引用对象。")])]),t._v(" "),s("li",[s("p",[t._v("而有的用户自建对象，会莫名奇妙多出一个"),s("code",[t._v("__weakref__")]),t._v("​方法，因此就可以用作弱引用目标了。")])]),t._v(" "),s("li",[s("p",[t._v("不过对于int、tuple这两个对象的实例，其即使是子类也不可以作为弱引用目标。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" weakref\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\ni1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ni2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# weakref.ref(i1)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nTraceback (most recent call last):\n  File "d:/Programs/Workspace/cpython-v3.7.4/PyTests/weakref_int.py", line 8, in <module>\n    weakref.ref(i1)\nTypeError: cannot create weak reference to \'int\' object\n"""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# weakref.ref(i2)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nTraceback (most recent call last):\n  File "d:/Programs/Workspace/cpython-v3.7.4/PyTests/weakref_int.py", line 8, in <module>\n    weakref.ref(i1)\nTypeError: cannot create weak reference to \'int\' object\n"""')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__mro__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (<class '__main__.MyInt'>, <class 'int'>, <class 'object'>)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MRO:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" MyInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__mro__ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__weakref__"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__dict__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MRO: []")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("上面这些局限是CPython的具体实现导致的，在不同解释器中具体情况可能完全不一致，因此没有细致研究。")])]),t._v(" "),s("li",[s("p",[t._v("所以在使用弱引用的时候应该谨而慎之，谨而慎之。")])])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" weakref\n\nITEM_NUM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),t._v("\nITEM_NUM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\nl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\naddr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ITEM_NUM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    _i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"ADDR CHANGE  ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ITEM_NUM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nADDR CHANGE  0/10000000 2282120903800\n"""')]),t._v("\n\nl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\naddr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ITEM_NUM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    _i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"ADDR CHANGE  ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ITEM_NUM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nADDR CHANGE  0/10000000 2282093917000\n"""')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__mro__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (<class '__main__.MyList'>, <class 'list'>, <class 'object'>)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MRO:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" MyList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__mro__ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__weakref__"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__dict__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MRO: [<class '__main__.MyList'>]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# l1 = list()")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# weakref.ref(l1)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nTraceback (most recent call last):\n  File "d:/Programs/Workspace/cpython-v3.7.4/PyTests/weakref_list_test.py", line 38, in <module>\n    weakref.ref(l1)\nTypeError: cannot create weak reference to \'list\' object\n"""')]),t._v("\nl2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nweakref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);