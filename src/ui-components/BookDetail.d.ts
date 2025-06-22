/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DeleteButtonProps } from "./DeleteButton";
import { BookMarkbuttonProps } from "./BookMarkbutton";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type BookDetailOverridesProps = {
    BookDetail?: PrimitiveOverrideProps<ViewProps>;
    BookElement1?: PrimitiveOverrideProps<ViewProps>;
    DeleteButton?: DeleteButtonProps;
    BookMarkbutton?: BookMarkbuttonProps;
    IntoCartButton?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ViewProps>;
    "\u501F\u308A\u308B"?: PrimitiveOverrideProps<TextProps>;
    "shopping_cart-16px"?: PrimitiveOverrideProps<ViewProps>;
    Vector132153?: PrimitiveOverrideProps<IconProps>;
    Vector132154?: PrimitiveOverrideProps<IconProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    BookTitle?: PrimitiveOverrideProps<TextProps>;
    "NO IMAGE"?: PrimitiveOverrideProps<TextProps>;
    "Line 1"?: PrimitiveOverrideProps<IconProps>;
    "Line 2"?: PrimitiveOverrideProps<IconProps>;
    "\u30BF\u30A4\u30C8\u30EB\uFF1AEffective Java \u7B2C3\u7248"?: PrimitiveOverrideProps<TextProps>;
    "\u8457\u8005\u3000\u3000\uFF1A\u30B8\u30E7\u30B7\u30E5\u30A2\u30FB\u30D6\u30ED\u30C3\u30AF"?: PrimitiveOverrideProps<TextProps>;
    "\u51FA\u7248\u793E\u3000\uFF1A\u4E38\u5584\u51FA\u7248"?: PrimitiveOverrideProps<TextProps>;
    "\u767A\u58F2\u65E5\u3000\uFF1A2018/10/30"?: PrimitiveOverrideProps<TextProps>;
    "\u8A00\u8A9E\u3000\u3000\uFF1A\u65E5\u672C\u8A9E"?: PrimitiveOverrideProps<TextProps>;
    "\u5F62\u5F0F\u3000\u3000\uFF1AB5\u5909"?: PrimitiveOverrideProps<TextProps>;
    "\u30DA\u30FC\u30B8\u6570\uFF1A412"?: PrimitiveOverrideProps<TextProps>;
    "\u5927\u5206\u985E\u3000\uFF1A\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0"?: PrimitiveOverrideProps<TextProps>;
    "\u5C0F\u5206\u985E\u3000\uFF1AJava"?: PrimitiveOverrideProps<TextProps>;
    "\u767B\u9332\u30AD\u30FC\u30EF\u30FC\u30C9\uFF1A \u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0, Java, \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u6307\u5411, \u30C7\u30B6\u30A4\u30F3\u30D1\u30BF\u30FC\u30F3, \u8A73\u7D30\u8A2D\u8A08"?: PrimitiveOverrideProps<TextProps>;
    ListTuneBar?: ListTuneBarProps;
} & EscapeHatchProps;
export declare type BookDetailProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BookDetailOverridesProps | undefined | null;
}>;
export default function BookDetail(props: BookDetailProps): React.ReactElement;
