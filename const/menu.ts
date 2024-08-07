export type Item = {
  name: string;
  slug: string;
};
// item이라는 자료형

// 내보낼때 배열로 내보냄, 반환값도 []
export const menus: { name: string; items: Item[] }[] = [
  {
    name: "주메뉴이름 1",
    items: [
      { name: "하위메뉴1", slug: "case" },
      { name: "하위메뉴2", slug: "case" },
      { name: "하위메뉴3", slug: "case" },
      { name: "하위메뉴4", slug: "case" },
      { name: "하위메뉴5", slug: "case" },
    ],
  },
  {
    name: "주메뉴이름 2",
    items: [
      { name: "하위메뉴1", slug: "case" },
      { name: "하위메뉴2", slug: "case" },
    ],
  },
  {
    name: "주메뉴이름 3",
    items: [
      { name: "하위메뉴1", slug: "case" },
      { name: "하위메뉴2", slug: "case" },
      { name: "하위메뉴3", slug: "case" },
      { name: "하위메뉴4", slug: "case" },
      { name: "하위메뉴5", slug: "case" },
      { name: "하위메뉴6", slug: "case" },
    ],
  },
];
