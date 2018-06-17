$(document).ready(function(){
        $("aside > div > p").on("click", function(){
            if($(this).hasClass('open')){     
                $(this).removeClass("open"); 
                $(this).siblings('div>section').slideUp(300); 
                $("aside > div> p> i").removeClass("fa-minus").addClass("fa-plus");
            }else{ 
                $("aside > div> p> i").removeClass("fa-minus").addClass("fa-plus");
                $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
                $("aside > div > p").removeClass("open"); 
                $(this).addClass("open"); 
                $('div>section').slideUp(300); 
                $(this).siblings('div>section').slideDown(300); 
            } 
        });
        
});