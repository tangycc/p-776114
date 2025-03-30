
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CommunityCollaboration = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow px-[88px] py-12 max-md:px-10 max-sm:px-5">
        <h1 className="text-4xl font-bold text-[#426B1F] mb-6">
          Community Collaboration
        </h1>
        <p className="text-lg mb-8">
          Connect with fellow farmers, share knowledge, and collaborate on
          sustainable farming practices.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Collaboration card examples */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Local Seed Exchange</h3>
            <p>Connect with nearby farmers to exchange heritage and organic seeds.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Equipment Sharing</h3>
            <p>Reduce costs by coordinating equipment sharing with community members.</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Knowledge Forum</h3>
            <p>Ask questions and share your farming expertise with the community.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityCollaboration;
