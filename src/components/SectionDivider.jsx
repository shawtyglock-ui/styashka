const SectionDivider = ({ flip = false }) => {
    return (
      <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,103.78,29.5,158,23C288,52,367,5,445.5,2.5S604,50,685.5,67s167.5-4,214.5-24S1120,0,1200,0V120H0Z"
            fill="#000"
            fillOpacity="0.6"
          ></path>
        </svg>
      </div>
    );
  };
  
  export default SectionDivider;
  