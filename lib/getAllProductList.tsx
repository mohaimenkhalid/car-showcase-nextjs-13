export default async function getAllProductList () {
    const res = await fetch("https://dummyjson.com/products")
    if(!res.ok) throw new  Error("Faild to fetch data!")
    return res.json()
};