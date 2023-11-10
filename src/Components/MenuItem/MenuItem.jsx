
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex gap-8 p-6">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt={name} />
            <div>
                <h3 className="text-xl">{name}----------</h3>
                <p className="w-[350px]">{recipe}</p>
            </div>
            <p className="text-xl text-[#BB8506]">$ {price}</p>
        </div>
    );
};

export default MenuItem;