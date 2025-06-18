//ise ham export krege app wale page me
"use client";
//ye basically ham iss component ko client side pr render karege...
//hamne ise use kiya hai kyuki hamne statefull effects jaise autoplay use kiye hai
//aur kuch libraries jaise embla carousel , joki DOM pr depend krte hai..joki browser pr depend krta hai..isliye hamne ise client side pr render karege...


import React from "react";
//ye normal react hai joki hamne import kiya hai...

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
//ye hai embla carousel wala component joki hamne npm i shadcnui@latest add embla-carousel se install kiya hai...
//ye bhi component wale folder me ui wale folder me hai...
//basically carousel wali file me ye saare functions define kare hue hai...
// Main carousel container (<Carousel>)

// The scrolling track (<CarouselContent>)

// Each slide (<CarouselItem>)

// Navigation arrows (<CarouselNext>, <CarouselPrevious>)




import Autoplay from "embla-carousel-autoplay";
//ye hai embla carousel autoplay wala component joki hamne npm i shadcnui@latest add embla-carousel-autoplay se install kiya hai...
//ye bhi component wale folder me ui wale folder me hai...
//basically embla carousel wali file me ye saare functions define kare hue hai...
//coursel automatically rotates slides every few seconds....



import { Card, CardContent } from "./ui/card";
//ye hai card wala component joki hamne npm i shadcnui@latest add card se install kiya hai...
//ye bhi component wale folder me ui wale folder me hai...
//ye hai resuable card wala component joki testimonial box k liye hai



const TestimonialCarousel = () => {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">
        What Our Writers Say
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000, 
            // ye har 2 seconds k baad slide rotate karega...
          }),
        ]}
        className="w-full mx-auto"
        // ye width full hai aur horizontal center karega...
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            //ye fir again hamne data /testiominal wali file me data likha hai..ye uspr traverse kar rahe hai..through map...

            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              {/* md:basis-1/2 → takes half width on medium screens. */}
              {/* lg:basis-1/3 → takes one-third width on large screens. */}
              {/* basis-1/2 → takes half width on all screens. */}
              {/* basis-1/3 → takes one-third width on all screens. */}
              {/* ye basis wala concept hai joki hamne css me use kiya hai... */}
              {/* ye basically ek resposive layout hai... */}
              <Card className="bg-white/80 backdrop-blur-sm">
              {/* ye bg-while/80 + backdrop blur-sm basically ek glassmorphism effect create krege... */}
                <CardContent className="p-6">


                  {/* ab ye blockquote basically testimonial , author aur role ko display karega... */}
                  <blockquote className="space-y-4">
                    <p className="text-orange-700 italic">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* ye footer basically author aur role ko display karega... */}
                    <footer>
                      <div className="font-semibold text-orange-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-orange-600">
                        {testimonial.role}
                      </div>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* ye previous aur next arrow hai joki hamne embla carousel wale file me import kiya hai... */}
        <CarouselPrevious />
        <CarouselNext />

        {/* ye carousel wala component hai joki hamne embla carousel wale file me import kiya hai... */}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
