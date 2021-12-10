
const heroesIds = [
    'capi',
    'iron',
    'spider'
];

export const obtenerHeresArr = () => {

    const heroesArr = [];

    for( const id of heroesIds)
        heroesArr.push( await buscarheroesAsync(id));

    return heroesArr;
}