import React from "react";

const About = () => {
  const aboutDetails = [
    {
      id: "1",
      title: "Who We Are",
      image: "/asset/about/about1.png",
      description:
        "We specialize in connecting families with skilled and reliable domestic workers, ensuring quality service and satisfaction.",
      expandedDescription: (
        <>
          <p>
            Our agency is committed to bridging the gap between families in need
            of assistance and trustworthy, skilled workers. We emphasize
            quality, reliability, and professionalism in every placement.
          </p>
        </>
      ),
    },
    {
      id: "2",
      title: "Our Mission",
      image: "/asset/about/about2.png",
      description:
        "To simplify household management for families by providing access to experienced and dedicated domestic workers.",
      expandedDescription: (
        <>
          <p>
            Our mission is to bring peace of mind to families by connecting them
            with workers who are not only skilled but also passionate about
            making a difference in their homes.
          </p>
        </>
      ),
    },
    {
      id: "3",
      title: "Why Choose Us?",
      image: "/asset/about/about3.png",
      description:
        "We are known for our rigorous vetting process, personalized matching, and unwavering support throughout the hiring journey.",
      expandedDescription: (
        <>
          <p>
            With years of experience, we understand the importance of trust and
            compatibility. That’s why we carefully screen candidates and ensure
            they are well-prepared for their roles.
          </p>
        </>
      ),
    },
    {
      id: "4",
      title: "Our Vision",
      image: "/asset/about/about4.png",
      description:
        "To become the leading provider of skilled domestic workers, transforming lives and empowering families worldwide.",
      expandedDescription: (
        <>
          <p>
            By setting the highest standards in recruitment and placement, we
            aim to create long-lasting relationships built on trust,
            professionalism, and mutual respect.
          </p>
        </>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="bg-green-950 h-auto bg-opacity-60 justify-center md:items-end items-center flex pb-6"
    >
      <div className="w-full">
        <h1 className="bg-aboutBg bg-cover bg-center bg-no-repeat text-yellow-500 text-4xl font-bold text-center justify-center items-center flex mb-8 h-[230px]">
          About Us
        </h1>

        {/* Render the about details */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mx-8">
          {aboutDetails.map((about) => (
            <div
              key={about.id}
              className="bg-opacity-60 bg-black hover:bg-opacity-70 px-6 py-28 hover:cursor-pointer rounded-lg shadow-lg text-center group hover:scale-105"
            >
              <h2 className="text-yellow-500 text-4xl font-semibold mb-3 group-hover:text-yellow-600">
                {about.title}
              </h2>
              
              <p className="text-gray-200 text-2xl font-bold mt-4 group-hover:text-white">
                {about.description}
              </p>
              <div className="text-gray-400 text-xl mt-2 group-hover:text-white">
                {about.expandedDescription}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
