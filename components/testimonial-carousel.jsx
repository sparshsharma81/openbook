"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import testimonials from "@/data/testimonials";

const TestimonialCarousel = () => {
  return (
    <div className="mt-24">
  <h2 className="text-4xl font-extrabold text-center text-orange-900 mb-4">
  Users Opinion
  </h2>
  <p className="text-center text-orange-700 text-lg mb-12">
   Discover how SnapBook improve the quality of life
  </p>

  <Carousel
    plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]}
    className="w-full mx-auto max-w-7xl"
  >
    <CarouselContent>
      {testimonials.map((testimonial, index) => (
        <CarouselItem
          key={index}
          className="md:basis-1/2 lg:basis-1/3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <Card className="bg-white/70 backdrop-blur-lg shadow-xl border border-orange-100 rounded-2xl transition-all hover:shadow-2xl hover:border-orange-200">
            <CardContent className="p-6 relative">
              {/* Quotation Icon */}
              <div className="absolute top-4 left-4 text-orange-200 text-6xl opacity-20 z-0">
                &ldquo;
              </div>

              <blockquote className="relative z-10 space-y-4">
                <p className="text-orange-800 text-md italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <footer className="pt-4 border-t border-orange-100">
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

    <CarouselPrevious className="bg-orange-100 hover:bg-orange-200 text-orange-600" />
    <CarouselNext className="bg-orange-100 hover:bg-orange-200 text-orange-600" />
  </Carousel>
</div>

  );
};

export default TestimonialCarousel;