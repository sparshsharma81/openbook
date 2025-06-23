import React from "react";
// ye hamne react ko import kiya hai...

import {
  Book,
  Sparkles,
  Lock,
  Calendar,
  ChevronRight,
  BarChart2,
  FileText,
} from "lucide-react";
//ye normal svg icons hai joki hamne lucid react library se impport kiye hai....


import { Button } from "@/components/ui/button";
// ye hai button wala component joki hamne npm i shadcnui@latest add button se install kiya hai...


import { Card, CardContent } from "@/components/ui/card";
// ye hai card wala component joki hamne npm i shadcnui@latest add card se install kiya hai...
// basically ye dono component wale folder me ui wale folder me hai...


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// ye hai accordion wala component joki hamne npm i shadcnui@latest add accordion se install kiya hai...
// ye bhi component wale folder me ui wale folder me hai... 
//uss folder me ye saare functions install ho rakhe hai...


import TestimonialCarousel from "@/components/testimonial-carousel";
//ye basiically testimonial-carousel wala page hai joki hamne components wale folder me banaya hai...
//testimonial-carousel wala page hamne use-client banaya hai..uske hame ebola-coursel wali libary use kiye hai



import { Skeleton } from "@/components/ui/skeleton";
// ye hai skeleton wala component joki hamne npm i shadcnui@latest add skeleton se install kiya hai...
// ye bhi component wale folder me ui wale folder me hai...



import Link from "next/link";
// ye hai link wala component joki hamne next js se import kiya hai...
//ye hamne client-side navigation k liye use kiya hai
//ye basically bina reload k kar hamne page ko navigate krne me help karega...


import { getDailyPrompt } from "@/actions/public";
// ye hai getDailyPrompt wala action joki hamne actions folder me se import kiya hai...
//basically dynamic data fetch k liye hamne use kiya hai...
//from this page..ham daily prompt fetch karege...

import faqs from "@/data/faqs";
//ye hai faqs wala data joki hamne data folder me se import kiya hai...
//ye basically faqs wale page me use kiya hai...






