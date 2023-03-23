import { Link } from 'react-router-dom';
import { logo } from '../../assets';

const Navbar = ()=> {
    return (
        <div>
            <div className='w-6rem h-6rem py-3 px-6'>
                <Link to={'/'}>
                    <img src={logo} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;