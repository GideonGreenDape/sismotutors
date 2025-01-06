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
          <p className="font-bold text-[13px] font-ubuntu">{props.author}</p>
          <p className="font-bold font-ubuntu text-[13px] ">
            Published in <span>{props.blogSeries}</span>
          </p>
          <p className="font-normal font-ubuntu text-[12px] " >5 min read, Nov 23 2024 </p>
        </div>
        <p
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = props.link;
          }}
          className="font-ubuntu font-semibold text-textblue text-[12px] cursor-pointer "
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
    <div className="flex-col flex items-center gap-[23px] ">
      <p className="font-mont text-center w-[360px] font-bold leading-9 text-[17px] ">
        <span className="text-[19px]   ">Explore Our Blog: </span>
        Your Hub for Insightfull Education Content
      </p>
      <p className="font-mont w-[340px] font-normal leading-[22px] text-[14px] ">
        Discover a wealth of Knowledge: Dive into our Educational Blog for
        Experts Insight and Practical Tips.
      </p>
    </div>
  );
}


export {BlogCardTemplate,ExploreBlog}