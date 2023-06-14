export default async function getProduct (productId: string) {
    const res = await fetch(`https://dummyjson.com/products/${productId}`)
    console.log(res)
    if(!res.ok) throw new  Error("Failed to fetch data!")
    return res.json()
};