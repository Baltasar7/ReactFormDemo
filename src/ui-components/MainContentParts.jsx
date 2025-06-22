/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function MainContentParts(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(102,102,102,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,102,0,1)"
      {...getOverrideProps(overrides, "MainContentParts")}
      {...rest}
    >
      <Text
        fontFamily="Gothic A1"
        fontSize="14px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="17.5px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="40px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="27.5%"
        bottom="27.5%"
        right="10px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="256"
        {...getOverrideProps(overrides, "\u6570\u5024")}
      ></Text>
      <Text
        fontFamily="Gothic A1"
        fontSize="14px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="17.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="160px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="27.5%"
        bottom="27.5%"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="利用者情報編集"
        {...getOverrideProps(overrides, "\u9805\u76EE")}
      ></Text>
    </View>
  );
}
