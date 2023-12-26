'use client'
import "./style.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Description({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  // Replace the image with a text description
  const descriptions = [
    "The bustling streets of London at dawn",
    "The serene landscape of the countryside",
    "The vibrant life of the city center",
    "The tranquil shores of a distant beach",
    "The mystical aura of ancient ruins"
  ];

  return (
    <section>
    
      <motion.h2 style={{ y }}>{`Description #00${id}`}</motion.h2>
    </section>
  );
}

export default function Background() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((id) => (
        <Description id={id} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
