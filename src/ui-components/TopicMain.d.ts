/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MenuListElementProps } from "./MenuListElement";
import { TopicViewBackgroundProps } from "./TopicViewBackground";
import { RegistBackgroundProps } from "./RegistBackground";
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
export declare type TopicMainOverridesProps = {
    TopicMain?: PrimitiveOverrideProps<ViewProps>;
    MenuListElement?: MenuListElementProps;
    TopicViewBackground?: TopicViewBackgroundProps;
    RegistBackground?: RegistBackgroundProps;
} & EscapeHatchProps;
export declare type TopicMainProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopicMainOverridesProps | undefined | null;
}>;
export default function TopicMain(props: TopicMainProps): React.ReactElement;
