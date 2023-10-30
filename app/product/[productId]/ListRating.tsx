"use client";

import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps {
  product: any;
}

const ListRating = ({ product }: ListRatingProps) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="mt-2 text-sm">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div
                key={review.id}
                className="
                 max-w-[300px]
             "
              >
                {/* user */}
                <div className="flex items-center gap-2">
                  <Avatar src={review.user.image} />
                  <div className="font-bold">{review?.user.name}</div>
                  <div className="font-light">
                    {moment(review.createdDate).fromNow()}
                  </div>
                </div>
                {/* rating */}
                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                  {/* comment */}
                  <div>{review.comment}</div>
                  <hr className="mt-4 mb-4" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
