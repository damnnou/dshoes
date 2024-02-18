import { lazy } from "react";

export const InformationLazy = lazy(
    () =>
        new Promise((res) =>
            setTimeout(() => res(import("./Information")), 1500)
        )
);
