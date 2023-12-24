(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{463:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"读取多个yaml文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取多个yaml文档"}},[a._v("#")]),a._v(" 读取多个yaml文档")]),a._v(" "),t("ul",[t("li",[a._v("多个文档在一个yaml文件，使用 --- 分隔方式来分段")]),a._v(" "),t("li",[a._v("如果string或文件包含几块yaml文档，可以使用yaml.load_all来解析全部的文档，再从中读取对象中的数据")])]),a._v(" "),t("p",[a._v("如：yaml文件中数据")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 分段yaml文件中多个文档")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("animal1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dog\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("animal2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cat\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("age")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])])]),t("p",[a._v("‍")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yaml文件中含有多个文档时，分别获取文档中数据")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("def get_yaml_load_all(yaml_file)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打开yaml文件")]),a._v("\n    file = open(yaml_file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'r'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(' encoding="utf'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v('8")\n    file_data = file.read()\n    file.close()\n    all_data = yaml.load_all(file_data)\n    '),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("for data in all_data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v('\n        print(data)\ncurrent_path = os.path.abspath(".")\nyaml_path = os.path.join(current_path'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(' "config.yaml")\nget_yaml_load_all(yaml_path)\n"""结果\n'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("'animal1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dog'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("'age'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("'animal2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'cat'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("'age'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v('\n"""\n')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);