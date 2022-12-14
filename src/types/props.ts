//   ___
//  | _ \_ _ ___ _ __ ___
//  |  _/ '_/ _ \ '_ (_-<
//  |_| |_| \___/ .__/__/
//              |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the types for all of the components in the library.
 * @module
 */

import { iExtendedElement } from './element.ts';
import { Ref } from 'preact';
import {
  ButtonColors,
  ButtonTypes,
  LayoutMargins,
  LayoutTypes,
  PageTheme,
  TextTypes,
} from './unionStrings.ts';

/**
 * Input component's type that extends the `<input>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
 */
export type iInput = iExtendedElement<HTMLInputElement> & {
  refInput?: Ref<HTMLInputElement>;
  label?: string;
  error?: string;
  maxWidth: boolean;
};

/**
 * Textarea component's type that extends the `<textarea>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).
 */
export type iTextArea = iExtendedElement<HTMLTextAreaElement> & {
  refTextArea?: Ref<HTMLTextAreaElement>;
  label?: string;
  error?: string;
  maxWidth: boolean;
};

/**
 * Select component's type that extends the `<select>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).
 */
export type iSelect = iExtendedElement<HTMLSelectElement> & {
  label?: string;
  error?: string;
  placeholder: string;
  maxWidth: boolean;
  options:
    | {
        value: string;
        name: string;
      }[]
    | string[]
    | [];
};

/**
 * Button component's type that extends the `<button>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button).
 */
export type iButton = iExtendedElement<HTMLButtonElement> & {
  type: ButtonTypes;
  color: ButtonColors;
  outline: boolean;
  maxWidth: boolean;
};

/**
 * Layout component's type that extends the `<div>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
 */
export type iLayout = iExtendedElement<HTMLDivElement> & {
  type: LayoutTypes;
  margin: LayoutMargins;
};

/**
 * Navigation component's type that extends the generic `HTMLElement` [Read more](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).
 */
export type iNavigation = iExtendedElement & {
  fixed: boolean;
};

/**
 * Page component's type that extends the `<div>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
 */
export type iPage = iExtendedElement<HTMLDivElement> & {
  theme?: PageTheme;
  darkMode?: boolean;
};

/**
 * Text component's type that extends the `<span>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).
 */
export type iText = iExtendedElement<HTMLSpanElement> & {
  type: TextTypes;
  inheritColor: boolean;
  isCompressed: boolean;
  isLabel: boolean;
  noMargins: boolean;
  indent: boolean;
};

/**
 * Link component's type that extends the `<a>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
 */
export type iLink = iExtendedElement<HTMLAnchorElement> & {
  nostyle: boolean;
};

/**
 * Footer component's type that extends the generic `HTMLElement` [Read more](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).
 */
export type iFooter = iExtendedElement & {
  madeWithFresh: boolean;
};

/**
 * Menu component's type that extends the `<div>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
 */
export type iMenu = iExtendedElement<HTMLDivElement> & {
  isOpen: boolean;
  links: { label: string; href: string }[] | [];
};

/**
 * Card component's type that extends the `<div>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
 */
export type iSeparator = iExtendedElement<HTMLDivElement>;

/**
 * Card component's type that extends the `<div>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
 */
export type iCard = iExtendedElement<HTMLDivElement>;

/**
 * Card component's type that extends the `<div>` element [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div).
 */
export type iCode = iExtendedElement;

/**
 * Main component's type that extends the generic `HTMLElement` [Read more](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).
 */
export type iMain = iExtendedElement;

/**
 * Header component's type that extends the generic `HTMLElement` [Read more](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).
 */
export type iHeader = iExtendedElement;
