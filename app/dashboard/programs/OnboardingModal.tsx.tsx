"use client";

import { useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, AlertCircle, Shield, Mail, Clock, MessageCircle, MonitorCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import alerabat from '@/public/imgs/programsImgs/aleRabat.jpg';
import honey from '@/public/imgs/programsImgs/honey.png';
import Image from "next/image";
// import gamesConsole from '@/public/imgs/banners/games-console.jpg';
const slides = [
  {
    title: "Welcome to Rewards Program",
    description: "Before you start earning rewards, please review these important guidelines.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "How to Get Started",
    description: <>
      <p className="mb-4"><b>Follow these steps to begin:</b></p>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
          <div>
            <p><b>Choose a Program</b></p>
            <img src="/imgs/banners/step1.jpg" alt="Step 1" className="mt-2 rounded-lg w-full" />
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
          <div>
            <p><b>Read the rules</b></p>
            <img src="/imgs/banners/step2.jpg" alt="Step 2" className="mt-2 rounded-lg w-full" />
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
          <div>
            <p><b>Start Playing and earn rewards, wait from 5-120 minutes until system detect challange complete</b></p>
            <img src="/imgs/banners/step3.jpg" alt="Step 3" className="mt-2 rounded-lg w-full" />
          </div>
        </div>
      </div>
    </>,
    icon: MonitorCheck,
  },
  {
    title: "Email Requirements",
    description: <>For each program or game, you need to have a <b>unique email and username</b>. <b>Gmail accounts are recommended</b>. Temporary email services like 10minutemail are <b>not allowed</b>.</>,
    icon: Mail,
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "System Requirements",
    description: <>
      <p className="mb-4">To ensure proper tracking, you must:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><b>Disable VPN and proxy services</b></li>
        <li><b>Disable all adblockers</b></li>
        <li><b>Remove cashback extensions</b> (Honey, Alerabat, etc.)</li>
      </ul>
      <div className="flex">
        <Image src={alerabat} alt="Browser extensions" width={100} height={100} />
        <Image src={honey} alt="Browser extensions" width={100} height={100} />
      </div>
      <p className="mt-4 text-red-600"><b>Warning:</b> Cashback extensions can steal affiliate commissions, preventing you from receiving rewards!</p>
    </>,
    icon: AlertCircle,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Game Provider Rules",
    description: <>
      <p className="mb-4"><b>Important email restrictions:</b></p>
      <ul className="list-disc pl-5 space-y-2">
        <li>You <b>cannot use the same email</b> for games from the same provider (e.g., Wargaming, Gaijin)</li>
        <li>For other providers, email reuse is allowed</li>
      </ul>
      <p className="mt-4"><b>For pending leads:</b> If your lead is still pending after 15 days, login to the game for 5 minutes and wait 24 hours for automatic approval.</p>
    </>,
    icon: Clock,
    image: "/imgs/banners/games-console.jpg",
  },
  
  {
    title: "Support",
    description: <>
      <p className="mb-4">Need help? We're here to assist you!</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><b>Read the program rules</b> by clicking "Learn More" before starting</li>
        <li>For assistance, <b>contact us on Discord</b></li>
        <li>For pending leads, ensure you've followed all requirements</li>
      </ul>
    </>,
    icon: MessageCircle,
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=1200",
  },
];

const ONBOARDING_SHOWN_KEY = 'onboarding-shown';

export function OnboardingModal() {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const hasShownOnboarding = localStorage.getItem(ONBOARDING_SHOWN_KEY);
    if (!hasShownOnboarding || 1==1) {
      setOpen(true);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleClose = useCallback(() => {
    localStorage.setItem(ONBOARDING_SHOWN_KEY, 'true');
    setOpen(false);
  }, []);

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden max-h-[90vh] w-[95vw]">
        <DialogTitle className="sr-only">
          {currentSlideData.title}
        </DialogTitle>
        <div className="relative h-[700px] max-h-[90vh] flex flex-col lg:flex-row">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col lg:flex-row"
            >
              {currentSlideData.image && (
                <div className="lg:w-1/2 h-48 lg:h-auto relative">
                  <img
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
              )}
              
              <div className={`${currentSlideData.image ? 'lg:w-1/2' : 'w-full'} p-4 lg:p-8 bg-white flex flex-col overflow-y-auto`}>
                <div className="flex-1">
                  <div className="mb-6 flex items-center space-x-3">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "w-8 bg-primary" : "w-2 bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h2 className="text-2xl text-primary font-bold mb-4">{currentSlideData.title}</h2>
                    <div className="text-gray-600 leading-relaxed">
                      {currentSlideData.description}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="flex items-center"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  
                  {currentSlide === slides.length - 1 ? (
                    <Button onClick={handleClose}>
                      Get Started
                    </Button>
                  ) : (
                    <Button onClick={nextSlide}  className="flex items-center">
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}