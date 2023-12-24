(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{322:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"float"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#float"}},[t._v("#")]),t._v(" float")]),t._v(" "),s("h2",{attrs:{id:"内部结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内部结构"}},[t._v("#")]),t._v(" 内部结构")]),t._v(" "),s("h3",{attrs:{id:"pyfloatobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pyfloatobject"}},[t._v("#")]),t._v(" PyFloatObject")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    PyObject_HEAD\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" ob_fval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" PyFloatObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"pyfloat-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pyfloat-type"}},[t._v("#")]),t._v(" PyFloat_Type")]),t._v(" "),s("p",[t._v("PyFloat_Type 中保存了很多关于浮点对象的 "),s("strong",[t._v("元信息")]),t._v(" ，关键字段包括：")]),t._v(" "),s("ul",[s("li",[t._v("tp_name 字段保存类型名称，常量 float ；")]),t._v(" "),s("li",[t._v("tp_dealloc 、 tp_init 、 tp_alloc 和 tp_new 字段是对象创建销毁相关函数；")]),t._v(" "),s("li",[t._v("tp_repr 字段是生成语法字符串表示形式的函数；")]),t._v(" "),s("li",[t._v("tp_str 字段是生成普通字符串表示形式的函数；")]),t._v(" "),s("li",[t._v("tp_as_number 字段是数值操作集；")]),t._v(" "),s("li",[t._v("​​tp_hash 字段是哈希值生成函数；")])]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("PyTypeObject PyFloat_Type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PyVarObject_HEAD_INIT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("PyType_Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"float"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PyFloatObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("destructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("float_dealloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_dealloc */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_print */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_getattr */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_setattr */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_reserved */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reprfunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("float_repr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_repr */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("float_as_number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_as_number */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_as_sequence */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_as_mapping */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashfunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("float_hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_hash */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_call */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reprfunc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("float_repr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_str */")]),t._v("\n    PyObject_GenericGetAttr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_getattro */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_setattro */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_as_buffer */")]),t._v("\n    Py_TPFLAGS_DEFAULT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Py_TPFLAGS_BASETYPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_flags */")]),t._v("\n    float_new__doc__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_doc */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_traverse */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_clear */")]),t._v("\n    float_richcompare"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_richcompare */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_weaklistoffset */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_iter */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_iternext */")]),t._v("\n    float_methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_methods */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_members */")]),t._v("\n    float_getset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_getset */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_base */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_dict */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_descr_get */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_descr_set */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_dictoffset */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_init */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_alloc */")]),t._v("\n    float_new"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* tp_new */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("‍")]),t._v(" "),s("p",[t._v("​"),s("img",{attrs:{src:"https://assets.b3logfile.com/siyuan/xxxxxx/assets/image-20230207190416-mfctdag.png",alt:"image"}}),t._v("​")]),t._v(" "),s("h2",{attrs:{id:"对象创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象创建"}},[t._v("#")]),t._v(" 对象创建")]),t._v(" "),s("h3",{attrs:{id:"对象创建api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象创建api"}},[t._v("#")]),t._v(" 对象创建API")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("除了通用的创建对象的流程，Python为内置对象实现了对象创建API，简化了调用：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("​"),s("code",[t._v("PyObject * PyFloat_FromDouble(double fval);")]),t._v("​从浮点数创建浮点对象")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("PyObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PyFloat_FromDouble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" fval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 优先使用空闲对象缓存池 */")]),t._v("\n    PyFloatObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("op "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" free_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        free_list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PyFloatObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Py_TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        numfree"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        op "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PyFloatObject"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PyObject_MALLOC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PyFloatObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("op"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PyErr_NoMemory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Inline PyObject_New */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PyObject_INIT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("PyFloat_Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化对象类型字段以及引用计数")]),t._v("\n    op"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("ob_fval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PyObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" op"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("​"),s("code",[t._v("PyObject * PyFloat_FromString(PyObject *v);")]),t._v("​从字符串创建浮点对象")])])])])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"对象销毁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象销毁"}},[t._v("#")]),t._v(" 对象销毁")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当对象不再需要时， Python 通过 Py_DECREF 或者 Py_XDECREF 宏减少引用计数")])]),t._v(" "),s("li",[s("p",[t._v("当引用计数降为 0 时， Python 通过 _Py_Dealloc 宏回收对象")]),t._v(" "),s("ul",[s("li",[t._v("实际调用的类型的tp_dealloc函数指针指向的函数")])])])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"空闲对象缓存池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空闲对象缓存池"}},[t._v("#")]),t._v(" 空闲对象缓存池")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("例如浮点运算备受设计到大量临时对象的创建以及销毁，这则意味着大量内存分配回收操作")])]),t._v(" "),s("li",[s("p",[t._v("因此Python在浮点对象销毁后，并不马上回收内存，而是将其加入一个空闲链表，后续需要创建浮点对象时，先到空闲链表中取，省去分配内存的开销。")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numfree "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" PyFloat_MAXFREELIST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PyObject_FREE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nnumfree"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Py_TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_typeobject")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("free_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfree_list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" op"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("空闲链表定义在"),s("code",[t._v("Objects/floatobject.c")]),t._v("​中")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifndef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("PyFloat_MAXFREELIST")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("PyFloat_MAXFREELIST")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\t")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最大长度")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" numfree "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前长度")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" PyFloatObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("free_list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链表头部")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("为了保持简洁，Python 把 ob_type 字段当作 next 指针来用，将空闲对象串成链表")]),t._v(" "),s("p",[t._v("​"),s("img",{attrs:{src:"https://assets.b3logfile.com/siyuan/xxxxxx/assets/image-20230207191551-d60wiqx.png",alt:"image"}}),t._v("​")])])])])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"对象的行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象的行为"}},[t._v("#")]),t._v(" 对象的行为")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("PyFloat_Type 中定义了很多函数指针，包括 tp_repr 、 tp_str 、 tp_hash 等，这些函数指针将一起决定 float 对象的行为。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("例如tp_hash 函数决定浮点哈希值的计算，tp_hash 函数指针指向 float_hash 函数，实现了针对浮点对象的哈希值算法：")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Py_hash_t\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("float_hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PyFloatObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_Py_HashDouble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("ob_fval"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("‍")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);