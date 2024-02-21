const btn=document.querySelector('.btn'),
chk=document.querySelector('.chk'),
stat=document.querySelector('.stat');

const vowel_count=()=> {
    var l_stat=stat.value,count=0;
    for(var i=0;i<l_stat.length;i++){
        if(l_stat[i]==='a'||l_stat[i]==='e'||l_stat[i]==='i'||l_stat[i]==='o'||l_stat[i]==='u'){
            count++;
        }
    }
    chk.innerHTML="Vowel Count: "+count;
}
btn.addEventListener('click',vowel_count);