const getDataFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveToLocalStorage = cart => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

const addToLocalStorage = id => {
    const cart = getDataFromLocalStorage();
    cart.push(id);
    saveToLocalStorage(cart);
}


const removeDataFromLocalStorage = id => {
    const cart = getDataFromLocalStorage();
    const remainingData = cart.filter(data => data !== id);
    saveToLocalStorage(remainingData);
}

export { addToLocalStorage, getDataFromLocalStorage, removeDataFromLocalStorage }