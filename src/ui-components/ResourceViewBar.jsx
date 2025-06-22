/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import UpdateButton from "./UpdateButton";
export default function ResourceViewBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="800px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(102,102,102,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(238,238,238,1)"
      {...getOverrideProps(overrides, "ResourceViewBar")}
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
        width="100px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 9px - 0px)"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ステータス"
        {...getOverrideProps(overrides, "\u30EA\u30BD\u30FC\u30B9")}
      ></Text>
      <UpdateButton
        width="40px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 12px - 0px)"
        right="16px"
        border="1px SOLID rgba(51,51,51,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "UpdateButton")}
      ></UpdateButton>
    </View>
  );
}
