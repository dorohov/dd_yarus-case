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

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBudW1iZXJBbmltYXRpb24oKVxyXG4gICAgICAgIHN0YXJ0QW5pbWF0aW9uQmxvY2tzKClcclxuICAgICAgICBzdGFydEFuaW1hdGlvbkdyYXBocygpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG51bWJlckFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIG51bXNJdGVtcyA9ICQoJy5pcy0tYW5pbWF0ZS1udW0nKVxyXG4gICAgICAgICAgICBudW1zSXRlbXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzTnVtYmVyID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNOdW1iZXJEYXRhTnVtID0gJCh0aGlzKS5kYXRhKCdudW0nKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNUb2dnbGUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZmluaXNoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzTnVtYmVyLmFuaW1hdGVOdW1iZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHRoaXNOdW1iZXJEYXRhTnVtXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc051bWJlci5hZGRDbGFzcygnaXMtLWZpbmlzaCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbkJsb2NrcygpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrSXRlbXMgPSAkKCcuaXMtLWFuaW1hdGUtYmxvY2snKVxyXG4gICAgICAgICAgICBibG9ja0l0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNBbmltID0gJCh0aGlzKS5kYXRhKCdhbmltbmFtZScpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0RlbGF5ID0gJCh0aGlzKS5kYXRhKCdhbmltZGVsYXknKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnaXMtLWZpbmlzaCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0Jsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3ModGhpc0FuaW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiOiB0aGlzRGVsYXkgKyAncycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1tb3otYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW8tYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb25HcmFwaHMoKSB7XHJcbiAgICAgICAgICAgIHZhciBibG9ja0l0ZW1zID0gJCgnLmlzLS1hbmltYXRlLWdyYXBoJylcclxuICAgICAgICAgICAgYmxvY2tJdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNCbG9jayA9ICQodGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZpc2libGUodHJ1ZSkgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2lzLS1maW5pc2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNCbG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLS1hbmltJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0Jsb2NrLnNpYmxpbmdzKCcuaXMtLWFuaW1hdGUtZ3JhcGgtY2lyY2xlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtLWFuaW0nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBudW1iZXJBbmltYXRpb24oKVxyXG4gICAgICAgICAgICBzdGFydEFuaW1hdGlvbkJsb2NrcygpXHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uR3JhcGhzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
