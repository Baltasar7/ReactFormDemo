/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ResourceViewBarProps } from "./ResourceViewBar";
import { ConfigButtonProps } from "./ConfigButton";
import { TopicRowProps } from "./TopicRow";
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
export declare type TopicViewBackgroundOverridesProps = {
    TopicViewBackground?: PrimitiveOverrideProps<ViewProps>;
    "\u76F4\u8FD1\u306E\u914D\u4FE1Topic\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    ResourceViewBar?: ResourceViewBarProps;
    ConfigButton?: ConfigButtonProps;
    TopicRow2163?: TopicRowProps;
    TopicRow2168?: TopicRowProps;
} & EscapeHatchProps;
export declare type TopicViewBackgroundProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopicViewBackgroundOverridesProps | undefined | null;
}>;
export default function TopicViewBackground(props: TopicViewBackgroundProps): React.ReactElement;
