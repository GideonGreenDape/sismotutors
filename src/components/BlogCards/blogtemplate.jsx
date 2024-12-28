function BlogCardTemplate(props) {
  return (
    <div className="flex-col flex gap-[31px] h-[182px] items-center">
      <div className="flex self-start gap-[12px]">
        <img
          className="block w-[50px] h-[50px] "
          src={props.image}
          alt={props.imagedescription}
        />
        <div className="flex-col flex gap-[5px] ">
          <p>{props.author}</p>
          <p>
            Published in <span>{props.blogSeries}</span>
          </p>
          <p>5 min read, Nov 23 2024 </p>
        </div>
        <p
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = props.link;
          }}
          className="font-mont font-normal text-textblue text-[9x] cursor-pointer "
        >
          Follow{" "}
        </p>
      </div>
      <div className="font-ubuntu font-bold text-[14px] text-left w-[256px]">
        {props.postTitle}
      </div>
    </div>
  );
}

function ExploreBlog() {
  return (
    <div className="flex-col flex gap-[23px] ">
      <p className="font-mont font-bold leading-9 text-[17px] ">
        <span className="text-[23px] ">Explore Our Blog: </span>
        Your Hub for Insightfull Education Content
      </p>
      <p className="font-mont font-normal leading-[22px] text-[16px] ">
        Discover a wealth of Knowledge: Dive into our Educational Blog for
        Experts Insight and Practical Tips.
      </p>
    </div>
  );
}


export {BlogCardTemplate,ExploreBlog}