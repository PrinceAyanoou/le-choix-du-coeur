import type { NextConfig } from "next";

const repositoryBasePath =
  process.env.GITHUB_ACTIONS === "true" ? "/le-choix-du-coeur" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repositoryBasePath,
  trailingSlash: true,
};

export default nextConfig;
