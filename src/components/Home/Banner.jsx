import { phoneCall } from '../../assets'

const Banner = ()=> {
    return(
        <div className='surface-900 text-white text-sm py-2 pr-8'>
            <div className='flex justify-content-end align-items-center gap-1'>
                <img src={phoneCall} />
                <span>+551 225 0733</span>
            </div>
        </div>
    )
}

export default Banner;