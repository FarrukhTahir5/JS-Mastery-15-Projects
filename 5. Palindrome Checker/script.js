const btn=document.querySelector('.btn'),
chk=document.querySelector('.chk'),
stat=document.querySelector('.stat');

const check_palindrome=()=> {
    var l_stat=stat.value;
    for(var i=0;i<l_stat.length/2;i++){
        if(l_stat[i]!==l_stat[l_stat.length-1 -i])
        {
            console.log(l_stat[i]+" "+l_stat[l_stat.length-i]);
            chk.innerHTML=l_stat.toUpperCase() +" is not a Palindrome"
            return
        }
        
    }
    chk.innerHTML=l_stat.toUpperCase() +" is a Palindrome"
}
btn.addEventListener('click',check_palindrome);