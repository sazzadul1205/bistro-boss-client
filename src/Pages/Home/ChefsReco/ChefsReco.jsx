import Button from "../../../Components/Button/Button";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import image from "../../../assets/home/featured.jpg"

const ChefsReco = () => {
    const title = 'Caeser Salad'
    const description = `Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.`
    return (
        <div>
            <SharedTitle
                heading={'CHEF RECOMMENDS'}
                subHeading={'---Should Try---'}
            ></SharedTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32">
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure >
                            <img src={image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                            <div className="card-actions">
                                <Button></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure >
                            <img src={image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                            <div className="card-actions">
                                <Button></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                            <div className="card-actions">
                                <Button></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsReco;