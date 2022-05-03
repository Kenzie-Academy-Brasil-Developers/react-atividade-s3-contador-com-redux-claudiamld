export const addNumber = (plusOne) => {
    return{
        type: "ADD_NUMBER",
        plusOne
    };
}

export const subNumber = (minusOne) => {
    return{
        type: "SUB_NUMBER",
        minusOne
    };
}