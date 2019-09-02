export const getOrderByInitiativity = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i].initiative > arr2[j].initiative) {
            arr.push(arr1[i]);
            i++;
        } else if (arr1[i].initiative < arr2[j].initiative) {
            arr.push(arr2[j]);
            j++;
        } else if (arr1[i].initiative === arr2[j].initiative && Math.random() < 0.5) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while (i< arr1.length){
        arr.push(arr1[i]);
        i++
    }
    while (j< arr2.length){
        arr.push(arr2[j]);
        j++
    }
    return arr;
}