/*function t_szamol(){
    let a = parseInt(document.getElementById('a').value), 
        b = parseInt(document.getElementById('b').value);
    
    document.getElementById('k').value = (a + b) * 2;
    document.getElementById('t').value = a * b;
}*/

function valt(sik) {
    let forms = document.getElementsByTagName('form')
    for (let i = 0; i < forms.length; i++){
        forms[i].style.display = 'none';
    }
    
    switch (sik) {
        case 'teglalap':
            document.getElementById('teglalap').style.display = 'block';
            break;
        case 'kor':
            document.getElementById('kor').style.display = 'block';
            break;
        case 'hszog':
            document.getElementById('hszog').style.display = 'block';
            break;
        case 'negyzet':
            document.getElementById('negyzet').style.display = 'block';
            break;
        case 'hatszog':
            document.getElementById('hatszog').style.display = 'block';
            break;
    }
}


function szamol(sik) {
    switch (sik) {
        case 'teglalap':
            let t_a = parseInt(document.getElementById('teglap_a').value),
                t_b = parseInt(document.getElementById('teglap_b').value);

            /* Kerület számitás */
            document.getElementById('teglap_k').value = (t_a + t_b) * 2;
            /* Terület számitás */
            document.getElementById('teglap_t').value = t_a * t_b;
            break;
        case 'kor':
            let r = parseInt(document.getElementById('r').value);
            /* Kerület számitás */
            document.getElementById('kor_k').value = Math.round((2 * r * Math.PI) * 10) / 10;
            /* Terület számitás */
            document.getElementById('kor_t').value = Math.round((Math.pow(r, 2) * Math.PI) * 10) / 10;
            break;
        case 'hszog':
            let hsz_a = parseInt(document.getElementById('hszog_a').value), 
                hsz_b = parseInt(document.getElementById('hszog_b').value),
                hsz_c = parseInt(document.getElementById('hszog_c').value);

            /* Kerület számitás */
            let hsz_k = hsz_a + hsz_b + hsz_c
            document.getElementById('hszog_k').value = hsz_k;
            /* Terület számitás */
            let s = hsz_k / 2;
            document.getElementById('hszog_t').value = Math.round(Math.sqrt(s * (s - hsz_a) * (s - hsz_b) * (s - hsz_c)) * 10) / 10;
            break;
        case 'negyzet':
            let negyzet_a = document.getElementById('negyszog_a').value;

            /* Kerület számitás */
            document.getElementById('negyszog_k').value = 4 * negyzet_a;
            /* Terület számitás */
            document.getElementById('negyszog_t').value = Math.pow(negyzet_a, 2);
            break;
        case 'hatszog':
            let hatsz_a = document.getElementById('hatszog_a').value;

            /* Kerület számitás */
            document.getElementById('hatszog_k').value = 6 * hatsz_a;
            /* Terület számitás */
            document.getElementById('hatszog_t').value = Math.round((3 / 2) * Math.pow(hatsz_a, 2) * Math.sqrt(3) * 10) / 10;
            break;
    }
}