import { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Zoom } from "swiper";

import { ContinentSliderTypes } from "../../interfaces/types";
import { SliderItem } from "./SliderItem";
import { api } from "../../services/api";

export const Slider = () => {
  const [continent, setContinent] = useState<ContinentSliderTypes[]>([]);

  useEffect(() => {
    api
      .get("/continents")
      .then((response) => setContinent(response.data))
      .catch(() => {
        alert("Ocorreu um erro!");
      });
  }, []);

  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      justify="center"
      align="center"
    >
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
        {continent.map((cont, index) => (
          <SwiperSlide key={index}>
            <SliderItem
              title={cont.name}
              info={cont.info}
              imageUrl={cont.bannerImage}
              slug={cont.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
