import _ from 'underscore';
//Esta funcion crea un deck

/**
 * Esta funcion crea un deck de cartas
 * @param {Array <string>} tiposDeCartas  Ejemplo: ['C','D','H','S']
 * @param {Array <string>} TiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array <string>} retorna un arreglo de cartas
 */
export const crearDeck = (tiposDeCartas, TiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length === 0 ) {
        throw new Error('Tipos de carta es obligatorio como un arreglo de string');    
    }
    if (!TiposEspeciales || TiposEspeciales.length === 0 ) {
        throw new Error('Tipos de carta es obligatorio como un arreglo de string');    
    }

    let deck = [];



    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}