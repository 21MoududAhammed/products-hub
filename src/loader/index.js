const fetchProducts = async() =>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = res.json();
    return data;
}

export {fetchProducts}