import Image from "next/image";

const Home = () => {
  return (
    // main으로 묶어주기. 마치 react-native의 view같은 존재인가...
    <main className="container mx-auto px-4 columns-1 sm:columns-2 md:columns-3 xl:columns-4">
      {/* sm : 640? 아무튼 화면 크기에 따른 넓이 조절인듯? */}

      <Image
        className="w-full aspect-square"
        src="svg/next.svg"
        width={100}
        height={100}
        alt="image"
      />
      <Image
        className="w-full aspect-square"
        src="svg/next.svg"
        width={100}
        height={100}
        alt="image"
      />
      <Image
        className="w-full aspect-square"
        src="svg/next.svg"
        width={100}
        height={100}
        alt="image"
      />
      <Image
        className="w-full aspect-square"
        src="svg/next.svg"
        width={100}
        height={100}
        alt="image"
      />
      <Image
        className="w-full aspect-square"
        src="svg/next.svg"
        width={100}
        height={100}
        alt="image"
      />
      <Image
        className="w-full aspect-square"
        src="svg/next.svg"
        width={100}
        height={100}
        alt="image"
      />
      {/* aspect-square : 가로세로 동일하게 */}
      <div>
        <p>이벤트 페이지</p>
        <a href="/">홈페이지 가기</a>
      </div>
    </main>
  );
};

export default Home;
