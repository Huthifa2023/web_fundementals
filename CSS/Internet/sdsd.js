




var isValid = function(s) {
    if((s.at(0) != '(' || s.at(0) != '[') || s.at(0) != '{'){
        return false;
        }
    for(let i=0; i<s.length; i+=2){
        if(s.at(i) == '(' && s.at(i+1) == ')'){
           continue ;         
        }
        else if(s.at(i) == '[' && s.at(i+1) == ']'){
            console.log('hewfsdfs');
            continue ;
        }
         else if(s.at(i) == '{' && s.at(i+1) == '}'){
           continue ; 
        }
    return true;
    }
    
};

isValid('()[]{}');
