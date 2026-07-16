import images from '#/constant/image.ts'
import { ArrowRight, Volume2 } from 'lucide-react'
import TopPodcast from './components/topPodcast'
import EssentialEpisode from './components/essentialEpisode'
import HostSection from './components/hostSection'
import Footer from './components/footer'
import { Link } from '@tanstack/react-router'

function Home() {
  return (
    <div className='w-full'>
      <div
        className="w-full h-screen bg-cover bg-center relative text-foreground"
        style={{
          backgroundImage: `url(${images.image})`,
        }}
      >
        <div className="absolute md:left-20 left-10 top-50 md:top-40">
          <h1 className="lg:text-[65px] md:text-[45px] text-[18px] font-bold lg:leading-17 md:leading-12">
            New episode
            <br />
            available now
          </h1>
          <p className="lg:text-[19px] md:text-[17px] text-[14px] mt-4">
            Available on Apple Soundcast and Spotify.
          </p>
          <div className="flex flex-row items-center lg:gap-5 md:gap-3 gap-2 mt-8">
            <img src={images.applePodcast} alt="applePodcast" className='lg:w-[175px] lg:h-[54px] md:w-[145px] md:h-[50px] w-[120px] h-[40px]'></img>
            <img src={images.soundCloud} alt="soundCloud" className='lg:w-[175px] lg:h-[54px] md:w-[145px] md:h-[50px] w-[120px] h-[40px]'></img>
          </div>
        </div>
        <div className="absolute shadow-xl -bottom-30 xl:left-45 lg:left-30 md:left-10 left-5 right-5 -bottom-20 items-center  flex md:flex-row flex-col bg-white rounded-xl  md:max-w-175 lg:max-w-200 xl:max-w-250">
          <img
            src={images.timmy}
            alt="timmy"
            className="size-56 rounded-xl"
          ></img>
          <div className="flex-1 p-4 space-y-5">
            <div className=" flex justify-between gap-5">
              <div>
                <h2 className="lg:text-[35px] md:text-[25px] text-[14px] font-bold md:leading-7 lg:leading-10">
                  Timmy Mike:the nature
                  <br />
                  of design
                </h2>
                <div className="text-muted-foreground mt-3 lg:text-[14px] md:text-[13px] text-[10px]">
                  <span>Episode 1.</span>
                  <span>Microphone.</span>
                  <span>0:13</span>
                </div>
              </div>

              <p className="flex gap-2 md:text-[16px] text-[14px] lg:mt-4 md:mt-2">
                Episode page
                <ArrowRight />
              </p>
            </div>
            <div className="flex lg:gap-3 gap-2 mt-3">
              <img src={images.play} alt="play image" className='lg:size-12 md:size-10 size-9'></img>
              <p className="italic mt-5 lg:text-[13px] md:text-[10px] text-[8px] text-muted-foreground">
                10s
              </p>
              <p className="italic mt-5 lg:text-[13px] md:text-[10px] text-[8px] text-muted-foreground">
                10s
              </p>
              <div className="mt-6">
                <img src={images.slider} alt="slider" className='xl:w-130 lg:w-100 md:w-60 w-25'></img>
              </div>

              <p className="italic mt-5 lg:text-[13px] text-[10px] text-muted-foreground">
                00:00/00:00
              </p>
              <span className="lg:mt-5 md:mt-4 mt-5 text-foreground">
                <Volume2  className='md:size-6 size-3.5'/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col  justify-between md:mt-45 mt-40 text-foreground max-w-6xl mx-auto px-10 md:px-10 lg:px-10 max-h-[500px]">
        <div className="space-y-6 lg:max-w-[50%] md:w-full">
          <p className="lg:text-[40px] md:text-[30px] text-[20px] font-semibold lg:leading-13 md:leading-10">
            Best places to find
            <br /> design inspiration
          </p>
          <div className="flex gap-3">
            <img src={images.play} alt="play" className='lg:size-[70px] md:size-[50px] size-[40px]'></img>
            <div className="lg:mt-5 md:mt-3">
              <p className='md:text-[16px] text-[13px]'>Episode 1</p>
              <p className="text-muted-foreground md:text-[13px] text-[10px]">Category.0:13</p>
            </div>
          </div>
          <div className="lg:text-[17px] text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip. Ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <Link to="/episodePage" className="lg:text-[16px] text-[12px] flex items-center gap-3 font-bold">
            Episode page
            <ArrowRight />
          </Link>
        </div>
        <div className="lg:max-w-[50%] md:w-full md:h-[300px] h-[200px]">
          <img
            src={images.place}
            alt="place"
            className="md:h-[300px] lg:h-[500px] h-[200px] w-full"
          ></img>
        </div>
      </div>

      <TopPodcast />
      <div className="w-full">
        <EssentialEpisode />
        <HostSection />
      </div>
      <Footer />
    </div>
  )
}
export default Home
