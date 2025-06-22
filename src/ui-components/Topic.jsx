/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import TopicElement from "./TopicElement";
import TopicBar from "./TopicBar";
import { View } from "@aws-amplify/ui-react";
export default function Topic(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="488px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(204,204,204,1)"
      {...getOverrideProps(overrides, "Topic")}
      {...rest}
    >
      <TopicElement
        width="320px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="142px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TopicElement2")}
      ></TopicElement>
      <TopicElement
        width="320px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="40px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "TopicElement1")}
      ></TopicElement>
      <TopicBar
        width="320px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(153,153,153,1)"
        {...getOverrideProps(overrides, "TopicBar")}
      ></TopicBar>
    </View>
  );
}
