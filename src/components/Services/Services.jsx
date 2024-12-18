import { motion } from "framer-motion";
import React from "react";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: Coffee1,
      title: "Black Coffee",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing.",
    },
    {
      id: 2,
      image: Coffee3,
      title: "Cold Coffee",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing.",
    },
    {
      id: 3,
      image: Coffee1,
      title: "Hot Coffee",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing.",
    },
  ];

  return (
    <div className="container w-full my-16 px-4 space-y-4">
      {/* Header Section */}
      <div className="text-center mx-auto max-w-lg space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and<span className="text-primary"> Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
          className="text-sm opacity-50 "
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Necessitatibus doloribus ipsa quod numquam excepturi vero! <br /> Lorem
          ipsum dolor sit amet.
        </motion.p>
      </div>

      {/* Card Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 100, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay:0.7,
            }}
            className="text-center p-4 space-y-6"
          >
            <motion.img
              src={service.image}
              className="img-shadow2 max-w-[200px] w-full sm:w-40 mx-auto hover:scale-110 duration-300 cursor-pointer"
              alt={service.title}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">{service.title}</h1>
              <p className="text-sm">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
