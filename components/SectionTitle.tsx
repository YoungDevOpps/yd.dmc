import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fontTitle } from "@/lib/fonts";

type SectionTitleProps = {
  title: string;
  highlight?: string;
  variant?: "center" | "left" | "right";
  animated?: boolean;
  className?: string;
  fontClass?: string;
  desc?: string;
  children?: React.ReactNode;
};

export default function SectionTitle({
  title,
  highlight,
  variant = "center",
  animated = true,
  className,
  fontClass,
  desc,
  children,
  ...props
}: SectionTitleProps) {
  const baseClasses = cn(
    `text-3xl md:text-4xl font-bold mb-4 ${fontTitle.className}`,
    {
      "text-center": variant === "center",
      "text-left": variant === "left",
      "text-right": variant === "right",
    },
    fontClass,
    className
  );

  const content = (
    <span>
      {title}{" "}
      {highlight && (
        <span className="text-primary relative group">
          {highlight}
          <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary"></span>
        </span>
      )}
    </span>
  );

  if (animated) {
    return (
      <div className="text-center mb-12">
        <motion.h2
          className={baseClasses}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {content}
        </motion.h2>
        {desc && <p className="text-gray-600">{desc}</p>}
      </div>
    );
  }

  return (
    <div className="text-center mb-12">
      <h2 className={baseClasses} {...props}>
        {content}
      </h2>
      {desc && <p className="text-gray-600">{desc}</p>}
    </div>
  );
}
