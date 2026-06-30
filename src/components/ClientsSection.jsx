import React from "react";
import { Typography } from "@material-tailwind/react";
import westernBrothersLogo from "../assets/westernBrothersLogo.jpg";
import globexvaspireLogo from "../assets/globexvaspire-logo.webp";
import globexSolutionsLogo from "../assets/globexsolutions-logo.webp";
import meConstructionRenovationsLogo from "../assets/m&e-construction-renovations-llc-logo.jpg";

const ClientsSection = () => {
  return (
    <section className="w-full py-5 bg-geoBackground bg-center bg-no-repeat bg-cover bg-blend-darken my-2">
      <div className="container mx-auto px-4 mb-5">
        <Typography variant="h4" className="mb-5 text-lightColor text-center">
          We've Worked With.
        </Typography>
        <div className="w-full flex flex-wrap gap-4 justify-center">
          <img
            src={westernBrothersLogo}
            alt="westernBrothersInc-logo"
            className="w-28 overflow-hidden rounded"
          />
          <img
            src={globexvaspireLogo}
            alt="Globex VA Spire-logo"
            className="w-28 overflow-hidden rounded"
          />
          <img
            src={globexSolutionsLogo}
            alt="Globex Solutions-logo"
            className="w-28 overflow-hidden rounded"
          />
          <img
            src={meConstructionRenovationsLogo}
            alt="M&E Construction & Renovations-logo"
            className="w-28 overflow-hidden rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
