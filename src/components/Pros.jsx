import card from '/images/credit-card-pos.png'
import store from '/images/storeicon.png'
import lock from '/images/lockicon.png'
import search from '/images/searchicon.png'

const Pros = () => {
  return (
    <div className='flex md:flex-row flex-col md:items-center items-start justify-center gap-4 mt-5'>
        <div className='flex flex-col items-start md:max-w-64'>
            <figure className='bg-secondary-yellow p-2 rounded-full w-fit text-sm'>
                <img src={card} alt="" />
            </figure>
            <h3 className='font-medium text-lg'>Buy with confidence</h3>
            <p className='text-gray-elements text-sm'>Set your budget, get offers, and pay securely with escrow</p>
        </div>
        <div className='flex flex-col items-start md:max-w-64'>
            <figure className='bg-secondary-yellow p-2 rounded-full w-fit text-sm'>
                <img src={store} alt="" />
            </figure>
            <h3 className='font-medium text-lg'>Sell with Ease</h3>
            <p className='text-gray-elements text-sm'>List items or services, showcase with videos, and build trust fast</p>
        </div>
        <div className='flex flex-col items-start md:max-w-64'>
            <figure className='bg-secondary-yellow p-2 rounded-full w-fit text-sm'>
                <img src={lock} alt="" />
            </figure>
            <h3 className='font-medium text-lg'>Secure and reliable</h3>
            <p className='text-gray-elements text-sm'>AI checks, fraud detection, and verified profiles keep you protected</p>
        </div>
        <div className='flex flex-col items-start md:max-w-64'>
            <figure className='bg-secondary-yellow p-2 rounded-full w-fit text-sm'>
                <img src={search} alt="" />
            </figure>
            <h3 className='font-medium text-lg'>Search & Connect Nearby</h3>
            <p className='text-gray-elements text-sm'>Search by location and chat directly with buyers or artisans</p>
        </div>
    </div>
  )
}

export default Pros