import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BiPlayCircle } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Rating from "react-rating";
const Details = (props) => {
  const { courseTitle, price, description, image, instructor, star, enrol } =
    props.details;
  return (
    <div className="bg-white rounded-md p-3 mb-8 shadow-md">
      <div className="image ">
        <img className="w-screen rounded-lg" src={image} alt="" />
      </div>

      <div className="details pt-5">
        <h4 className="font-semibold text-lg leading-6">{courseTitle}</h4>
        <p className="flex items-center my-3 text-sm">
          <BiPlayCircle className="inline-block text-purple-500"></BiPlayCircle>{" "}
          <span className="pl-1">20 Lesson</span>
        </p>
        <p>{description}</p>

        <p className="pt-3 text-sm -semibold">Instructor: {instructor}</p>
        <p className="flex pt-5 items-center">
          <IoIosPeople className="text-2xl text-purple-500 inline-block"></IoIosPeople>
          <span className="pl-2">{enrol}</span>
        </p>
        <div className="flex pt-5  items-center pt-2">
          <p className="">
            <span className="pr-3 font-bold pr-10 text-purple-500 text-lg">
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
    </div>
  );
};

export default Details;
