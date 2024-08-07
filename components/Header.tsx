"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Item, menus } from "@/const/menu";
import clsx from "clsx";
import { CloseIcon, Icon, MenuIcon } from "./ui/icon";

const GlobalNavItem = ({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) => {
  return (
    <Link
      href={`/${item.slug}`}
      onClick={close}
      className="block px-3 text-sm font-medium pb-2 py-1 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md"
    >
      {item.name}
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // 처음엔 닫혀있음
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-50 flex flex-col w-full bg-white border-b border-gray-800 lg:bottom-0 lg:w-72 lg:border-r lg:border-b-0 lg:z-auto">
      {/* 타이틀/로고 */}
      <div className="flex items-center p-4 h-14 ">
        <Link className="flex items-center gap-x-2.5" href="/" onClick={close}>
          <Image src="/svg/next.svg" alt="logo" width={80} height={40} />
        </Link>
      </div>

      {/* 열기,닫기버튼 */}
      <button
        className="absolute top-0 right-0 flex items-center px-4 h-14 gap-x-2 lg:hidden"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span className="font-bold text-sm text-black">
            <Icon as={CloseIcon} size="lg" />
          </span>
        ) : (
          <span className="font-bold text-sm text-black">
            <Icon as={MenuIcon} size="lg" />
          </span>
        )}
      </button>

      {/* 메뉴표시 */}
      <div
        className={clsx("overflow-y-auto lg:block lg:static", {
          "fixed inset-x-0 bottom-0 top-14 bg-white": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav>
          {menus.map((section) => {
            return (
              <div key={section.name}>
                <div className="text-xl font-semibold px-3 mt-2.5 text-gray-400 tracking-wider uppercase">
                  <div>{section.name}</div>
                </div>
                {/* 하위메뉴 */}
                <div className="">
                  {section.items.map((item) => (
                    <GlobalNavItem item={item} close={close} key={item.slug} /> // 키값은 중복x, map을 썼기 때문에 key 필요
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Header;
