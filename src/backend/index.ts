import { backendService } from "@/backend/BackendService";
import { ResolverTypeDefs } from "@/shared/types";
import { makeResolver } from "@forge/resolver";

export const handler = makeResolver<ResolverTypeDefs>({
  async getText() {
    return backendService.getData();
  },
});
