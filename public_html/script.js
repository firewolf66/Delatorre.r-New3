/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
     $(".Nike").css("background-color","Gray");
     $('p:last').css({"background-color": "Red", "color": "white"});
     $('p:first').css({"background-color": "Green", "color": "white"});
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    //$('div').bind('moseover', mouseOverMe());
    
    $('h1').bind('click', mouseClick);
    
        $('replaceWHtml').bind('click', replaceWHtml);
        $('replaceWText').bind('click', replaceWText);
        
});
        function replaceWHtml() {
            $('')
        }


function mouseOverMe() {
    $("h1"). html("Ramon De La Torre");
}

function mouseOutMe(){
    $('h1').html('Paris Saint Germain');    
}

function mouseClick(){
    $('p').html('Ramon is beast at Soccer');
}


