/** 
 * This function calculates total price of a new order
 * @param {Array products} cartProducts: Array of objects
 * @return {number} Total Price
*/

export const totalPrice = (products) => {
    return products.reduce((total, product) => total + product.price, 0);
};