(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{579:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"项目部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目部署"}},[t._v("#")]),t._v(" 项目部署")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("一般都是使用docker容器来解决环境问题。至于web项目还需要考虑一下使用什么作为服务器。")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("python项目Dockefiles示例：")]),t._v(" "),s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" python:3.9-alpine")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /data/project")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" requirements.txt ./")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apk add --update --no-cache curl jq py3-configobj py3-pip py3-setuptools python3 python3-dev "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n  && apk add --no-cache gcc g++ jpeg-dev zlib-dev libc-dev libressl-dev musl-dev libffi-dev "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n  && python -m pip install --upgrade pip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n  && pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n  && pip install -r requirements.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n  && apk del gcc g++ libressl-dev musl-dev libffi-dev python3-dev "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n  && apk del curl jq py3-configobj py3-pip py3-setuptools "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n  && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n  && echo "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asia/Shanghai'")]),t._v(" >/etc/timezone  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n  && rm -rf /var/cache/apk/*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . .")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 8000 8000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" ["),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start_server.py"')]),t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);