"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Google from "@/app/_images/details/rating/google-logo.png";
import Stars from "@/app/_images/details/rating/star-icon.png";
import SingleStar from "@/app/_images/details/rating/single-star-yellow.svg";
import RatingBg from "@/app/_images/details/rating/rating-bg-layer.png";
import ArrowRightDark from "@/app/_images/details/rating/arrow-right-dark-icon.svg";
import ArrowLeftDark from "@/app/_images/details/rating/arrow-left-dark-icon.svg";
import ArrowRightLight from "@/app/_images/details/rating/arrow-right-light-icon.svg";
import ArrowrLeftLight from "@/app/_images/details/rating/arrow-left-light-icon.svg";

import Line from "@/app/_images/home/bd-bottom-layer.png";

const RatingWrap = styled.div`
  padding: 70px 0 180px;
  background: var(--white-color) url(${RatingBg.src}) no-repeat left center /
    500px;
`;

const MainTitle = styled.h2`
  margin-bottom: 4.4rem;
  position: relative;
  padding-bottom: 16px;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 18.8rem;
    height: 1.4rem;
    background: url(${Line.src}) no-repeat center/ contain;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const RatingRow = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const RatingLeftInfo = styled.div`
  width: 40%;
  padding-right: 30px;

  @media (max-width: 992px) {
    width: 100%;
    padding-right: 0;
    text-align: center;
  }

  p {
    margin: 15px 0 59px;
    max-width: 350px;
    font-size: 2rem;

    line-height: 1.6;
    color: var(--text-color);

    @media (max-width: 992px) {
      max-width: 100%;
      margin: 15px auto 40px;
    }
  }
`;

// خطوة 1: إنشاء container جديد للـ slider مع الأزرار
const ReviewSliderWrapper = styled.div`
  width: 60%;
  position: relative;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const GoogleLogo = styled.div`
  width: 100%;
  max-width: 140px;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    margin: 0 auto 10px;
  }
`;

const StarLogos = styled.div`
  width: 100%;
  max-width: 137px;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    margin: 0 auto 10px;
  }
`;

const RatingLogos = styled.div`
  h3 {
    font-size: 22px;
    font-weight: 700;
    color: #1e222b;
    line-height: 1.2;
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;

    @media (max-width: 992px) {
      justify-content: center;
    }

    span {
      padding-right: 10px;
      font-size: 28px;
      color: var(--primary-color);
    }
  }
`;

const ReviewBox = styled.div`
  border-radius: 15px;
  background: var(--white-color);
  padding: 48px 29px 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: var(--primary-color);
    margin-bottom: 15px;
  }

  p {
    font-weight: 400;
    line-height: 1.6;
    color: var(--text-color);
    flex-grow: 1;
    margin-bottom: 20px;
  }

  strong {
    font-weight: 900;
    font-size: 16px;
    color: var(--dark-color);
    text-align: right;
    margin-top: auto;
  }
`;

const RatingStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 -3px 25px;
  gap: 3px;

  span {
    display: block;
    width: 22px;
    height: 22px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

// خطوة 2: تبسيط الـ SwiperContainer وإزالة styles الأزرار منه
const SwiperContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 60px; // إضافة مساحة للأزرار الخارجية

  .swiper {
    overflow: visible;
    padding: 20px 0;
  }

  .swiper-slide {
    height: auto;

    > div {
      height: 100%;
    }
  }

  // إخفاء الأزرار الافتراضية للـ Swiper
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }

  @media (max-width: 992px) {
    margin: 0 20px 60px; // تقليل المساحة على الشاشات الصغيرة
  }

  @media (max-width: 768px) {
    margin: 0 10px 50px;
  }
`;

// خطوة 3: إنشاء أزرار منفصلة خارج الـ Swiper مع تأثير تغيير الصورة
const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: var(--white-color);
  border: 2px solid #000000;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #000000;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;

    &:hover {
      background: var(--white-color);
      transform: translateY(-50%);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
  }

  // إخفاء الصورة الأساسية عند الـ hover
  .default-icon {
    width: 20px;
    height: 20px;
    transition: opacity 0.3s ease;
    opacity: 1;
  }

  // إظهار الصورة البيضاء عند الـ hover
  .hover-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  &:hover:not(:disabled) {
    .default-icon {
      opacity: 0;
    }

    .hover-icon {
      opacity: 1;
    }
  }

  @media (max-width: 992px) {
    width: 45px;
    height: 45px;
    top: auto;
    bottom: -60px;
    transform: none;

    &:hover {
      transform: scale(1.1);
    }

    &:disabled:hover {
      transform: none;
    }

    .default-icon,
    .hover-icon {
      width: 16px;
      height: 16px;
    }
  }
`;

