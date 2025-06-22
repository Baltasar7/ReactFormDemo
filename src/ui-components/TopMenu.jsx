/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function TopMenu(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="80px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(51,51,51,1)"
      {...getOverrideProps(overrides, "TopMenu")}
      {...rest}
    >
      <Text
        fontFamily="Gothic A1"
        fontSize="36px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="45px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="327px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25%"
        bottom="37.5%"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ALP Book Manager"
        {...getOverrideProps(overrides, "ALP Book Manager")}
      ></Text>
      <Text
        fontFamily="Gothic A1"
        fontSize="18px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="22.5px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="112px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="29px"
        right="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ログアウト"
        {...getOverrideProps(overrides, "\u30ED\u30B0\u30A2\u30A6\u30C8")}
      ></Text>
    </View>
  );
}
