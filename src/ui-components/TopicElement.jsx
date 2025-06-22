/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function TopicElement(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "TopicElement")}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="6px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="new arrival"
        {...getOverrideProps(overrides, "Kind")}
      ></Text>
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="6px"
        left="100px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="3日前"
        {...getOverrideProps(overrides, "Date")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.40625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="280px"
        height="36px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="8px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Effective Java 第3版 が新たに貸出図書に追加されました。"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
    </View>
  );
}
