import React from "react";
import {
  Book,
  Sparkles,
  Lock,
  Calendar,
  ChevronRight,
  BarChart2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getDailyPrompt } from "@/actions/public";
import faqs from "@/data/faqs";

const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and more.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are safe with enterprise-grade security and privacy features.",
  },
];

export default async function LandingPage() {
  const advice = await getDailyPrompt();

  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8">
   <h1 className="hero-colored-title">
  Your Space to SnapBook. <br /> Your Story to Tell.
</h1>



        <p className="text-lg md:text-xl text-orange-800 mb-8">
          Capture your thoughts, track your moods, and Snap your journey
          in a beautiful, secure space.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent pointer-events-none z-10" />
          <div className="bg-white rounded-2xl  p-4 max-full mx-auto">
            <div className="border-b border-orange-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="text-orange-900 font-medium">
                  Today&rsquo;s Entry
                </span>
              </div>
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-orange-200" />
                <div className="h-3 w-3 rounded-full bg-orange-300" />
                <div className="h-3 w-3 rounded-full bg-orange-400" />
              </div>
            </div>
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-semibold text-orange-900">
                {advice ? advice : "My Thoughts Today"}
              </h3>
              <Skeleton className="h-4 bg-orange-100 rounded w-3/4" />
              <Skeleton className="h-4 bg-orange-100 rounded w-full" />
              <Skeleton className="h-4 bg-orange-100 rounded w-2/3" />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="journal"
              className="px-8 py-6 rounded-full flex items-center gap-2"
            >
              Start Writing <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full border-orange-600 text-orange-600 hover:bg-orange-100"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      <section
        id="features"
        className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl text-orange-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-orange-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="space-y-24 mt-24">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="space-y-6">
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-900">
              Rich Text Editor
            </h3>
            <p className="text-lg text-orange-700">
              Express yourself fully with our powerful editor featuring:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Format text with ease</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Embed links</span>
              </li>
            </ul>
          </div>
         <div className="space-y-4 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-orange-200 transition-shadow duration-300 hover:shadow-2xl">
  {/* Editor Toolbar Preview */}
  <div className="flex gap-2 mb-6">
    {[1, 2, 3].map((_, i) => (
      <div
        key={i}
        className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-200 via-orange-100 to-orange-50 shadow-inner"
      ></div>
    ))}
  </div>

  {/* Editor Content Preview */}
  <div className="space-y-3">
    <div className="h-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full w-3/4 animate-pulse"></div>
    <div className="h-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full w-full animate-pulse"></div>
    <div className="h-4 bg-gradient-to-r from-orange-100 to-green-100 rounded-full w-2/3 animate-pulse"></div>
    <div className="h-4 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full w-1/3 animate-pulse"></div>
  </div>
</div>

        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 md:flex-row-reverse">
          <div className="space-y-6 md:order-2">
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <BarChart2 className="h-6 w-6 text-orange-600" />
            </div>
           <h3 className="text-3xl font-extrabold text-orange-900 tracking-tight leading-tight">
  Mood Analytics
</h3>

<p className="text-base md:text-lg text-orange-800 leading-relaxed">
  Track your emotional journey with powerful, data-driven insights:
</p>

<ul className="space-y-3 text-orange-800 font-medium">
  <li className="flex items-center gap-3">
    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-400 shadow-sm" />
    <span>Interactive mood visualizations</span>
  </li>
  <li className="flex items-center gap-3">
    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-green-300 shadow-sm" />
    <span>Personalized pattern recognition</span>
  </li>
</ul>

          </div>
          <div className="space-y-6 bg-white/70 backdrop-blur-xl border border-orange-200 shadow-2xl rounded-3xl p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(255,146,0,0.2)] md:order-1">
  {/* Analytics Chart Preview */}
  <div className="h-44 rounded-xl bg-gradient-to-tr from-orange-100 via-orange-50 to-yellow-50 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200/30 to-transparent animate-pulse"></div>
  </div>

  {/* Labels or Stats */}
  <div className="flex justify-between items-center gap-4">
    {[1, 2, 3].map((_, i) => (
      <div
        key={i}
        className="h-4 w-16 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 animate-pulse"
      ></div>
    ))}
  </div>
</div>

        </div>
      </div>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <div className="mt-24 max-w-4xl mx-auto px-4">
  <h2 className="text-4xl font-extrabold text-center text-orange-900 mb-8">
    Frequently Asked Questions
  </h2>
  <p className="text-center text-orange-700 mb-12 text-lg">
    Everything you need to know about the platform and how it works.
  </p>
  <div className="space-y-4">
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-white border border--100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <AccordionTrigger className="text-left text-orange-900 text-lg font-medium px-6 py-4 hover:bg-orange-50 rounded-t-xl">
            <span className="flex items-center gap-2">
              <ChevronRight className="h-5 w-5 text-orange-600 transition-transform group-data-[state=open]:rotate-90" />
              {faq.q}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-orange-700 px-6 pb-6 pt-0 text-base leading-relaxed">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</div>

      {/* <div className="mt-24">
        <h2 className="text-3xl font-bold text-center text-orange-900 mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-orange-900 text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-orange-700">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div> */}

      {/* CTA Section */}
      <div className="mt-24">
        <Card className="bg-gradient-to-r from-orange-100 to-amber-100">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">
              Start Reflct-ing on Your Journey Today
            </h2>
            <p className="text-lg text-orange-700 mb-8 max-w-2xl mx-auto">
              Join thousands of writers who have already discovered the power of
              digital journaling.
            </p>
            <Button size="lg" variant="journal" className="animate-bounce">
              Get Started for Free <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}