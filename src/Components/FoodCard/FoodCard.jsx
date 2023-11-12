
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure >
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white text-lg ">~ $ {price} ~</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4 mt-4 text-[#BB8506]"> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;