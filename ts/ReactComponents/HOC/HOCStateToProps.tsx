import * as React from 'react';
import { Component } from 'react';
import HOCBaseRender from './HOCBaseRender';

export default function HOCStateToProps<Props, State, ComponentState>(
    Comp: new() => Component<Props & State, ComponentState>, getState: () => State) {
    return class HOCWrapper extends HOCBaseRender<Props, State, ComponentState>(Comp) {
        // ... Implementation
        constructor() {
            super();
            this.state = getState();
        }
    }
}