import { useState } from "react";
import classes from "./SideNav.module.css";
import { headerRoutes } from "@/utilities/routes";
import { activeToggler } from "@/helpers/activeHandlers";
import ChevronDown from "@/assets/svgIcons/ChevronDown";
import Link from "next/link";
import Close from "@/assets/svgIcons/Close";
import { routes } from "@/utilities/routes";
import Button from "@/components/Button/Button";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { useRouter } from "next/navigation";

type SidenavTypes = {
  onClose: () => void;
};

const Sidenav = ({ onClose }: SidenavTypes) => {
  // States
  const [navItems, setNavItems] = useState(headerRoutes);

  //   Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const router = useRouter();

  return (
    <section className={classes.container}>
      <div>
        <Close onClick={onClose} />
      </div>
      <nav>
        {navItems?.map((route, i) => {
          if (route.children) {
            return (
              <div className={classes.moreOptions} key={i}>
                <div onClick={() => activeToggler(i, navItems, setNavItems)}>
                  <span>{route?.title}</span>
                  <ChevronDown />
                </div>

                <div
                  className={classes.children}
                  style={
                    route?.isActive
                      ? { maxHeight: "2000px" }
                      : { maxHeight: "0px" }
                  }
                >
                  {route?.children?.map((data, j) => {
                    return (
                      <Link href={data?.route} key={j}>
                        {data?.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }
          return (
            <Link key={i} href={route?.route}>
              {route?.title}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidenav;
