import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../utils/motion';

export const Stagger = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className = '',
  threshold = 0.1,
  once = true,
  ...props
}) => {
  return (
    <motion.div
      variants={staggerContainer(staggerDelay, delayChildren)}
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

export const StaggerItem = ({
  children,
  className = '',
  customVariant = fadeUp,
  ...props
}) => {
  return (
    <motion.div
      variants={customVariant}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
