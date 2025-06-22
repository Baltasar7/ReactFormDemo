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
export declare type ListTuneBarOverridesProps = {
    ListTuneBar?: PrimitiveOverrideProps<ViewProps>;
    "filter_list-black-28dp"?: PrimitiveOverrideProps<ViewProps>;
    Vector11022?: PrimitiveOverrideProps<IconProps>;
    Vector11023?: PrimitiveOverrideProps<IconProps>;
    "sort-black-28dp"?: PrimitiveOverrideProps<ViewProps>;
    Vector11025?: PrimitiveOverrideProps<IconProps>;
    Vector11026?: PrimitiveOverrideProps<IconProps>;
    "\u5C0F\u5206\u985E"?: PrimitiveOverrideProps<TextProps>;
    ">"?: PrimitiveOverrideProps<TextProps>;
    "\u5927\u5206\u985E"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ListTuneBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ListTuneBarOverridesProps | undefined | null;
}>;
export default function ListTuneBar(props: ListTuneBarProps): React.ReactElement;
