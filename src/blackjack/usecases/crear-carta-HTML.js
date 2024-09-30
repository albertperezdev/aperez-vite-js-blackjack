

export const crearCarta = (carta) => {
    if (!carta) throw new Error ('El argumento carta es obligatorio')
    
        const imgCarta = document.createElement('img');
        imgCarta.src = `./public/assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        
        return imgCarta
}