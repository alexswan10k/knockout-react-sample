

interface patch {
    (old: Element, newElem: Element): void;
}

type obj = {
    init(modules: any[]): patch;
}

declare module "snabbdom"{
    export = obj;
}

declare module "snabbdom/modules/class" { export = {} }
declare module "snabbdom/modules/props" { export = {} }
declare module "snabbdom/modules/style" { export = {} }
declare module "snabbdom/modules/eventlisteners" { export = {} }
declare module "snabbdom/modules/attributes" { export = {} }

declare function h
    (sel: string, ob: any, repl?: string) : void;

declare module "snabbdom/h" {
    export = h;
}