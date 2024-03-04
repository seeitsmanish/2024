async function fetchCardDetails () {

    const randomValue = Math.floor(Math.random() * 20) + 1;
    let data = await fetch(`https://fakestoreapi.com/products?limit=${randomValue}`);
    data = await data.json();
    console.log(data);
}

fetchCardDetails();