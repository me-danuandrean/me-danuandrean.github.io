var width;
var progress;
var project;

$(window).scroll(function(){
    width = $("html").width();
    var scroll = $(window).scrollTop();

    project = scroll -$("#project").offset().top;
    progress = scroll - $("#progress").offset().top;
    // console.log("width :",width);
    // console.log("progress :",progress);
    console.log("project :",project);
    
       // console.log(scroll)
    // console.log("bb>",bottom)
    // document.getElementById("about").style.marginTop =(100-scroll) +"px";
    // document.getElementById("about").style.marginLeft =(0) +"px";
    // document.getElementById("progress").style.marginLeft =(800-scroll) +"px";
    
    if(scroll >=300){
        $("#mynav").addClass("bg-primary");
    }else{
        $("#mynav").removeClass("bg-primary");
    }
    if(width <= 750){
        if(progress >=-550 ){$("#progress-1").addClass("progress-1");} else{$("#progress-1").removeClass("progress-1")}
        if(progress >=-448 ){$("#progress-2").addClass("progress-2");} else{$("#progress-2").removeClass("progress-2")}
        if(progress >=-377 ){$("#progress-3").addClass("progress-3");} else{$("#progress-3").removeClass("progress-3")}
        if(progress >=-300 ){$("#progress-4").addClass("progress-4");} else{$("#progress-4").removeClass("progress-4")}
        if(progress >=-230 ){$("#progress-5").addClass("progress-5");} else{$("#progress-5").removeClass("progress-5")}
        if(progress >=-150 ){$("#progress-6").addClass("progress-6");} else{$("#progress-6").removeClass("progress-6")}
        if(progress >=-78 ){$("#progress-7").addClass("progress-7");} else{$("#progress-7").removeClass("progress-7")}
        if(progress >=-5 ){$("#progress-8").addClass("progress-8");} else{$("#progress-8").removeClass("progress-8")}
        if(progress >=70 ){$("#progress-9").addClass("progress-9");} else{$("#progress-9").removeClass("progress-9")}
        if(progress >=140 ){$("#progress-10").addClass("progress-10");} else{$("#progress-10").removeClass("progress-10")}
        
        if(progress >=220 ){$("#progress-11").addClass("progress-11");} else{$("#progress-11").removeClass("progress-11")}
        if(progress >=290 ){$("#progress-12").addClass("progress-12");} else{$("#progress-12").removeClass("progress-12")}
        if(progress >=370 ){$("#progress-13").addClass("progress-13");} else{$("#progress-13").removeClass("progress-13")}
        if(progress >=440 ){$("#progress-14").addClass("progress-14");} else{$("#progress-14").removeClass("progress-14")}
        if(progress >=510 ){$("#progress-15").addClass("progress-15");} else{$("#progress-15").removeClass("progress-15")}
        if(progress >=585 ){$("#progress-16").addClass("progress-16");} else{$("#progress-16").removeClass("progress-16")}
        if(progress >=663 ){$("#progress-17").addClass("progress-17");} else{$("#progress-17").removeClass("progress-17")}
        if(progress >=773 ){$("#progress-18").addClass("progress-18");} else{$("#progress-18").removeClass("progress-18")}
        if(progress >=810 ){$("#progress-19").addClass("progress-19");} else{$("#progress-19").removeClass("progress-19")}
        if(progress >=880 ){$("#progress-20").addClass("progress-20");} else{$("#progress-20").removeClass("progress-20")}
        if(progress >=950 ){$("#progress-21").addClass("progress-21");} else{$("#progress-21").removeClass("progress-21")}
        
        // project
        if(project >= -544){ $("#project-1").addClass("project-1");}else{$("#project-1").removeClass("project-1");}
        if(project >= -398){ $("#project-2").addClass("project-2");}else{$("#project-2").removeClass("project-2");}
        if(project >= -160){ $("#project-3").addClass("project-3");}else{$("#project-3").removeClass("project-3");}
        if(project >= 58){ $("#project-4").addClass("project-4");}else{$("#project-4").removeClass("project-4");}
        if(project >= 265){ $("#project-5").addClass("project-5");}else{$("#project-5").removeClass("project-5");}
        if(project >= 470){ $("#project-6").addClass("project-6");}else{$("#project-6").removeClass("project-6");}
        if(project >= 680){ $("#project-7").addClass("project-7");}else{$("#project-7").removeClass("project-7");}
        if(project >= 880){ $("#project-8").addClass("project-8");}else{$("#project-8").removeClass("project-8");}
        if(project >= 1080){ $("#project-9").addClass("project-9");}else{$("#project-9").removeClass("project-9");}
        if(project >= 1290){ $("#project-10").addClass("project-10");}else{$("#project-10").removeClass("project-10");}
        if(project >= 1455){ $("#project-11").addClass("project-11");}else{$("#project-11").removeClass("project-11");}
        if(project >= 1700){ $("#project-12").addClass("project-12");}else{$("#project-12").removeClass("project-12");}
        if(project >= 1890){ $("#project-13").addClass("project-13");}else{$("#project-13").removeClass("project-13");}
        if(project >= 2040){ $("#project-14").addClass("project-14");}else{$("#project-14").removeClass("project-14");}
 
   
    }
    else{
        if(progress >=-550 ){$("#progress-1").addClass("progress-1");} else{$("#progress-1").removeClass("progress-1")}
        if(progress >=-448 ){$("#progress-2").addClass("progress-2");} else{$("#progress-2").removeClass("progress-2")}
        if(progress >=-377 ){$("#progress-3").addClass("progress-3");} else{$("#progress-3").removeClass("progress-3")}
        if(progress >=-300 ){$("#progress-4").addClass("progress-4");} else{$("#progress-4").removeClass("progress-4")}
        if(progress >=-230 ){$("#progress-5").addClass("progress-5");} else{$("#progress-5").removeClass("progress-5")}
        if(progress >=-150 ){$("#progress-6").addClass("progress-6");} else{$("#progress-6").removeClass("progress-6")}
        if(progress >=-78 ){$("#progress-7").addClass("progress-7");} else{$("#progress-7").removeClass("progress-7")}
        if(progress >=-5 ){$("#progress-8").addClass("progress-8");} else{$("#progress-8").removeClass("progress-8")}
        if(progress >=70 ){$("#progress-9").addClass("progress-9");} else{$("#progress-9").removeClass("progress-9")}
        if(progress >=140 ){$("#progress-10").addClass("progress-10");} else{$("#progress-10").removeClass("progress-10")}
        
        if(progress >=-550 ){$("#progress-11").addClass("progress-11");} else{$("#progress-11").removeClass("progress-11")}
        if(progress >=-448 ){$("#progress-12").addClass("progress-12");} else{$("#progress-12").removeClass("progress-12")}
        if(progress >=-377  ){$("#progress-13").addClass("progress-13");} else{$("#progress-13").removeClass("progress-13")}
        if(progress >=-300 ){$("#progress-14").addClass("progress-14");} else{$("#progress-14").removeClass("progress-14")}
        if(progress >=-230 ){$("#progress-15").addClass("progress-15");} else{$("#progress-15").removeClass("progress-15")}
        if(progress >=-150 ){$("#progress-16").addClass("progress-16");} else{$("#progress-16").removeClass("progress-16")}
        if(progress >=-78 ){$("#progress-17").addClass("progress-17");} else{$("#progress-17").removeClass("progress-17")}
        if(progress >=-5 ){$("#progress-18").addClass("progress-18");} else{$("#progress-18").removeClass("progress-18")}
        if(progress >=70  ){$("#progress-19").addClass("progress-19");} else{$("#progress-19").removeClass("progress-19")}
        if(progress >=140  ){$("#progress-20").addClass("progress-20");} else{$("#progress-20").removeClass("progress-20")}
        if(progress >=220  ){$("#progress-21").addClass("progress-21");} else{$("#progress-21").removeClass("progress-21")}
 
        if(project >= -544){ $("#project-1").addClass("project-1");}else{$("#project-1").removeClass("project-1");}
        if(project >=  -544){ $("#project-2").addClass("project-2");}else{$("#project-2").removeClass("project-2");}
        if(project >= -375){ $("#project-3").addClass("project-3");}else{$("#project-3").removeClass("project-3");}
        if(project >= -375){ $("#project-4").addClass("project-4");}else{$("#project-4").removeClass("project-4");}
        if(project >= -136){ $("#project-5").addClass("project-5");}else{$("#project-5").removeClass("project-5");}
        if(project >= -136){ $("#project-6").addClass("project-6");}else{$("#project-6").removeClass("project-6");}
        if(project >= 101){ $("#project-7").addClass("project-7");}else{$("#project-7").removeClass("project-7");}
        if(project >= 101){ $("#project-8").addClass("project-8");}else{$("#project-8").removeClass("project-8");}
        if(project >= 305){ $("#project-9").addClass("project-9");}else{$("#project-9").removeClass("project-9");}
        if(project >= 305){ $("#project-10").addClass("project-10");}else{$("#project-10").removeClass("project-10");}
        if(project >= 540){ $("#project-11").addClass("project-11");}else{$("#project-11").removeClass("project-11");}
        if(project >= 540){ $("#project-12").addClass("project-12");}else{$("#project-12").removeClass("project-12");}
        if(project >= 740){ $("#project-13").addClass("project-13");}else{$("#project-13").removeClass("project-13");}
        if(project >= 740){ $("#project-14").addClass("project-14");}else{$("#project-14").removeClass("project-14");}
       
 
    }
})
// function but(){
//     document.getElementById("kirim").style.color="red";

// }
