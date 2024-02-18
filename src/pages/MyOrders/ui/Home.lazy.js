import { lazy } from "react";

export const HomeLazy = lazy(
    () => new Promise((res) => setTimeout(() => res(import("./Home")), 1500))
);
