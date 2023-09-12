import { useSpring, animated } from "react-spring";

type TiltContainerProps = {
   children: React.ReactNode;
   className?: string;
   mass?: number;
   tension?: number;
   friction?: number;
   scale?: number;
   timeX?: number;
   timeY?: number;
};

const TiltContainer = ({
   children,
   className,
   mass,
   tension,
   friction,
   scale,
   timeX,
   timeY,
}: TiltContainerProps) => {
   const [props, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: {
         mass: mass ? mass : 4,
         tension: tension ? tension : 450,
         friction: friction ? friction : 40,
      },
   }));

   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (x - centerX) / centerX;
      const tiltY = (y - centerY) / centerY;
      set({ xys: [tiltX, tiltY, scale ? scale : 1] });
   };

   const handleMouseLeave = () => {
      set({ xys: [0, 0, 1] });
   };

   const timeYMultiplicator = timeY ? timeY : 10;
   const timeXMultiplicator = timeX ? timeX : 10;

   return (
      <animated.div
         className={className}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{
            transform: props.xys.to(
               (x, y, s) =>
                  `perspective(600px) rotateX(${
                     y * timeYMultiplicator
                  }deg) rotateY(${x * timeXMultiplicator}deg) scale(${s})`
            ),
         }}
      >
         {children}
      </animated.div>
   );
};

export default TiltContainer;
