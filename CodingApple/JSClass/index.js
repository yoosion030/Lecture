
$('#close').click(()=>{
    $('.black-background').hide();
})
$('#nav-link').hover(()=>{
    $('.nav-sub').slideToggle();
});



$('#close').click(()=>{
    $('.black-background').hide();
})


$('#login').click(()=>{
    if($('#test-input').val()=='안녕'){
        $('.black-background').fadeIn();
    }
})