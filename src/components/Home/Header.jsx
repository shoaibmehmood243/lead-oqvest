import { logo } from '../../assets'

const Header = ()=> {
    return(
        <div className='header'>
            <div className='flex justify-content-around gap-4 align-items-center py-2 px-3 md:px-0'>
                <img src={logo} />
                <p className='m-0'>"Join the ranks of our satisfied borrowers who have saved thousands of dollars by trusting us as their mortgage broker. We have a lot of options"</p>
            </div>
        </div>
    )
}

export default Header;