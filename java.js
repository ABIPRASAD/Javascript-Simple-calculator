function show(symbol){
    document.getElementById("display").value+=symbol;
}
function remove(){
    document.getElementById("display").value=""
}
function equalto(){
    let text=document.getElementById("display").value
    let result=eval(text);
    document.getElementById("display").value=result
}