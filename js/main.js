$('#btnDrop').add('#link1').add('#link2').add('#link3')
    .hover(
        () => $('#Drop').toggleClass('col-0')
        , () => $('#Drop').toggleClass('col-0')
    );
$('#btnMenu').click(() => {
    $('.menuContainer').toggleClass('col-0')
    $('.menuContainer').toggleClass('col-12')
})

$('#btnLogo').add($('.btnScroll')).click(() => {
    Scroll(0);
})
$('#btnTeam').click(() => {
    Scroll($('.teamContainer')[0].offsetTop);
})
$('#btnWork').click(() => {
    Scroll($('#work')[0].offsetTop);
})
$('#btnPrice').click(() => {
    Scroll($('#price')[0].offsetTop);
})
$('#btnContact').click(() => {
    Scroll($('#contact')[0].offsetTop);
})
$('.btnAdd').click(() => {
    $('.sideBar').slideDown();
})

$('.btnInvite').click(() => {
    $('#modal').css('display', "block");
    $('#modal-content').slideDown();
    $('body').attr('onclick', "Close()");
})


function Close() {
    if (event.target == document.getElementById('modal')) {
        $('#modal').css('display', "none");
        $('#modal-content').css('display', "none");
        $('body').removeAttr('onclick');
    }
}
function Scroll(Y) {
    window.scroll({
        top: Y,
        behavior: 'smooth'
    });
}