import { logo } from '../../assets';

const Navbar = ()=> {
    return (
        <div>
            <div className='w-6rem h-6rem py-3 px-6'>
                <img src={logo} />
            </div>
        </div>
    )
}

export default Navbar;