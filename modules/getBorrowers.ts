export const getBorrowers = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/getborrowers`)
    if(!res.ok){
        console.log(res);
    }
    return res.json();
}