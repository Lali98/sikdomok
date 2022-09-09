function t_szamol(){
    let a = parseInt(document.getElementById('a').value), 
        b = parseInt(document.getElementById('b').value);
    
    document.getElementById('k').value = (a + b) * 2;
    document.getElementById('t').value = a * b;
}