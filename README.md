# 项目zkh-app
项目新建：2023年03月22日

> 版权归属智控网络有限公司，关于电子价签、AP、商显屏等硬件产品管理和使用的手机端网站。

### 项目菜单
- [x] 登录
- [x] 通用
    - [x] 普通商品
    - [x] 添加设备
    - [ ] 图片商品
    - [ ] 设备标签
- [x] LCD
	- [x] LCD绑定
	- [ ] NFC配网
	- [ ] 表格绑定
- [x] ESL
	- [x] 绑定商品
	- [x] 价签管理
    - [ ] NFC切页
	- [ ] NFC闪灯
	- [ ] 价签盘点
	- [ ] 手机刷图
	- [ ] 自助排错
	- [ ] 闪灯
- [x] 设置
    - [x] 商品条码识别
	- [x] 退出登录
    - [ ] 人员信息
	- [ ] 修改密码
	- [ ] 新增商品
	- [ ] 扫码广播
	- [ ] 客服

### 目录结构如下：
``` bash
.
|————api ---------------------- 接口api文件夹
| |————index.js  -------------- index默认接口封装
|————components --------------- 组件文件夹：
| |————bar-top  --------------- 电池栏背景空出（微信小程序特有组件）
| |————card-product  ---------- 商品展示模块
| |————confirm-button  -------- 选择模板的提交组件（目前仅模板选择时配对使用）
| |————easy-select  ----------- 下拉选择组件
| |————head-title  ------------ 子页面的标题栏和返回按钮（后续可新增右边按钮配置）
| |————item-list  ------------- 商品列表页面组件（支持条件搜索）
| |————list-one  -------------- 列表单个展示（目前用于商品列表--无图）
| |————list-two  -------------- 列表单个展示（目前用于模板列表--有图）
| |————scan-input  ------------ 可搜索可扫码单行表单
|————config ------------------- 构建配置目录
| |————index.js  -------------- 服务器地址配置
| |————i18n ------------------- 翻译目录
|————node_modules  ------------ node依赖包目录
|————pages -------------------- 源码项目目录
| |————esl -------------------- ESL目录
| |————general ---------------- 通用目录
| |————index ------------------ 首页目录
| |————lcd -------------------- LCD目录
| |————login ------------------ LOGIN目录
| |————set -------------------- SET组件目录
|————static ------------------- 静态资源文件夹
|————uni_modules -------------- 附加UI框架（是uni-app的插件模块化规范（HBuilderX 3.1.0+支持），用于嵌入到uni-app项目中使用，也支持直接封装为项目模板）
|————unpackage ---------------- 打包发布后的文件
| |————dist ------------------- 生成文件
| | |————build ---------------- 生成环境
| | | |————h5 ----------------- h5
| | | |————mp-weixin ---------- 微信小程序
|————utils--------------------- 公共js库
| |————auth.js ---------------- 用户个性化信息（缓存本地）
| |————common.js -------------- 公共js(目前用节流防抖函数)
| |————jsencrypy.js ----------- 密码加密函数
| |————request.js ------------- 请求封装js
| |————zxinglibrary.js -------- H5扫码依赖库
|————.gitignore  -------------- git忽略的文件
|————App.vue ------------------ 页面级vue
|————index.html --------------- 入口页面
|————main.js ------------------ 页面入口文件
|————manifest.json ------------ 项目配置json（用于指定应用的名称、图标、权限等）
|————package-lock.json -------- npm包版本锁定文件, 确保每个环境安装的版本一致
|————pages.json --------------- 页面配置json（决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等）
|————project.config.json ------ 项目配置json
|————README.md ---------------- 项目文档描述
|————uni.scss ----------------- uniapp公共样式（比如按钮颜色、边框风格， uni.scss文件里预置了一批scss变量预置）
|————vue.config.js ------------ vue项目配置


```

### 代码规范参照：
#### html规范
* 注意添加手机键盘提交事件优化体验流程；
* 说明 设置键盘右下角按钮的文字，仅在type='text'时生效
confirm-type的最终表现与手机输入法本身的实现有关，部分安卓系统输入法和第三方输入法可能不支持或不完全支持
```bash
 confirm-type="search" @confirm="search"
```
其他类型：（参考文档：[input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)）
```bash
1.完成（默认）
confirm-type="done"

2.开始
confirm-type="go"

3.搜索
confirm-type="search"

4.发送
confirm-type="send"

5.下一步
confirm-type="next"
```

#### 微信小程序代码检测规范
```bash
1.惯性滚动会使滚动比较顺畅，在安卓下默认有惯性滚动，而在 iOS 下需要额外设置 `-webkit-overflow-scrolling: touch` 的样式:
出现overflow:scroll;的地方注意添加-webkit-overflow-scrolling: touch;

2.存在将未绑定在 WXML 的变量传入 setData:
页面URL传参是否影响渲染再考虑传参，否则存入缓存使用；

3.wxss 覆盖率较低，存在大量未使用的样式：
单页面的svg引入考虑单个抠出按页面引入；
删除多余的css代码样式；

```

#### css规范：
* 1.单页引入import单独css文件,与微信小程序结构保持一致；
* 2.样式命名采用-(中划线)和_(下划线)代表层级和关联；
* 3.开发环境可支持scss,sass,不支持less,项目中保持统一;
* 4.公共和复用的css在/static/common.css;
* 5.font-size;margin,padding,width;必须使用偶数，不能使用奇数；
* 6.单位尽量用rpx，官方指定的单位；
```bash
uniapp开发小程序时，css设置的背景图无法显示问题：（如何解决）

第一种方式：
将图片转为base64格式。
使用站长工具， base64图片在线转换工具(https://tool.chinaz.com/tools/imgtobase)

第二种方式：
<view class="item" :style="{background: 'url('+imageURL+')'}"></view>
<script>
	export default {
		data() {
			return {
				imageURL: '/static/imgs/cj_bg@2x.png'
			};
		}
	}
</script>
```

