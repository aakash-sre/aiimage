"use client";
import React, { useEffect,  useRef,  useState } from "react";
import { AnimatePresence, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform ,motion,  } from "motion/react";
// import { useRef } from "react";
import {cn} from "../lib/utils.ts"





export const LayoutTextFlip = ({
  text= "Build Amazing",
  words = ["Landing pages" , 'Components Bloacks', " page Section", " 3D Shaders"],
   duration = 3000,

} : {
  text :string;
  words:string[];
  duration?: number;
}) =>{
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect (()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((prevIndex)=> (prevIndex + 1 ) % words.length);
    }, duration);

    return () => clearInterval ( interval);
  },[]);

  return(
    <>
    <motion.span
    layoutId = "subtext"
    className=" text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl">
      {text}
    </motion.span>

    <motion.span
    layout
    className="relative w-fit overflow-hidden rounded-md border border-transparent bg-black px-6 py-1 font-sans text-2xl font-semibold tracking-tight text-white shadow-sm ring shadow-black/10 ring-blue/10 drop-shadow-lg md:text-4xl dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10 ">
      <AnimatePresence mode="popLayout" >
        <motion.span key={currentIndex} initial={{ y:-40 , filter: "blur(1px)"}} animate= {{y:0,filter:"blur(px)",}}
        exit={{y:50, filter:"blur(0.5px)", opacity:0 }}
        transition={{duration:0.5}} className={cn ("inline-block whitespace-nowrap")} >
          {words[currentIndex]}

        </motion.span>

      </AnimatePresence>

    </motion.span>
    </>
  );
};

 
export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-[5px] text-2xl",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#00ffff_40%,transparent_80%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>
 
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
 
export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>(null);
  const progress = useMotionValue<number>(0);
 
  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });
 
  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );
 
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
 
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export const BackgroundGradient = ({
  children, className,containerClassName,animate = true,
   }:{
    children ?: React.ReactNode;
    className?: string;
    animate?:boolean;
    containerClassName?:string;
  }) => {
    const variants = {
      initial:{
        backgroundPosition:"0 50%",},
        animate:{
          backgroundPosition:["0,50%","100% 50%"  , "0 50%"],
        },
    };

  

  return (

    <div className={cn("relative p-[4px] group",containerClassName)}>
      < motion.div
      variants={animate ? variants:undefined}
      initial={animate ? 'initial':undefined}
      animate={animate ? "animate":undefined}
      transition={
        animate ? {
          duration:5,
          repeat:Infinity,repeatType:"reverse", } :undefined }
          style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-2xl z-[1] opacity-60 group-hover:opacity-100 blur will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_100%_100%,#000000,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#141316,#800080),radial-gradient(circle_farthest-side_at_100%_100%,#28a745,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#4169e1,#f5f5dc)]"
        )}
      />
      <div className={cn("relative z-10 " , className)}>
        {children}

      </div>

    </div>
  )
}
