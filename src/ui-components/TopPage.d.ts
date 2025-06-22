/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TopMenuProps } from "./TopMenu";
import { LeftMenuProps } from "./LeftMenu";
import { DefaultMainProps } from "./DefaultMain";
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
export declare type TopPageOverridesProps = {
    TopPage?: PrimitiveOverrideProps<ViewProps>;
    TopMenu?: TopMenuProps;
    LeftMenu?: LeftMenuProps;
    DefaultMain?: DefaultMainProps;
} & EscapeHatchProps;
export declare type TopPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TopPageOverridesProps | undefined | null;
}>;
export default function TopPage(props: TopPageProps): React.ReactElement;
