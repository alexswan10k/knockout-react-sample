//This is a composition/mixin system for typescript. 
//https://gist.github.com/tejacques/54997ef2d6f672314d53
//See https://www.reddit.com/r/typescript/comments/3y2x2i/typescript_react_mixin_or_alternative_solution/

import * as React from 'react';
import { Component } from 'react';
import HOCBaseRender from './HOCBaseRender';

// export default function HOCMounted<Props, ComponentState>(
//     Comp: new() => Component<Props, ComponentState>, onMount: () => void, onUnmount: () => void) {
//     return class HOCWrapper extends HOCBaseRender<Props, void, ComponentState>(Comp) {
//         // ... Implementation
//         componentWillMount() {
//             onMount.call(this);
//         }
//         componentWillUnmount() {
//             onUnmount.call(this);
//         }
//     }
// }