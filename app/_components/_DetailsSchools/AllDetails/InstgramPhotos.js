"use client";

import styled from "styled-components";
import Image from "next/image";
import InstgramPlace from "@/app/_images/details/Instgram/instagram-img.png";

import Line from "@/app/_images/home/bd-bottom-layer.png";

const InstagramWrap = styled.div`
  padding: 60px 0;
`;

const Instagram = styled.div`
  text-align: start;
`;

const Title = styled.h2`
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
`;

const PhotosRow = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  margin: 56px -12px 0;

  @media (max-width: 768px) {
    margin: 30px -8px 0;
  }
`;

const PhotosCol = styled.div`
  width: ${(props) => (props.$small ? "20%" : "30%")};
  padding: 0 12px 24px;
  height: 193px;

  @media (max-width: 1024px) {
    width: ${(props) => (props.$small ? "25%" : "37.5%")};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.$small ? "33.33%" : "50%")};
    padding: 0 8px 16px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 50%;
    height: 120px;
  }
`;

const InstagramImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DarkBtn = styled.a`
  display: inline-block;
  font-size: 2rem;
  padding: 12px 24px;
  background: var(--dark-color);
  color: var(--white-color);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  max-width: 197px;
  transition: all 0.3s ease;
  margin-top: 30px;

  &:hover {
    background: #333;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    max-width: 100%;
    width: 200px;
  }
`;

export default function InstagramPhotos() {
  // يمكنك إضافة صور مختلفة هنا إذا كان لديك أكثر من صورة
  const instagramPhotos = [
    { id: 1, src: InstgramPlace, alt: "صورة انستجرام 1", small: false },
    { id: 2, src: InstgramPlace, alt: "صورة انستجرام 2", small: true },
    { id: 3, src: InstgramPlace, alt: "صورة انستجرام 3", small: false },
    { id: 4, src: InstgramPlace, alt: "صورة انستجرام 4", small: true },
    { id: 5, src: InstgramPlace, alt: "صورة انستجرام 5", small: true },
    { id: 6, src: InstgramPlace, alt: "صورة انستجرام 6", small: false },
    { id: 7, src: InstgramPlace, alt: "صورة انستجرام 7", small: true },
    { id: 8, src: InstgramPlace, alt: "صورة انستجرام 8", small: false },
  ];

  return (
    <InstagramWrap>
      <div className="container">
        <Instagram>
          <Title className="after-ly">صور انستجرام</Title>
          <PhotosRow>
            {instagramPhotos.map((photo) => (
              <PhotosCol key={photo.id} $small={photo.small}>
                <InstagramImg>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </InstagramImg>
              </PhotosCol>
            ))}
          </PhotosRow>
          <DarkBtn href="#" target="_blank" rel="noopener noreferrer">
            تابعنا على انستجرام
          </DarkBtn>
        </Instagram>
      </div>
    </InstagramWrap>
  );
}
