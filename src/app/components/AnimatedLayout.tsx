"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedLayoutProps {
  children: React.ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen ">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.75 }}
          className="absolute inset-0 w-full z-50"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
