import { createRequire } from "module";
import { pathsToModuleNameMapper } from "ts-jest";

const require = createRequire(import.meta.url);
const { compilerOptions } = require("./tsconfig.json");

export default {
  preset: "ts-jest/presets/default-esm", // Use ESM preset
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"], // Treat .ts files as ESM
  transform: {
    "^.+\\.ts$": ["ts-jest", { useESM: true }], // Transform TypeScript files
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Fix imports for ESM
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }), // Handle path aliases
  },
};
