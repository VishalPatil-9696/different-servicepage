import React from 'react'
import { LuArrowUpDown } from "react-icons/lu";
export default function Middle() {
  return (
    <>
    <div className='bg-[#d9d9d9] lg:max-w-[1400px] mx-auto'>
    <div className='flex justify-between'>
      <div className='flex gap-5 lg:ml-5  mt-6'>
        <h3 className='bg-white rounded px-2 text-[10px]'>Services</h3>
        <h3 className='bg-white rounded px-2 text-[10px]'>Top Ac Service Provider</h3>
      </div>
        <div className='flex gap-1 leading-3 bg-white mt-3 mb-2 rounded-lg lg:mr-5 mr-2 lg:px-3  py-1'>
            <i><LuArrowUpDown /></i>
            <h3 className='text-[10px] pr-1'>Sort by : Relevance</h3>
        </div>
      </div>
      <hr className='border border-t-[1px] border-slate-500'/>
      <h1 className='mx-auto text-center underline font-bold'>Different Services That Makes your Life Easy</h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:mx-20 mt-3'>
        <div className='relative mt-7'>
        <img className=' rounded-lg' src="https://imgs.search.brave.com/88H3MVNIh8dpehyZijD6tVSYMD_gE1rfzJLu3Eaq4gI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODMxMzQ1/MTI1MzgtN2IzOTBk/MGFkYzllP2ZtPWpw/ZyZ3PTMwMDAmYXV0/bz1mb3JtYXQmZml0/PWNyb3AmcT02MCZp/eGxpYj1yYi00LjAu/MyZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE9YeDhZ/V2x5SlRJd1kyOXVa/R2wwYVc5dVpYSjha/VzU4TUh4OE1IeDhm/REE9.jpeg" alt="" />
        <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%]'>Ac Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://imgs.search.brave.com/NI5LxcialkW3a4XOU8lWHV3SF0DMBEh_9hDMoJE0xU8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI3/ODQ1MDcxL3Bob3Rv/L3BsdW1iZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWRX/Q19iN3VDQnV3RjVT/UWREQWtBNDhHek4t/SFRrV2ZCaml6RHN3/b1JoMk09" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%] '>Plumbing Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://img.freepik.com/free-photo/family-having-fun-with-orange-paint-using-color-renovate-apartment-walls-together-woman-with-child-laughing-painting-house-room-with-paintbrush-tools-diy-interior-job_482257-48750.jpg?w=900&t=st=1720596561~exp=1720597161~hmac=e8e02d02738c37b1cfd66535fff16d2b91542e34ad69c3f764b0e47d3bdc8bad" alt="" />
            <h1 className=' bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%] '>Painting Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://images.pexels.com/photos/313776/pexels-photo-313776.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%]  '>Carpaenter Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://imgs.search.brave.com/Ffnya-JoMDVfkLIi5w9HXb84WEp5Oiymq4Gmvcb7hiI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMTU4MDQ1/LzQxNDkvaS80NTAv/ZGVwb3NpdHBob3Rv/c180MTQ5MTAzMS1z/dG9jay1waG90by1z/ZWN1cml0eS1ndWFy/ZC5qcGc" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%]  '>Security Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://imgs.search.brave.com/TXa_w8czIFogGr-V6BKlL2wiF2xfOZ7uL96M88ggjWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODY4ODc1L3Bob3Rv/L3Blc3QtY29udHJv/bC53ZWJwP2I9MSZz/PTE3MDY2N2Emdz0w/Jms9MjAmYz1BZUVC/b1FORTRHSWFUUlR4/bUg3WndLYU4xbGpo/ZU9iMEprdGxYbU53/R0FJPQ" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%]  '>Pest Control Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://imgs.search.brave.com/Yu9W9ll2PT-FCmtnQcwx45viDPPSw511kRKWTzUpHHM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEx/OTkwODE0L3Bob3Rv/L2luZHVzdHJpYWwt/ZWxlY3RyaWMtcGFu/ZWwtcmVwYWlyLndl/YnA_Yj0xJnM9MTcw/NjY3YSZ3PTAmaz0y/MCZjPUV1dk1VV1B5/a3pkZzNWYkstaHYz/Qm1MUXBsSlg2cHFL/al9qOUI4VDRqcFk9" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%]   '>Electrical Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://imgs.search.brave.com/gSd7B97Zjj2kqQMmmc8dBlXjHX53SoiXIZEbVOSKOsQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTk1/MTYxNDEwOS9waG90/by93aWZpLWludGVy/bmV0LWFjY2Vzcy1j/b25jZXB0LWJ1c2lu/ZXNzLXBlb3BsZS1j/b25uZWN0LXdpZmkt/dGVjaG5vbG9neS1j/b25uZWN0LWluc3Rh/bnRseS12aWEud2Vi/cD9iPTEmcz0xNzA2/NjdhJnc9MCZrPTIw/JmM9SjE0eXpMdzU3/cklSNzhmdkt0TE43/dTJQeXFiXzR0XzJy/Q1YtMWdmTXZ3cz0" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%]   '>WIfi Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://imgs.search.brave.com/X0tvg0-MjnH9ED4PESJF7w6PlmabvqgXO46Ulz8JJLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU1/NjEyMDYzMC9waG90/by9tYW4tc2hvcHBp/bmctaW4tdGhlLXBy/b2R1Y2UtYWlzbGUt/YXQtdGhlLXN1cGVy/bWFya2V0LndlYnA_/Yj0xJnM9MTcwNjY3/YSZ3PTAmaz0yMCZj/PVEzSUt5M2dnSlpx/N2xta3NzdjF0Ym5q/bGVWVnhhUnpYR3Vi/bGZveVVMUEk9" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%]   '>Grocery Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://imgs.search.brave.com/KPJXneihZryec-KZkI3tzrSarGxmA2CkWCgiv6Qqlog/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/NzE4MDI2Ni9waG90/by9ob3RlbC1jbGVh/bmluZy1zZXJ2aWNl/LndlYnA_Yj0xJnM9/MTcwNjY3YSZ3PTAm/az0yMCZjPUw1MDBI/R3VVU0VhaU5XSXJI/aWJjTktrcjh0VGlS/eUczbmFfLWIzdmk4/aG89" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%]   '>Housekeeping Services</h1>
        </div>
        <div className='relative mt-7'>
            <img className='rounded-lg' src="https://imgs.search.brave.com/rWl4T71ToTcP0hRr9BvfjRsUCGVWnl1jQ4ohF_hbwGQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/ZGVmX2NvbnRlbnQv/ZHRoLXR2LXJlcGFp/ci1hbmQtc2Vydmlj/ZXMtZGlzaC10di9n/ZGZ1b3ZraGxpLWR0/aC10di1yZXBhaXIt/YW5kLXNlcnZpY2Vz/LWRpc2gtdHYtMi0w/ZG12bi5qcGc_dz0z/ODQwJnE9NzU" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%]   '>DTH Services</h1>
        </div>
        <div className='relative mt-7 mb-14'>
            <img className='rounded-lg ' src="https://imgs.search.brave.com/aefxVfNEwv4m69fMoIr5r_XkZ4DhZJpIVgoTdVt1Yn8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9idmlsYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDQvVGhlLUJlc3Qt/R2FyZGVuaW5nLVNl/cnZpY2VzLU9wdGlv/bi5qcGc_c3RyaXA9/YWxsJnF1YWxpdHk9/OTU" alt="" />
            <h1 className='bg-white w-fit p-5 rounded absolute -mt-[30px] ml-[30%] '>Gardening Services</h1>
        </div>
      </div>











      </div>
    </>
  )
}
