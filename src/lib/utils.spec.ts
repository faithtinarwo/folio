import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility function", () => {
  it("should merge class names correctly", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("should handle conditional classes", () => {
    expect(cn("px-2", false && "py-1", "text-sm")).toBe("px-2 text-sm");
  });

  it("should merge Tailwind classes", () => {
    expect(cn("px-2 px-4")).toBe("px-4");
  });

  it("should handle undefined and null values", () => {
    expect(cn("px-2", undefined, null, "py-1")).toBe("px-2 py-1");
  });

  it("should handle empty input", () => {
    expect(cn()).toBe("");
  });
});
