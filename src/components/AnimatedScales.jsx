function AnimatedScales() {
  return (
    <div
      className="animated-scales"
      role="img"
      aria-label="Balanza jurídica animada"
    >
      <svg
        className="animated-scales__svg"
        viewBox="0 0 620 620"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="animated-scales__halo"
          cx="310"
          cy="292"
          r="228"
        />

        <circle
          className="animated-scales__halo animated-scales__halo--inner"
          cx="310"
          cy="292"
          r="174"
        />

        <g className="animated-scales__structure">
          <path
            className="animated-scales__column"
            d="M310 190 V474"
          />

          <circle
            className="animated-scales__center"
            cx="310"
            cy="230"
            r="13"
          />

          <path
            className="animated-scales__ornament"
            d="M310 133
               C292 153 292 174 310 190
               C328 174 328 153 310 133 Z"
          />

          <g className="animated-scales__beam">
            <path
              className="animated-scales__beam-line"
              d="M132 238 H488"
            />

            <circle
              className="animated-scales__beam-end"
              cx="132"
              cy="238"
              r="7"
            />

            <circle
              className="animated-scales__beam-end"
              cx="488"
              cy="238"
              r="7"
            />

            <g className="animated-scales__side animated-scales__side--left">
              <path
                className="animated-scales__chain"
                d="M168 239 L130 354"
              />

              <path
                className="animated-scales__chain"
                d="M244 239 L282 354"
              />

              <path
                className="animated-scales__pan"
                d="M113 355
                   C136 404 276 404 299 355
                   Z"
              />
            </g>

            <g className="animated-scales__side animated-scales__side--right">
              <path
                className="animated-scales__chain"
                d="M376 239 L338 354"
              />

              <path
                className="animated-scales__chain"
                d="M452 239 L490 354"
              />

              <path
                className="animated-scales__pan"
                d="M321 355
                   C344 404 484 404 507 355
                   Z"
              />
            </g>
          </g>

          <path
            className="animated-scales__base"
            d="M235 492
               C252 472 368 472 385 492
               L410 514
               H210
               Z"
          />

          <path
            className="animated-scales__base-line"
            d="M185 519 H435"
          />
        </g>

        <g className="animated-scales__details">
          <circle cx="103" cy="180" r="4" />
          <circle cx="518" cy="162" r="5" />
          <circle cx="536" cy="413" r="3.5" />
        </g>
      </svg>

 
    </div>
  );
}

export default AnimatedScales;