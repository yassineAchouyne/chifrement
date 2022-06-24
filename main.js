function césar_chiffrement(){
    var abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var cle=document.getElementById('clecesar').value;
    var textarea=document.getElementById('textareainput').value;
    var textareaoutput=document.getElementById('textareaoutput');
    var arr=[]
    var tab=[];
    var text=''
    for(i=0;i<textarea.length;i++){
        if(textarea[i]==" ")continue;
        else arr.push(textarea[i].toLowerCase())
    }
    for(i=cle;i<abc.length;i++){
        tab.push(abc[i])
    }
    for(i=0;i<cle;i++){
        tab.push(abc[i])
    }
    for(i=0;i<arr.length;i++){
        for(j=0 ; j<abc.length;j++){
            if(arr[i]==abc[j]) var pos=j;
        }
        text+=tab[pos]
    }    
    textareaoutput.innerHTML=text
}

function césar_dechiffrement(){
    var abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var cle=document.getElementById('clecesar').value;
    var textareainput=document.getElementById('textareainput').value;
    var textareaoutput=document.getElementById('textareaoutput');
    var arr=[]
    var tab=[];
    var text=''
    var tab2=[]
    for(i=0;i<textareainput.length;i++){
        if(textareainput[i]==" ")continue;
        else arr.push(textareainput[i].toLowerCase())
    }
    for(i=0;i<abc.length;i++){
        tab.push(abc[i])
    }
    for(i=tab.length-cle;i<tab.length;i++){
        tab2.push(tab[i])
    }
    for(i=0;i<abc.length-cle;i++){
        tab2.push(abc[i])
    }

    for(i=0;i<arr.length;i++){
        for(j=0 ; j<abc.length;j++){
            if(arr[i]==abc[j]) var pos=j;
        }
        text+=tab2[pos]
    } 
    textareaoutput.innerHTML=text;
}

function vegener_chiffrement(){
    var abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var vegener=document.getElementById('vegenerinput').value;
    var vegeneroutput=document.getElementById('vegeneroutput');
    var cle =document.getElementById('clevegener').value;
    var text='';
    var tab = []
    var tabcle=[]
    var vegenerinput=[]
    for(i=0;i<vegener.length;i++){
        if(vegener[i]==" "){
            continue
        }else vegenerinput.push(vegener[i].toLowerCase())
    }
    for(i=0;i<vegenerinput.length;i++){
        for(j=0;j<cle.length;j++){
            tab.push(cle[j])
        }
    }
    for(i=0;i<vegenerinput.length;i++){
        tabcle.push(tab[i])
    }
    for(i=0;i<vegenerinput.length;i++){
        for(j=0;j<abc.length;j++){
            if(vegenerinput[i]==abc[j]){
                var pos1=j
            }
            if(tabcle[i]==abc[j]){
                var pos2=j
            }
        }
        index=pos1+pos2
        if(index>25){
            text+=abc[index%26]
        }else text+=abc[index]
    }
    vegeneroutput.innerHTML=text
}



function vegener_dechiffrement(){
    var abc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var vegener=document.getElementById('vegenerinput').value;
    var vegeneroutput=document.getElementById('vegeneroutput');
    var cle =document.getElementById('clevegener').value;
    var text='';
    var tab = []
    var tabcle=[]
    var vegenerinput=[]
    for(i=0;i<vegener.length;i++){
        if(vegener[i]==" "){
            continue
        }else vegenerinput.push(vegener[i].toLowerCase())
    }
    for(i=0;i<vegenerinput.length;i++){
        for(j=0;j<cle.length;j++){
            tab.push(cle[j])
        }
    }
    for(i=0;i<vegenerinput.length;i++){
        tabcle.push(tab[i])
    }
    for(i=0;i<vegenerinput.length;i++){
        for(j=0;j<abc.length;j++){
            if(vegenerinput[i]==abc[j]){
                var pos1=j
            }
            if(tabcle[i]==abc[j]){
                var pos2=j
            }
        }
        index=pos1-pos2
        if(index<0){
            text+=abc[25+index]
        }else text+=abc[index]
    }
    vegeneroutput.innerHTML=text
}