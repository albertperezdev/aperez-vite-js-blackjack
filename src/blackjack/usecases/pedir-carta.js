
/**
 * Esta funcion me permite pedir una carta
 * @returns {String} Esto retorna la ultima carta del array y la elimina.
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}


