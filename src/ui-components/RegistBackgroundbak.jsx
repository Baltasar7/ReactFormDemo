/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import MainContentParts from "./MainContentParts";
export default function RegistBackgroundbak(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="400px"
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
      {...getOverrideProps(overrides, "RegistBackgroundbak")}
      {...rest}
    >
      <View
        width="400px"
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
          children="利用者編集"
          {...getOverrideProps(overrides, "\u30EA\u30BD\u30FC\u30B9")}
        ></Text>
      </View>
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
        children="新たな利用者を登録します。"
        {...getOverrideProps(
          overrides,
          "\u65B0\u305F\u306A\u5229\u7528\u8005\u3092\u767B\u9332\u3057\u307E\u3059\u3002"
        )}
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
        width="320px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="143px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="登録済みの利用者情報を編集します。"
        {...getOverrideProps(
          overrides,
          "\u767B\u9332\u6E08\u307F\u306E\u5229\u7528\u8005\u60C5\u5831\u3092\u7DE8\u96C6\u3057\u307E\u3059\u3002"
        )}
      ></Text>
      <View
        width="240px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="79px"
        left="12px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,102,0,1)"
        {...getOverrideProps(overrides, "MainContentParts214533")}
      >
        <Text
          fontFamily="Gothic A1"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
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
          top="27.5%"
          bottom="27.5%"
          left="12px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="新規利用者登録"
          {...getOverrideProps(overrides, "\u9805\u76EE")}
        ></Text>
      </View>
      <MainContentParts
        width="240px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="170px"
        left="12px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,102,0,1)"
        {...getOverrideProps(overrides, "MainContentParts214535")}
      ></MainContentParts>
    </View>
  );
}
