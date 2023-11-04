import { lazy, LazyExoticComponent} from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
import LazyLayout from '../01-lazyload/layout/LazyLayout';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];