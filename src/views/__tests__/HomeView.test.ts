import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("Test the home view", () => {
  it("should render the home view", async () => {
    const HomeView = await import("../HomeView.vue");
    const wrapper = mount(HomeView.default, {
      global: {
        stubs: ["router-link", "Splide"],
      },
    });
    expect(wrapper.html()).toContain("Welcome");
  });
});
