$( document ).ready(function() {
    
    var envelope = $('#envelope');
    
    envelope.click( function() {
        open();
    });
    

    function open() {
        envelope.addClass("open")
           .removeClass("close");
        
    }

});