import React from 'react';

const Amenities = ({ amenities }) => {
  return (
    <div className="flex flex-col justify-center border rounded-xl p-2 bg-white col-span-1">
      <div className="flex flex-wrap">
        {amenities.map((amenity, index) => (
          <p key={index} className="text-gray-600 mb-2 mr-3 flex">
            <span className="mr-2">{amenity.icon}</span>
            {amenity.name}
          </p>
        ))}
      </div>
      <a href="#" className="text-gray-600 underline mt-4">Xem chi tiết</a>
    </div>
  );
};

export default Amenities;
