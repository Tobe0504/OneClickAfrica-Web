type HamburgerTypes = {
  onClick: () => void;
};

const Hamburger = ({ onClick }: HamburgerTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e54a42"
      onClick={onClick}
    >
      <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
    </svg>
  );
};

export default Hamburger;
