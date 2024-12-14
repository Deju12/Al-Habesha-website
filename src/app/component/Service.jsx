import React from "react";
import { AiOutlineTrophy, AiOutlineCar, AiOutlineCamera } from "react-icons/ai"; // Import the icons you want to use
import Link from "next/link";

const Service = () => {
  const service_box = [
    {
      id: "1",
      title: "Housemaid Recruitment",
      description:
        "We recruit both fresh and experienced housemaids from Ethiopia to meet the household needs of families in the UAE, Bahrain, Lebanon, Kuwait, Qatar, Saudi Arabia, and other countries.",
      icon: <AiOutlineTrophy />,
    },
    {
      id: "2",
      title: "Cultural and Language Training",
      description:
        "To help our workers adapt smoothly to their new environments, we provide cultural orientation and basic language training to ensure effective communication and understanding with employers.",
      icon: <AiOutlineCar />,
    },
    {
      id: "3",
      title: "Pre-Departure Orientation",
      description:
        "We conduct a thorough pre-departure orientation for all workers, covering topics like workplace expectations, safety protocols, and legal rights, to prepare them for a successful experience abroad.",
      icon: <AiOutlineCamera />,
    },
    {
      id: "4",
      title: "Support and Monitoring",
      description:
        "Our agency offers ongoing support and monitors the well-being of our workers even after placement, ensuring a safe and positive employment experience while abroad.",
      icon: <AiOutlineTrophy />,
    },
    {
      id: "5",
      title: "Document Processing and Visa Assistance",
      description:
        "We handle all necessary paperwork, including visa applications and medical clearances, to streamline the process and ensure workers are prepared and legally compliant before departure.",
      icon: <AiOutlineCar />,
    },
    {
      id: "6",
      title: "Comprehensive Hiring Solutions",
      description:
        "Our agency offers end-to-end recruitment solutions, including candidate sourcing, vetting, and documentation, ensuring quality workers are placed with reputable employers abroad.",
      icon: <AiOutlineCar />,
    },
  ];

  return (
    <section
      id="Service"
      className="bg-black h-auto bg-opacity-50 justify-center  items-center flex pt-8 md:pt-1"
    >
      <div className="w-full">
        <h1 className="text-yellow-500 text-4xl font-bold text-center m-10">
          Our Services
        </h1>

        {/* Render the service items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-8">
          {service_box.map((service) => (
            <div
              key={service.id}
              className="bg-gray-300 bg-opacity-95 px-6 py-6 hover:cursor-pointer rounded-lg shadow-lg text-center group transform transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>

              {/* Change text color to white on hover */}
              <p className="text-gray-600 ">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="h-28 justify-center items-center flex">
          <Link
            href="/service"
            className="flex items-center gap-2 text-black bg-yellow-500 opacity-80 p-2 min-w-[180px] justify-center border-none rounded-md text-xl hover:bg-black hover:bg-opacity-80 hover:text-yellow-500 ease-in-out duration-500"
          >
            {" "}
            Read more{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
