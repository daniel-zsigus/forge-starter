import { backendService } from "@/backend/BackendService";

test("test backend service getData return value", () => {
  expect(backendService.getData()).toBe("Hello from backend!");
});
