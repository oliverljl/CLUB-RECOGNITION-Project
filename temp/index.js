 $(document).ready(getTotal());


 function getTotal() {
     var total = 0;
     getSubAdd1();
     getSubAdd2();
     getSubAdd3();
     getSubAdd4();

     function getSubAdd1() {
         var sub = 0;
         $('.subInput1').click(function() {
             if ($(this).is(":checked")) {
                 sub += parseInt(($(this).val()));
                 total += parseInt(($(this).val()));
                 $('#sub1').text(sub);
                 $('#total').text(total);
             } else if ($(this).is(":not(:checked)")) {
                 sub -= parseInt(($(this).val()));
                 total -= parseInt(($(this).val()));
                 $('#sub1').text(sub);
                 $('#total').text(total);
             }
         });
     }

     function getSubAdd2() {
         var sub = 0;
         $('.subInput2').click(function() {
             if ($(this).is(":checked")) {
                 sub += parseInt(($(this).val()));
                 total += parseInt(($(this).val()));
                 $('#sub2').text(sub);
                 $('#total').text(total);
             } else if ($(this).is(":not(:checked)")) {
                 sub -= parseInt(($(this).val()));
                 total -= parseInt(($(this).val()));
                 $('#sub2').text(sub);
                 $('#total').text(total);
             }
         });
     }

     function getSubAdd3() {
         var sub = 0;
         $('.subInput3').click(function() {
             if ($(this).is(":checked")) {
                 sub += parseInt(($(this).val()));
                 total += parseInt(($(this).val()));
                 $('#sub3').text(sub);
                 $('#total').text(total);
             } else if ($(this).is(":not(:checked)")) {
                 sub -= parseInt(($(this).val()));
                 total -= parseInt(($(this).val()));
                 $('#sub3').text(sub);
                 $('#total').text(total);
             }
         });

     }

     function getSubAdd4() {
         var sub = 0;
         $('.subInput4').click(function() {
             if ($(this).is(":checked")) {
                 sub += parseInt(($(this).val()));
                 total += parseInt(($(this).val()));
                 $('#sub4').text(sub);
                 $('#total').text(total);
             } else if ($(this).is(":not(:checked)")) {
                 sub -= parseInt(($(this).val()));
                 total -= parseInt(($(this).val()));
                 $('#sub4').text(sub);
                 $('#total').text(total);
             }
         });
     }
 }