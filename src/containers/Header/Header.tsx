"use client";

import { headerRoutes, headerRoutesChildrenTypes } from "@/utilities/routes";
import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";
import ChevronDown from "@/assets/svgIcons/ChevronDown";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IMAGES } from "@/utilities/constants";

const Header = () => {
  // States
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
