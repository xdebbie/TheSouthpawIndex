interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.module.css' {
  const cssModule: CSSModule
  export = cssModule
}
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.jpg" {
  const content: any;
  export default content;
}
declare module "*.png" {
  const content: any;
  export default content;
}