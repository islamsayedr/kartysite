const cards = "/imgs/cards.png";

export default function Banner() {
  return (
    <section
      className="sm:h-[300px] h-[200px] bg-gray-200 flex items-center justify-center text-gray-900 relative "
      id="main"
    >
      <h2 className="flex justify-center items-center text-center md:text-6xl text-4xl font-black absolute top-0 right-0 h-full w-full bg-[#33333324] backdrop-blur-sm z-10 bg-art">
         قائمة  البطاقات العامة
      </h2>
      <img
        src={cards}
        alt="cards img"
        className="absolute top-0 right-0 h-full mix-blend-darken"
      />
      <img
        src={cards}
        alt="cards img"
        className="absolute top-0 left-0 h-full rotate-180 mix-blend-darken"
      />
    </section>
  );
}
