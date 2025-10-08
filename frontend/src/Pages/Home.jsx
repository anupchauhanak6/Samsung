import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import ImgGalaxy from '../assets/Galaxy-S25-home.webp'
import CardSection from '../Components/CardSection'

function Home() {
  return (
    <div className=''>

      <HeroSection />

      <div className='h-full w-full relative'>
        <img className='hidden sm:block w-full mt-[3vh]' src={ImgGalaxy}></img>
        <img className='bolck sm:hidden mt-[3vh]' src='https://images.samsung.com/is/image/samsung/assets/in/home/09-2025/Galaxy-S25-FE-Ecosystem_Home_Feature_KV_mo_720x1120.jpg?$720_N_JPG$'></img>

        <div className="flex sm:flex-row items-center absolute translate-x-[35vw] -translate-y-[120vw] sm:-translate-y-[28vw] sm:translate-x-[53vw] mt-[2.5vw] sm:mt-[1.59722222vw] flex-col justify-start">

          <button className="order-2 sm:order-1 cursor-pointer relative text-black font-semibold after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-black after:left-0 sm:after:bottom-[8.5px] after:bottom-[9.9px] after:transition-all after:duration-300 hover:after:w-full underline decoration-1 underline-offset-8 hover:no-underline mt-[1.94444444vw] sm:mt-0 p-[2.77777778vw_0vw_3.05555556vw_0vw] sm:p-[.69444444vw_0vw_.76388889vw_0vw]">
            BuyBuds3FE
          </button>
          <button className="order-1 sm:order-2 cursor-pointer sm:p-[1.1022167487684729vh_2.8167487684729062vh_1.2246305418719212vh_2.8167487684729062vh] rounded-full font-bold bg-transparent text-black hover:bg-black hover:text-white transition border-[0.5px] sm:ml-[1.73611111vw] p-[2.5vw_6.38888889vw_2.77777778vw_6.38888889vw] text-[3.88888889vw] sm:text-[.97222222vw] mt-[1.94444444vw] sm:mt-0">
            BuyS25FE
          </button>
        </div>

      </div>

      <div className='flex p-[1.66666667vw_0vw_1.66666667vw_0vw] gap-[1.6666666vw]'>
      <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/mx_2507/Galaxy-Z-Flip7_Home_Feature_Card_560x560.jpg?$560_560_JPG$'/>
      <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8-Classic_560x560.jpg?$560_560_JPG$'/>
      <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8_560x560.jpg?$560_560_JPG$'/>
      <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/home/250911/TabS10_Lite_featured_cards_560x560.jpg?$560_560_JPG$'/>
      </div>

      <img className='hidden sm:block' src='https://images.samsung.com/is/image/samsung/assets/in/home/250717/VD-KV-PC_1440x810.png?$1440_N_PNG$'></img>
      <img className='block sm:hidden' src='https://images.samsung.com/is/image/samsung/assets/in/home/250717/VD-KV-MO_720x1120.png?$720_N_PNG$'></img>

      <div className='flex p-[1.66666667vw_0vw_1.66666667vw_0vw] gap-[1.6666666vw]'>
        <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card1_560X560.jpg?$560_560_JPG$'/>
        <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card2_560X560.jpg?$560_560_JPG$'/>
        <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card3_560X560.jpg?$560_560_JPG$'/>
        <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/home/250807/M7.jpg?$560_560_JPG$'/>
      </div>

      <img className='hidden sm:block w-full' src='https://images.samsung.com/is/image/samsung/assets/in/home/250829/Washer_Dryer_KV_PC_1440x810_withoutText.jpg?$1440_N_JPG$'></img>
      <img className='block sm:hidden' src='https://images.samsung.com/is/image/samsung/assets/in/home/250829/Washer_Dryer_KV_mo_720x1120_withoutText.jpg?$720_N_JPG$'></img>

      <div className='flex p-[1.66666667vw_0vw_1.66666667vw_0vw] gap-[1.6666666vw]'>
        <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/home/250807/1.png?$560_560_PNG$'/>
        <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card2_560X560.jpg?$560_560_JPG$'/>
        <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/home/250813/WindFree_Inverter_Split_AC_AR60F19D13W_560X560_Fearture_card.jpg?$560_560_JPG$'/>
        <CardSection img='https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card4_560X560.jpg?$560_560_JPG$'/>
      </div>
    </div>
  )
}

export default Home