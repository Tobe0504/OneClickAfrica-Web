"use client";

import {
  headerRoutes,
  headerRoutesChildrenTypes,
  routes,
} from "@/utilities/routes";
import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";
import ChevronDown from "@/assets/svgIcons/ChevronDown";
import { ChangeEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IMAGES } from "@/utilities/constants";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

const Header = () => {
  // States
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [search, setSearch] = useState("");

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();
  const searchKey = updateSearchParams("search", undefined, "get");

  // Router
  const router = useRouter();
  const pathname = usePathname();

  // Utils
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollPos = window.pageYOffset;

      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    }
  };

  // Effects
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [prevScrollPos]);

  return (
    <header className={classes.container}>
      <div className={` ${visible ? classes.visible : classes.hidden}`}>
        <Image
          src={IMAGES.LOGO}
          alt="One Click Africa "
          width={287}
          height={70}
        />

        <div className={classes.searchContainer}>
          <input
            type="search"
            placeholder="Search news"
            onChange={(e: any) => {
              setSearch(e.target?.value as string);
            }}
            value={search}
            onKeyDown={(e) => {
              if (e.key === "Enter" && search.trim()) {
                router.push(`${routes.SEARCH}?search=${search?.trim()}`);
              }
            }}
          />
        </div>
      </div>

      <nav className={` ${visible ? classes.visible : classes.hidden2}`}>
        {headerRoutes.map((data) => {
          if ((data?.children as headerRoutesChildrenTypes[])?.length > 0) {
            return (
              <div onClick={() => router.push(data?.route)} key={data.route}>
                <span
                  className={
                    pathname === data?.route ? classes.active : classes.inActive
                  }
                >
                  {data.title}
                </span>
                <ChevronDown />

                <div
                  className={classes.subnavItems}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {data?.children?.map((subData) => {
                    return (
                      <Link
                        key={subData?.route}
                        href={subData?.route}
                        className={
                          pathname === subData?.route
                            ? classes.active
                            : classes.inActive
                        }
                      >
                        {subData?.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          return (
            <Link
              href={data?.route}
              key={data.route}
              className={
                pathname === data?.route ? classes.active : classes.inActive
              }
            >
              {data.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
