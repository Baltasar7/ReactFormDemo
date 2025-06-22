/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { TopicBarProps } from "./TopicBar";
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
export declare type TopicDetailOverridesProps = {
    TopicDetail?: PrimitiveOverrideProps<ViewProps>;
    TopicElement1?: PrimitiveOverrideProps<ViewProps>;
    Important?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "\u8CB8\u51FA\u65E5\u3000\uFF1A2020/10/01"?: PrimitiveOverrideProps<TextProps>;
    "\u8FD4\u5374\u671F\u9650\uFF1A2020/12/29"?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "\u300CJUnit\u5B9F\u8DF5\u5165\u9580\u3000\u4F53\u7CFB\u7684\u306B\u5B66\u3076\u30E6\u30CB\u30C3\u30C8\u30C6\u30B9\u30C8\u306E\u6280\u6CD5\u300D\u306E\u8FD4\u5374\u671F\u9650\u3092\u904E\u304E\u3066\u3044\u307E\u3059\u3002 \u901F\u3084\u304B\u306B\u8FD4\u5374\u624B\u7D9A\u304D\u3092\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002 \u4E8B\u52D9\u5C40"?: PrimitiveOverrideProps<TextProps>;
    TopicBar?: TopicBarProps;
} & EscapeHatchProps;
export declare type TopicDetailProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopicDetailOverridesProps | undefined | null;
}>;
export default function TopicDetail(props: TopicDetailProps): React.ReactElement;
