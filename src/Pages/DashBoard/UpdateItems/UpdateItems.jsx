import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItems = () => {
    const { name, category, recipe, price, _id } = useLoaderData();

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res?.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                // show success popup
                // reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Item Added Successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div>
            <div className="py-10">
                <h1 className="text-center text-4xl font-normal">UPDATE ITEM</h1>
            </div>
            <div className="ml-10 px-40 mb-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            {...register('name', { required: true })}
                            required
                            placeholder="Recipe name"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-6 mt-6">
                        {/* category */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                {...register('price', { required: true })}
                                placeholder="Price"
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="mt-6">
                        {/* Recipe */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>

                            </label>
                            <textarea
                                className="textarea textarea-bordered h-40"
                                defaultValue={recipe}
                                {...register('recipe')}
                                placeholder="Recipe Details"></textarea>
                        </div>
                    </div>
                    <div className="mt-6">
                        <input
                            type="file"
                            {...register('image')}
                            className="file-input w-full max-w-xs" />
                    </div>
                    <button className="mt-8 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Update Item</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;