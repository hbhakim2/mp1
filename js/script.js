  $(document).ready(function() {
      
      /****** INIT *****/
      var myflag = false;
      checkScroll();
      
      /****** CARROUSEL *****/ 
        
      $('#car_ul li:first').before($('#car_ul li:last')); 
        
      // click right       
      $('#car_right img').click(function(){
        
        var mywidth = $('#car_ul li').outerWidth() + 10;
        var myleft = parseInt($('#car_ul').css('left')) - mywidth;

        $('#car_ul').animate({'left' : myleft},400,function(){    
              
          $('#car_ul li:last').after($('#car_ul li:first')); 
          $('#car_ul').css({'left' : '-980px'});

        }); 
      });
        
        
      // click left
      $('#car_left img').click(function(){
            
        var mywidth = $('#car_ul li').outerWidth() + 10;
        var myleft = parseInt($('#car_ul').css('left')) + mywidth;

        $('#car_ul').animate({'left' : myleft},400,function(){    
            
          $('#car_ul li:first').before($('#car_ul li:last')); 
          $('#car_ul').css({'left' : '-980px'});
        
        });
      });
      
      
    /****** MODAL *****/

    $('.gallery').click(function(){
                
        var modal_id = $(this).attr('name');
              
        show_modal(modal_id);
        return false;
              
    });
    
      
    $('.close_modal').click(function(){
            
        close_modal();

    });
      

    function close_modal(){
        
        //hide the mask
        $('#mask').fadeOut(500);
        
        //hide modal window(s)
        $('.modal').fadeOut(500);
    }

    function show_modal(modal_id){

        var wwidth = $(window).width();
        var wheight = $(window).height();
        
        var mheight = $('#'+modal_id).outerHeight();
        var mwidth = $('#'+modal_id).outerWidth();
        
        var top = (wheight-mheight)/2;
        var left = (wwidth-mwidth)/2;
        
        $('#'+modal_id).css({'top' : top , 'left' : left});
        
        //$('#mask').css({ 'display' : 'block', opacity : 0});
        $('#mask').fadeTo(500,0.85,'swing');
        $('#'+modal_id).fadeIn(500,'swing');
    }

      
    /****** NAVIGATION & SMOOTH SCROLLING *****/
    $('a[href^="#"]').click(function() {

        var target = $(this.hash);
        var myoffset = parseInt(target.offset().top - 100);
        $('html,body').animate({scrollTop: myoffset }, 1000);
        return false;
      
    });   

    // on scroll event
    $(window).scroll(function() {
        checkScroll();
    });
      
    function checkScroll() {
        st = $(window).scrollTop();
        
        if (st == 0) {
             myflag = true;
             $('header').animate({height: '60px'}, 500);
             $('.links').animate({fontSize: '22px'}, 500);
             $('.logo img').animate({height: '76px'}, 500);
        }
        else  {
            if (myflag) {
                $('header').animate({height: '50px'}, 500);
                $('.links').animate({fontSize: '18px'}, 500);
                $('.logo img').animate({height: '60px'}, 500);
                myflag = false;
            }
        }
        
        // get top scroll
        mt = $(document).height() - $(window).height(); 
        
        // iterate menu
        $('nav').children('div').each(function(index,element){
            el = $(element).children('a').attr("href");
            dt = $(el).offset().top - 101;

            if (st >= dt) {

                $('.links').css({'background' : ''});
                $(element).css({'background' : 'orange'});
            }
            else if(st >= mt) {  // handling the last menu

                $('.links').css({'background' : ''});
                $(element).css({'background' : 'orange'});
            }
        });
            
    }
      
    
  });
