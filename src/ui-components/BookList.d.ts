/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { BookMarkUndobuttonProps } from "./BookMarkUndobutton";
import { BookElementProps } from "./BookElement";
import { DeleteButtonProps } from "./DeleteButton";
import { BookMarkbuttonProps } from "./BookMarkbutton";
import { ListTuneBarProps } from "./ListTuneBar";
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
export declare type BookListOverridesProps = {
    BookList?: PrimitiveOverrideProps<ViewProps>;
    BookElement3?: PrimitiveOverrideProps<ViewProps>;
    DeleteButton1281744?: PrimitiveOverrideProps<ViewProps>;
    ButtonFrame20?: PrimitiveOverrideProps<ViewProps>;
    "delete-18px"?: PrimitiveOverrideProps<ViewProps>;
    Vector1281747?: PrimitiveOverrideProps<IconProps>;
    Vector1281748?: PrimitiveOverrideProps<IconProps>;
    BookMarkUndobutton?: BookMarkUndobuttonProps;
    IntoCartButton1281770?: PrimitiveOverrideProps<ViewProps>;
    Button1281771?: PrimitiveOverrideProps<ViewProps>;
    "\u501F\u308A\u308B1281772"?: PrimitiveOverrideProps<TextProps>;
    "shopping_cart-16px1281773"?: PrimitiveOverrideProps<ViewProps>;
    Vector1281774?: PrimitiveOverrideProps<IconProps>;
    Vector1281775?: PrimitiveOverrideProps<IconProps>;
    Image1281650?: PrimitiveOverrideProps<ViewProps>;
    Status1281651?: PrimitiveOverrideProps<TextProps>;
    Author1281652?: PrimitiveOverrideProps<TextProps>;
    BookTitle1281653?: PrimitiveOverrideProps<TextProps>;
    "NO IMAGE132950"?: PrimitiveOverrideProps<TextProps>;
    BookElement2?: BookElementProps;
    BookElement1?: PrimitiveOverrideProps<ViewProps>;
    DeleteButton1281512?: DeleteButtonProps;
    BookMarkbutton?: BookMarkbuttonProps;
    IntoCartButton1281609?: PrimitiveOverrideProps<ViewProps>;
    Button1281610?: PrimitiveOverrideProps<ViewProps>;
    "\u501F\u308A\u308B1281611"?: PrimitiveOverrideProps<TextProps>;
    "shopping_cart-16px1281612"?: PrimitiveOverrideProps<ViewProps>;
    Vector1281613?: PrimitiveOverrideProps<IconProps>;
    Vector1281614?: PrimitiveOverrideProps<IconProps>;
    Image1281515?: PrimitiveOverrideProps<ViewProps>;
    Status1281516?: PrimitiveOverrideProps<TextProps>;
    Author1281517?: PrimitiveOverrideProps<TextProps>;
    BookTitle1281518?: PrimitiveOverrideProps<TextProps>;
    "NO IMAGE132422"?: PrimitiveOverrideProps<TextProps>;
    ListTuneBar?: ListTuneBarProps;
} & EscapeHatchProps;
export declare type BookListProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BookListOverridesProps | undefined | null;
}>;
export default function BookList(props: BookListProps): React.ReactElement;
