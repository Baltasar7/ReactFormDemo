/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Top3Props } from "./Top3";
import { TopicProps } from "./Topic";
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
export declare type FrontPageiPhoneSEOverridesProps = {
    FrontPageiPhoneSE?: PrimitiveOverrideProps<ViewProps>;
    Top3?: Top3Props;
    Topic?: TopicProps;
} & EscapeHatchProps;
export declare type FrontPageiPhoneSEProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FrontPageiPhoneSEOverridesProps | undefined | null;
}>;
export default function FrontPageiPhoneSE(props: FrontPageiPhoneSEProps): React.ReactElement;
