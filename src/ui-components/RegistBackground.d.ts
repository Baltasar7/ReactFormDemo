/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { UpdateButtonProps } from "./UpdateButton";
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
export declare type RegistBackgroundOverridesProps = {
    RegistBackground?: PrimitiveOverrideProps<ViewProps>;
    ResourceViewBar?: PrimitiveOverrideProps<ViewProps>;
    "\u30EA\u30BD\u30FC\u30B9"?: PrimitiveOverrideProps<TextProps>;
    UpdateButton?: UpdateButtonProps;
    "\u65B0\u305F\u306B\u4F5C\u6210\u30FB\u4E0B\u66F8\u304D\u4FDD\u5B58\u3057\u305FTopic\u3092\u914D\u4FE1\u3057\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    "Topic\u306E\u914D\u4FE1\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u5909\u66F4\u3057\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    "\u767B\u9332\u6E08\u307F\u306E\u5229\u7528\u8005\u60C5\u5831\u3092\u7DE8\u96C6\u3057\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    MainContentParts216118?: PrimitiveOverrideProps<ViewProps>;
    "\u9805\u76EE216119"?: PrimitiveOverrideProps<TextProps>;
    MainContentParts216265?: PrimitiveOverrideProps<ViewProps>;
    "\u9805\u76EE216266"?: PrimitiveOverrideProps<TextProps>;
    MainContentParts216120?: MainContentPartsProps;
} & EscapeHatchProps;
export declare type RegistBackgroundProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RegistBackgroundOverridesProps | undefined | null;
}>;
export default function RegistBackground(props: RegistBackgroundProps): React.ReactElement;
