import HeaderText from "@/components/HeaderText/HeaderText";
import { IMAGES } from "@/utilities/constants";
import Image from "next/image";
import classes from "./InsideAfrica.module.css";

const InsideAfrica = () => {
  return (
    <figure className={classes.container}>
      <HeaderText>Inside Africa</HeaderText>
      <a href="#0">
        <Image
          width={1024}
          height={515}
          alt="Inside Africa"
          src={IMAGES.INSIDE_AFRICA}
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </a>

      <figcaption>THE BEAUTY OF AFRICA ALL IN ONE PICTURE</figcaption>
    </figure>
  );
};

export default InsideAfrica;
