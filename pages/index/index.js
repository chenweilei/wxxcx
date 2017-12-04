Page({
	data: {
		two: null,
		//发表框的 默认value
		curMsg: '测试',
		//储存所有留言的数组
		msg: [],
		//是否显示弹窗
		alertShow: false,
		//当前修改留言的数据 内容和索引
		curMsgDesc: {
			txt: '',
			index: 0
		}
	},
	//点击发表
	addMsg: function(){
		//拿到数据
		var arr = this.data.msg;
		if(this.data.curMsg == ''){
			return
		}
		//修改数据
		arr.unshift(this.data.curMsg);
		//设置数据
		this.setData({
			msg: arr,
			curMsg: ''
		})

	},
	//点击删除
	deletMsg: function(e){
		//拿到数据
		var arr = this.data.msg;
		var index = e.currentTarget.dataset.index;
		//修改数据
		arr.splice(index,1)
		//设置数据
		this.setData({
			msg: arr,
		})
	},
	//点击修改
	editMsg: function(e){
		//拿到数据
		var cur = this.data.msg[e.currentTarget.dataset.index];
		//设置数据
		this.setData({
			alertShow: true,
			curMsgDesc: {
				txt: cur,
				index: e.currentTarget.dataset.index
			}
		});

	},
	// 发表输入框  输入事件
	onchange: function(e){
		//获取数据
		var value = e.detail.value;
		//设置数据
		this.setData({
			curMsg: value
		})
	},
	// 修改输入框  输入事件
	editOnInput: function(e){
		//获取数据
		var curMsgDesc = this.data.curMsgDesc;
		//修改数据
		curMsgDesc.txt = e.detail.value
		//设置数据
		this.setData({
			curMsgDesc: curMsgDesc
		})		
	},
	// 确认修改按钮
	enterEdit: function(){
		//获取数据
		var arr = this.data.msg;
		//修改数据
		arr[this.data.curMsgDesc.index] = this.data.curMsgDesc.txt;
		//设置数据
		this.setData({
			alertShow: false,
			msg: arr
		})
	},
	// 组件1绑定的自定义事件
	oneMyEvent: function(ev){
		//console.log(ev.detail.data)
		this.setData({
			two: ev.detail.data
		})
	},

});