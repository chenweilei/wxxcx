Component({
	properties: {
		// 这里定义了innerText属性，属性值可以在组件使用时指定
		two: {
			value: null,
			type: null,
			observer: function(){
				console.log(this.data.two)
				if(this.data.two !== null){
					this.setData({
						conts: this.data.two
					});
				}
			}
		}
	},
	data: {
		// 这里是一些组件内部数据
		conts: [1, 0, 0]
	},
	methods: {
		// 这里是一个自定义方法
		changeTwo: function(ev){
			this.setData({
				two: '第二个组件的数据被修改了'
			})

			this.triggerEvent('eventTwo', {}, {})
		}
	}
});