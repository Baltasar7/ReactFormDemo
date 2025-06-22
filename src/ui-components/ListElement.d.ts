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
export declare type ListElementOverridesProps = {
    ListElement?: PrimitiveOverrideProps<ViewProps>;
    BorderRight?: PrimitiveOverrideProps<ViewProps>;
    BorderLeft?: PrimitiveOverrideProps<ViewProps>;
    BorderTop?: PrimitiveOverrideProps<ViewProps>;
    BorderBottom?: PrimitiveOverrideProps<ViewProps>;
    Base?: PrimitiveOverrideProps<ViewProps>;
    "\u7533\u8ACB\u72B6\u6CC1"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ListElementProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ListElementOverridesProps | undefined | null;
}>;
export default function ListElement(props: ListElementProps): React.ReactElement;
