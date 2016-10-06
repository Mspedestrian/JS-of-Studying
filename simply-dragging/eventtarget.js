// 自定义事件处理函数

function EventTarget(){
		this.handlers={};
	}
	EventTarget.prototype={
		constructor:EventTarget,
		addHandler:function(type,handler){
			if(typeof this.handlers[type]=='undefined'){
				this.handlers[type]=[];
			}
			this.handlers[type].push(handler);

		},//注册事件
		fire:function(event){
			if(!event.target)event.target=this;
			if(this.handlers[event.type] instanceof Array){
				var handlers=this.handlers[event.type];
				for(var i=0,len=handlers.length;i<len;i++){
					handlers[i](event);
				}
			}
		},//触发事件
		removeHandler:function(type,handler){
			if(this.handlers[type] instanceof Array){
				var handlers=this.handlers[type];
				for(var i=0;i<handlers.length;i++){
					if(handlers[i]==handler){
						break;
					}
				}
				handlers.splice(i,1);
			}
		}//移除事件；
	};
	//使用：
	// var demo=new EventTarget();
	// function clertmessage(event){
	// 	alert(event.message);
	// }
	// demo.addHandler('message',clertmessage);
	// demo.fire({type:'message',message:'hello world'});
	// demo.removeHandler('message',clertmessage);

