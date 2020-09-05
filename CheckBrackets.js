function Check_Brackets(str){
    let symbols = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }
    let stack = [];
    for(var i = 0; i < str.length; i++){
        if(symbols.hasOwnProperty(str[i])){
            stack.push(str[i]);
        }
        else if(Object.values(symbols).includes(str[i])){
            let toVerify = stack.pop();
            if(str[i] !== symbols[toVerify]){
                return i;
            }
        }
    }

    if(stack.length != 0){
        return str.length;
    } else{
        return "Success";
    }

}

string1 = "[]";
string2 = "{}[]";
string3 = "[()]";
string4 = "(())";
string5 = "{[]}()";
string6 = "{";
string7 = "{[}";

console.log(Check_Brackets(string1));
console.log(Check_Brackets(string2));
console.log(Check_Brackets(string3));
console.log(Check_Brackets(string4));
console.log(Check_Brackets(string5));
console.log(Check_Brackets(string6));
console.log(Check_Brackets(string7));