import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-16 mb-16">
        <h2 className="text-5xl text-orange-600 font-semibold">Our Services</h2>
        <p>
          We exists to create value and impact through Films and Photography.
          With over 1000+ videos, we combine our knowledge of Film-making to
          create lasting & compelling visual impressions. It could be a story
          about your organization, an awareness film on a social issue, workshop
          or lecture modules for an educational institution, product
          demonstration video or a film on an event. We shall help you craft
          memorable & impactful films for your organization!
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
