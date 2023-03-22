

function calc() 
{
    let km = document.getElementById('kmPasseggero').value;
    let età = document.getElementById('etàPasseggero').value;
    let prezzokm = 0.21;
    
    document.getElementById('risultato').innerHTML= 'Il prezzo del biglietto è: '+ km*prezzokm +'€'
}
    