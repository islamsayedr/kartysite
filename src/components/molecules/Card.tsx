import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { LikeLine, User } from "../atoms/icons";
import { MyAddress, MyEmail, MyPhone } from "./Contact";
const wTexture = "./imgs/wTexture.png";
const bTexture = "./imgs/bTexture.png";
const qr = "./imgs/qr.png";
import SocialLink from "./SocialLink";
import Line from "../atoms/Line";
import clsx from "clsx";

export default function Card({
  id = "1456",
  rounded = "none",
  icons = "none",
  holderName = "اسلام سيد",
  holderTitle = "مصمم تجربة مستخدم",
  holderLocation = "الفيوم, مصر",
  holderPhone = "+201092124608",
  holderEmail = "islamsayed@gmail.com",
  color1 = "main",
}) {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const frontSideRef = useRef<HTMLDivElement>(null);
  const backSideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const frontSideElement = frontSideRef.current;
    const backSideElement = backSideRef.current;

    if (!cardElement || !frontSideElement || !backSideElement) return;

    gsap.set(cardElement, { transformPerspective: 1000 });
    gsap.set(backSideElement, { rotationY: -180 });
    gsap.set([frontSideElement, backSideElement], {
      backfaceVisibility: "hidden",
    });

    const handleStart = (event: MouseEvent | TouchEvent) => {
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      setIsGrabbing(true);
      setStartPos({ x: clientX });
    };

    const handleMove = (event: MouseEvent | TouchEvent) => {
      if (isGrabbing) {
        const clientX =
          "touches" in event ? event.touches[0].clientX : event.clientX;
        const dx = clientX - startPos.x;
        const rotationY = Math.min(180, Math.max(0, (dx / 300) * 180));

        gsap.to(cardElement, {
          rotationY: rotationY,
          duration: 0.1,
        });
      }
    };

    const handleEnd = () => {
      setIsGrabbing(false);
      const currentRotationY = Number(
        gsap.getProperty(cardElement, "rotationY")
      );
      gsap.to(cardElement, {
        rotationY: currentRotationY < 50 ? 0 : 180,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    // Add event listeners for both mouse and touch events
    cardElement.addEventListener("mousedown", handleStart);
    cardElement.addEventListener("touchstart", handleStart);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);

    // Cleanup event listeners
    return () => {
      cardElement.removeEventListener("mousedown", handleStart);
      cardElement.removeEventListener("touchstart", handleStart);

      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);

      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isGrabbing, startPos]);
  const cardLink = `http://karty.site/${id}`;
  return (
    <div className="card relative cursor-pointer no-select" ref={cardRef}>
      {/* front side ------------------------------------------------------------------ */}

      <div
        className={clsx(
          "front-side bg-white flex flex-col aspect-[16/9] p-4 border-[1px] border-solid min-w-[300px] gap-3  hover:drop-shadow-custom",
          { "rounded-xl": rounded === "lg" }
        )}
        style={{
          backgroundImage: `url(${wTexture})`,
        }}
        ref={frontSideRef}
      >
        <div className="head flex gap-2">
          {/* <div
            className={`h-12 w-12 flex items-center justify-center bg-[#33333307] rounded-full`}
          >
            <User stroke={`var(--${color1})`} />
          </div> */}
          <div className="flex-1">
            <h3 className="text-[#333] text-lg font-black">{holderName}</h3>
            <span className="text-[#33333380] text-sm font-medium">
              {holderTitle}
            </span>
          </div>

          <LikeLine stroke={`var(--${color1})`} />
        </div>
        <Line color={color1} />

        <div className="flex flex-col gap-2">
          <MyAddress
            address={holderLocation}
            color={`var(--${color1})`}
            icon={icons}
          />
          <MyEmail
            email={holderEmail}
            color={`var(--${color1})`}
            icon={icons}
          />
          <MyPhone
            phone={holderPhone}
            color={`var(--${color1})`}
            icon={icons}
          />
        </div>
      </div>

      {/* back side ------------------------------------------------------------------ */}
      <div
        className={clsx(
          "back-side absolute top-0 w-full h-full flex items-center justify-center  gap-3   hover:drop-shadow-custom p-8",
          { "rounded-xl": rounded === "lg" }
        )}
        style={{
          backgroundColor: `var(--${color1})`,
          backgroundImage: `url(${bTexture})`,
        }}
        ref={backSideRef}
      >
        <div className="flex p-2 bg-white rounded-lg flex-wrap h-full flex-col max-w-[88px]">
          <img src={qr} alt="" className="max-h-[72px]" />
          <div className="flex-1 w-full flex-wrap text-xs text-wrap text-left whitespace-normal break-words">
            {cardLink}
          </div>
        </div>

        <div className="flex gap-2 max-w-[136px] flex-wrap">
          <SocialLink link="#" platform="facebook" color={`var(--${color1})`} />
          <SocialLink link="#" platform="insta" color={`var(--${color1})`} />
          <SocialLink link="#" platform="github" color={`var(--${color1})`} />
          <SocialLink link="#" platform="behance" color={`var(--${color1})`} />
          <SocialLink link="#" platform="x" color={`var(--${color1})`} />
          <SocialLink link="#" platform="dribbble" color={`var(--${color1})`} />
          <SocialLink link="#" platform="linkedin" color={`var(--${color1})`} />
          <SocialLink link="#" platform="" color={`var(--${color1})`} />
        </div>
      </div>
    </div>
  );
}
