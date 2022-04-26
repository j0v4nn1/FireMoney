function rangeRub() {
    var val = $('.amount').val();
    val = (val * 100) / 100000;
    $('.amount').css({'background': '-webkit-linear-gradient(left, #FFC83E 0%, #FF9F47 '+val+'%, #ECECEC '+val+'%, #ECECEC 100%)'});
}

function rangeDays() {
    var val = $('.limitation').val();
    val = (val * 100) / 25
    $('.limitation').css({'background': '-webkit-linear-gradient(left, #FFC83E 0%, #FF9F47 '+val+'%, #ECECEC '+val+'%, #ECECEC 100%)'});
}


