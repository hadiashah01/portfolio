declare module "framer-motion" {
  export function useMotionValue<T>(initialValue: T): {
    get: () => T;
    set: (value: T) => void;
  };
  export function useSpring<T>(
    source: { get: () => T; set: (v: T) => void },
    config?: { stiffness?: number; damping?: number },
  ): {
    get: () => T;
  };
}