import { phoneCall } from '../../assets'

const Banner = ()=> {
    return(
        <div className='surface-900 text-white text-sm py-1 pr-8 banner'>
            <div className='flex justify-content-end align-items-center gap-1'>
                <img src={phoneCall} />
                <span><a href="tel:+551 225 0733">+551 225 0733</a></span>
            </div>
        </div>
    )
}

export default Banner;