// خطوة 4: تحديد مواقع الأزرار
const PrevButton = styled(NavigationButton)`
  left: -70px;

  @media (max-width: 1200px) {
    left: -60px;
  }

  @media (max-width: 992px) {
    left: 10px;
  }
`;

const NextButton = styled(NavigationButton)`
  right: -70px;

  @media (max-width: 1200px) {
    right: -60px;
  }

  @media (max-width: 992px) {
    right: 10px;
  }
`;

const reviewsData = [
  {
    id: 1,
    rating: "4.8/5",
    text: "إننا نؤمن أن الاستثمار في الإنسان هو أساس أي تنمية اقتصادية، ومحور أي نهضة مجتمعية، وركيزة أي تطور ونماء، والتعليم الجيد هو المفتاح الأساسي لأي تطور ونمو في جميع المجالات.",
    author: "سلمى سكيك",
  },
  {
    id: 2,
    rating: "4.9/5",
    text: "تجربة تعليمية رائعة ومميزة، والمناهج متطورة جداً والكادر التدريسي على أعلى مستوى من الكفاءة والاحترافية.",
    author: "أحمد محمد",
  },
  {
    id: 3,
    rating: "4.7/5",
    text: "المدرسة توفر بيئة تعليمية محفزة ومشجعة للطلاب، والأنشطة اللاصفية متنوعة ومفيدة جداً لتنمية مهارات الطلاب.",
    author: "فاطمة علي",
  },
  {
    id: 4,
    rating: "4.6/5",
    text: "إدارة المدرسة متعاونة جداً مع أولياء الأمور، والتواصل مستمر لمتابعة تطور الطلاب الأكاديمي والسلوكي.",
    author: "محمد حسن",
  },
];

export default function AllRating() {
  // خطوة 5: إنشاء refs للتحكم في الـ Swiper من الخارج
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // خطوة 6: دوال للتنقل
  const goNext = () => {
    if (swiper) swiper.slideNext();
  };

  const goPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  // خطوة 7: تحديث حالة الأزرار
  const handleSlideChange = (swiperInstance) => {
    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);
  };

  return (
    <RatingWrap>
      <div className="container">
        <MainTitle>التقييمات</MainTitle>
        <RatingRow>
          <RatingLeftInfo>
            <p>
              إننا نؤمن أن الاستثمار في الإنسان هو أساس أي تنمية اقتصادية، ومحور
              أي نهضة مجتمعية حقيقية ومستدامة.
            </p>
            <RatingLogos>
              <GoogleLogo>
                <Image src={Google} alt="شعار جوجل" width={140} />
              </GoogleLogo>
              <StarLogos>
                <Image src={Stars} alt="تقييم النجوم" width={140} />
              </StarLogos>
              <h3>
                <span>4.4</span> من أصل 5 نجوم
              </h3>
            </RatingLogos>
          </RatingLeftInfo>

          <ReviewSliderWrapper>
            {/* خطوة 8: الأزرار الخارجية مع صور متغيرة */}
            <PrevButton onClick={goPrev} disabled={isBeginning}>
              {/* الصورة الأساسية (الداكنة) */}
              <Image
                src={ArrowLeftDark}
                alt="السابق"
                className="default-icon"
              />
              {/* الصورة عند الـ hover (الفاتحة) */}
              <Image
                src={ArrowrLeftLight}
                alt="السابق"
                className="hover-icon"
              />
            </PrevButton>

            <NextButton onClick={goNext} disabled={isEnd}>
              {/* الصورة الأساسية (الداكنة) */}
              <Image
                src={ArrowRightDark}
                alt="التالي"
                className="default-icon"
              />
              {/* الصورة عند الـ hover (الفاتحة) */}
              <Image
                src={ArrowRightLight}
                alt="التالي"
                className="hover-icon"
              />
            </NextButton>

            <SwiperContainer>
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                // خطوة 9: إزالة navigation الافتراضي وإضافة events
                navigation={false}
                loop={false} // تغيير إلى false لتفعيل disable على الأزرار
                centeredSlides={false}
                onSwiper={setSwiper} // ربط الـ swiper instance
                onSlideChange={handleSlideChange} // تحديث حالة الأزرار
                breakpoints={{
                  640: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 1.8,
                    spaceBetween: 30,
                  },
                }}
              >
                {reviewsData.map((review) => (
                  <SwiperSlide key={review.id}>
                    <ReviewBox>
                      <h3>{review.rating}</h3>
                      <RatingStar>
                        {[...Array(5)].map((_, index) => (
                          <span key={index}>
                            <Image
                              src={SingleStar}
                              alt="نجمة"
                              width={22}
                              height={22}
                            />
                          </span>
                        ))}
                      </RatingStar>
                      <p>{review.text}</p>
                      <strong>- {review.author}</strong>
                    </ReviewBox>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperContainer>
          </ReviewSliderWrapper>
        </RatingRow>
      </div>
    </RatingWrap>
  );
}
