/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MainContentParts from "./MainContentParts";
import { Text, View } from "@aws-amplify/ui-react";
import ResourceViewBar from "./ResourceViewBar";
import ConfigButton from "./ConfigButton";
export default function StatusViewBackground(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="800px"
      height="200px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(102,102,102,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "StatusViewBackground")}
      {...rest}
    >
      <MainContentParts
        width="240px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="137px"
        left="540px"
        border="1px SOLID rgba(102,102,102,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContentParts214591")}
      ></MainContentParts>
      <MainContentParts
        width="240px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="137px"
        left="280px"
        border="1px SOLID rgba(102,102,102,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContentParts213354")}
      ></MainContentParts>
      <MainContentParts
        width="240px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="137px"
        left="20px"
        border="1px SOLID rgba(102,102,102,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContentParts214735")}
      ></MainContentParts>
      <MainContentParts
        width="240px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="80px"
        left="540px"
        border="1px SOLID rgba(102,102,102,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContentParts2153")}
      ></MainContentParts>
      <MainContentParts
        width="240px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="80px"
        left="280px"
        border="1px SOLID rgba(102,102,102,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContentParts2152")}
      ></MainContentParts>
      <MainContentParts
        width="240px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="80px"
        left="20px"
        border="1px SOLID rgba(102,102,102,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContentParts2151")}
      ></MainContentParts>
      <Text
        fontFamily="Gothic A1"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="254px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="52px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="現在の貸出状況は以下の通りです。"
        {...getOverrideProps(
          overrides,
          "\u73FE\u5728\u306E\u8CB8\u51FA\u72B6\u6CC1\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002"
        )}
      ></Text>
      <ResourceViewBar
        width="800px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(238,238,238,1)"
        {...getOverrideProps(overrides, "ResourceViewBar")}
      ></ResourceViewBar>
      <ConfigButton
        width="40px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="8px"
        left="692px"
        border="1px SOLID rgba(51,51,51,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ConfigButton")}
      ></ConfigButton>
    </View>
  );
}
