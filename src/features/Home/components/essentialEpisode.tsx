import images from '#/constant/image.ts'
import { Headphones, Play, Share2 } from 'lucide-react'

const episodes = [
  {
    image: images.timmy,
    title: 'Episode1.Technology',
    episode: 'SRKP selects: how the new ages work',
  },
  {
    image: images.mindset,
    title: 'Episode2.Technology',
    episode: 'SRKP selects: a new mindset today',
  },
  {
    image: images.trends,
    title: 'Episode3.Technology',
    episode: 'SRKP selects: the latest trends now',
  },
  {
    image: images.organize,
    title: 'Episode4.Technology',
    episode: 'SRKP selects: organize your day',
  },
  {
    image: images.plan,
    title: 'Episode5.Technology',
    episode: 'SRKP selects: how to plan work',
  },
  {
    image: images.bestPhone,
    title: 'Episode1.Technology',
    episode: 'SRKP selects: trying the best phones',
  },
]
function EssentialEpisode() {
  return (
    <section className=' mt-20'>
    <div className="max-w-6xl mx-auto md:px-10 lg:px-10 px-10 md:mb-20 mb-10">
      <h1 className="lg:text-[40px] md:text-[30px] text-[20px] mb-10 font-bold">Essential episodes:</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {episodes.map((episode,idx) => (
          <div className="bg-white rounded-xl shadow-md" key={idx}>
            <div className="overflow-hidden rounded-xl relative">
              <img
                src={episode.image}
                alt={episode.episode}
                className="md:h-[350px] h-[300px] w-full object-cover"
              ></img>
              <span className='absolute top-1 right-2 flex items-center justify-center bg-white size-8 rounded-md'>
                <Headphones className='size-5'/>
              </span>
              
            </div>
            <div className="mt-5  px-5 md:py-5 py-4 space-y-3">
              <p className="text-[14px] text-muted-foreground">
                {episode.title}
              </p>
              <p className='lg:text-[20px] md:text-[18px]  font-semibold border-b-2 border-black'>{episode.episode}</p>
              <div className="flex gap-2 mt-5">
                <span className="text-[14px] text-muted-foreground">Share</span>
                <span className="bg-muted-foreground size-5 rounded-full flex items-center">
                  <Share2 className="size-4 text-white" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='relative w-full'>
        <img src={images.video} alt="video"></img>
        <span className='md:size-10 size-8 rounded-full bg-white flex items-center justify-center top-16 left-50 xl:top-60 lg:top-40 lg:left-130 md:top-30 md:left-90 xl:left-170 absolute'><Play className='text-black size-4'/></span>
    </div>
    </section>
  )
}

export default EssentialEpisode
