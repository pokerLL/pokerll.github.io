(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{396:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"setuptools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setuptools"}},[t._v("#")]),t._v(" setuptools")]),t._v(" "),s("p",[t._v("​#TODO#​整理")]),t._v(" "),s("p",[t._v("Python setuptools 是一个用于构建、打包和分发 Python 软件包的工具集。它提供了一种方便的方式来管理 Python 项目的依赖关系、版本控制和分发。setuptools 通常与 Python 的包管理工具 "),s("code",[t._v("pip")]),t._v("​ 和包管理文件 "),s("code",[t._v("setup.py")]),t._v("​ 一起使用，以简化 Python 软件包的开发和分发过程。")]),t._v(" "),s("p",[t._v("以下是 setuptools 的一些主要功能和概念：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("安装依赖关系")]),t._v("：setuptools 允许你在 "),s("code",[t._v("setup.py")]),t._v("​ 文件中定义你的项目所需的依赖关系。这些依赖关系可以包括其他 Python 模块、库或特定版本的软件包。")]),t._v(" "),s("li",[s("strong",[t._v("打包项目")]),t._v("：通过运行 "),s("code",[t._v("python setup.py sdist")]),t._v("​ 命令，你可以将你的项目打包成一个源分发包 (source distribution)，其中包含项目的源代码和其他必要文件。这是将项目分享给其他开发者或用户的一种常见方式。")]),t._v(" "),s("li",[s("strong",[t._v("安装项目")]),t._v("：使用 "),s("code",[t._v("python setup.py install")]),t._v("​ 命令，你可以将项目安装到本地 Python 环境中，使其可供其他项目引用和使用。你还可以使用 "),s("code",[t._v("pip")]),t._v("​ 来安装项目，pip 可以自动解析和安装项目的依赖项。")]),t._v(" "),s("li",[s("strong",[t._v("生成可执行文件")]),t._v("：setuptools 还支持将 Python 脚本转换为可执行的命令行工具。你可以使用 "),s("code",[t._v("entry_points")]),t._v("​ 字段在 "),s("code",[t._v("setup.py")]),t._v("​ 文件中定义这些可执行文件。")]),t._v(" "),s("li",[s("strong",[t._v("版本控制")]),t._v("：setuptools 允许你为你的项目指定版本号，并在需要时更新版本。这对于管理项目的不同版本以及与其他项目的兼容性非常重要。")]),t._v(" "),s("li",[s("strong",[t._v("上传到 PyPI")]),t._v("：PyPI（Python Package Index）是 Python 社区的中央软件包仓库。setuptools 提供了命令来将你的软件包上传到 PyPI，以便其他人可以轻松地安装和使用你的项目。")])]),t._v(" "),s("p",[t._v("下面是一个简单的 "),s("code",[t._v("setup.py")]),t._v("​ 文件的示例：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" setuptools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" find_packages\n\nsetup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myproject'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    packages"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("find_packages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    install_requires"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'requests'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'numpy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entry_points"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'console_scripts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mycommand = myproject.my_module:main_function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("要使用 setuptools，你需要首先安装它，然后在项目目录中创建一个 "),s("code",[t._v("setup.py")]),t._v("​ 文件，并在其中定义你的项目信息和依赖关系。然后，你可以使用不同的 setuptools 命令来构建、打包和分发你的项目。这使得 Python 软件包的管理变得更加方便和标准化。")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("packages=find_packages()")]),t._v("​ 是在使用 setuptools 构建 Python 软件包时的一个常用参数。它用于指定哪些包应该包含在你的软件包中。这个参数通常在 "),s("code",[t._v("setup.py")]),t._v("​ 文件中使用，它的作用是动态地查找项目目录中的 Python 包，并将它们添加到软件包中。")]),t._v(" "),s("p",[t._v("具体来说，"),s("code",[t._v("find_packages()")]),t._v("​ 函数会在项目目录中递归查找所有包含一个 "),s("code",[t._v("__init__.py")]),t._v("​ 文件的目录，并返回一个包含这些包的列表。这意味着你不需要手动列出每个包的名称，而是可以自动获取项目目录中的所有包。")]),t._v(" "),s("p",[t._v("例如，如果你的项目目录结构如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("myproject/\n    ├── setup.py\n    ├── mymodule.py\n    ├── mypackage/\n    │   ├── __init__.py\n    │   ├── module1.py\n    │   └── module2.py\n    └── anotherpackage/\n        ├── __init__.py\n        └── module3.py\n")])])]),s("p",[t._v("在 "),s("code",[t._v("setup.py")]),t._v("​ 中使用 "),s("code",[t._v("find_packages()")]),t._v("​ 将会自动发现并包含 "),s("code",[t._v("mypackage")]),t._v("​ 和 "),s("code",[t._v("anotherpackage")]),t._v("​，无需手动指定它们的名称。这样可以确保你的软件包包含了项目中的所有 Python 包，使其更加灵活和容易维护。")]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" setuptools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" find_packages\n\nsetup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myproject'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    packages"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("find_packages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 其他参数...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("​"),s("code",[t._v("find_packages()")]),t._v("​ 通常与 "),s("code",[t._v("packages")]),t._v("​ 参数一起使用，以确保所有发现的包都被包含在软件包中。这样，当你安装或分发软件包时，所有的代码和模块都会被正确地包含在其中。")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("entry_points")]),t._v("​ 参数是 Python setuptools 中的一个功能，它用于将 Python 脚本或函数转化为可执行的命令行工具。通过定义 "),s("code",[t._v("entry_points")]),t._v("​，你可以在安装软件包时创建命令行工具，使其可从命令行中直接调用。")]),t._v(" "),s("p",[t._v("具体来说，"),s("code",[t._v("entry_points")]),t._v("​ 参数是一个字典，其中键表示入口点的类型（entry point type），通常使用 "),s("code",[t._v("'console_scripts'")]),t._v("​ 来定义命令行工具。值是一个列表，其中包含了一个或多个字符串，每个字符串定义了一个可执行命令的名称和对应的 Python 函数或模块。")]),t._v(" "),s("p",[t._v("以下是一个示例 "),s("code",[t._v("entry_points")]),t._v("​ 的定义：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("entry_points"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'console_scripts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mycommand = myproject.my_module:main_function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'anothercommand = myproject.another_module:execute_function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("在这个示例中，我们定义了两个命令行工具：")]),t._v(" "),s("ol",[s("li",[t._v("​"),s("code",[t._v("mycommand")]),t._v("​：它将调用 "),s("code",[t._v("myproject.my_module")]),t._v("​ 模块中的 "),s("code",[t._v("main_function")]),t._v("​ 函数。")]),t._v(" "),s("li",[t._v("​"),s("code",[t._v("anothercommand")]),t._v("​：它将调用 "),s("code",[t._v("myproject.another_module")]),t._v("​ 模块中的 "),s("code",[t._v("execute_function")]),t._v("​ 函数。")])]),t._v(" "),s("p",[t._v("当用户在命令行中运行 "),s("code",[t._v("mycommand")]),t._v("​ 或 "),s("code",[t._v("anothercommand")]),t._v("​ 时，实际上会触发相应的 Python 函数。这使得你可以将常用的操作封装为命令行工具，方便用户使用。")]),t._v(" "),s("p",[t._v("在安装软件包时，setuptools 会自动创建这些命令并将它们添加到系统的可执行路径中，使其可以全局调用。")]),t._v(" "),s("p",[t._v("总之，"),s("code",[t._v("entry_points")]),t._v("​ 参数使你能够轻松地将 Python 函数或模块转换为命令行工具，增加了软件包的灵活性和可用性。")])])}),[],!1,null,null,null);s.default=e.exports}}]);