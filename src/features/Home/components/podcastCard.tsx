
import { Card, CardContent} from "#/components/atoms/card"
import { Headphones } from "lucide-react"


type cardProps={
    image:string,
    title1:string,
    title2:string,
    subTitle:string
}

function PodcastCard({image,title1,title2,subTitle}:cardProps) {
  return (
    <div>
    <Card className="max-w-[800px] flex md:h-[400px] h-[200px] py-0">
      
      <CardContent>
        <div className="relative">
            <img src={image} alt="card image"  className="w-[400px] md:h-[400px] h-[200px] p-0 m-0"></img>
            <div className="bg-white rounded-xl absolute top-2 right-0"><Headphones className="md:size-10 size-8 p-2"/></div>
        </div>
            <div className="flex">
                <span>{title1}</span><span className="mb-3">.</span><span>{title2}</span>
            </div>
            <p>{subTitle}</p>
      
      </CardContent>
      
    </Card>
    </div>
  )
}

export default PodcastCard