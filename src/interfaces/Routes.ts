import * as React from "react";

export interface IRoute {
    title: string,
    path: string,
    element?: React.ReactNode,
    isNavigation?: boolean
}