(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{406:function(t,s,e){"use strict";e.r(s);var a=e(14),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"组织testsuite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组织testsuite"}},[t._v("#")]),t._v(" 组织TestSuite")]),t._v(" "),s("h2",{attrs:{id:"testsuite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testsuite"}},[t._v("#")]),t._v(" TestSuite")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("unittest.TestSuite()")]),t._v("​类来表示一个测试用例集，把需要执行的用例类或模块存到一起，常用的方法如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("​"),s("code",[t._v("unittest.TestSuite()")]),t._v("​")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("addTest()")]),t._v("：添加单个测试用例方法")]),t._v(" "),s("li",[s("code",[t._v("addTest([..])")]),t._v("：添加多个测试用例方法，方法名存在一个列表")])])]),t._v(" "),s("li",[s("p",[t._v("​"),s("code",[t._v("unittest.TestLoader()")]),t._v("​")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("loadTestsFromTestCase(测试类名)")]),t._v("：添加一个测试类")]),t._v(" "),s("li",[s("code",[t._v("loadTestsFromModule(模块名)")]),t._v("：添加一个模块")]),t._v(" "),s("li",[s("code",[t._v("discover(测试用例的所在目录)")]),t._v("：指定目录去加载，会自动寻找这个目录下所有符合命名规则的测试用例")])])])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run_test.py，与test_register.py、register.py同一目录下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unittest\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" test_register\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一步，创建一个测试套件")]),t._v("\nsuite "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" unittest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestSuite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二步：将测试用例，加载到测试套件中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 方式1，添加单条测试用例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# case = test_register.TestRegister("test_register_success")\t# 创建一个用例对象，注意：通过用例类去创建测试用例对象的时候，需要传入用例的方法名（字符串类型）')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# suite.addTest(case)\t# 添加用例到测试套件中")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 方式2，添加多条测试用例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# case1 = test_register.TestRegister("test_register_success")')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# case2 = test_register.TestRegister("test_username_isnull")')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# suite.addTest([case1, case2])\t# 添加用例到测试套件中")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 方式3，添加一个测试用例类")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# loader = unittest.TestLoader()\t# 创建一个加载对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# suite.addTest(loader.loadTestsFromTestCase(test_register.TestRegister))")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 方式4，添加一个模块")]),t._v("\nloader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" unittest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestLoader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个加载对象")]),t._v("\nsuite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addTest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadTestsFromModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_register"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 方式5，指定测试用例的所在的目录路径，进行加载，并可制定pattern")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# loader = unittest.TestLoader()")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# suite.addTest(loader.discover(r"d:\\learn\\python"))')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# suite.addTest(loader.discover(start_dir = r"d:\\learn\\python", pattern="test_case*.py"))\t\t# 匹配规则：所有以test_case开头的')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);