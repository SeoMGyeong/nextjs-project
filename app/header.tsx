import "./globals.css"; // 넣어줘야 스타일 먹힘!

const Header = () => {
  return (
    <div className="container mx-auto">
      {/* mx-auto 가운데정렬 , container... 크기조절?, 혹은 layout.tsx의 Header 컴포넌트 감싸는 부분에 넣어줘도 됨 */}
      <p className="text-white">헤더영역</p>
    </div>
  );
};

export default Header;
