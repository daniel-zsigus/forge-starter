import { ResolverTypeDefs } from "@/shared/types";
import { makeResolver } from "@forge/resolver";

export const handler = makeResolver<ResolverTypeDefs>({
  async getText() {
    return "Hello world from the backend!";
  },
});
