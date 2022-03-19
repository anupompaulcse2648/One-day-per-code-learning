import React from "react";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BiPlayCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

import Rating from "react-rating";

const ItemCourse = (props) => {
  const {
    courseTitle,
    image,
    enrol,
    code,
    instructor,

    star,
    price,
  } = props.course;

  return (
    <div className="bg-white rounded-md p-3 shadow-md">
      <div className="image ">
        <img className="w-full rounded-lg" src={image} alt="" />
      </div>
      <div className="details ">
        <p className="flex items-center my-3 text-sm">
          <BiPlayCircle className="inline-block text-purple-500"></BiPlayCircle>{" "}
          <span className="pl-1">20 Lesson</span>
        </p>
        <h4 className="font-semibold text-lg leading-6">{courseTitle}</h4>

        <p className="pt-3 text-sm -semibold">Instructor: {instructor}</p>
        <div className="flex pt-5 justify-between items-center pt-2">
          <p className="">
            <span className="pr-3 font-bold text-purple-500 text-lg">
              ${price.discountPrice}
            </span>
          </p>
          <p className="text-sm">
            <Rating
              className="text-purple-500"
              emptySymbol={<AiOutlineStar></AiOutlineStar>}
              fullSymbol={<AiFillStar></AiFillStar>}
              initialRating={star}
              readonly
            ></Rating>{" "}
            <span className="font-semibold">{star} Rating</span>
          </p>
        </div>
      </div>
      <hr className="bg-black my-4" />
      <div className=" flex items-center justify-between">
        <p className="flex items-center">
          <IoIosPeople className="text-2xl text-purple-500 inline-block"></IoIosPeople>
          <span className="pl-2">{enrol}</span>
        </p>

        <button className="bg-purple-500 w-16 h-10 flex justify-center rounded-md items-center text-white font-semibold py-3 cursor-pointer hover:bg-yellow-500 transition-all">
          <BsArrowRight className="inline-block font-bold  text-2xl"></BsArrowRight>
        </button>
      </div>
    </div>
  );
};

export default ItemCourse;
