import React from "react";
import { AiOutlineTrophy, AiOutlineCar, AiOutlineCamera } from "react-icons/ai"; // Import the icons you want to use

const Service = () => {
  const service_box = [
    {
      id: "1",
      title: "Housemaid Recruitment",
      image: "/asset/service/service1.png",
      description:
        "We recruit both fresh and experienced housemaids from Ethiopia to meet the household needs of families in the UAE, Bahrain, Lebanon, Kuwait, Qatar, Saudi Arabia, and other countries.",
      icon: <AiOutlineTrophy />,
      expandedDescription: (
        <>
          <p>
            Our recruitment process involves a detailed screening process that
            ensures we match the right housemaid with the right family. From
            sourcing candidates in Ethiopia, we focus on qualities like
            trustworthiness, reliability, and experience in various household
            tasks.
          </p>
        </>
      ),
    },
    {
      id: "2",
      title: "Cultural and Language Training",
      image: "/asset/service/service2.png",
      description:
        "To help our workers adapt smoothly to their new environments, we provide cultural orientation and basic language training to ensure effective communication and understanding with employers.",
      icon: <AiOutlineCar />,
      expandedDescription: (
        <>
          <p>
            Cultural and language barriers can often be a challenge for foreign
            workers. That's why we provide a tailored cultural orientation to
            prepare workers for the cultural nuances they will encounter. Our
            language training focuses on practical communication skills,
            covering common phrases used in everyday life and work scenarios.
          </p>
        </>
      ),
    },
    {
      id: "3",
      title: "Pre-Departure Orientation",
      image: "/asset/service/orentation.png",
      description:
        "We conduct a thorough pre-departure orientation for all workers, covering topics like workplace expectations, safety protocols, and legal rights, to prepare them for a successful experience abroad.",
      icon: <AiOutlineCamera />,
      expandedDescription: (
        <>
          <p>
            Our pre-departure orientation program is designed to equip workers
            with the knowledge they need for a smooth transition to their new
            working environment. We cover a range of important topics such as
            workplace safety, personal well-being, legal rights, and cultural
            differences.
          </p>
        </>
      ),
    },
    {
      id: "4",
      title: "Support and Monitoring",
      image: "/asset/service/service4.png",
      description:
        "Our agency offers ongoing support and monitors the well-being of our workers even after placement, ensuring a safe and positive employment experience while abroad.",
      icon: <AiOutlineTrophy />,
      expandedDescription: (
        <>
          <p>
            The journey doesn't end once the worker is placed. Our agency takes
            pride in providing continuous support throughout the placement
            period. We check in with both the worker and the employer regularly
            to ensure that everything is going smoothly.
          </p>
        </>
      ),
    },
    {
      id: "5",
      title: "Document Processing and Visa Assistance",
      image: "/asset/service/service5.png",
      description:
        "We handle all necessary paperwork, including visa applications and medical clearances, to streamline the process and ensure workers are prepared and legally compliant before departure.",
      icon: <AiOutlineCar />,
      expandedDescription: (
        <>
          <p>
            Navigating the visa and documentation process can be time-consuming
            and complicated. Our agency provides comprehensive document
            processing services to handle all the necessary paperwork for the
            worker's legal travel and employment.
          </p>
        </>
      ),
    },
    {
      id: "6",
      title: "Comprehensive Hiring Solutions",
      image: "/asset/service/service6.png",
      description:
        "Our agency offers end-to-end recruitment solutions, including candidate sourcing, vetting, and documentation, ensuring quality workers are placed with reputable employers abroad.",
      icon: <AiOutlineCar />,
      expandedDescription: (
        <>
          <p>
            Our comprehensive hiring solutions are designed to meet the specific
            needs of employers seeking skilled workers for their households or
            businesses. We manage the entire recruitment process from start to
            finish, ensuring that every worker we place is a good fit for the
            employer's requirements.
          </p>
        </>
      ),
    },
  ];

  return (
    <section
      id="Service"
      className="bg-green-950 h-auto bg-opacity-60 justify-center md:items-end items-center flex pb-6"
    >
      <div className="w-full ">
        <h1 className="bg-serviceBg bg-cover bg-right bg-no-repeat text-yellow-500 text-4xl font-bold text-center justify-center items-center flex mb-8 h-[230px]">
          Our Services
        </h1>

        {/* Render the service items */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mx-8">
          {service_box.map((service) => (
            <div
              key={service.id}
              className=" bg-opacity-80 bg-black hover:bg-opacity-70 px-6 py-6 hover:cursor-pointer rounded-lg shadow-lg text-center group  hover:scale-105"
            >
              <h2 className="text-yellow-500 text-xl font-semibold mb-3 group-hover:text-yellow-600">
                {service.title}
              </h2>
              <div>
                <img
                  src={service.image}
                  alt="gallery Image"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Change text color to white on hover */}
              <p className="text-gray-200 font-bold group-hover:text-white">
                {service.description}
              </p>
              <div className="text-gray-400 group-hover:text-white">
                {service.expandedDescription}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
