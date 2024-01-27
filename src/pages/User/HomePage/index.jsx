import { Fragment } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

import { Card } from "antd";
const { Meta } = Card;

import OfflineCourseCardImage from "../../../assets/icons/offline-study.png";
import OnlineCourseCardImage from "../../../assets/icons/online-study.jfif";
import SelfStudyCardImage from "../../../assets/icons/self-study.png";

import "./style.scss";

const HomePage = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1200,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
    smallDesktop: {
      breakpoint: {
        max: 1200,
        min: 850,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 850,
        min: 520,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 520,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Fragment>
      <section>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          className="ul__multi"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          responsive={responsive}
          itemClass="item__category__card"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="carouse__box">
            <img
              src="https://www.shutterstock.com/image-photo/happy-school-teacher-first-grade-260nw-2018895593.jpg"
              alt="Image"
            />
          </div>
          <div className="carouse__box">
            <img
              src="https://justkids.net.au/wp-content/uploads/2019/10/children-write-notebooks-with-pen_94347-731.jpg"
              alt="Image"
            />
          </div>
          <div className="carouse__box">
            <img
              src="https://www.shutterstock.com/image-photo/happy-school-teacher-first-grade-260nw-2018895593.jpg"
              alt="Image"
            />
          </div>
          <div className="carouse__box">
            <img
              src="https://www.shutterstock.com/image-photo/happy-school-teacher-first-grade-260nw-2018895593.jpg"
              alt="Image"
            />
          </div>
          <div className="carouse__box">
            <img
              src="https://www.shutterstock.com/image-photo/happy-school-teacher-first-grade-260nw-2018895593.jpg"
              alt="Image"
            />
          </div>
          <div className="carouse__box">
            <img
              src="https://www.shutterstock.com/image-photo/happy-school-teacher-first-grade-260nw-2018895593.jpg"
              alt="Image"
            />
          </div>
        </Carousel>
      </section>
      <section id="learning__types">
        <h1 className="learning__title">
          {`O'qish turlari`}
        </h1>
        <ul className="learning__types__list">
          <li className="learning__type__item">
            <Link to="self-study">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={SelfStudyCardImage} />}
              >
                <Meta title="Self Study" description="Juniors team" />
              </Card>
            </Link>
          </li>
          <li className="learning__type__item">
            <Link to="offline-course">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={OfflineCourseCardImage} />}
              >
                <Meta title="Offline Course" description="Juniors team" />
              </Card>
            </Link>
          </li>
          <li className="learning__type__item">
            <Link to="online-course">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={OnlineCourseCardImage} />}
              >
                <Meta title="Online Course" description="Juniors team" />
              </Card>
            </Link>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default HomePage;
