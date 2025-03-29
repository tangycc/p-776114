import React from "react";

export function SignInButton() {
  return (
    <div className="flex justify-end pt-5 px-[72px] max-md:px-10 max-sm:px-5">
      <button
        className="text-black text-center text-base font-semibold leading-[20.8px] bg-white px-[17px] py-[9.5px] rounded-[20px] border-[3px] border-[#C2C2C2] hover:bg-gray-50 transition-colors"
        onClick={() => console.log("Sign in clicked")}
      >
        Sign In / New User
      </button>
    </div>
  );
}
