/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import UpdateButton from "./UpdateButton";
import MainContentParts from "./MainContentParts";
export default function RegistBackground(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="680px"
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
      {...getOverrideProps(overrides, "RegistBackground")}
      {...rest}
    >
      <View
        width="680px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 20px - 100px)"
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
          top="calc(50% - 18px - -9px)"
          left="12px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Topic&#xA;"
          {...getOverrideProps(overrides, "\u30EA\u30BD\u30FC\u30B9")}
        ></Text>
        <UpdateButton
          width="40px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="8px"
          right="13px"
          border="1px SOLID rgba(51,51,51,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "UpdateButton")}
        ></UpdateButton>
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
        width="320px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="52px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="新たに作成・下書き保存したTopicを配信します。"
        {...getOverrideProps(
          overrides,
          "\u65B0\u305F\u306B\u4F5C\u6210\u30FB\u4E0B\u66F8\u304D\u4FDD\u5B58\u3057\u305FTopic\u3092\u914D\u4FE1\u3057\u307E\u3059\u3002"
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
        top="52px"
        left="332px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Topicの配信スケジュールを変更します。"
        {...getOverrideProps(
          overrides,
          "Topic\u306E\u914D\u4FE1\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u3092\u5909\u66F4\u3057\u307E\u3059\u3002"
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
        children="配信済みのTopicを確認・更新・削除します。"
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
        {...getOverrideProps(overrides, "MainContentParts216118")}
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
          children="新規作成・配信"
          {...getOverrideProps(overrides, "\u9805\u76EE216119")}
        ></Text>
      </View>
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
        left="332px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,102,0,1)"
        {...getOverrideProps(overrides, "MainContentParts216265")}
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
          children="配信スケジュール"
          {...getOverrideProps(overrides, "\u9805\u76EE216266")}
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
        {...getOverrideProps(overrides, "MainContentParts216120")}
      ></MainContentParts>
    </View>
  );
}
