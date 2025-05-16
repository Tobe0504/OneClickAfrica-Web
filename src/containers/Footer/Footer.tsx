import { IMAGES } from "@/utilities/constants";
import { footerRoutes } from "@/utilities/routes";
import Image from "next/image";
import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.textSection}>
        <div>
          <Image
            src={IMAGES.LOGO}
            alt="One Click Africa "
            width={287}
            height={70}
          />
        </div>

        {footerRoutes?.map((route) => {
          return (
            <div key={route.title}>
              <h4>{route.title}</h4>
              <ul>
                {route.routes?.map((data) => {
                  return (
                    <li key={data?.route}>
                      <Link href={data?.route}>{data?.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <p>© Copyright 2024 oneclickafrica. All rights reserved. C.C</p>
    </footer>
  );
};

export default Footer;
