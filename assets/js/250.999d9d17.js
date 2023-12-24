(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{529:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"协程-asyncio、gevent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协程-asyncio、gevent"}},[t._v("#")]),t._v(" 协程-Asyncio、Gevent")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.python.org/3/library/asyncio-task.html#coroutine",target:"_blank",rel:"noopener noreferrer"}},[t._v("协程 Python官方教程 -en"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("协程"),s("code",[t._v("coroutine")]),t._v("​，"),s("code",[t._v("coroutine")]),t._v("​其实是"),s("code",[t._v("corporate routine")]),t._v("​的缩写，直译为协同的例程，简称为协程。协程是 python 中另外一种实现多任务的方式，只不过比线程更小占用更小执行单元（理解为需要的资源）。 为啥说它是一个执行单元，因为它自带 CPU 上下文。这样只要在合适的时机， 我们可以把一个协程 切换到另一个协程。 只要这个过程中保存或恢复 CPU 上下文那么程序还是可以运行的。")]),t._v(" "),s("p",[t._v("通俗的理解：在一个线程中的某个函数，可以在任何地方保存当前函数的一些临时变量等信息，然后切换到另外一个函数中执行，注意不是通过调用函数的方式做到的，并且切换的次数以及什么时候再切换到原来的函数都由开发者自己确定。")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h3",{attrs:{id:"协程和线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协程和线程"}},[t._v("#")]),t._v(" 协程和线程")]),t._v(" "),s("p",[t._v("在实现多任务时，线程切换从系统层面远不止保存和恢复 CPU上下文这么简单。 操作系统为了程序运行的高效性每个线程都有自己缓存 Cache 等数据，操作系统还会帮你做这些数据的恢复操作。 所以线程的切换非常耗性能。但是 协程的切换只是单纯的操作 CPU 的上下文，所以一秒钟切换个上百万次系统都抗的住。因此 "),s("strong",[t._v("Asyncio 内部任务切换的损耗，远比线程切换的损耗要小")]),t._v("。")]),t._v(" "),s("p",[t._v("同时多线程有诸多优点且应用广泛，但也存在一定的局限性：")]),t._v(" "),s("ul",[s("li",[t._v("比如，多线程运行过程容易被打断，因此有可能出现 race condition 的情况；")]),t._v(" "),s("li",[t._v("再如，线程切换本身存在一定的损耗，线程数不能无限增加，因此，如果你的 I/O 操作非常 heavy，多线程很有可能满足不了高效率、高质量的需求。")])]),t._v(" "),s("p",[t._v("正是为了解决这些问题，Asyncio 应运而生。")]),t._v(" "),s("p",[t._v("对于 Asyncio 来说，它的任务在运行时不会被外部的一些因素打断，因此 ** Asyncio 内的操作不会出现 race condition 的情况，这样你就不需要担心线程安全的问题了**。")]),t._v(" "),s("p",[t._v("Asyncio 可以开启的任务数量，也比多线程中的线程数量多得多。")]),t._v(" "),s("p",[t._v("但是，协程本身也有一定的缺陷：一方面，想用好 Asyncio，特别是发挥其强大的功能，很多情况下必须得有相应的 Python 库支持；另一方面，使用 Asyncio 时，因为你在任务的调度方面有了更大的自主权，写代码时就得更加注意，不然很容易出错。")]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h3",{attrs:{id:"协程和线程-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协程和线程-2"}},[t._v("#")]),t._v(" 协程和线程")]),t._v(" "),s("p",[t._v("进程与协程有什么异同点呢？")]),t._v(" "),s("p",[t._v("进程与协程都可以看作是一种执行流，执行流可以挂起，后续可以在挂起的位置恢复执行。")]),t._v(" "),s("p",[t._v("例如：在Linux的Shell中执行Hello程序")]),t._v(" "),s("p",[t._v("开始时Shell进程在运行并等待命令行的输入，当执行Hello程序时，Shell通过系统调用来执行请求，此时系统调用会将控制权传递给操作系统，操作系统保存Shell进程的上下文并创建Hello进程以及上下文并将控制权交给Hello进程。当Hello进程终止后操作系统恢复Shell进程的上下文，并将控制权传回给Shell进程，Shell进程继续等待下一个命令的输入。")]),t._v(" "),s("p",[t._v("​"),s("img",{attrs:{src:"assets/4933701-33254d94554217a7-20220929162306-b3md88u.png",alt:""}}),t._v("​")]),t._v(" "),s("p",[t._v("进程与协程相同点")]),t._v(" "),s("p",[t._v("当挂起一个执行流时，此时需要保存两样东西，其一是栈，其实在切换前局部变量以及函数的调用都需要保存否则将无法恢复，其二是寄存器状态，寄存器状态用于当执行流恢复后需要执行什么。寄存器和栈的结合可以理解为上下文，上下文切换的理解是CPU看上去像是在并行执行多个进程，这其实是通过CPU在进程间切换来实现的，操作系统实现这种交错执行的机制称为上下文切换。操作系统保存跟踪进程运行所需的所有状态信息，这种状态就是上下文。在任意时刻操作系统只能执行一个进程代码，当操作系统决定将控制权从当前进程转移到某个进程时，就会进行上下文切换，也就是保存当前进程的上下文，并恢复新进程的上下文。然后将控制权传递给新进程，新进程从从它上次停止的地方开始。")]),t._v(" "),s("p",[t._v("进程与协程的不同点在于")]),t._v(" "),s("ul",[s("li",[t._v("执行流的调用者不同，进程是内核调度，而协程是用户态调度，也就是说进程的上下文是在内核态中保存并恢复的，而协程是在用户态保存恢复的，很显然用户态的代价要跟低。")]),t._v(" "),s("li",[t._v("进程会被强占，而协程不会。也就是说协程如果不主动让出CPU，那么其他协程就没有执行的机会。")]),t._v(" "),s("li",[t._v("对内存的占用不同，协程只需要4KB的栈空间就足够了，而进程占用的内存要大的多。")]),t._v(" "),s("li",[t._v("从操作系统角度讲，多协程的程序是单进程单协程的。")])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"单线程-异步io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单线程-异步io"}},[t._v("#")]),t._v(" 单线程+异步IO")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("现代操作系统基本都支持异步IO - 操作系统基础")])]),t._v(" "),s("li",[s("p",[t._v("协程就是单线程+异步IO的编程模型")])]),t._v(" "),s("li",[s("p",[t._v("协程执行效率比多线程高很多")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("子程序切换")]),t._v("不是线程切换而是"),s("strong",[t._v("程序自身控制")]),t._v("，因此没有线程切换的开销")]),t._v(" "),s("li",[t._v("协程不需要多线程的锁机制-"),s("strong",[t._v("只存在一个线程")]),t._v("，因此消耗变少")])])]),t._v(" "),s("li",[s("blockquote",[s("p",[t._v("实际上我觉得可以把协程理解为 用户态多线程+协作")])])])]),t._v(" "),s("p",[t._v("‍")]),t._v(" "),s("h2",{attrs:{id:"协程的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协程的实现"}},[t._v("#")]),t._v(" 协程的实现")]),t._v(" "),s("h3",{attrs:{id:"yield"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yield"}},[t._v("#")]),t._v(" Yield")]),t._v(" "),s("p",[t._v("Python对协程的支持是非常有限的，使用生成器"),s("code",[t._v("generator")]),t._v("​中的"),s("code",[t._v("yield")]),t._v("​可以一定程序上实现协程。比如传统的生产者-消费者模型，即一个线程写消息一个线程读消息，通过锁机制控制队列和等待，但一不小心就可能出现死锁。如果改用协程，生产者生产消息后直接通过"),s("code",[t._v("yield")]),t._v("​跳转到消费者并开始执行，等消费者执行完毕后再切换回生产者继续生产，这样做效率极高。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" r\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"consumer %s"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200 OK"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("producer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__next__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"producer %s"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"producer return %s\\n"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" consumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    producer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ python3 test.py\nproducer "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nconsumer "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nproducer "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\n\nproducer "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nconsumer "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nproducer "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\n\nproducer "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nconsumer "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nproducer "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\n")])])]),s("p",[t._v("代码分析：首先调用"),s("code",[t._v("c.__next__()")]),t._v("​启动生成器，一旦生产出东西，则通过"),s("code",[t._v("c.send(n)")]),t._v("​切换到消费者"),s("code",[t._v("consumer")]),t._v("​来执行，消费者"),s("code",[t._v("consumer")]),t._v("​通过"),s("code",[t._v("yield")]),t._v("​获取到消息后处理，然后通过"),s("code",[t._v("yield")]),t._v("​将结果传回。生产者"),s("code",[t._v("producer")]),t._v("​获取到消费者"),s("code",[t._v("consumer")]),t._v("​处理的结果后继续生产下一条消息。整个过程无锁，由一个线程执行，生产者和消费者协作完成任务，所以称之为协程。")]),t._v(" "),s("p",[t._v("Python通过"),s("code",[t._v("yield")]),t._v("​提供了对协程的基本支持，但并不完全。而第三方的Gevent为Python提供了比较完善的协程支持，Gevent是第三方库，可通过Greenlet实现协程。另外，Python中由于GIL的存在导致多线程一直不是很好用，相比之下，协程的优势就更加突出了。")]),t._v(" "),s("h3",{attrs:{id:"asyncio老式写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asyncio老式写法"}},[t._v("#")]),t._v(" Asyncio老式写法")]),t._v(" "),s("p",[t._v("python3.4中引入标准库"),s("code",[t._v("asyncio")]),t._v("​用于实现对异步IO的支持。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coroutine")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world! (%s)'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" threading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello again! (%s)'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" threading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# loop是调度器")]),t._v("\nloop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_event_loop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntasks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nloop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_until_complete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nloop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("Hello world! "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("_MainThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" started "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("140735195337472")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nHello world! "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("_MainThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" started "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("140735195337472")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("暂停约"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("秒"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nHello again! "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("_MainThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" started "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("140735195337472")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nHello again! "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("_MainThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MainThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" started "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("140735195337472")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"async-和-await"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#async-和-await"}},[t._v("#")]),t._v(" Async 和 Await")]),t._v(" "),s("p",[t._v("Async 和 Await 关键字是 Asyncio 的最新写法，表示这个语句 / 函数是 non-block 的，正好对应前面所讲的 event loop 的概念。如果任务执行的过程需要等待，则将其放入等待状态的列表中，然后继续执行预备状态列表里的任务。")]),t._v(" "),s("p",[t._v("await 执行的效果，和 Python 正常执行是一样的，也就是说程序会阻塞在这里，进入被调用的协程函数，执行完毕返回后再继续。")]),t._v(" "),s("p",[t._v("开发者要提前知道一个任务的哪个环节会造成I/O阻塞，然后把这个环节的代码异步化处理，并且通过await来标识在任务的该环节中断该任务执行，从而去执行下一个事件循环任务。这样可以充分利用CPU资源，避免CPU等待I/O造成CPU资源白白浪费。当之前任务的那个环节的I/O完成后，线程可以从await获取返回值，然后继续执行没有完成的剩余代码。")]),t._v(" "),s("p",[t._v("由上面分析可知，如果一个任务不涉及到网络或磁盘I/O这种耗时的操作，而只有CPU计算和内存I/O的操作时，协程并发的性能还不如单线程loop循环的性能高。")]),t._v(" "),s("blockquote",[s("p",[t._v("协程间切换的代价")])]),t._v(" "),s("p",[t._v("协程里面重要的是一个关键字await的理解，async表示其修饰的是协程任务即task，await表示的是当线程执行到这一句，此时该task在此处挂起，然后调度器去执行其他的task，当这个挂起的部分处理完，会调用回掉函数告诉调度器我已经执行完了，那么调度器就返回来处理这个task的余下语句。")]),t._v(" "),s("p",[t._v("从Python 3.5开始引入了新的语法async和await分别替代@asyncio.coroutine装饰器标志和yield from语句，可以让coroutine的代码更简洁易读，原代码可变更如下：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world! (%s)'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" threading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello again! (%s)'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" threading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentThread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nloop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_event_loop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntasks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nloop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_until_complete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asyncio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nloop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"greenlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#greenlet"}},[t._v("#")]),t._v(" greenlet")]),t._v(" "),s("p",[t._v("为了更好使用协程来完成多任务，"),s("code",[t._v("python")]),t._v("​ 中的 "),s("code",[t._v("greenlet")]),t._v("​ 模块对其封装，从而使得切换任务变的更加简单")]),t._v(" "),s("p",[t._v("首先安装 "),s("code",[t._v("greenlet")]),t._v("​ 模块:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" greenlet\n")])])]),s("p",[t._v("代码演示：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" greenlet "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" greenlet\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("task1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"---A--"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        gr2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到gr2中运行")]),t._v("\n        time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("task2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"---B--"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        gr1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到gr2中运行")]),t._v("\n        time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  \ngr1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" greenlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngr2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" greenlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#切换到gr1中运行")]),t._v("\ngr1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("switch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---A--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---B--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---A--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---B--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---A--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---B--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---A--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ---B--")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...省略...")]),t._v("\n")])])]),s("h3",{attrs:{id:"gevent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gevent"}},[t._v("#")]),t._v(" gevent")]),t._v(" "),s("p",[t._v("greenlet 已经实现了协程，但是这个还的人工切换，是不是觉得太麻烦了，不要着急，python还有一个比greenlet更强大的并且能够 自动切换任务 的模块 gevent")]),t._v(" "),s("p",[t._v("其原理是"),s("strong",[t._v("当一个 greenlet 遇到 IO操作(指的是input output 输入输出，比如网络、文件操作等)时，比如访问网络，就自动切换到其他的 greenlet，等到 IO操作 完成，再在适当的时候切换回来继续执行")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("注意没有IO操作时会依次运行-不切换")])]),t._v(" "),s("p",[t._v("由于 IO操作 非常耗时，经常使程序处于等待状态，有了 gevent 为我们自动切换协程，就保证总有 greenlet在运行，而不是等待 IO")]),t._v(" "),s("p",[t._v("Gevent是一种基于协程的Python网络库，使用Greenlet提供并封装了"),s("code",[t._v("libevent")]),t._v("​事件循环的高层同步API，使开发者在不改变编程习惯的同时，以同步的方式编写异步IO代码。简单来说，Gevent是基于"),s("code",[t._v("libev")]),t._v("​和Greenlet的一个异步的Python框架。")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("libev")]),t._v("​是一个高性能的事件循环"),s("code",[t._v("event loop")]),t._v("​实现。事件循环（IO多路复用）是解决阻塞问题实现并发的一种方式。事件循环"),s("code",[t._v("event loop")]),t._v("​会捕获并处理IO事件的变化，当遇到阻塞时就会跳出，当阻塞结束时则会继续。这一点依赖于操作系统底层的"),s("code",[t._v("select")]),t._v("​函数及其升级版"),s("code",[t._v("poll")]),t._v("​和"),s("code",[t._v("epoll")]),t._v("​。而Greenlet则是一个Python的协程管理和切换的模块，通过Greenlet可以显式地在不同的任务之间进行切换。")]),t._v(" "),s("p",[t._v("Libev")]),t._v(" "),s("p",[t._v("Gevent的基本原理来自于"),s("code",[t._v("libevent")]),t._v("​&"),s("code",[t._v("libev")]),t._v("​，熟悉C语言的同学应该对这个"),s("code",[t._v("lib")]),t._v("​不陌生。本质上"),s("code",[t._v("libevent")]),t._v("​或者说"),s("code",[t._v("libev")]),t._v("​都是一种事件驱动模型。这种模型对于提高CPU的运行效率，增强用户的并发访问非常有效。但因为其本身是一种事件机制，所以编写起来有些绕，并不是很直观。因此为了修正这个问题，有人引入了用户态上下文切换机制，也就是说，如果代码中引入了带IO阻塞的代码时，"),s("code",[t._v("lib")]),t._v("​本身会自动完成上下文的切换，全程用户都是没有察觉的，这又是Gevent的由来。")]),t._v(" "),s("p",[t._v("Libev是高性能事件循环模型的网络库，包含大量新特性，是继"),s("code",[t._v("libevent")]),t._v("​之后的一套全新的网络库。"),s("code",[t._v("libev")]),t._v("​追求的目标是速度更快、bug更少、特性更多、体积更小。和"),s("code",[t._v("libevent")]),t._v("​类似，可以作为其替代者，提供更高的性能且无需复杂的配置。")]),t._v(" "),s("p",[t._v("​"),s("code",[t._v("libev")]),t._v("​机制提供了对指定文件描述符发生时调用回调函数的机制，"),s("code",[t._v("libev")]),t._v("​是一个事件循环器，向"),s("code",[t._v("libev")]),t._v("​注册感兴趣的事件，比如Socket可读事件，"),s("code",[t._v("libev")]),t._v("​会对所注册的事件的源进行管理，并在事件发生时出发相应的程序。")]),t._v(" "),s("p",[t._v("Greenlet")]),t._v(" "),s("p",[t._v("Greenlet是指使用一个任务调度器和一些生成器或协程实现协作式用户空间多线程的一种伪并发机制，也就是所谓的微线程。Greenlet机制的主要思想是生成器函数或协程函数中的"),s("code",[t._v("yield")]),t._v("​语句挂起函数的执行，直到稍后使用"),s("code",[t._v("next()")]),t._v("​或"),s("code",[t._v("send()")]),t._v("​操作进行恢复为止。可以使用一个调度器循环在一组生成器函数在将协作多个任务。")]),t._v(" "),s("p",[t._v("既然Gevent使用的是Greenlet，因此需要理解Greenlet的工作原理：每个协程都有一个"),s("code",[t._v("parent")]),t._v("​，最顶层的协程是"),s("code",[t._v("man thread")]),t._v("​或者是当前线程，每个协程遇到IO时会见控制权交给最顶层的协程，它会检测到哪个协程的IO Event已经完成并将控制权交给它。")]),t._v(" "),s("p",[s("img",{attrs:{src:"assets/4933701-f25d039da8c44245-20220929162306-we2lqkl.png",alt:""}}),t._v("​")]),t._v(" "),s("p",[t._v("Greenlet")]),t._v(" "),s("p",[t._v("Greenlet的基本思路是：当一个Greenlet遇到IO操作时，比如访问网络时会自动切换到其它的Greenlet，等到IO操作完成，再在适当的时候切换回来继续执行。由于IO操作非常耗时，经常会使程序处于等待状态，有了Gevent自动切换协程，就保证总有Greenlet在运行，而不是等待IO。由于切换是在IO操作时自动完成，所以Gevent需要修改Python自带的标准库，这一过程在启动时通过"),s("code",[t._v("monkey patch")]),t._v("​猴子补丁来完成。")]),t._v(" "),s("p",[t._v("Swich")]),t._v(" "),s("p",[t._v("一个Greenlet是一个很小的独立微线程，可以把它想象成一个堆栈帧，栈底是初始调用，栈顶是当前Greenlet的暂停位置，使用Greenlet创建一堆这样的堆栈，然后在它们之间跳转执行。跳转并不是绝对的，因为一个Greenlet必须选择跳转到选择好的另一个Greenlet，这会让前一个挂起，而后一个恢复，两个Greenlet之间的跳转又被称之为切换"),s("code",[t._v("switch")]),t._v("​。当创建一个Greenlet时它会得到一个初始化过的空堆栈，当第一次切换到它时会启动指定的函数，然后切换跳出Greenlet，当最终栈底函数结束时，Greenlet的堆栈又会变成空的，而Greenlet也就死掉了。当然，Greenlet也会因为一个未捕获的异常而死掉。")]),t._v(" "),s("p",[t._v("Monkey-patching")]),t._v(" "),s("p",[t._v("Monkey-patching猴子补丁这个叫法源自于Zope框架，大家在修正Zope的Bug时经常会在程序后追加更新部分，这些被称作“杂牌军补丁（guerillapatch）”，后来"),s("code",[t._v("guerilla")]),t._v("​逐渐写成了"),s("code",[t._v("gorllia")]),t._v("​（猩猩），再后来就写成了"),s("code",[t._v("monkey")]),t._v("​（猴子），所以猴子补丁的叫法就这么莫名其妙的得来了。之后在动态语言中，不改变源代码而对功能进行追加和变更就统称为“猴子补丁”。所以猴子补丁并不是Python中专有的，猴子补丁充分利用了动态语言的灵活性，可以对现有语言API进行追加、替换、修改，甚至性能优化等。使用猴子补丁的方式Gevent能够修改标准库中大部分的阻塞式系统调用，包括"),s("code",[t._v("socket")]),t._v("​、"),s("code",[t._v("ssl")]),t._v("​、"),s("code",[t._v("threading")]),t._v("​、"),s("code",[t._v("select")]),t._v("​等模块，使其变为协作式运行。")]),t._v(" "),s("p",[t._v("Monkey-patching猴子补丁是将标准库中大部分的阻塞式调用替换成非阻塞的方式，包括"),s("code",[t._v("socket")]),t._v("​、"),s("code",[t._v("ssl")]),t._v("​、"),s("code",[t._v("threading")]),t._v("​、"),s("code",[t._v("select")]),t._v("​、"),s("code",[t._v("httplib")]),t._v("​等。通过"),s("code",[t._v("monkey.path_xxx()")]),t._v("​函数来打补丁，根据Gevent文档中的建议，应当将猴子补丁的代码尽可能早的被调用，这样可以避免一些奇怪的异常。")]),t._v(" "),s("p",[t._v("使用Gevent的性能要比传统的线程高，但不得不说的一个坑是如果使用Monkey-patching猴子补丁，Gevent将直接修改标准库中大部分的阻塞式调用，包括"),s("code",[t._v("socket")]),t._v("​、"),s("code",[t._v("ssl")]),t._v("​、"),s("code",[t._v("threading")]),t._v("​、"),s("code",[t._v("select")]),t._v("​等模块，而变为协作式运行。但无法保证在复杂的生产环境中那些地方使用标准库因补丁而出现的奇怪问题。另外是第三方库的支持，需要确保项目中使用到的其他网络库也必须使用纯Python或明确支持Gevent。")]),t._v(" "),s("p",[t._v("Gevent应该在什么场景中使用呢？")]),t._v(" "),s("p",[t._v("Gevent的优势在于可以通过同步的逻辑实现并发操作，大大降低编写并行或并发程序的难度。另外，在一个进程中使用Gevent可以有效地避免对临界资源的互斥访问。如果程序中涉及到较多的IO，可以使用Gevent替代多线程来提高程序的效率，但是由于Gevent中的协程的调度是由使用者而非操作系统决定的，Gevent主要解决的问题是IO问题，通过提高IO-bound类型的程序的效率，另外由于是在一个进程中实现协程，而操作性i同是以进程为单位分配处理资源的（一个进程分配一个处理机）。因此，Gevent并不适合对任务延迟有要求的场景，比如交互式程序中。也不适用于CPU-bound类型的任务和需要使用多处理机的场景（通过运行多个进程，每个进程内实现协程来解决这个问题。）。")]),t._v(" "),s("p",[t._v("首先安装模块")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gevent\n")])])]),s("p",[t._v("打补丁 - ((20221024180855-ocs3kbg '猴子补丁'))")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("from gevent "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" monkey\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有耗时操作时需要")]),t._v("\nmonkey.patch_all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("代码演示")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" gevent\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" random\nfrom gevent "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" monkey\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有耗时操作时需要")]),t._v("\nmonkey.patch_all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ndef coroutine_work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coroutine_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n        print"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coroutine_name, i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        time.sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("random.random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n\ngevent.joinall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        gevent.spawn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coroutine_work, "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"work1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n        gevent.spawn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coroutine_work, "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"work2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task1 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task2 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task2 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task1 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task2 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task1 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task1 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task2 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task1 4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# task2 4")]),t._v("\n")])])]),s("p",[t._v("‍")])])}),[],!1,null,null,null);s.default=e.exports}}]);