import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../../../Assets/img1.jpg";
import img2 from "../../../Assets/img2.jpg";
import img3 from "../../../Assets/img3.jpg";
import img4 from "../../../Assets/img4.jpg";
import img5 from "../../../Assets/img5.jpg";
import img6 from "../../../Assets/img6.jpg";

const SliderService = () => {
  const imgages = [img1, img2, img3, img4, img5, img6];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="heading">Galaxy Views</h1>
      <section className="services">
        <Slider {...settings}>
          {imgages.map((image) => {
            return (
              <div key={image}>
                <img src={image} />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default SliderService;
