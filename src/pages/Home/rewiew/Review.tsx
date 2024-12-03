import SectionHeading from "../../shared/SectionHeading";
import ReviewCard from "./ReviewCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

import { Avatar } from "flowbite-react";
import profileImage from "../../../assets/profile.jpg";
const Review = () => {
    return (
        <div className="my-12 px-4 ">
            <SectionHeading text="Our Customers"/>
            <div className="my-16 px-4 lg:px-24">
      <div className='mt-12'>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
            <SwiperSlide className="shadow-2xl bg-white py-8px-4 md:m-5 rounded">
              <div className='space-y-6 '>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate nesciunt sed cupiditate, excepturi neque eos facere quisquam totam ex impedit doloremque ipsa. Repudiandae est repellat quaerat quae dignissimos ratione!</p>
                    <Avatar img={profileImage} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-semibold '>Mark Hery</h5>
                    <p>CEO, XYZ Company</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide className="shadow-2xl bg-white py-8px-4 md:m-5 rounded">
              <div className='space-y-6 '>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate nesciunt sed cupiditate, excepturi neque eos facere quisquam totam ex impedit doloremque ipsa. Repudiandae est repellat quaerat quae dignissimos ratione!</p>
                    <Avatar img={profileImage} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-semibold '>Mark Hery</h5>
                    <p>CEO, XYZ Company</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide className="shadow-2xl bg-white py-8px-4 md:m-5 rounded">
              <div className='space-y-6 '>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate nesciunt sed cupiditate, excepturi neque eos facere quisquam totam ex impedit doloremque ipsa. Repudiandae est repellat quaerat quae dignissimos ratione!</p>
                    <Avatar img={profileImage} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-semibold '>Mark Hery</h5>
                    <p>CEO, XYZ Company</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide className="shadow-2xl bg-white py-8px-4 md:m-5 rounded">
              <div className='space-y-6 '>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate nesciunt sed cupiditate, excepturi neque eos facere quisquam totam ex impedit doloremque ipsa. Repudiandae est repellat quaerat quae dignissimos ratione!</p>
                    <Avatar img={profileImage} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-semibold '>Mark Hery</h5>
                    <p>CEO, XYZ Company</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide className="shadow-2xl bg-white py-8px-4 md:m-5 rounded">
              <div className='space-y-6 '>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate nesciunt sed cupiditate, excepturi neque eos facere quisquam totam ex impedit doloremque ipsa. Repudiandae est repellat quaerat quae dignissimos ratione!</p>
                    <Avatar img={profileImage} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-semibold '>Mark Hery</h5>
                    <p>CEO, XYZ Company</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide className="shadow-2xl bg-white py-8px-4 md:m-5 rounded">
              <div className='space-y-6 '>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate nesciunt sed cupiditate, excepturi neque eos facere quisquam totam ex impedit doloremque ipsa. Repudiandae est repellat quaerat quae dignissimos ratione!</p>
                    <Avatar img={profileImage} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-semibold '>Mark Hery</h5>
                    <p>CEO, XYZ Company</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide className="shadow-2xl bg-white py-8px-4 md:m-5 rounded">
              <div className='space-y-6 '>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate nesciunt sed cupiditate, excepturi neque eos facere quisquam totam ex impedit doloremque ipsa. Repudiandae est repellat quaerat quae dignissimos ratione!</p>
                    <Avatar img={profileImage} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-semibold '>Mark Hery</h5>
                    <p>CEO, XYZ Company</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide className="shadow-2xl bg-white py-8px-4 md:m-5 rounded">
              <div className='space-y-6 '>
                <div className='text-amber-500 flex gap-2'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate nesciunt sed cupiditate, excepturi neque eos facere quisquam totam ex impedit doloremque ipsa. Repudiandae est repellat quaerat quae dignissimos ratione!</p>
                    <Avatar img={profileImage} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-semibold '>Mark Hery</h5>
                    <p>CEO, XYZ Company</p>
                </div>
              </div>
            </SwiperSlide>
            
      </Swiper>
            </div>
        </div>
        </div>
    );
};

export default Review;