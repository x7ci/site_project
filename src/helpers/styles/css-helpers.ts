import { type Token } from '@stitches/react/types/theme';

/** Returns CSS variable.
 *
 *  @returns The CSS variable as string in format `var(--prefix-varname)`.
*/
export const cssVar = (varName: string, prefix?: string) => `var(--${prefix ? `${prefix}-` : ''}${varName})`;

/** Returns CSS variable. If type is `token`, then the properties of `token` will be used.
 *
 *  @remarks This is not a custom React hook.
 *  @returns The CSS variable as string in format `var(--prefix-varname)`.
*/
export const useCssVar = (object: string | Token<any, string, any, ''>, prefix?: string) => {
  if (typeof object === 'string') {
    return cssVar(object, prefix);
  }

  return cssVar(object.token, object.scale);
};

/** Returns CSS variable. If type is `token`, then the properties of `token` will be used.
 *
 *  @returns The CSS variable definition as string in format `--prefix-varname: value`.
*/
export const defineCssVar = (object: string | Token<any, string, any, ''>, value?: string, prefix?: string) => {
  if (typeof object === 'string') {
    return `--${prefix ? `${prefix}-` : ''}${object}: ${value}`;
  }

  return `--${object.scale ? `${object.scale}-` : ''}${object.token}: ${object.value}`;
};
