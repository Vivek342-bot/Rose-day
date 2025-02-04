import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function RoseDay() {
  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md"
      >
        <motion.img
          src="https://source.unsplash.com/400x300/?rose"
          alt="Rose"
          className="rounded-xl mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <h1 className="text-3xl font-bold text-red-500">Happy Rose Day!</h1>
        <p className="text-gray-600 my-4">
          "A rose does not answer, it only spreads its fragrance. Wishing you a
          fragrant and love-filled Rose Day!"
        </p>
        <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
          Send a Rose 🌹
        </Button>
      </motion.div>
    </div>
  );
}
