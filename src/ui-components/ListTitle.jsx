/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function ListTitle(props) {
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
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ListTitle")}
      {...rest}
    >
      <View
        width="1px"
        height="38px"
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
        height="38px"
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
        top="39px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(108,108,108,1)"
        {...getOverrideProps(overrides, "BorderBottom")}
      ></View>
      <View
        width="238px"
        height="38px"
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
        fontSize="18px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25%"
        bottom="22.5%"
        left="20px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="書籍貸出システム"
        {...getOverrideProps(
          overrides,
          "\u66F8\u7C4D\u8CB8\u51FA\u30B7\u30B9\u30C6\u30E0"
        )}
      ></Text>
    </View>
  );
}
