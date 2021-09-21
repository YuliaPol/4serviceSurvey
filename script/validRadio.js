var form = document.getElementById('main-form');
// var redBg = document.getElementsByClassName('.checkmark');
$(form).on('submit', function (e) {

    // e.preventDefault();

    var el = document.querySelectorAll('[data-reqired]');
    var erroreArrayElemnts = [];
    for (var i = 0; i < el.length; i++) {
        if (el[i].tagName === 'INPUT') {
            if(el[i].type === 'text') {
                if (el[i].value === '' || el[i].value === ' ' || el[i].value === '-') {
                    erroreArrayElemnts.push(el[i]);
                    var digs = $(el[i]).parents('.question-wrapper').find('.error-text');
                    for (var d = 0; d < digs.length; d++) {
                        digs[d].style.display = 'block';
                    }

                    el[i].addEventListener('input', (e) => {
                        $(e.target).parents('.question-wrapper').find('.error-text').slideUp().animate();
                    });
                }
            }
            if(el[i].type === 'radio') {
                var name = el[i].getAttribute('name');

                if (document.querySelectorAll('[name=' + name + ']:checked').length === 0 && name ) {
    
                    erroreArrayElemnts.push(el[i]);
    
                    var digs = $(el[i]).parents('.question-wrapper').find('.error-text');
    
                    for (var d = 0; d < digs.length; d++) {
                        digs[d].style.display = 'block';
                    }
    
                    var elInputs =  document.querySelectorAll('[name=' + name + ']');
                    for (var e = 0; e < elInputs.length; e++) {
                        document.querySelectorAll('[name=' + name + ']')[e].addEventListener('change', (e) => {
                            $(e.target).parents('.question-wrapper').find('.error-text').slideUp().animate();
                        });
                    }
                }
            }
        }
    }
    if (erroreArrayElemnts.length > 0) {
        window.scrollTo(0, erroreArrayElemnts[0].parentElement.parentElement.getBoundingClientRect().top);
    }
    return !(erroreArrayElemnts.length > 0);
    // if(erroreArrayElemnts.length == 0){
    //     $("#main-form").submit();
    // }

});
var f1 =
function sixMore() {
    $('.my-error-text').hide();
    $(comment).removeProp('data-reqired');
};
var f2 =
function sixLess() {
    $('.my-error-text').hide();
    $(comment).prop('data-reqired',true);
};
// for ( var f=0; f < 8; f++){
//      f<7?
//     document.querySelectorAll('.radio__option')[f].addEventListener('change', f2):
//          document.querySelectorAll('.radio__option')[f].addEventListener('change', f1);
// }