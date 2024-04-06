
// Aggiungiamo la componente js di interazione con l’utente.
const selectJobElement = document.getElementById('selettoreLavoro')
const formElement    = document.getElementById('form')
const totalElement     = document.getElementById('totale')
const promoElement     = document.getElementById('inputCodePromo')
// Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste. 
formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    const servizio  = selectJobElement.value
    // Il prezzo orario per una commissione varia in questo modo:
    // se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
    // se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
    // se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

    const tariffaBackend  = 20.50
    const tariffaFrontend = 15.30
    const tariffaAnalisi  = 33.60

    // Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).
    const oreLavoro = 10
    let risultato   = 0

    if (servizio === 'Backed Development') {
        risultato = (((oreLavoro * tariffaBackend) + '€'))
        console.log(risultato)
        totalElement.innerHTML = (' per una prestazione di 10 ore selezionando il ' + servizio + ' la tua tariffa è ' + risultato)
    } else if (servizio === 'Frontend Development') {
        risultato = (((oreLavoro * tariffaFrontend) + '€'))
        console.log(risultato)
        totalElement.innerHTML = (' per una prestazione di 10 ore selezionando il ' + servizio + ' la tua tariffa è ' + risultato)
    } else if (servizio === 'Project Analysis') {
        risultato = (((oreLavoro * tariffaAnalisi) + '€'))
        console.log(risultato)
        totalElement.innerHTML = (' per una prestazione di 10 ore selezionando il ' + servizio + ' la tua tariffa è ' + risultato)
    }


    // L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24. 
    const prezzoNumero = parseFloat(risultato)
    const codiciValidi = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
    const codicePromozionale = promoElement.value
    // Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
    if (codicePromozionale) {
        // Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).
        if (codiciValidi.includes(codicePromozionale)) {
            const sconto = prezzoNumero * 0.25;
            const prezzoScontato = (prezzoNumero - sconto).toFixed(2)
            console.log((prezzoScontato))
            totalElement.innerHTML = ('il tuo codice è valido abbiamo effettuato uno sconto del 25%  al totale di ' + risultato + ' il tuo prezzo sarà  ' + prezzoScontato + '€ per una prestazione di 10 ore selezionando il ' + servizio + '!')
        } else {
            totalElement.innerHTML = ('Il codice promozionale inserito non è valido. Non è possibile applicare sconti,  per una prestazione di 10 ore il tuo prezzo sarà ' + risultato)
        }
    }
})






