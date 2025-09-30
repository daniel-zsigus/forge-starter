import { makeResolver } from "@forge/resolver";
import { ResolverTypeDefs } from "../shared/types";

export const handler = makeResolver<ResolverTypeDefs>({
  async getText() {
    return "Hello world from the backend!";
  },
});
