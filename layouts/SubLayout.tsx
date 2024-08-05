export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div>사이드메뉴</div>
      <div>{children}</div>
    </div>
  );
}
