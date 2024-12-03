import { FaStar } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";

import { Avatar } from "flowbite-react";
import profileImage from "../../../assets/profile.jpg";

const ReviewCard = () => {
    return (
      <SwiperSlide>
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
    );
};

export default ReviewCard;