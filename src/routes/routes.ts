import { lazy, LazyExoticComponent } from "react";
/* import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"; */

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazi1 = lazy(()=> import(/* webpackChunkName: "LaziPage1" */'../01-lazyload/pages/LazyPage1'))
const Lazi2 = lazy(()=> import(/* webpackChunkName: "LaziPage2" */'../01-lazyload/pages/LazyPage2'))
const Lazi3 = lazy(()=> import(/* webpackChunkName: "LaziPage3" */'../01-lazyload/pages/LazyPage3'))


export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazi1,
        name: 'Lazy 1'

    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazi2,
        name: 'Lazy 2'

    }, {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazi3,
        name: 'Lazy 3'
    }
]