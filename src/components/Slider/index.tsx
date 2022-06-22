import { Flex } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Zoom } from "swiper";
import { SliderItem } from "./SliderItem";

import data from "../../../server.json";

export const Slider = () => {
  return (
    <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]} justify="center" align="center">
      <Swiper
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1", height: "100%" }}
      >
        {data.continents.map((continent, index) => (
          <SwiperSlide key={index}>
            <SliderItem
              title={continent.name}
              info={continent.info}
              imageUrl={continent.bannerImage}
              slug={continent.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
