/// <reference types="react" />
import * as React from 'react';
/**
 * Get a styled version of a given component.
 *
 * @param comp A react component, or a string representing a dom element.
 *             Defaults to 'div'.
 * @param style An object of styles, or a function of props which returns such an object.
 */
export default function styled(comp: string, style: any): React.ClassicComponentClass<{}>;
