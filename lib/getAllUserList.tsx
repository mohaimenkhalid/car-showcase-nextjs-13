export default async function getAllUserList () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!res.ok) throw new  Error("Faild to fetch data!")
    return res.json()
};