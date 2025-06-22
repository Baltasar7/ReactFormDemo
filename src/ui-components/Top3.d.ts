/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Top3OverridesProps = {
    "3"?: PrimitiveOverrideProps<TextProps>;
    Top3?: PrimitiveOverrideProps<ViewProps>;
    "menu-black-18dp"?: PrimitiveOverrideProps<ViewProps>;
    Vector10483?: PrimitiveOverrideProps<IconProps>;
    Vector10484?: PrimitiveOverrideProps<IconProps>;
    "\u66F8\u7C4D\u8CB8\u51FA\u30B7\u30B9\u30C6\u30E0"?: PrimitiveOverrideProps<TextProps>;
    Vector10486?: PrimitiveOverrideProps<IconProps>;
    SearchBar?: PrimitiveOverrideProps<ViewProps>;
    "\u691C\u7D22"?: PrimitiveOverrideProps<TextProps>;
    "search-28px 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector10490?: PrimitiveOverrideProps<IconProps>;
    Vector10491?: PrimitiveOverrideProps<IconProps>;
    "shopping_cart-24px 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector10496?: PrimitiveOverrideProps<IconProps>;
    Vector10497?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Top3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Top3OverridesProps | undefined | null;
}>;
export default function Top3(props: Top3Props): React.ReactElement;
