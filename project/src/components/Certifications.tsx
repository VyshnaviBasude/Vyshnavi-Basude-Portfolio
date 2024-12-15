import React from 'react';
import salesforceAdmin from '../assests/salesforceAdmin.jpg'
import salesforceDeveloper from '../assests/salesforceDeveloper.jpg'
import dataStructures from '../assests/dataStructures.jpg';
import oracle from '../assests/Oracle.jpg';
import iotImage from '../assests/iotImage.jpg';

const Certifications = () => {
  const certifications = [
    {
      title: "Certified Salesforce Administrator",
      issuer: "Salesforce",
      date: "2022",
      credentialLink: "https://www.salesforce.com/trailblazer/profile",
      image: salesforceAdmin, 
    },
    {
      title: "Certified Platform Developer I",
      issuer: "Salesforce",
      date: "2024",
      credentialLink: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=IAFDfQsllwSM52m5MtdGwPChPZ5D+RKV0mwSiGuweKj9F3Ao5j5/jvj/SPUn3MkY",
      image: salesforceDeveloper, 
    },
    {
      title: "Data Structures and Algorithms in Python",
      issuer: "NPTEL",
      date: "2020",
      credentialLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL20CS26S1PC933737",
      image: dataStructures, 
    },
    {
      title: "Certified Generative AI Professional",
      issuer: "Oracle",
      date: "2024",
      credentialLink: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5096078&trackId=OCI2024GAIOCP&key=f8884be1ae503a7257b3dd8ccda5628b13978ecf",
      image: oracle, 
    },
    {
      title: "Introduction to IoT",
      issuer: "NPTEL",
      date: "2020",
      credentialLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS65S51470349191052891",
      image: iotImage,
    },
  ];

  return (
    <div id="certifications" className="w-full bg-[#f8f9fc] text-gray-800 py-12">
      <div className="max-w-[1200px] mx-auto p-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-4xl font-bold text-[#0a192f]">Certifications</p>
          <p className="text-lg text-gray-600 mt-2">
            Check out my professional certifications
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transform duration-500"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${cert.image})`,
                  filter: 'brightness(0.5)',
                }}
              ></div>

              {/* Content */}
              <div className="relative p-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-200">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">Issued: {cert.date}</p>
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-pink-400 font-semibold hover:text-pink-300"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
