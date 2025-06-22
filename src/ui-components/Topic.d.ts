/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TopicElementProps } from "./TopicElement";
import { TopicBarProps } from "./TopicBar";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type TopicOverridesProps = {
    Topic?: PrimitiveOverrideProps<ViewProps>;
    TopicElement2?: TopicElementProps;
    TopicElement1?: TopicElementProps;
    TopicBar?: TopicBarProps;
} & EscapeHatchProps;
export declare type TopicProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopicOverridesProps | undefined | null;
}>;
export default function Topic(props: TopicProps): React.ReactElement;
