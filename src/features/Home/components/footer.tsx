import images from '#/constant/image'

function Footer() {
  return (
    <section className="bg-black w-full text-white mt-20">
      <div className="max-w-6xl md:px-10 px-10 lg:px-10 mx-auto flex md:gap-40 gap-10 items-center py-10">
        <div>
          <img src={images.whitelogo} alt="logo" className='lg:w-[147px] lg:h-[47px] md:w-[120px] md:h-[40px]'></img>
          <span className="text-[13px] text-muted-foreground">
            The great connection.
          </span>
        </div>

        <div className="xl:text-[20px] lg:text-[18px] text-[14px] font-semibold leading-7">
          We collaborate with ambitious brands and people;
          <br /> let’s build something great together.
        </div>
      </div>
      <div className="flex gap-5 xl:gap-20 lg:gap-15 md:gap-30 pl-8 md:pl-10 max-w-5xl mx-auto xl:pl-70 lg:pl-86 pb-10">
        <div>
          <p className="xl:text-[18px] lg:text-[15px] text-[13px] text-muted-foreground mt-">
            Start a conversation:
          </p>
          <p className="xl:text-[17px] lg:text-[14px] md:text-[12px] text-[10px] text-muted-foreground md:leading-7 leading-5 mt-3 md:mt-6">
            podcast@example.com
            <br />
            +2 969 866 7033
          </p>
          <p className="xl:text-[13px] lg:text-[10px] text-[8px] text-muted-foreground mt-5 md:mt-10">
            Terms & Conditions
          </p>
        </div>
        <div>
          <p className="xl:text-[18px] lg:text-[15px] text-[13px] text-muted-foreground">Find us here:</p>
          <p className="xl:text-[17px] lg:text-[14px] md:text-[12px] text-[10px] text-muted-foreground leading-5 md:leading-7 mt-3 md:mt-6">
            Brooklyn, NY 11201
            <br />
            United States
          </p>
          <p className="xl:text-[13px] lg:text-[10px] text-[8px] text-muted-foreground mt-3 md:mt-10">
            Privacy Policy{' '}
          </p>
        </div>
        <div>
          <p className="xl:text-[18px] lg:text-[15px] text-[13px]  text-muted-foreground mt-">Follow us on:</p>
          <div className="flex gap-4 mt-6 md:mb-20 mb-5">
            <span className="lg:size-[20px] size-[15px] bg-muted-foreground rounded-full flex justify-center items-center">
              <img
                src={images.facebook}
                alt="facebook icon"
                className="size-3"
              ></img>
            </span>
            <span>
              <img
                src={images.twitter}
                alt="twitter icon"
                className="lg:size-5 size-4"
              ></img>
            </span>

            <span>
              <img
                src={images.instragram}
                alt="instragram icon"
                className="lg:size-5 size-4"
              ></img>
            </span>

            <span>
              <img
                src={images.youtube}
                alt="youtube icon"
                className="lg:size-5 size-4"
              ></img>
            </span>
          </div>
          <p className="xl:text-[13px] lg:text-[10px] text-[8px] text-muted-foreground lg:mt-10 md:mt-5 mt-2">
            © 2021 Qode Interactive. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
