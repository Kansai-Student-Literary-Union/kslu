//jQueryというserviceがあるのでそれを参照
let submitted = false;
$(function() {
    $('form').on('submit', function() {
        $('.submit').hide();
        $('.loading').show();
    });
}); 
