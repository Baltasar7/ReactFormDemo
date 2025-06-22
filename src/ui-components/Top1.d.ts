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
export declare type Top1OverridesProps = {
    Top1?: PrimitiveOverrideProps<ViewProps>;
    "menu-black-18dp"?: PrimitiveOverrideProps<ViewProps>;
    Vector2837?: PrimitiveOverrideProps<IconProps>;
    Vector2838?: PrimitiveOverrideProps<IconProps>;
    "search-24px 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector10379?: PrimitiveOverrideProps<IconProps>;
    Vector10380?: PrimitiveOverrideProps<IconProps>;
    "\u66F8\u7C4D\u8CB8\u51FA\u30B7\u30B9\u30C6\u30E0"?: PrimitiveOverrideProps<TextProps>;
    Vector2865?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Top1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Top1OverridesProps | undefined | null;
}>;
export default function Top1(props: Top1Props): React.ReactElement;
