const Borrow = () => {
    return (
        <main className="w-full">
            <div id="borrow-container" className="w-full">
                <form action="POST" className="flex flex-wrap w-1/3 m-auto p-7 backdrop-blur-sm border rounded-xl">
                    <label htmlFor="fname" className="w-full font-bold">First Name:</label>
                    <input type="text" name="fname" id="fname" className="w-5/6 my-3" />
                    <label htmlFor="lname" className="w-full font-bold">Last Name:</label>
                    <input type="text" name="lname" id="lname" className="w-5/6 my-3" />
                    <label htmlFor="bookName" className="w-1/3 font-bold">Book:</label>
                    <label htmlFor="quantity" className="w-1/3 font-bold">Quantity:</label>
                    <input type="text" name="bookName" id="bookName" className="w-1/3 my-3 mx-2" />
                    <input type="text" name="quantity" id="quantity" className="w-1/3 my-3 mx-2" />
                </form>
            </div>
        </main>
    );
}

export default Borrow;