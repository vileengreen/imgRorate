/** 
  *  author liuyeqing    
  *  email 1594755125@qq.com

  **/
var vm = null;

+(function () {
	vm = new Vue({
        el: '#share',
        data: function () {
        	return {
                imgObj:[
                    {
                        src:'img/caopin.png',
                        style:'transform: translateX(-6rem) ;width:3.4rem ;height:3.4rem;',
                    },
                    { 
                        src:'img/ludeng.png',
                        style:'transform: translateX(0px); width:4.7rem ;height:4.7rem;',
                    },
                    {
                        src:'img/gonglu.png',
                        style:'transform: translateX(7.7rem) ;width:3.4rem ;height:3.4rem;',
                    },
                ],

                imgFlag:1,//选中状态的index
                setInter:'',
                setTime:'',
                
            }
        },
        created: function () {
            this.setRAnimate();
    

        },
        mounted:function(){
            
            var self = this;
            var hammertime = new Hammer(document.getElementById('imgSwiper'));
            hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
            hammertime
                .on('swipeleft', self.toswipeLeft)
                .on('swiperight', self.toswiperRight);
        },
 
        methods: {

            setLAnimate(){//向左
                var self = this;
                clearInterval(self.setInter);
                clearTimeout(self.setTime);
                self.setInter = setInterval(function(){
                    self.toLeft();
                },4000);
            },
            toswipeLeft(){
                var self = this;
                clearInterval(self.setInter);
                clearTimeout(self.setTime);
                this.toLeft();
                setTimeout(self.setLAnimate,4000);
            },
            toLeft(type){
                var self = this;
                if(self.imgFlag == 0){

                    self.imgObj[0].style='transform: translateX(-6rem);width:3.4rem ;height:3.4rem;z-index:2'

                    self.imgObj[1].style='transform: translateX(0px);width:4.7rem ;height:4.7rem;z-index:4'  

                    self.imgObj[2].style='transform: translateX(7.7rem);width:3.4rem ;height:3.4rem;z-index:1'   

                    self.imgFlag = 1;

                }else if(self.imgFlag == 1){

                    self.imgObj[1].style='transform: translateX(-6rem);width:3.4rem ;height:3.4rem;z-index:2'

                    self.imgObj[2].style='transform: translateX(0px);width:4.7rem ;height:4.7rem;z-index:4'

                    self.imgObj[0].style='transform: translateX(7.7rem);width:3.4rem ;height:3.4rem;z-index:1'

                    self.imgFlag = 2;
                             
                } else if(self.imgFlag == 2){
                    console.log(self.imgFlag);

                    self.imgObj[0].style='transform: translateX(0px) ;width:4.7rem ;height:4.7rem;z-index:4'

                    self.imgObj[1].style='transform: translateX(7.7rem) ;width:3.4rem ;height:3.4rem;z-index:1' 

                    self.imgObj[2].style='transform: translateX(-6rem) ;width:3.4rem ;height:3.4rem;z-index:2'

                    self.imgFlag = 0;   
                }
            },
            setRAnimate(){//向右
                var self = this;
                clearInterval(self.setInter);
                clearTimeout(self.setTime);
                self.setInter = setInterval(function(){
                   self.toRight();
                },4000);
            },


            toswiperRight(){
                var self = this;
                clearInterval(self.setInter);
                clearTimeout(self.setTime);
                this.toRight();
                setTimeout(self.setRAnimate,5000);
            },


            toRight(){
                var self = this;
                if(self.imgFlag == 0){

                    self.imgObj[0].style='transform: translateX(7.7rem);width:3.4rem ;height:3.4rem;z-index:3;'

                    self.imgObj[1].style='transform: translateX(-6rem);width:3.4rem ;height:3.4rem;z-index:1;'

                    self.imgObj[2].style='transform: translateX(0px);width:4.7rem ;height:4.7rem;z-index:4;'
                    self.imgFlag = 2;

                }else if(self.imgFlag == 1){

                    self.imgObj[1].style='transform: translateX(7.7rem);width:3.4rem ;height:3.4rem;z-index:4;'

                    self.imgObj[0].style='transform: translateX(0px);width:4.7rem ;height:4.7rem;z-index:2;'

                    self.imgObj[2].style='transform: translateX(-6rem);width:3.4rem ;height:3.4rem;z-index:1'

                    self.imgFlag = 0;

                } else if(self.imgFlag == 2){

                    self.imgObj[2].style='transform: translateX(7.7rem) ;width:3.4rem ;height:3.4rem;z-index:2;' 

                    self.imgObj[1].style='transform: translateX(0px) ;width:4.7rem ;height:4.7rem;z-index:4;' 

                    self.imgObj[0].style='transform: translateX(-6rem) ;width:3.4rem ;height:3.4rem;z-index:1;'

                    self.imgFlag = 1;   
                }
            }
    
        },

        watch:{
            imgFlag(newval){
                console.log("我是新的值"+newval);//赋值

            }
        },

	});
})();