/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function TopicBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(153,153,153,1)"
      {...getOverrideProps(overrides, "TopicBar")}
      {...rest}
    >
      <Text
        fontFamily="Gothic A1"
        fontSize="18px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="22.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 11.5px - -1.5px)"
        left="calc(50% - 23.5px - 124.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Topic"
        {...getOverrideProps(overrides, "PageTitle")}
      ></Text>
    </View>
  );
}
