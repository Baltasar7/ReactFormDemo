/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MenuListElementProps } from "./MenuListElement";
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
export declare type LeftMenuOverridesProps = {
    LeftMenu?: PrimitiveOverrideProps<ViewProps>;
    MenuListElement17212?: MenuListElementProps;
    MenuListElement17227?: MenuListElementProps;
    MenuListElement214962?: MenuListElementProps;
} & EscapeHatchProps;
export declare type LeftMenuProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LeftMenuOverridesProps | undefined | null;
}>;
export default function LeftMenu(props: LeftMenuProps): React.ReactElement;
