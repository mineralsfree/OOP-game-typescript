export const sortByInitiativity = (a,b)=>{
    if (a.initiative > b.initiative) {
        return -1;
    } else if (a.initiative < b.initiative ) {
        return 1;
    }
    return  Math.random() < 0.5 ? 1: -1;
}