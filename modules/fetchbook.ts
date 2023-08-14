export const getBooks = async () =>{
    const res = await fetch(`${process.env.BASE_URL}/api/getbooks`)
    if(!res.ok){
        console.log(res);
    }
    return res.json();
}
