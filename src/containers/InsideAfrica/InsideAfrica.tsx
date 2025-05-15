import HeaderText from "@/components/HeaderText/HeaderText";
import { IMAGES } from "@/utilities/constants";
import { routes } from "@/utilities/routes";
import Image from "next/image";
import Link from "next/link";
import classes from "./InsideAfrica.module.css";

const InsideAfrica = () => {
  return (
    <figure className={classes.container}>
      <HeaderText>Inside Africa</HeaderText>
      <Link href={routes.AFRICA}>
        <Image
          width={1024}
          height={515}
          alt="Inside Africa"
          src={IMAGES.INSIDE_AFRICA}
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </Link>

      <figcaption>THE BEAUTY OF AFRICA ALL IN ONE PICTURE</figcaption>
    </figure>
  );
};

export default InsideAfrica;
