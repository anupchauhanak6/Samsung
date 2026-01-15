import React from 'react'
import HeroSection from '../Components/HeroSection'
import ProductCard from '../Components/ProductCard'
import BuyButton from '../Components/BuyButton'
import LernMoreButton from '../Components/LernMoreButton';



function Home() {
  return (
    <>
    <HeroSection />   {/* hero image  */}
    <div className={`mx-auto max-w-[1440px] w-full mt-5`}>
      
    {/* 2nd img */}
    <div className="relative cursor-pointer ">
      <img className=" hidden sm:block w-full" src="https://images.samsung.com/is/image/samsung/assets/in/home/11-2025/25_ym_2h_home_feature-kv_mx_pc_1440x810_text.jpg?$1440_N_JPG$" alt="" />
      <img className="sm:hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_MX_720X1120-MO_2.jpg?$720_N_JPG$" alt="" />

      <div className="absolute z-10 top-[35%] left-[60px] translateY(-50%) w-[620px] mt-[-4px] ">
        <h1 className=" text-[#000] font-bold text-[3.88888889vw] leading-[1.2]">
          {"Your coach,"}
          <br/>
          {"day and night"}
        </h1>
        <div className="flex mt-[4.44444445vw] items-center">
          <LernMoreButton Name='More on Galaxy Watch8' />
          <BuyButton Name="More on Galaxy Z Fold7" className='md:ml-[1.73611111vw]' />
        </div>
      </div>
    </div>
      
    {/* Product Card 1st */}
    <div className="flex w-auto relative overflow-x-auto scroll-smooth p-[1.66666667vw_0vw_1.66666667vw_0vw] sm:px-0 max-w-full scrollbar-hide ">
      <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/Galaxy-Z-Flip7_Home_Feature_Card_560x560.jpg?$560_560_JPG$" title={"Galaxy Z Flip7"} />
      <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8-Classic_560x560.jpg?$560_560_JPG$" title={"Galaxy Watch8 Classic"}/>
      <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/mx_2507/HOME_Feature-Card_Watch8_560x560.jpg?$560_560_JPG$"  title={"Galaxy Watch8"} />
      <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250911/TabS10_Lite_featured_cards_560x560.jpg?$560_560_JPG$" title={"Galaxy Tab S10 Lite"} />
    </div>

    {/* 3rd image */}
    <div className=" cursor-pointer relative">
      <img className="hidden sm:block" src="https://images.samsung.com/is/image/samsung/assets/in/home/11-2025/25_ym_2h_home_feature-kv_vd_pc_1440x810_text-1.jpg?$1440_N_JPG$" alt="" />
      <img className="sm:hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_VD_720X1120_MO_.jpg?$720_N_JPG$" alt="" />

      <div className=" top-[35%] left-[60px] translateY(-50%) absolute z-10 w-[620px] mt-[-4px]">
        <h1 className="font-bold text-[56px] leading-[1.2]">Upscale viewing experience</h1>
        {/* <p className=" text-white text-[24px] mt-[17px] leading-[1.33]">Grab the Frame TV</p> */}

        <div className="flex items-center mt-[50px] gap-6">
          <LernMoreButton Name='Learn more' />
          <BuyButton Name="View all"/>
        </div>
      </div>
    </div>

    {/* Product Card 2nd */}
    <div className='relative p-[1.66666667vw_0vw_1.66666667vw_0vw] m-[0_auto]'>
      <div className="flex relative overflow-x-auto scroll-smooth w-full box-border sm:px-0 max-w-full scrollbar-hide ">
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card1_560X560.jpg?$560_560_JPG$" title={"Neo QLED 8K"} />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card2_560X560.jpg?$560_560_JPG$" title={"The Frame"} />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDVD_Feature_Card3_560X560.jpg?$560_560_JPG$" title={"Q-series Soundbar"} />
        <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250807/M7.jpg?$560_560_JPG$" title={"Smart Monitor M7"} />
      </div>
    </div>     

    {/* 4th img */}   
    <div className="relative">
      <img className="w-full h-full sm:block hidden" src="https://images.samsung.com/is/image/samsung/assets/in/home/11-2025/25_ym_2h_home_feature-kv_da_2_pc_1440x810_text.jpg?$1440_N_JPG$" alt="" />
      <img className="sm:hidden block" src="https://images.samsung.com/is/image/samsung/assets/in/home/10-2025/FGF_DA_720X1120-MO.jpg?$720_N_JPG$" alt="" />
      <div className=" absolute z-10 top-[35%] left-[60px] translateY(-50%) w-[620px] mt-[-4px]">
        <h1 className="font-bold text-[56px] leading-[1.2]">
          {"Wash,"}
          <br/>
          {"tailored to fabric"}
        </h1>
        {/* <p className="text-white  mt-[17px] text-[24px] leading-[1.33]">Grab Bespoke AI Laundry Combo</p> */}

        <div className="mt-[50px] flex items-center">
          <BuyButton Name="Learn more" />
        </div>
      </div>
    </div>

    {/* Product Card 3rd */}
    <div className="flex w-auto relative overflow-x-auto scroll-smooth p-[1.66666667vw_0vw_1.66666667vw_0vw] sm:px-0 max-w-full scrollbar-hide ">
      <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250807/1.png?$560_560_PNG$" title={"Bespoke AI Refrigerator"} />
      <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card2_560X560.jpg?$560_560_JPG$" title={"Bespoke AI Laundry"} />
      <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/home/250813/WindFree_Inverter_Split_AC_AR60F19D13W_560X560_Fearture_card.jpg?$560_560_JPG$" title={"Bespoke AI WindFree AC"} />
      <ProductCard img="https://images.samsung.com/is/image/samsung/assets/in/ux3/home/MDDA_Feature_Card4_560X560.jpg?$560_560_JPG$" title={"Microwave Ovens"}/>
    </div>
  </div>
</>

  );
}

export default Home;