const breakpoints = [320, 375, 768, 1024];

const [smallMobile, mobile, tablet, desktop] = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);

const media = {
  smallMobile,
  mobile,
  tablet,
  desktop,
};

export default media;
