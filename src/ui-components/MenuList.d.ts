/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ListTitleProps } from "./ListTitle";
import { ListElementProps } from "./ListElement";
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
export declare type MenuListOverridesProps = {
    MenuList?: PrimitiveOverrideProps<ViewProps>;
    ListTitle?: ListTitleProps;
    ListElement10684?: ListElementProps;
    ListElement106167?: ListElementProps;
    ListElement106217?: ListElementProps;
    ListElement106311?: ListElementProps;
    ListElement106514?: ListElementProps;
} & EscapeHatchProps;
export declare type MenuListProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MenuListOverridesProps | undefined | null;
}>;
export default function MenuList(props: MenuListProps): React.ReactElement;
