import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disabled: `reactCompiler` requires `babel-plugin-react-compiler` to be installed.
  // Enable only if you have the plugin installed and compatible with your Next version.
  reactCompiler: false,
};

export default nextConfig;
