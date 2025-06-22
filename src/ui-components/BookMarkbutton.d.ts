/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type BookMarkbuttonOverridesProps = {
    BookMarkbutton?: PrimitiveOverrideProps<ViewProps>;
    ButtonFrame20?: PrimitiveOverrideProps<ViewProps>;
    BookmarkFrame?: PrimitiveOverrideProps<ViewProps>;
    "star_border-24px 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector112125?: PrimitiveOverrideProps<IconProps>;
    Vector112126?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type BookMarkbuttonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BookMarkbuttonOverridesProps | undefined | null;
}>;
export default function BookMarkbutton(props: BookMarkbuttonProps): React.ReactElement;
