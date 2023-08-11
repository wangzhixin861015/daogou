<script>
	export default {
		globalData: {
			isIOS: false,
			isiPhone14Pro: false
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			let {osName, deviceModel} = uni.getSystemInfoSync() || {}
			if (osName === 'ios') this.globalData.isIOS = true
			if (deviceModel === 'iPhone 14 Pro') this.globalData.isiPhone14Pro = true
		},
		onHide: function() {
			console.log('App Hide')
		},
		onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			console.log("滚动距离为：" + e.scrollTop);
		},
	}
</script>

<style lang="scss">
	@import url("/static/iconfont.css");
	@import url("/static/iconfontsvg.css");
	@import url("/static/common.scss");
	
  page{
    background-color: #FFF;
  }
	/*每个页面公共css */
// scroll-view ::-webkit-scrollbar {  
// 	display: none !important;  
// 	width: 0 !important;  
// 	height: 0 !important;  
// 	-webkit-appearance: none;  
// 	background: transparent;  
// }
//第二种
::-webkit-scrollbar{
	  display: none;
}

	
</style>
