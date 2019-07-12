/*
 jQuery animateNumber plugin v0.0.14
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

(function($) {
    "use strict"
    $(function() {

        numberAnimation()
        startAnimationBlocks()
        startAnimationGraphs()

        function numberAnimation() {
            var numsItems = $('.is--animate-num')
            numsItems.each(function() {
                var thisNumber = $(this)
                var thisNumberDataNum = $(this).data('num')
                var thisToggle = true

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisNumber.animateNumber({
                        number: thisNumberDataNum
                    }, {
                        easing: 'swing',
                        duration: 1000
                    });
                    thisNumber.addClass('is--finish')
                }
            })
        }

        function startAnimationBlocks() {
            var blockItems = $('.is--animate-block')
            blockItems.each(function() {
                var thisBlock = $(this)
                var thisAnim = $(this).data('animname')
                var thisDelay = $(this).data('animdelay')

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('animated')
                        .addClass(thisAnim)
                        .css({
                            "-webkit-animation-delay": thisDelay + 's',
                            "-moz-animation-delay": thisDelay + 's',
                            "-o-animation-delay": thisDelay + 's',
                            "animation-delay": thisDelay + 's'
                        })
                }
            })
        }

        function startAnimationGraphs() {
            var blockItems = $('.is--animate-graph')
            blockItems.each(function() {
                var thisBlock = $(this)

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('is--anim')

                    thisBlock.siblings('.is--animate-graph-circle')
                            .addClass('is--anim')
                }
            })
        }

        $(document).scroll(function() {
            numberAnimation()
            startAnimationBlocks()
            startAnimationGraphs()
        })

        $('.__dd__cursor').on('mousemove', function(e) {
            var xPos = e.clientX
            $('.__dd__block-on__or.is--on').css({
                transform: 'translateX(-' + xPos / 40 + 'px)'
            })
            $('.__dd__block-on__or.is--tw').css({
                transform: 'translateX(' + xPos / 80 + 'px)'
            })
            $('.__dd__block-on__or.is--th').css({
                transform: 'translateX(-' + xPos / 110 + 'px)'
            })
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIG51bWJlckFuaW1hdGlvbigpXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb25CbG9ja3MoKVxyXG4gICAgICAgIHN0YXJ0QW5pbWF0aW9uR3JhcGhzKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbnVtYmVyQW5pbWF0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtc0l0ZW1zID0gJCgnLmlzLS1hbmltYXRlLW51bScpXHJcbiAgICAgICAgICAgIG51bXNJdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNOdW1iZXIgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc051bWJlckRhdGFOdW0gPSAkKHRoaXMpLmRhdGEoJ251bScpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1RvZ2dsZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZpc2libGUodHJ1ZSkgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2lzLS1maW5pc2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNOdW1iZXIuYW5pbWF0ZU51bWJlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjogdGhpc051bWJlckRhdGFOdW1cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzTnVtYmVyLmFkZENsYXNzKCdpcy0tZmluaXNoJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uQmxvY2tzKCkge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2tJdGVtcyA9ICQoJy5pcy0tYW5pbWF0ZS1ibG9jaycpXHJcbiAgICAgICAgICAgIGJsb2NrSXRlbXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzQmxvY2sgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0FuaW0gPSAkKHRoaXMpLmRhdGEoJ2FuaW1uYW1lJylcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzRGVsYXkgPSAkKHRoaXMpLmRhdGEoJ2FuaW1kZWxheScpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZmluaXNoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzQmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzQW5pbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW1vei1hbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItby1hbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbkdyYXBocygpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrSXRlbXMgPSAkKCcuaXMtLWFuaW1hdGUtZ3JhcGgnKVxyXG4gICAgICAgICAgICBibG9ja0l0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gJCh0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnaXMtLWZpbmlzaCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0Jsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtLWFuaW0nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzQmxvY2suc2libGluZ3MoJy5pcy0tYW5pbWF0ZS1ncmFwaC1jaXJjbGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy0tYW5pbScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG51bWJlckFuaW1hdGlvbigpXHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uQmxvY2tzKClcclxuICAgICAgICAgICAgc3RhcnRBbmltYXRpb25HcmFwaHMoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5fX2RkX19jdXJzb3InKS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgeFBvcyA9IGUuY2xpZW50WFxyXG4gICAgICAgICAgICAkKCcuX19kZF9fYmxvY2stb25fX29yLmlzLS1vbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0nICsgeFBvcyAvIDQwICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnLl9fZGRfX2Jsb2NrLW9uX19vci5pcy0tdHcnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgeFBvcyAvIDgwICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnLl9fZGRfX2Jsb2NrLW9uX19vci5pcy0tdGgnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtJyArIHhQb3MgLyAxMTAgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
