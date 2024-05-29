import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";
import carousel3 from "../../assets/carousel3.png";
import carousel4 from "../../assets/carousel4.png";
const carousels = [carousel1, carousel2, carousel3, carousel4];
const BannerSlide = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {carousels.map((carousel, idx) => (
          <SwiperSlide key={idx}>
            <img
              className="w-full rounded-md h-[620px]"
              src={carousel}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
