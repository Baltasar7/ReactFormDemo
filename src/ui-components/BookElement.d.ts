/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DeleteButtonProps } from "./DeleteButton";
import { BookMarkbuttonProps } from "./BookMarkbutton";
import { IntoCartButtonProps } from "./IntoCartButton";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { BookPhotoProps } from "./BookPhoto";
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
export declare type BookElementOverridesProps = {
    BookElement?: PrimitiveOverrideProps<ViewProps>;
    DeleteButton?: DeleteButtonProps;
    BookMarkbutton?: BookMarkbuttonProps;
    IntoCartButton?: IntoCartButtonProps;
    Status?: PrimitiveOverrideProps<TextProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    BookTitle?: PrimitiveOverrideProps<TextProps>;
    BookPhoto?: BookPhotoProps;
} & EscapeHatchProps;
export declare type BookElementProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BookElementOverridesProps | undefined | null;
}>;
export default function BookElement(props: BookElementProps): React.ReactElement;
