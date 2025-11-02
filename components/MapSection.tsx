"use client";
import React from "react";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export default function MapSection() {
  return (
    <section id="contact-map" className="h-[80vh]">
      <div className="flex items-center justify-center h-full">
        <div className="relative overflow-hidden w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.7758588732977!2d-3.9843336886793885!3d5.2976338946584605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ec02099d3681%3A0x21e24ac735e965cb!2sDM%20COMPANY!5e0!3m2!1sfr!2sci!4v1761370618987!5m2!1sfr!2sci"
            style={mapContainerStyle}
            allowFullScreen={true}
            loading="lazy"
            className="filter brightness-70 contrast-150 relative overflow-hidden w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation DM Company sur Google Maps"
            id="map-iframe"
          ></iframe>
          {/* Bouton fullscreen personnalisé */}
          <button
            className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() =>
              document.getElementById("map-iframe")?.requestFullscreen()
            }
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>
        </div>
        {/* <div className="w-1/3 h-full py-10 px-8 flex flex-col">
          <h2 className="text-2xl font-semibold mb-12 text-center">
            Contactez-nous
          </h2>
          <div className="flex flex-1 flex-col justify-around">
            {contactsInfo.map((contact, i) => (
              <div
                key={i}
                className="flex items-center mb-4 gap-6 border-b border-gray-300 pb-4"
              >
                <span className="self-stretch">
                  <DynamicIcon iconName={contact.icon} className="h-8 w-8" />
                </span>
                <p>{contact.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
