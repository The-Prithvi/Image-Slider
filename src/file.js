var count = 1;
setInterval(function(){
    document.getElementById('rd' + count).checked = 'true';
    count++;
    if(count>8){
        count = 1;
    }
},5000)