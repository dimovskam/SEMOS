const makeId = (lenght) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charLenght = characters.length

    for (let i = 0; i < lenght; i++){
        result += characters.charAt(Math.floor(Math.random() * charLenght))
    }
    return result;
}

module.exports = makeId;