import images from "#/constant/image"
import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"

const info=[
    {
        name:"Bella Jimenez",
        role:"Creative Strategist",
        image:images.bella
    },
    {
        name:"Edwin Watson",
        role:"Creative Strategist",
        image:images.edwin
    },
    {
        name:"Caitlin Henderson",
        role:"Creative Strategist",
        image:images.caitlin
    },

]

function HostSection() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-10 lg:px-10 md:px-10">
      <div className="flex justify-between">
           <h1 className="lg:text-[40px] md:text-[30px] text-[20px] font-bold mb-10 ">Meet your hosts:</h1>
           <Link to="/hosts" className="flex md:text-[16px] text-[12px]  md:items-center gap-3 font-bold">View all of them<ArrowRight/></Link>
      </div>
       
        <div className="grid md:grid-cols-3 gap-5">
            {info.map((i,idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md">
            <div className="overflow-hidden rounded-xl">
              <img
                src={i.image}
                alt={i.name}
                className="h-[300px] w-full object-cover rounded-xl"
              ></img>
            </div>
            <div className="md:mt-5 mt-3 px-5 py-3 space-y-2">
              <p className="lg:text-[20px] md:text-[18px] font-semibold">
                {i.name}
              </p>
              <p className='text-[14px] text-muted-foreground'>{i.role}</p>
              <div className="flex gap-3">
                <span className="size-5 rounded-full bg-muted-foreground flex items-center justify-center">
                    <img src={images.facebook} alt="facebook icon" className="size-3"></img>
                </span>
                <span className="size-5 rounded-full bg-muted-foreground flex items-center justify-center">
                    <img src={images.linkin} alt="linkin icon" className="size-3"></img>
                </span>
                <span className="size-5 rounded-full bg-muted-foreground flex items-center justify-center">
                    <img src={images.twitter} alt="twitter icon" className="size-3"></img>
                </span>
                </div>
            </div>
          </div>
        ))}
        </div>
    </section>
  )
}

export default HostSection