#### js规范：
* 1.api中接口封装注释用多行注释，展示入参格式；
* 2.components命名使用小写加-（中划线）连接，页面直接使用；
* 3.i18n中翻译用双引号括起来；
* 4.data参数命名也是小驼峰，最好有单行注释说明用途，删除多余变量；
* 5.methods函数名小驼峰规范，函数申明必须前面单行注释提示用途；
* 6.接口调用使用上async 和await;
* 7.公共的js函数在common.js中，按需求引入；
* 8.个性化存储写于auth.js，缓存按需注入对应方法；
``` bash
@click 组件被点击
@longpress 长按（手指触摸超过350ms）
@longtap 长按
@tap 点击
@touchstart 手指触摸动作开始
@touchmove 手指触摸后移动
@touchcancel 手指触摸被打断，如来电提醒，弹窗
@touchend 手指触摸动作结束，如松开按钮
```

#### 字体规范：
[iconfont 字体页面](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=3944098&keyword=&project_type=&page=)
* 1.无颜色字体icon,字体文件存于/static/iconfont.css使用下载项目zkh,class命名'zkhIcon zkh-xxx';
* 2./static/iconfont.css中文件下载后，添加/static,eg:修改“ src: url('iconfont.woff2?t=1678787454407') format('woff2'),”为“src: url('/static/iconfont.woff2?t=1678787454407') format('woff2'),”
* 3.有颜色字体icon,字体文件存于/static/iconfontsvg.css使用下载项目zkhsvg,class命名'zkhIconSvg zkhsvg-xxx';
* 4.有颜色的字体引入需要开发环境下载【iconfont-tools】
* 5.操作步骤如/static/fonts生成.jpg（包括不仅包括如下）：
``` bash
安装npm install -g iconfont-tools
输入命令行：iconfont-tools
设置输出文件夹名称：input
设置输出文件css文件名称：iconfontsvg
设置css文件的prefix:zkhIconSvg
设置字体的大小：56rpx
是否生产小程序原生组件:NO
*再把/static/input/iconfontsvg.css 复制到/static中就可以删除input文件了
*加入居中样式：.zkhIconSvg { margin: 0 auto;}
``` 

#### UI设计规范
[UI设计稿](https://codesign.qq.com/app/design/JG2mj7xABK9VKdM/board)
* 主题颜色：#177AFD(蓝色) #00C785（绿色）
* 按钮灰色： #A7A7A7（灰色）
* 按钮圆滑，点击有水波效果；
``` bash
.zkh-button{
	position: relative;
	width: 100%;
	height: 80rpx;
	background: #ddd;
	border-radius: 80rpx;
	font-family: PingFang-SC-Heavy;
	font-weight: 500;
	color: #FFFFFF;
	letter-spacing: 0;
	text-align: center;
	line-height: 80rpx;
	font-size: 30rpx;
	overflow: hidden;
}
.zkh-button.canClick{
	background: #1676FF;
}

.zkh-button::after {
  content: "";
  background: #f1f1f1;
  display: block; 
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width:1000rpx;
  height:1000rpx;
  border-radius: 100%;
  opacity: 0;
  transition: all 0.8s
}
.zkh-button.canClick:active:after {
  width:100rpx;
  height:100rpx;
  opacity: 0.6;
  transition: 0s
}
```
* 卡片圆滑，有阴影：
``` bash
box-shadow: 0 1px 4px 0 #00000080;
border-radius: 10px;
```

#### 开发规范：
* 页面文件遵循[ Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)，即每个页面是一个.vue文件
* 组件标签靠近小程序规范，详见[uni-app 组件规范](https://uniapp.dcloud.net.cn/component/)
* 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见[uni-app接口规范](https://uniapp.dcloud.net.cn/api/)
* 数据绑定及事件处理同 Vue.js 规范，同时补充了[App生命周期](https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle)及[页面的生命周期](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)
* 为兼容多端运行，建议使用flex布局进行开发

#### 参照框架：
基于uin-app开发，以后适配微信小程序、H5和app的开发.
* [如何学习](https://uniapp.dcloud.net.cn/resource.html)
* [uniapp组件](https://uniapp.dcloud.net.cn/component/uniui/uni-easyinput.html#%E4%BB%8B%E7%BB%8D)
* [注意uniapp微信小程序端与vue不兼容的地方](https://uniapp.dcloud.net.cn/component/vue-component.html)
* [uniapp教程和语法](https://uniapp.dcloud.net.cn/tutorial/)
* [跨端条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html)
* [跨端写法注意](https://uniapp.dcloud.net.cn/matter.html)
* [微信小程序组件](https://developers.weixin.qq.com/miniprogram/dev/component/)
* [uview2.0组件](https://www.uviewui.com/components/tooltip.html)

#### 开发工具：
* 基于[HBuilder](https://www.dcloud.io/hbuilderx.html)和[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)


#### 注意：
* 开发小程序，使用vue2语法,暂不使用vue3


## 快速上手:
* 1.下载[HBuilder](https://www.dcloud.io/hbuilderx.html)和[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

* 2.开发环境：
运行-运行到浏览器

* 3.生成环境：
发行-小程序-微信（仅适用于uin-app）

## 版本介绍

#### v2.0.0
> 微信小程序、H5、app新版本功能初始化
