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
export declare type Top2OverridesProps = {
    Top2?: PrimitiveOverrideProps<ViewProps>;
    "menu-black-18dp"?: PrimitiveOverrideProps<ViewProps>;
    Vector10318?: PrimitiveOverrideProps<IconProps>;
    Vector10319?: PrimitiveOverrideProps<IconProps>;
    "\u66F8\u7C4D\u8CB8\u51FA\u30B7\u30B9\u30C6\u30E0"?: PrimitiveOverrideProps<TextProps>;
    Vector10321?: PrimitiveOverrideProps<IconProps>;
    SearchBar?: PrimitiveOverrideProps<ViewProps>;
    "\u691C\u7D22"?: PrimitiveOverrideProps<TextProps>;
    "search-28px 2"?: PrimitiveOverrideProps<ViewProps>;
    Vector103171?: PrimitiveOverrideProps<IconProps>;
    Vector103172?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Top2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Top2OverridesProps | undefined | null;
}>;
export default function Top2(props: Top2Props): React.ReactElement;
