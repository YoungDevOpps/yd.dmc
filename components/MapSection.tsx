"use client";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";
// import React from "react";

// Définir le type pour une location
// interface Location {
//   id: number;
//   name: string;
//   position: {
//     lat: number;
//     lng: number;
//   };
// }

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// const defaultCenter = {
//   lat: 5.297858237780614,
//   lng: -3.9817104884929635,
// };

// const locations: Location[] = [
//   {
//     id: 1,
//     name: "Abidjan - Marcory",
//     position: { lat: 5.297858237780614, lng: -3.9817104884929635 },
//   },
//   {
//     id: 2,
//     name: "Abidjan - Djorobité",
//     position: { lat: 5.386681105173032, lng: -3.919814846162705 },
//   },
// ];

export default function MapSection() {
  // const [selectedLocation, setSelectedLocation] =
  //   React.useState<Location | null>(null);

  return (
    <section
      id="contact"
      className="py-16 mx-auto px-6 h-screen bg-gray-100 flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Où nous{" "}
          <span className="text-primary group relative">
            trouver{" "}
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary"></span>
          </span>
        </h2>
        <p className="text-gray-600">
          Découvrez notre expertise à travers différents domaines
          d’intervention.
        </p>
      </div>
      <div className="container w-full h-full rounded-xl overflow-hidden shadow-lg">
        {/* <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={defaultCenter}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={location.position}
                onClick={() => setSelectedLocation(location)}
              />
            ))}

            {selectedLocation && (
              <InfoWindow
                position={selectedLocation.position}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <div>
                  <h3 className="font-bold">{selectedLocation.name}</h3>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript> */}
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
      </div>
    </section>
  );
}
