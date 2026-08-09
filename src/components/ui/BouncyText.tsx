// this component adds bouncy text animation using react motion library

import { motion } from "motion/react";

export const BouncyText = ({
  text = "Bouncy Animation",
  style,
}: {
  text?: string;
  style?: string;
}) => {
  return (
    <h2 className={style}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 0 }}
          animate={{
            y: [0, -10, 0],
            transition: {
              delay: i * 0.08,
              duration: 0.4,
              repeat: 0,
              repeatDelay: 2,
              ease: "easeInOut",
            },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};
