/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MenuListElementProps } from "./MenuListElement";
import { RegistBackgroundProps } from "./RegistBackground";
import { StatusViewBackgroundProps } from "./StatusViewBackground";
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
export declare type LendingStatusMainOverridesProps = {
    LendingStatusMain?: PrimitiveOverrideProps<ViewProps>;
    MenuListElement?: MenuListElementProps;
    RegistBackground214226?: RegistBackgroundProps;
    RegistBackground214539?: RegistBackgroundProps;
    StatusViewBackground?: StatusViewBackgroundProps;
} & EscapeHatchProps;
export declare type LendingStatusMainProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LendingStatusMainOverridesProps | undefined | null;
}>;
export default function LendingStatusMain(props: LendingStatusMainProps): React.ReactElement;
