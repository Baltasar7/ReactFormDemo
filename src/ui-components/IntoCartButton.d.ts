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
export declare type IntoCartButtonOverridesProps = {
    IntoCartButton?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
    "\u501F\u308A\u308B"?: PrimitiveOverrideProps<TextProps>;
    "shopping_cart-16px"?: PrimitiveOverrideProps<ViewProps>;
    Vector128308?: PrimitiveOverrideProps<IconProps>;
    Vector128309?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type IntoCartButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IntoCartButtonOverridesProps | undefined | null;
}>;
export default function IntoCartButton(props: IntoCartButtonProps): React.ReactElement;
