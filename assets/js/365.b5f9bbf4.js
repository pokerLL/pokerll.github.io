(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{642:function(n,e,s){"use strict";s.r(e);var a=s(14),t=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"元类应用典型案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元类应用典型案例"}},[n._v("#")]),n._v(" 元类应用典型案例")]),n._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://applenob.github.io/python/metaclass/",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://applenob.github.io/python/metaclass/ - Javen Chen's Blog"),e("OutboundLink")],1)])]),n._v(" "),e("p",[n._v("‍")]),n._v(" "),e("h2",{attrs:{id:"元类应用典型案例-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元类应用典型案例-2"}},[n._v("#")]),n._v(" 元类应用典型案例")]),n._v(" "),e("h3",{attrs:{id:"singleton单例模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#singleton单例模式"}},[n._v("#")]),n._v(" Singleton单例模式")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('class SingletonMeta(type):\n    instance = None\n    def __call__(cls, *args, **kwargs):\n        if cls.instance is None:\n            cls.instance = super(SingletonMeta, cls).__call__(*args, **kwargs)\n        return cls.instance\n\n\nclass CurrentUser(object, metaclass=SingletonMeta):\n    def __init__(self, name=None):\n        super(CurrentUser, self).__init__()\n        self.name = name\n\n    def __str__(self):\n        return repr(self) + ":" + repr(self.name)\n\n\nif __name__ == \'__main__\':\n    u = CurrentUser("liu")\n    print(u)\n    u2 = CurrentUser()\n    u2.name = "xin"\n    print(u2)\n    print(u)\n    assert u is u2\n')])])]),e("p",[n._v("注：代码来自 "),e("a",{attrs:{href:"https://github.com/Meteorix/python-design-patterns",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://github.com/Meteorix/python-design-patterns"),e("OutboundLink")],1),n._v(" 。")]),n._v(" "),e("p",[n._v("这里重载的是"),e("code",[n._v("type")]),n._v("​的"),e("code",[n._v("call")]),n._v("​方法。改变了​"),e("strong",[n._v("用户类实例化的行为")]),n._v("​，使其只能得到唯一的实例。")]),n._v(" "),e("h3",{attrs:{id:"简易orm框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简易orm框架"}},[n._v("#")]),n._v(" 简易ORM框架")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class Field(object):\n    def __init__(self, name, column_type):\n        self.name = name\n        self.column_type = column_type\n\n    def __str__(self):\n        return '<%s:%s>' % (self.__class__.__name__, self.name)\n\n\nclass StringField(Field):\n    def __init__(self, name):\n        super().__init__(name, 'varchar(100)')\n\n\nclass IntegerField(Field):\n    def __init__(self, name):\n        super().__init__(name, 'bigint')\n\n\nclass ModelMetaclass(type):\n    def __new__(cls, name, bases, attrs):\n        if name == 'Model':\n            return type.__new__(cls, name, bases, attrs)\n        print('Found model: %s' % name)\n        mappings = dict()\n        for k, v in attrs.items():\n            if isinstance(v, Field):\n                print('Found mapping: %s ==> %s' % (k, v))\n                mappings[k] = v\n        for k in mappings.keys():\n            attrs.pop(k)\n        attrs['__mappings__'] = mappings  # 保存属性和列的映射关系\n        attrs['__table__'] = name  # 假设表名和类名一致\n        return type.__new__(cls, name, bases, attrs)\n\n\nclass Model(dict, metaclass=ModelMetaclass):\n    def __init__(self, **kw):\n        super(Model, self).__init__(**kw)\n\n    def __getattr__(self, key):\n        try:\n            return self[key]\n        except KeyError:\n            raise AttributeError(r\"'Model' object has no attribute '%s'\" % key)\n\n    def __setattr__(self, key, value):\n        self[key] = value\n\n    def save(self):\n        fields = []\n        params = []\n        args = []\n        for k, v in self.__mappings__.items():\n            fields.append(v.name)\n            params.append('?')\n            args.append(getattr(self, k, None))\n        sql = 'insert into %s (%s) values (%s)' % (self.__table__, ','.join(fields), ','.join(params))\n        print('SQL: %s' % sql)\n        print('ARGS: %s' % str(args))\n\n\nclass User(Model):\n    # 定义类的属性到列的映射：\n    id = IntegerField('id')\n    name = StringField('username')\n    email = StringField('email')\n    password = StringField('password')\n\n\n# 创建一个实例：\nu = User(id=12345, name='Michael', email='test@orm.org', password='my-pwd')\n# 保存到数据库：\nu.save()\n\n# 输出\n\"\"\"\nFound model: User\nFound mapping: id ==> <IntegerField:id>\nFound mapping: name ==> <StringField:username>\nFound mapping: email ==> <StringField:email>\nFound mapping: password ==> <StringField:password>\nSQL: insert into User (id,username,email,password) values (?,?,?,?)\nARGS: [12345, 'Michael', 'test@orm.org', 'my-pwd']\n\"\"\"\n")])])]),e("p",[n._v("注：代码来自 "),e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1016959663602400/1017592449371072",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.liaoxuefeng.com/wiki/1016959663602400/1017592449371072"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("这里重载的是"),e("code",[n._v("type")]),n._v("​的"),e("code",[n._v("new")]),n._v("​方法，因此改变的是​"),e("strong",[n._v("用户类在定义时的行为")]),n._v("​。这里用户类是一个数据模型，元类编程做的是在用户定义一个数据模型类的时候，把所有是"),e("code",[n._v("Field")]),n._v("​类型的属性收集起来，统一放到"),e("code",[n._v("mapping")]),n._v("​属性中。这样基类的方法"),e("code",[n._v("save")]),n._v("​可以直接通过"),e("code",[n._v("mapping")]),n._v("​属性来保存需要保存的"),e("code",[n._v("Field")]),n._v("​属性们。")]),n._v(" "),e("h3",{attrs:{id:"yamlobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yamlobject"}},[n._v("#")]),n._v(" YAMLObject")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class YAMLObjectMetaclass(type):\n  def __init__(cls, name, bases, kwds):\n    super(YAMLObjectMetaclass, cls).__init__(name, bases, kwds)\n    if 'yaml_tag' in kwds and kwds['yaml_tag'] is not None:\n      cls.yaml_loader.add_constructor(cls.yaml_tag, cls.from_yaml)\n  # 省略其余定义\n  \nclass YAMLObject(metaclass=YAMLObjectMetaclass):\n    yaml_loader = Loader\n\n# 使用\nclass Monster(yaml.YAMLObject):\n  yaml_tag = u'!Monster'\n  def __init__(self, name, hp, ac, attacks):\n    self.name = name\n    self.hp = hp\n    self.ac = ac\n    self.attacks = attacks\n  def __repr__(self):\n    return \"%s(name=%r, hp=%r, ac=%r, attacks=%r)\" % (\n       self.__class__.__name__, self.name, self.hp, self.ac,    \n       self.attacks)\n\nyaml.load(\"\"\"\n--- !Monster\nname: Cave spider\nhp: [2,6]    # 2d6\nac: 16\nattacks: [BITE, HURT]\n\"\"\")\n\nMonster(name='Cave spider', hp=[2, 6], ac=16, attacks=['BITE', 'HURT'])\n\nprint yaml.dump(Monster(\n    name='Cave lizard', hp=[3,6], ac=16, attacks=['BITE','HURT']))\n\n# 输出\n\"\"\"\n!Monster\nac: 16\nattacks: [BITE, HURT]\nhp: [3, 6]\nname: Cave lizard\n\"\"\"\n")])])]),e("p",[n._v("这里重载的是"),e("code",[n._v("type")]),n._v("​的"),e("code",[n._v("init")]),n._v("​方法，因此改变的是​"),e("strong",[n._v("用户类在定义时的行为")]),n._v("​。在定义了用户类"),e("code",[n._v("Monster")]),n._v("​时，便通过"),e("code",[n._v("cls.yaml_loader.add_constructor(cls.yaml_tag, cls.from_yaml)")]),n._v("​将"),e("code",[n._v("Monster")]),n._v("​类注册到系统。")]),n._v(" "),e("h3",{attrs:{id:"pytext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pytext"}},[n._v("#")]),n._v(" PyText")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('class ComponentMeta(type):\n    def __new__(metacls, typename, bases, namespace):\n        if "Config" not in namespace:\n            # We need to dynamically create a new Config class per\n            # instance rather than inheriting a single empty config class\n            # because components are registered uniquely by config class.\n            # If a parent class specifies a config class, inherit from it.\n            parent_config = next(\n                (base.Config for base in bases if hasattr(base, "Config")), None\n            )\n            if parent_config is not None:\n\n                class Config(parent_config):\n                    pass\n\n            else:\n\n                class Config(ConfigBase):\n                    pass\n\n            namespace["Config"] = Config\n\n        component_type = next(\n            (\n                base.__COMPONENT_TYPE__\n                for base in bases\n                if hasattr(base, "__COMPONENT_TYPE__")\n            ),\n            namespace.get("__COMPONENT_TYPE__"),\n        )\n        new_cls = super().__new__(metacls, typename, bases, namespace)\n\n        new_cls.Config.__COMPONENT_TYPE__ = component_type\n        new_cls.Config.__name__ = f"{typename}.Config"\n        new_cls.Config.__COMPONENT__ = new_cls\n        new_cls.Config.__EXPANSIBLE__ = namespace.get("__EXPANSIBLE__")\n        if component_type:\n            Registry.add(component_type, new_cls, new_cls.Config)\n        return new_cls\n')])])]),e("p",[n._v("这里重载的是"),e("code",[n._v("type")]),n._v("​的"),e("code",[n._v("new")]),n._v("​方法，因此改变的是​"),e("strong",[n._v("用户类在定义时的行为")]),n._v("​。在定义了用户组件类时，便通过"),e("code",[n._v("Registry.add(component_type, new_cls, new_cls.Config)")]),n._v("​将该组件类注册到系统。")])])}),[],!1,null,null,null);e.default=t.exports}}]);