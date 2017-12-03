Component({
	properties: {
		// 这里定义了innerText属性，属性值可以在组件使用时指定
		innerText: {
			type: String,
			observer: function(){

			}
		}
	},
	data: {
		// 这里是一些组件内部数据
		btns: [1, 0, 0]
	},
	methods: {
		// 这里是一个自定义方法
		clickBtn: function(ev){
			var index = ev.currentTarget.dataset.index;
			var arr = [0,0,0];
			arr[index] = 1;
			this.setData({
				btns: arr
			});
			this.triggerEvent('myevent', {
				data: this.data.btns
			}, {})
		}
	}
});