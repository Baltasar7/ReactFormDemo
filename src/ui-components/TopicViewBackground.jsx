/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import ResourceViewBar from "./ResourceViewBar";
import ConfigButton from "./ConfigButton";
import TopicRow from "./TopicRow";
export default function TopicViewBackground(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="800px"
      height="240px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(102,102,102,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "TopicViewBackground")}
      {...rest}
    >
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
        children="直近の配信Topicは以下の通りです。"
        {...getOverrideProps(
          overrides,
          "\u76F4\u8FD1\u306E\u914D\u4FE1Topic\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002"
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
      <TopicRow
        width="800px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="74px"
        left="0px"
        border="1px SOLID rgba(204,204,204,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TopicRow2163")}
      ></TopicRow>
      <TopicRow
        width="800px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="104px"
        left="0px"
        border="1px SOLID rgba(204,204,204,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TopicRow2168")}
      ></TopicRow>
    </View>
  );
}
