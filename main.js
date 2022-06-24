function césar_chiffrement(){
    var abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var cle=document.getElementById('clecesar');
    var textareainput=document.getElementById('textareainput').value;
    var textareaoutput=document.getElementById('textareaoutput');
    var tab=[];
    var k=0;
    for(i=0;i<abc.length;i++){
        if(i+Number(cle.value)>abc.length){
            k++
            tab.push(abc[k])
        }else if(i+Number(cle.value)==abc.length){
            tab.push(abc[0])
        }else{
            tab.push(abc[i+Number(cle.value)])
        }
    }
    var text='';
    for(i=0;i<textareainput.length;i++){
        if(textareainput==" ")continue;
        text+=tab[i]
        
    }
    textareaoutput.innerHTML=text;
}