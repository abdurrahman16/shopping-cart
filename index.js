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
}