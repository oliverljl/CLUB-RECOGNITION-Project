 'use strict';
 $(document).ready(getTotal());

 function getTotal() {
     var total = 0;
     var sub1 = 0;
     var sub2 = 0;
     var sub3 = 0;
     var sub4 = 0;
     $(document).on('click', '.subInput1,.subInput2,.subInput3,.subInput4', function() {
         if ($(this).is(":checked")) {
             if ($(this)[0].className == "subInput1") {
                 sub1 += parseInt(($(this).val()));
                 $('#sub1').text(sub1);
             }
             if ($(this)[0].className == "subInput2") {
                 sub2 += parseInt(($(this).val()));
                 $('#sub2').text(sub2);
             }
             if ($(this)[0].className == "subInput3") {
                 sub3 += parseInt(($(this).val()));
                 $('#sub3').text(sub3);
             }
             if ($(this)[0].className == "subInput4") {
                 sub4 += parseInt(($(this).val()));
                 $('#sub4').text(sub4);
             }
             total += parseInt(($(this).val()));
             $('#total').text(total);
         } else if ($(this).is(":not(:checked)")) {
             total -= parseInt(($(this).val()));
             $('#total').text(total);
             if ($(this)[0].className == "subInput1") {
                 sub1 -= parseInt(($(this).val()));
                 $('#sub1').text(sub1);
             }
             if ($(this)[0].className == "subInput2") {
                 sub2 -= parseInt(($(this).val()));
                 $('#sub2').text(sub2);
             }
             if ($(this)[0].className == "subInput3") {
                 sub3 -= parseInt(($(this).val()));
                 $('#sub3').text(sub3);
             }
             if ($(this)[0].className == "subInput4") {
                 sub4 -= parseInt(($(this).val()));
                 $('#sub4').text(sub4);
             }
         }
     });
 }