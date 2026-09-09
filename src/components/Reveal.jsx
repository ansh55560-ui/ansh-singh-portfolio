import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, slideInLeft, slideInRight, scaleIn } from '../utils/motion';

const variantsMap = {
  fadeUp,
  fadeIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
  scale: scaleIn
};

export const Reveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  threshold = 0.15,
  once = true,
  ...props
}) => {
  const selectedVariant = variantsMap[variant] || fadeUp;

  const customVariant = {
    ...selectedVariant,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...selectedVariant.visible.transition,
        delay,
        duration
      }
    }
  };

  return (
    <motion.div
      variants={customVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
