/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MainContentPartsProps } from "./MainContentParts";
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
export declare type RegistBackgroundbakOverridesProps = {
    RegistBackgroundbak?: PrimitiveOverrideProps<ViewProps>;
    ResourceViewBar?: PrimitiveOverrideProps<ViewProps>;
    "\u30EA\u30BD\u30FC\u30B9"?: PrimitiveOverrideProps<TextProps>;
    "\u65B0\u305F\u306A\u5229\u7528\u8005\u3092\u767B\u9332\u3057\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    "\u767B\u9332\u6E08\u307F\u306E\u5229\u7528\u8005\u60C5\u5831\u3092\u7DE8\u96C6\u3057\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    MainContentParts214533?: PrimitiveOverrideProps<ViewProps>;
    "\u9805\u76EE"?: PrimitiveOverrideProps<TextProps>;
    MainContentParts214535?: MainContentPartsProps;
} & EscapeHatchProps;
export declare type RegistBackgroundbakProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RegistBackgroundbakOverridesProps | undefined | null;
}>;
export default function RegistBackgroundbak(props: RegistBackgroundbakProps): React.ReactElement;