const features = [
  //ye hamne features wale page me use kiya hai...
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

  //ye hamne daily prompt fetch karege... 
  //basically advice me ham daily prompt joki action wale page me public.js wale folder me hai...
  const advice = await getDailyPrompt();



  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8">
      {/* max-w-5xl: limits the max width to keep content centered and readable. */}

{/* mx-auto: centers the div horizontally. */}

{/* text-center: aligns all text to the center. */}

{/* space-y-8: vertical spacing (32px) between child elements inside. */}


        <h1 className="text-5xl md:text-7xl lg:text-8xl gradient-title mb-6">
          Your Space to SnapBook <br /> Your Story to Tell.
          {/* text-5xl, md:text-7xl, lg:text-8xl: responsive heading sizes. */}

{/* gradient-title: custom class defined in your CSS to apply a gradient to the text. */}

{/* mb-6: margin below (24px). */}

{/* <br />: adds a line break in the heading. */}


          {/* ye gradient-title wala class hai joki hamne css me define kiya hai... */}
        </h1>
        <p className="text-lg md:text-xl text-orange-800 mb-8">
          Capture your thoughts, track your moods, and reflect on your journey
          in a beautiful, secure space.
        </p>
        <div className="relative">
          {/* ye children ko div k andar position kar dega... */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent pointer-events-none z-10" />

          {/* relative: positions children absolutely inside this div. */}

{/* absolute inset-0: the gradient div covers the entire parent. */}

{/* bg-gradient-to-t: gradient goes bottom to top. */}

{/* z-10: ensures it's layered on top. */}

{/* pointer-events-none: disables clicking on this overlay. */}



{/* ye hai white round card box */}
          <div className="bg-white rounded-2xl  p-4 max-full mx-auto">
            <div className="border-b border-orange-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="text-orange-900 font-medium">
                  Today&rsquo;s Entry

                  {/* this is a special character in javascript... */}
                  {/* ye basically &quot;Today&quot; ko display karega... */}
                  
                </span>
              </div>
              <div className="flex gap-2">

                {/* isme tin small colourable dots hai ..joki ek decorative ui me hai.. */}
                <div className="h-3 w-3 rounded-full bg-orange-200" />
                <div className="h-3 w-3 rounded-full bg-orange-300" />
                <div className="h-3 w-3 rounded-full bg-orange-400" />
              </div>


              {/* ye hai today entry wala box */}
            </div>
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-semibold text-orange-900">
                {advice ? advice : "My Thoughts Today"}
{/* advice ek string hai joki getDailyPrompt wale page me hai... */}
{/* agar koi error aaya ..to my thoughts today wala show hoga... */}

              </h3>

              {/* ye hai skeleton wala component joki hamne import kiya hai... */}
              {/* ye basically ek loading state hai joki hamne use kiya hai... */}
              
              <Skeleton className="h-4 bg-orange-100 rounded w-3/4" />
              <Skeleton className="h-4 bg-orange-100 rounded w-full" />
              <Skeleton className="h-4 bg-orange-100 rounded w-2/3" />
            </div>
          </div>
        </div>

        {/* ye hai button wala box */}
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
          {/* ye hai link wala component joki hamne next js se import kiya hai... */}
          {/* ye basically bina reload k kar hamne page ko navigate krne me help karega... */}
          {/* ye basically dashboard wale page ko navigate krne me help karega... */}

            <Button
              variant="journal"
              className="px-8 py-6 rounded-full flex items-center gap-2"
            >
              Start Writing <ChevronRight className="h-5 w-5" />
              {/* ye ChevronRight ek arrow hai joki hamne lucid react library se import kiya hai... */}

              {/* ye basically ek arrow hai joki hamne use kiya hai... */}
            </Button>
          </Link>
          <Link href="#features">
          {/* ye hai link wala component joki hamne next js se import kiya hai... */}
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full border-orange-600 text-orange-600 hover:bg-orange-100"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>


      {/* ye hai feature cards wala section */}
      {/* Feature Cards */}
      <section
        id="features"
        className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (

          //ye basically hamne map ka use kiya hai traverse karne k liye
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

        {/* ye hai rich text editor wala feature */}
        <div className="grid md:grid-cols-2 gap-12 ">

          <div className="space-y-6">
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">

              {/* ye hai FileText ek icon hai joki hamne lucid react library se import kiya hai... */}
              {/* ye basically ek file wala icon hai joki hamne use kiya hai... */}
              <FileText className="h-6 w-6 text-orange-600" />
            </div>

            {/* ye hai rich text editor wala title */}
            <h3 className="text-2xl font-bold text-orange-900">
              Rich Text Editor
            </h3>

            {/* ye hai rich text editor wala description */}
            <p className="text-lg text-orange-700">
              Express yourself fully with our powerful editor featuring:
            </p>

            {/* ye hai rich text editor wala list */}
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Format text with ease</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Embed links</span>
              </li>

              {/* ye hai rich text editor wala list */}
            </ul>
          </div>

          {/* ye hai rich text editor wala preview */}
          <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
            {/* Editor Preview */}

            {/* ye hai rich text editor wala preview */}
            <div className="flex gap-2 mb-6">

              {/* ye hai rich text editor wala preview */}
              <div className="h-8 w-8 rounded bg-orange-100"></div>
              <div className="h-8 w-8 rounded bg-orange-100"></div>
              <div className="h-8 w-8 rounded bg-orange-100"></div>
            </div>

            {/* ye hai rich text editor wala preview */}
            <div className="h-4 bg-orange-50 rounded w-3/4"></div>
            <div className="h-4 bg-orange-50 rounded w-full"></div>
            <div className="h-4 bg-orange-50 rounded w-2/3"></div>
            <div className="h-4 bg-orange-50 rounded w-1/3"></div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 md:flex-row-reverse">
          <div className="space-y-6 md:order-2">
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <BarChart2 className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-900">
              Mood Analytics
            </h3>
            <p className="text-lg text-orange-700">
              Track your emotional journey with powerful analytics:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Visual mood trends</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Pattern recognition</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-orange-100 md:order-1">
            {/* Analytics Preview */}
            <div className="h-40 bg-gradient-to-t from-orange-100 to-orange-50 rounded-lg"></div>
            <div className="flex justify-between">
              <div className="h-4 w-16 bg-orange-100 rounded"></div>
              <div className="h-4 w-16 bg-orange-100 rounded"></div>
              <div className="h-4 w-16 bg-orange-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />
      {/* ye hai testimonial carousel wala component joki hamne import kiya hai... */}

     {/* FAQ Section */}
      <div className="mt-24 relative">
        {/* Gradient background blob */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-3xl blur-2xl opacity-60 -z-10" />
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 p-10">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/90 backdrop-blur-xl rounded-xl border border-orange-100 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="text-lg font-semibold text-orange-900 hover:text-purple-600 transition-colors px-6 py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-orange-700 px-6 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>


      {/* CTA Section */}
      <div className="mt-24">
            <Card className="bg-gradient-to-r from-red-200 to-black-100">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">
              Start Reflct-ing on Your Journey Today
            </h2>
            <p className="text-lg text-orange-700 mb-8 max-w-2xl mx-auto">
              Join thousands of writers who have already discovered the power of
              digital journaling.
            </p>

            {/* ye hai button wala component joki hamne import kiya hai... */}
            {/* ye basically ek button hai joki hamne use kiya hai... */}
            
            <Button size="lg" variant="journal" className="animate-bounce">
              Get Started for Free <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
