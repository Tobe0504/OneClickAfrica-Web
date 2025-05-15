type ChevronDownTypes = {
  isActive?: boolean;
};

const ChevronDown = ({ isActive }: ChevronDownTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#000"
      style={
        isActive
          ? { transform: "rotate(-90deg)", transition: "all 0.2s ease-in-out" }
          : { transform: "rotate(0deg)", transition: "all 0.2s ease-in-out" }
      }
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
};

export default ChevronDown;
