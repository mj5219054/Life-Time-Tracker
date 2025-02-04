Life Time Tracker
=====================


### 这个软件有什么用？

Life Time Tracker是一个做个人时间统计的工具，工具，所以决定自己开发一个，顺便尝试一下`nwjs + react`的组合来开发桌面App，同时也实践近一段时间在学习的数据可视化。

1.了解生命的意义

* ![137](https://user-images.githubusercontent.com/79394963/159815968-6879673f-6767-4143-a31c-37fd6dcffb14.png)

2. 情感与建立关系发展和分离（（阅历并不是由年龄决定，而是由生活时间和事件密度决定的）

3. 学习和体验
* ![157](https://user-images.githubusercontent.com/79394963/159816056-1c35f466-8be5-4e8b-9e34-4e324af47b01.png)

4. 了解自我

5. 完善和实现自我

6. 马斯洛的需求层次结构（最重要的是心理上的自由）
* ![214](https://user-images.githubusercontent.com/79394963/159816091-3a136a58-e744-4417-b6c9-7f6eba6fec2e.png)

7. 身体和脑子的反馈机制（个人 群体）



现在文档较少，bug比较多,还是请多包涵。

### 安装

暂时不提供App的下载, 需要的请自行clone项目，然后进行构建生成软件 `目前只支持 osx`, 后面有时间再计划支持主要的平台

#### 安装前请确定你有下列依赖

- node
- gulp  `npm install -g gulp`
- bower `npm instll -g bower`
- mongodb >= 3.0.0

##### mongodb的安装
如果你是osx， 可以通过homebrew进行安装，如果没有homebrew，[请看这里](http://brew.sh/)

```
brew update
brew install mongodb
```
启动

```
mongod
```

或者可以指定数据的保存位置, 注意，文件夹要先创建好，否则会报错

```
mongod --dbpath ~/data/db
```

如果是windows, 可以到[mongodb官网](https://www.mongodb.org/downloads)下载

#### 生成App

######1.先安装依赖

```
npm install
bower install
```

######2. 构建

```
gulp deploy
#默认使用最新版本的nw.js
gulp nw
#如果最新版本的使用不了，可以指定版本号进行构建
gulp nw --version 0.12.3
```

就这样子完成了，然后会在 productions目录下生成app文件


### 使用

采用文本日志的形式来记录时间，对时间进行多维度的描述,尽可能的还原这段时间的真相，为后面的统计积累数据。

采用纯文本的日志记录是因为，效率和方便分析与存储

在介绍概念之前，请看一个例子，这里模拟一天的日志，请看看你能否看懂。看不懂没关系，看到后面的概念介绍你就会明白的。

```
8:45
8:45~9:06 {NT}[修身]
9:06~9:27 {NT}[交通]
9:27~9:40 {NT}[早餐]
10:01~10:40 {WK}[文档]<SuperAI>(编写API文档:pg=30 link="http://某个链接地址")  这是一些注释，pg表示进度，link表示连接地址
10:40~11:26 {WK}[问题排查]<Circle>$0.1.0$(排查无法上传文档的问题) 可能是Content-type问题
11:40~11:52 {WK} 处理一些工作琐事
12:16~12:46 {NT}[lunch] 午餐的时候和@(杰子)聊天，好搞笑
12:47~12:57 {STU}[生物]<每天一个TED>(走进蜜蜂生命中的最初21天)
12:58~13:16 {STU}[启发,社会]<每天一个TED>(怎样复苏一个社区：用想象力、美和艺术) 如何从无到有去创造一样东西
13:17~13:39 {BRK}[午休]
14:33~14:38 {WK}[编程,优化]<life-time-tracker>$0.1.11$(未完成高亮优化) 当修改的时候一并进行移动
14:38~16:52 {WK}[编程,优化]<life-time-tracker>$0.1.11$(高亮日志功能:pg=100) starlog ,用于star行，提高可读性，这个功能算是完成了
17:04~17:18 {SPR}[散步]
17:28~18:02 {WK}[开发工具]<DED>$1.3.5$(添加Grunt-gzip到generator-act中)
18:02~18:52 {WK}[问题排查]<DED>$1.3.5$(Nginx 499问题排查) have no clue
19:16~19:40 {NT}[supper]
19:40~20:18 {WK}[问题排查]<DED>$1.3.5$(Nginx 499问题排查) 可能是中间加速设备，但是无法追踪
21:00~23:10 {WK}[预研]<Circle>$0.1.0$(设计一个信息采集器:pg=10) scrapy抓取知乎
23:12~23:35 {NT}[交通]
23:35~00:28 {BRK}[听音乐]
00:40~1:30 {ENT}[tv,美剧]<冰血暴>$第一季$(1)
1:30
```

![a6n2g-xsmuf](https://user-images.githubusercontent.com/79394963/158547247-1402e6b4-c819-4b67-bd88-760ceedf3119.jpg)



#### 日志格式

其中涉及到几个分类的方式

##### 类别

用 `{}` 来表示, 例如 `{休息}`, `{工作}` ，为了更加快速的输入，可以选择英文，例如 `{work}`, `{study}`, 为了更快的输入，甚至可以用缩写，例如 `{wk}` 表示工作 ，`{stu}`表示学习，等等。可以任意定义
 * 1）关于注意力有坏消息与好消息。
*  2）工作记忆
* 3）逻辑思维和理性思维
* 4）学习能力
* 5）知识理解能力
* 6）创造力
* 7）智力与智商
* 8）感知和感受的反馈
![3](https://user-images.githubusercontent.com/79394963/158547317-c89cbc85-ca0d-4f1b-ba14-62183162ea3c.jpg)

##### 标签

用 `[]` 来表示, 可以有多个标签, 用于描述这一段时间。 例如 `[读书,历史,人类历史]`

```
10:00~11:00 {STU}[技术漫游,github, 阅读代码] 查看一下Github Trending, 阅读感兴趣项目的代码
```

##### 项目， 版本， 任务， 子任务

项目，版本，任务，子任务，其实是对生活的进一步一个细分，方便记录复杂的生活场景，如工作中的项目，个人的研究。

- **项目** `<>`  生活中的许多方面都可以用项目来归类，用一些好玩的名字来归类自己的生活也挺有趣。
- **版本** `$$` 例如看美剧的时候可以记录为 `22:00~23:00 [tv,美剧]<纸牌屋>$第一季$(1)`
- **任务** `()` 有需要可以用于进一步的细分
- **子任务** `##`  有需要可以用于进一步的细分

例如

```
9:00~10:00 {STU}[读书,历史]<格物致知>$世界通史$(第一章)
10:30~12:30 {WK}[编程]<我的个人项目>$0.1.0$(初始化项目)
```

##### 注明

结合云端存储使用，风味更佳。例如Dropbox，可以保持日志的版本，这样可以解决日志的安全和同步等问题。


### 开发

基于 nw.js + react.js + bootstrap 的组合进行开发，还有多个开源组件
- highcharts.js
- d3.js
- 更多依赖可以查看package.json和bower.json中的依赖申明

clone项目之后，运行 `npm install` 和 `bower install` 安装依赖;
然后运行 `gulp`, 和 打开开发服务器`node node_modules/tracker/ltt.js server`之后可以进行开发了，在浏览器中打开也可以，默认访问`localhost:3000` 但是会失去部分nw.js提供的功能.



### Screenshot


Dashboard

![Dashboard](https://raw.githubusercontent.com/zhangmhao/Life-Time-Tracker/master/images/screenshots/dashboard-v0.1.11.png)

日志编辑器，提供快捷键提高编辑效率

![log editor](https://raw.githubusercontent.com/zhangmhao/Life-Time-Tracker/master/images/screenshots/editor.png)

个人数据可视化

这里列出的只是其中一份报表，还有更多类型的报表。

![个人数据可视化](https://raw.githubusercontent.com/zhangmhao/Life-Time-Tracker/master/images/screenshots/report-v0.1.11.png)

项目可视化

![项目界面](https://raw.githubusercontent.com/zhangmhao/Life-Time-Tracker/master/images/screenshots/projects.png)

![项目，报表，task的管理界面](https://raw.githubusercontent.com/zhangmhao/Life-Time-Tracker/master/images/screenshots/project.task.png)


搜索

![搜索](https://raw.githubusercontent.com/zhangmhao/Life-Time-Tracker/master/images/screenshots/search.png)

目标管理

![goal](https://raw.githubusercontent.com/zhangmhao/Life-Time-Tracker/master/images/screenshots/goal.png)

### 最后

在生活中学到一些新的东西，如果有办法融入到软件里面的，就会进行开发，这个时候真的觉得写软件，就像是写书一样。


      人手上最大的一张牌，就是你自己。做事的人和做梦的人最大的差别就在于，能不能马上开始行动。

造车的四大法则：
* 1）理解使命。改变自己，投资自己。
* 2）理解环境。高配不一定是赢家，低配版同样有很多机会。
* 3）理解行动。边试错边完善的精准创业模式。
* 4）理解反馈。反馈是冠军的早餐。不断纠错、更新、迭代。

初段：闭环，如何对抗完美主义
管理学上的闭环是PDCA，即计划、执行、检查、处理。而初段的闭环是指，感知、认知、决策、行动。

对于个人来说，需要敢于行动，也算于试错。

做一个闭环并不容易，作为管理者，更愿意定战略，不愿撸起袖子加油干。还有一种常见的问题，就是完美主义。憋大招很可能别出内伤，先完成一个闭环再说，再不停修正，最终也会逐步逼近最优解。

要做“成长型思维”的人，敢于面对挑战，重视每一次评价和反馈，不断成长。

而“固定型思维”的人，更想获得别人的认可，不想暴露自己的不足。

遇到一个新事物，可以考虑做一个闭环再说，即感知、认知、决策和行动，在行动中开火，不断反馈、不断精进和成长。
最近的视频号很火，一直没有行动。读书容易，真要开始一个闭环还真不容易。容我再想想。

# 二段：切换大脑的两种模式
大脑有两种工作模式：自动驾驶模式和主动控制模式。前者是快速、自动并且无意识的后者是缓慢、刻意和深思熟虑的。

刻意练习之后，尽量能够达到自动驾驶模式，即每个动作好像是不经过大脑，自发做出的。
完成之后，再进行复盘，经过理性的分析，找到需要改正的地方。

把一件事做好的秘密就是，最开始由“主动控制系统”来管理、训练，达到一定熟练程度，就由“自动驾驶系统”来接管。

* 1）把不那么重要的事情交给“自动驾驶系统”。
* 2）在使用“自动驾驶系统”后，积极用“主动控制系统”复盘。
* 3）在大脑中用“主动控制系统”去模拟“自动驾驶系统”。

# 三段：内控


这一节讲认知飞轮，感知、认知、决策和行动。16个字，就是：好奇感知、灰度认知、黑白决策、疯子行动。

收集尽可能多的信息；分析各种变量，进行综合估值；进行取舍，果断的决定；勇往直前。

决策前在一张纸上写下自己的观点，如果没有满意的理由，就不交易。

我最近在纠结要不要做视频号？可以用这个认知飞轮吗？

感知：收集尽可能多的信息，看看视频号的流量情况，相关文章，变现能力，哪些人适合做？微信平台上的现状，哪类视频比较受欢迎。做视频号的人，他们是不是有一个全局的产品矩阵，不仅仅是一个视频号，而是有公众号、书，带货？或其它产品 ？

认知：划分出几个变量，比如：占用的时间，做一个视频号的前期投入？素材的持久性？兴趣点？

决策：做，还是不做？黑白决策。

行动。


#  四段：重启

两个认知飞轮之间的精神装置。

不管前一天多累，第二天都能满血复活，这就是重启。

“沉没成本”这个概念都明白，但每个人都会受这个概念的影响。
懂得什么时候应该放弃。
即使条件不具备，也要扣动行动的扳机。

遇到一个两难的事件，可以尝试：
* 1）外星人视角。一切都是新的，没有任何沉没成本的概念。
* 2）alphaGo视角。每次都是重新评估和计算。
* 3）成长形态检测
* 4）商业心态（竞争） 

# 五段：增长
闭环和闭环之间还要增长。
滚雪球模式。
能力、社会网络，未来赚钱的能力。
增长黑客的三个步骤：
* 1）增长假设。最小化的闭环。

* 2）增长验证。不断思考如何能够做得更好？

* 3）大规模增长。分阶段增长。

两个误区：
有内核没增长。
没内核乱增长。

先完成一个闭环再说，快速试错。然后不断思考如何能够做得更好。再分阶段增长。

# 六段：内核
要找到自己的内核。
* 好的“内核”，要看起来简单，简单的背后它要是一个大概率事件，有大规模复制和形成系统的潜力。

摆在我们面前的问题不是要做好一件大事，而在于找到一堆可重复的小事，然后形成系统。

把握时机。 你可以选择你在哪，但你不能选择时代。所以在对的时间，做对的事，把握时代的机遇非常重要。

依靠禀赋。

形成专业。 需要不断完善，不断打磨，进而形成自己的专业护城河。

# 七段：复利
复利是当代人的必备技能。
传统市场上主要有两种靠谱的复利：①资金固定收益的利滚利。②不动产的持续增值。

有些复利并不持续。

垄断类的公司利润率更高。个人的标签就是垄断。
你在公司是不是占领了一个心智，不可或缺。

亚马逊在过去20年里，股价曾有三次跌幅超过50%，最狠的一次有95%！

* 学习能力才是最重要的禀赋。培养自己对长期价值的时间观。

* 看上去amazon很赚钱，但大部分人握不住。


# 八段：愿景

伟大的人都是1%的愿景，99%的行动。北极星是愿景，地图指导你具体的行动。

* 把大目标可视化。

* 黄金圈法则：why, how, what，由内而外，更有说服力。

贝佐斯的三个愿景秘密武器：

* 1）发现什么是未来十年不会变化的；
* 2）最小化后悔表；
* 3）“以始为终”战略。

# 九段：涌现
如何面对未来的不确定性？

* 蚁群算法与大脑的工作原理有相似之处。
* 有个妈妈每天给孩子拍一张照片，连续17年，震撼人心。

1）成功的要素可能很简单。
2）重要的是系统。引入“时间”这个变量。

# 造车系统：
* 四个轮子：感知、认知、决策、行动
* 发动机：内核
* 导航系统：愿景
* 坚持做长期有复利的事情

* ![系统日志](https://github.com/mj5219054/Life-Time-Tracker/blob/master/log/REME1.md)



### License

Creative Commons Attribution-NonCommercial 3.0 License.


-------------------------------------
  不生产信息和财富，只是财富和信息的搬运工
