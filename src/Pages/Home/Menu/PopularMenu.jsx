import SharedTitle from '../../../Components/SharedTitle/SharedTitle'
import MenuItem from '../../../Components/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='mb-5'>
            <SharedTitle
                heading={'FROM OUR MENU'}
                subHeading={'---Check it out---'}
            ></SharedTitle>
            <div className='grid grid-cols-2'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-black mb-2">View Full Menu</button>
            </div>
 


        </section>
    );
};

export default PopularMenu;