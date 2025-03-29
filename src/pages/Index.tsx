import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SignInButton } from "@/components/home/SignInButton";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />
      <SignInButton />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
