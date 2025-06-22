/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function ListElement(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ListElement")}
      {...rest}
    >
      <View
        width="1px"
        height="58px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="239px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(108,108,108,1)"
        {...getOverrideProps(overrides, "BorderRight")}
      ></View>
      <View
        width="1px"
        height="58px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(108,108,108,1)"
        {...getOverrideProps(overrides, "BorderLeft")}
      ></View>
      <View
        width="240px"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(108,108,108,1)"
        {...getOverrideProps(overrides, "BorderTop")}
      ></View>
      <View
        width="240px"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="59px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(108,108,108,1)"
        {...getOverrideProps(overrides, "BorderBottom")}
      ></View>
      <View
        width="238px"
        height="58px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="1px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Base")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="26.67%"
        bottom="26.67%"
        left="24px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="申請状況"
        {...getOverrideProps(overrides, "\u7533\u8ACB\u72B6\u6CC1")}
      ></Text>
    </View>
  );
}
