/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Top3 from "./Top3";
import { View } from "@aws-amplify/ui-react";
export default function DefaultTopiPhoneSE(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="568px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(102,102,102,1)"
      {...getOverrideProps(overrides, "DefaultTopiPhoneSE")}
      {...rest}
    >
      <Top3
        width="320px"
        height="80px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(51,51,51,1)"
        {...getOverrideProps(overrides, "Top3")}
      ></Top3>
    </View>
  );
}
