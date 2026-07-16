import PodcastCarousal from "./podcastCarousal"

function TopPodcast() {
  return (
    <section className="bg-[#F8F8F8] text-foreground lg:mt-40 md:mt-30 mt-15 ">
      <h1 className="text-center font-bold lg:text-[40px] md:text-[30px] text-[20px]">Top Podcasts:</h1>
      <p className="text-center text-foreground md:text-[16px] lg:text-[17px] text-[12px]">
        Discover the selection of the most popular podcasts.
      </p>
      <div className="mt-10 w-full ">
        <PodcastCarousal />
      </div>
    </section>
  )
}

export default TopPodcast
