import React from "react";

export default function loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-20 h-20 border-4 border-primary-primary rounded-full animate-spin"></div>
    </div>
  );
}
