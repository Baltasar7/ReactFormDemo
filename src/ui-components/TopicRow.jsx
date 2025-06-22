/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function TopicRow(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="800px"
      height="30px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(204,204,204,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "TopicRow")}
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
        width="580px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="8px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="「JUnit実践入門　体系的に学ぶユニットテストの技法」の返却期限が過ぎています。"
        {...getOverrideProps(
          overrides,
          "\u300CJUnit\u5B9F\u8DF5\u5165\u9580\u3000\u4F53\u7CFB\u7684\u306B\u5B66\u3076\u30E6\u30CB\u30C3\u30C8\u30C6\u30B9\u30C8\u306E\u6280\u6CD5\u300D\u306E\u8FD4\u5374\u671F\u9650\u304C\u904E\u304E\u3066\u3044\u307E\u3059\u3002"
        )}
      ></Text>
      <Text
        fontFamily="Gothic A1"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,0,0,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="80px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 7.5px - -0.5px)"
        right="119px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Important"
        {...getOverrideProps(overrides, "Important")}
      ></Text>
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
        width="48px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 7.5px - -0.5px)"
        right="63px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Private"
        {...getOverrideProps(overrides, "Private")}
      ></Text>
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
        width="48px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 7.5px - -0.5px)"
        right="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="3時間前"
        {...getOverrideProps(overrides, "3\u6642\u9593\u524D")}
      ></Text>
    </View>
  );
}
