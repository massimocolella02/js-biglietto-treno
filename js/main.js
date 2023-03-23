

function calc() 
{
    let km =  document.getElementById('kmPasseggero').value;
    let età = document.getElementById('etàPasseggero').value;

    const prezzokm = 0.21;

    let costo = km * prezzokm

    if ( età < 18 ) {
        costo = costo * 0.80
        document.getElementById('risultato').innerHTML= 'Il prezzo del biglietto per minorenni è ' + costo.toFixed(2) + '€'
    } else if ( età > 65 ) {
        costo = costo * 0.60
        document.getElementById('risultato').innerHTML= 'Il prezzo del biglietto per anziani è ' + costo.toFixed(2) + '€'
    } else {
        document.getElementById('risultato').innerHTML= 'Il prezzo del biglietto è ' + costo.toFixed(2) + '€'
    }
}


