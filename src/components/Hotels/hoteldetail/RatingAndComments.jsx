import React from 'react';

const RatingAndComments = ({ rating, comments }) => {
  return (
    <div className="text-left border rounded-xl p-2 bg-white col-span-1">
      <div className="flex">
        <h2 className="text-5xl font-bold text-gray-900">{rating} <span className="text-xl font-semibold text-gray-500">/5</span></h2>
        <div className="flex flex-col ml-2">
          <p className="text-xl font-semibold text-gray-800">Tuyệt vời</p>
          <a href="#" className="text-gray-500 underline">{comments} Bình luận</a>
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-white font-semibold">N</div>
        <p className="font-semibold text-gray-700 ml-2">Người dùng </p>
      </div>
      <p className="text-gray-600 mt-2">Good. Tuyệt vời chỉ có vị trí hơi khó đi khi bắt tài xế kiếm dễ đón khách ..</p>
    </div>
  );
};

export default RatingAndComments;
