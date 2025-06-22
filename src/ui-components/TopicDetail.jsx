/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import TopicBar from "./TopicBar";
export default function TopicDetail(props) {
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
      {...getOverrideProps(overrides, "TopicDetail")}
      {...rest}
    >
      <View
        width="320px"
        height="448px"
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
      >
        <Text
          fontFamily="Gothic A1"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,0,0,1)"
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
          top="76px"
          left="12px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Important"
          {...getOverrideProps(overrides, "Important")}
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
          top="76px"
          left="100px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1日前"
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
          children="「JUnit実践入門　体系的に学ぶユニットテストの技法」の返却期限が過ぎています。"
          {...getOverrideProps(overrides, "Title")}
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="124px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="貸出日　：2020/10/01"
          {...getOverrideProps(
            overrides,
            "\u8CB8\u51FA\u65E5\u3000\uFF1A2020/10/01"
          )}
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="152px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="返却期限：2020/12/29"
          {...getOverrideProps(
            overrides,
            "\u8FD4\u5374\u671F\u9650\uFF1A2020/12/29"
          )}
        ></Text>
        <Icon
          width="280px"
          height="0px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 279.9972629547119,
            height: 1.2389259226620197,
          }}
          paths={[
            {
              d: "M0 0L280 0L280 -1L0 -1L0 0Z",
              stroke: "rgba(51,51,51,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="112px"
          left="20px"
          transformOrigin="top left"
          transform="rotate(-0.25deg)"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
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
          width="300px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="180px"
          left="10px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="「JUnit実践入門　体系的に学ぶユニットテストの技法」の返却期限を過ぎています。&#xA;速やかに返却手続きを行ってください。&#xA;&#xA;事務局"
          {...getOverrideProps(
            overrides,
            "\u300CJUnit\u5B9F\u8DF5\u5165\u9580\u3000\u4F53\u7CFB\u7684\u306B\u5B66\u3076\u30E6\u30CB\u30C3\u30C8\u30C6\u30B9\u30C8\u306E\u6280\u6CD5\u300D\u306E\u8FD4\u5374\u671F\u9650\u3092\u904E\u304E\u3066\u3044\u307E\u3059\u3002 \u901F\u3084\u304B\u306B\u8FD4\u5374\u624B\u7D9A\u304D\u3092\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002 \u4E8B\u52D9\u5C40"
          )}
        ></Text>
      </View>
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
