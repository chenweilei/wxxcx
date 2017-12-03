Page({
	data: {
		two: null,
		curMsg: '测试',
		msg: [],
	},

	addMsg: function(){
		var arr = this.data.msg;
		arr.unshift(this.data.curMsg);
		this.setData({
			msg: arr,
			curMsg: ''
		})

	},
	onchange: function(e){
		this.setData({
			curMsg: e.detail.value
		})
	},
	oneMyEvent: function(ev){
		//console.log(ev.detail.data)
		this.setData({
			two: ev.detail.data
		})
	},

});