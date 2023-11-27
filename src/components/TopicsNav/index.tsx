import React from "react";

interface Link {
  title: string;
  path: string;
}

interface Props {
  prevLink: Link;
  nextLink: Link;
}

const TopicsNav: React.FC<Props> = ({ prevLink, nextLink }) => {
  return (
    <div className="flex justify-between mt-12 flex-col-reverse md:flex-row">
      <a href={prevLink.path} className="btn btn-sm md:btn-md lg:gap-3 ">
        <svg
          className="h-6 w-6 fill-current md:h-8 md:w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
        </svg>{" "}
        <div className="flex flex-col items-start">
          <span className="text-base-content/50 hidden text-xs font-normal md:block">
            Prev
          </span>{" "}
          <span>{prevLink.title}</span>
        </div>
      </a>
      <a
        href={nextLink.path}
        className="btn btn-primary btn-sm md:btn-md gap-2 lg:gap-3 mb-2 md:mb-0"
      >
        <div className="flex flex-col items-end">
          <span className="hidden text-xs font-normal md:block">Next</span>{" "}
          <span>{nextLink.title}</span>
        </div>{" "}
        <svg
          className="h-6 w-6 fill-current md:h-8 md:w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
        </svg>
      </a>
    </div>
  );
};

export default TopicsNav;
