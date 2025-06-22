/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ListTitleOverridesProps = {
    ListTitle?: PrimitiveOverrideProps<ViewProps>;
    BorderRight?: PrimitiveOverrideProps<ViewProps>;
    BorderLeft?: PrimitiveOverrideProps<ViewProps>;
    BorderTop?: PrimitiveOverrideProps<ViewProps>;
    BorderBottom?: PrimitiveOverrideProps<ViewProps>;
    Base?: PrimitiveOverrideProps<ViewProps>;
    "\u66F8\u7C4D\u8CB8\u51FA\u30B7\u30B9\u30C6\u30E0"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ListTitleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ListTitleOverridesProps | undefined | null;
}>;
export default function ListTitle(props: ListTitleProps): React.ReactElement;
