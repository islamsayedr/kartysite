import { createRef, useEffect } from "react";
import { gsap } from "gsap";
import Hand from "./icons/Hand";

type linePorps = {
  color: string;
};

export default function Line({ color }: linePorps) {
  const handRef = createRef<HTMLSpanElement>();
  useEffect(() => {
    gsap.to(handRef.current, {
      x: 100,
      duration: 3,
      ease: "elastic.inOut(1,0.3)",
      repeat: 5,
    });
    gsap.to(handRef.current, {
      display: 'none',
      delay: 15,
    });
  }, [handRef]);
  return (
    <div
      className={`h-[1px] rounded-full relative`}
      style={{
        backgroundImage: `linear-gradient(to right, #33333316, var(--${color}))`,
      }}
    >
      <span
        ref={handRef}
        className={`rounded-full absolute left-0 bottom-[-12px]`}
      >
        <Hand stroke={`var(--${color})`} height={16} width={16} />
      </span>
    </div>
  );
}
