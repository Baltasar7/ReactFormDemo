/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MainContentPartsProps } from "./MainContentParts";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ResourceViewBarProps } from "./ResourceViewBar";
import { ConfigButtonProps } from "./ConfigButton";
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
export declare type StatusViewBackgroundOverridesProps = {
    StatusViewBackground?: PrimitiveOverrideProps<ViewProps>;
    MainContentParts214591?: MainContentPartsProps;
    MainContentParts213354?: MainContentPartsProps;
    MainContentParts214735?: MainContentPartsProps;
    MainContentParts2153?: MainContentPartsProps;
    MainContentParts2152?: MainContentPartsProps;
    MainContentParts2151?: MainContentPartsProps;
    "\u73FE\u5728\u306E\u8CB8\u51FA\u72B6\u6CC1\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    ResourceViewBar?: ResourceViewBarProps;
    ConfigButton?: ConfigButtonProps;
} & EscapeHatchProps;
export declare type StatusViewBackgroundProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StatusViewBackgroundOverridesProps | undefined | null;
}>;
export default function StatusViewBackground(props: StatusViewBackgroundProps): React.ReactElement;
