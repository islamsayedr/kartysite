export default function PageLoader() {
  return (
    <div
      className={` fixed h-[100vh] w-[100vw] bg-black text-white flex items-center justify-center z-30`}
    >
      <span className={'loader'}></span>
    </div>
  );
}
