document.getElementById('case-increase').addEventListener('click', function(){
// const caseInput = document.getElementById('case-count');
// const caseCount = parseInt(caseInput.value);
//  const caseNewCount = caseCount + 1;
//  caseInput.value = caseNewCount;
//  const caseTotal = caseNewCount * 59;
//  document.getElementById('case-total').innerText='$'+caseTotal;
autoMation(true);
 
});
 
document.getElementById('case-decrease').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-count');
    // const caseCount = parseInt(caseInput.value);
    // const caseNewCount = caseCount - 1;
    // caseInput.value = caseNewCount
    // const caseTotal = caseNewCount * 59;
    // document.getElementById('case-total').innerText='$'+caseTotal;
    autoMation(false);

});


//phone --
document.getElementById('phone-decrease').addEventListener('click',function(){

// const phoneInput = document.getElementById('phone-count');
//    const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//      phoneInput.value = phoneNewCount
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText='$'+phoneTotal;

autoMobile(false);

});


// phone ++

document.getElementById('phone-increase').addEventListener('click',function(){

    // const phoneInput = document.getElementById('phone-count');
    //    const phoneCount = parseInt(phoneInput.value);
    //     const phoneNewCount = phoneCount + 1;
    //      phoneInput.value = phoneNewCount
    //     const phoneTotal = phoneNewCount * 1219;
    //     document.getElementById('phone-total').innerText='$'+phoneTotal;

    autoMobile(true)
    
    });




function autoMation (IsIncrease){
            const caseInput = document.getElementById('case-count');
            const caseCount = parseInt(caseInput.value);
            // const caseNewCount = caseCount - 1;

            let caseNewCount = caseCount;
        if ( IsIncrease== true){
        caseNewCount = caseCount +1
        }
        if (IsIncrease == false && caseCount>0){
            caseNewCount = caseCount -1 ;
        }


    caseInput.value = caseNewCount
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText='$'+caseTotal;
    calculateTotal ();
}


function autoMobile (IsIncrease){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    let phoneNewCount = phoneCount;
if ( IsIncrease== true){
    phoneNewCount = phoneCount +1
}
if (IsIncrease == false && phoneCount>0){
    phoneNewCount = phoneCount -1 ;
}

  phoneInput.value = phoneNewCount
 const phoneTotal = phoneNewCount * 1219;
 document.getElementById('phone-total').innerText='$'+phoneTotal;
 calculateTotal ();
}

// total cost calculation//

function calculateTotal (){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);

const finalCost = phoneCount*1219 + caseCount*59;
 var finalCharge = parseInt(finalCost);
document.getElementById('totalBill').innerText = '$'+ finalCharge;

var taxCount = Math.round(finalCharge*(15/100));
 document.getElementById('tax').innerText = '$'+taxCount;




var finalBill = taxCount + finalCharge;



console.log(finalBill);

document.getElementById('final').innerText =finalBill;

}