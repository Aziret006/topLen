declare module "@fancyapps/ui" {
  export const Fancybox: {
    bind: (selector: string, options: any) => void;
    destroy: () => void;
  };
}

declare module "@fancyapps/ui/dist/fancybox/fancybox.css"; 