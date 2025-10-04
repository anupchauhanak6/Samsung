import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import ImgGalaxy from '../assets/Galaxy-S25-home.webp'
import CardSection from '../Components/CardSection'

function Home() {
  return (
    <div className=''>

      <HeroSection />

      <img className='hidden sm:block w-full mt-[3vh]' src={ImgGalaxy}></img>
      <img className='bolck sm:hidden mt-[3vh]' src='https://images.samsung.com/is/image/samsung/assets/in/home/09-2025/Galaxy-S25-FE-Ecosystem_Home_Feature_KV_mo_720x1120.jpg?$720_N_JPG$'></img>

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