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
export declare type TopicRowOverridesProps = {
    TopicRow?: PrimitiveOverrideProps<ViewProps>;
    "\u300CJUnit\u5B9F\u8DF5\u5165\u9580\u3000\u4F53\u7CFB\u7684\u306B\u5B66\u3076\u30E6\u30CB\u30C3\u30C8\u30C6\u30B9\u30C8\u306E\u6280\u6CD5\u300D\u306E\u8FD4\u5374\u671F\u9650\u304C\u904E\u304E\u3066\u3044\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    Important?: PrimitiveOverrideProps<TextProps>;
    Private?: PrimitiveOverrideProps<TextProps>;
    "3\u6642\u9593\u524D"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TopicRowProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopicRowOverridesProps | undefined | null;
}>;
export default function TopicRow(props: TopicRowProps): React.ReactElement;
