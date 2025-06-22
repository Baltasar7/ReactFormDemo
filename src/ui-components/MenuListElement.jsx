/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function MenuListElement(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1160px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(153,153,153,1)"
      {...getOverrideProps(overrides, "MenuListElement")}
      {...rest}
    >
      <Text
        fontFamily="Gothic A1"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="17.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="156px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 11.5px - -2.5px)"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="貸出状況"
        {...getOverrideProps(overrides, "\u8CB8\u51FA\u72B6\u6CC1")}
      ></Text>
    </View>
  );
}
