import React from 'react';
import { RiMapPinLine } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { TbWorldWww } from 'react-icons/tb';
import { useMediaQuery } from '@mui/material';

export const ContactContainer = () => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  return (
    <div className='vector'>
      <div className='contact-data py-16 ...'>
        {!isSmallScreen ? (<>
        {/* Media query for screens greater than 900 pixels */}
        <div className='hidden sm:flex sm:justify-between sm:space-x-70 sm:mx-[2px] md:mx-[150px]  '>
          <div className='flex items-center'>
            <div className='rounded-full p-2 bg-blue-100 shadow-lg'>
              <RiMapPinLine className='text-[30px] text-black' />
            </div>
            <div className='ml-4'>
              <div>Address:</div>
              <div>702 A Manglam Aanchal, Kalwar</div>
              <div>Rd, Jaipur, Rajasthan 302012</div>
            </div>
          </div>
          <div className='flex px-4 items-center'>
            <div className='rounded-full p-2 bg-blue-100 shadow-lg'>
              <BiPhoneCall className='text-[30px] text-black' />
            </div>
            <div className='ml-4'>
              <div>Phone:</div>
              <div>+91-987654321</div>
            </div>
          </div>
          <div className='flex px-4 items-center'>
            <div className='rounded-full p-2 bg-blue-100 shadow-lg'>
              <AiOutlineMail className='text-[30px] text-black' />
            </div>
            <div className='ml-4'>
              <div>Email:</div>
              <div>xyz123@gmail.com</div>
            </div>
          </div>
          <div className='flex px-4 items-center'>
            <div className='rounded-full p-2 bg-blue-100 shadow-lg'>
              <TbWorldWww className='text-[30px] text-black' />
            </div>
            <div className='ml-4'>
              <div>Website:</div>
              <div>tcpsolutions.com</div>
            </div>
          </div>
          </div>
          </>) : (<>

        {/* Media query for screens less than 900 pixels */}
        <div className=''>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='flex px-4 items-center'>
              <div className='rounded-full p-2 bg-blue-100 shadow-lg'>
                <RiMapPinLine className='text-[30px] text-black' />
              </div>
              <div className='ml-4'>
                <div>Address:</div>
                <div>702 A Manglam Aanchal, Kalwar</div>
                <div>Rd, Jaipur, Rajasthan 302012</div>
              </div>
            </div>
            <div className='flex px-4 items-center'>
              <div className='rounded-full p-2 bg-blue-100 shadow-lg'>
                <BiPhoneCall className='text-[30px] text-black' />
              </div>
              <div className='ml-4'>
                <div>Phone:</div>
                <div>+91-987654321</div>
              </div>
            </div>
            <div className='flex px-4 items-center'>
              <div className='rounded-full p-2 bg-blue-100 shadow-lg'>
                <AiOutlineMail className='text-[30px] text-black' />
              </div>
              <div className='ml-4'>
                <div>Email:</div>
                <div>xyz123@gmail.com</div>
              </div>
            </div>
            <div className='flex px-4 items-center'>
              <div className='rounded-full p-2 bg-blue-100 shadow-lg'>
                <TbWorldWww className='text-[30px] text-black' />
              </div>
              <div className='ml-4'>
                <div>Website:</div>
                <div>tcpsolutions.com</div>
              </div>
            </div>
          </div>
            </div>
            </>)}
        </div>
        
    </div>
  );
};
