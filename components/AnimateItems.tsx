"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  className?: string;
  items?: ReactNode;
  scale?: number;
}

export const AnimateItems = ({ className, items, scale = 1.1 }: Props) => {
  return (
    <motion.div className={className} whileHover={{ scale: scale }}>
      {items}
    </motion.div>
  );
};
