/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import DeleteButton from "./DeleteButton";
import BookMarkbutton from "./BookMarkbutton";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import ListTuneBar from "./ListTuneBar";
export default function BookDetail(props) {
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
      {...getOverrideProps(overrides, "BookDetail")}
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
        {...getOverrideProps(overrides, "BookElement1")}
      >
        <DeleteButton
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="72px"
          left="296px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "DeleteButton")}
        ></DeleteButton>
        <BookMarkbutton
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="72px"
          left="272px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "BookMarkbutton")}
        ></BookMarkbutton>
        <View
          width="96px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="72px"
          left="172px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0)"
          opacity="0.8999999761581421"
          {...getOverrideProps(overrides, "IntoCartButton")}
        >
          <View
            width="96px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(51,51,51,1)"
            {...getOverrideProps(overrides, "Button")}
          ></View>
          <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="15%"
            bottom="15%"
            left="37.5%"
            right="25%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="借りる"
            {...getOverrideProps(overrides, "\u501F\u308A\u308B")}
          ></Text>
          <View
            width="16px"
            height="16px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="2px"
            left="4px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "shopping_cart-16px")}
          >
            <Icon
              width="16px"
              height="16px"
              viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
              paths={[]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector132153")}
            ></Icon>
            <Icon
              width="13.33px"
              height="13.33px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.333333015441895,
                height: 13.333333969116211,
              }}
              paths={[
                {
                  d: "M4 10.6667C3.26667 10.6667 2.67333 11.2667 2.67333 12C2.67333 12.7333 3.26667 13.3333 4 13.3333C4.73333 13.3333 5.33333 12.7333 5.33333 12C5.33333 11.2667 4.73333 10.6667 4 10.6667ZM0 0L0 1.33333L1.33333 1.33333L3.73333 6.39333L2.83333 8.02667C2.72667 8.21333 2.66667 8.43333 2.66667 8.66667C2.66667 9.4 3.26667 10 4 10L12 10L12 8.66667L4.28 8.66667C4.18667 8.66667 4.11333 8.59333 4.11333 8.5L4.13333 8.42L4.73333 7.33333L9.7 7.33333C10.2 7.33333 10.64 7.06 10.8667 6.64667L13.2533 2.32C13.3067 2.22667 13.3333 2.11333 13.3333 2C13.3333 1.63333 13.0333 1.33333 12.6667 1.33333L2.80667 1.33333L2.18 0L0 0ZM10.6667 10.6667C9.93333 10.6667 9.34 11.2667 9.34 12C9.34 12.7333 9.93333 13.3333 10.6667 13.3333C11.4 13.3333 12 12.7333 12 12C12 11.2667 11.4 10.6667 10.6667 10.6667Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="4.17%"
              right="12.5%"
              {...getOverrideProps(overrides, "Vector132154")}
            ></Icon>
          </View>
        </View>
        <View
          width="60px"
          height="80px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="10px"
          left="12px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196,196,196,1)"
          {...getOverrideProps(overrides, "Image")}
        ></View>
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
          width="88px"
          height="16px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="74px"
          left="80px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="貸出：〇"
          {...getOverrideProps(overrides, "Status")}
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
          width="230px"
          height="16px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="54px"
          left="80px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ジョシュア・ブロック"
          {...getOverrideProps(overrides, "Author")}
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
          width="230px"
          height="36px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10px"
          left="80px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Effective Java 第3版"
          {...getOverrideProps(overrides, "BookTitle")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="16.40625px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="34px"
          left="21px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="NO&#xA;IMAGE"
          {...getOverrideProps(overrides, "NO IMAGE")}
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
          top="297.24px"
          left="20px"
          transformOrigin="top left"
          transform="rotate(-0.25deg)"
          {...getOverrideProps(overrides, "Line 2")}
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="124px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="タイトル：Effective Java 第3版"
          {...getOverrideProps(
            overrides,
            "\u30BF\u30A4\u30C8\u30EB\uFF1AEffective Java \u7B2C3\u7248"
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
          top="148px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="著者　　：ジョシュア・ブロック"
          {...getOverrideProps(
            overrides,
            "\u8457\u8005\u3000\u3000\uFF1A\u30B8\u30E7\u30B7\u30E5\u30A2\u30FB\u30D6\u30ED\u30C3\u30AF"
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
          top="172px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="出版社　：丸善出版"
          {...getOverrideProps(
            overrides,
            "\u51FA\u7248\u793E\u3000\uFF1A\u4E38\u5584\u51FA\u7248"
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
          top="196px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="発売日　：2018/10/30"
          {...getOverrideProps(
            overrides,
            "\u767A\u58F2\u65E5\u3000\uFF1A2018/10/30"
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
          top="220px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="言語　　：日本語"
          {...getOverrideProps(
            overrides,
            "\u8A00\u8A9E\u3000\u3000\uFF1A\u65E5\u672C\u8A9E"
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
          top="244px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="形式　　：B5変"
          {...getOverrideProps(
            overrides,
            "\u5F62\u5F0F\u3000\u3000\uFF1AB5\u5909"
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
          top="268px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ページ数：412"
          {...getOverrideProps(overrides, "\u30DA\u30FC\u30B8\u6570\uFF1A412")}
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
          top="309px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="大分類　：プログラミング"
          {...getOverrideProps(
            overrides,
            "\u5927\u5206\u985E\u3000\uFF1A\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0"
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
          top="333px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="小分類　：Java"
          {...getOverrideProps(overrides, "\u5C0F\u5206\u985E\u3000\uFF1AJava")}
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
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="357px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="登録キーワード：&#xA;プログラミング, Java, オブジェクト指向, &#xA;デザインパターン, 詳細設計"
          {...getOverrideProps(
            overrides,
            "\u767B\u9332\u30AD\u30FC\u30EF\u30FC\u30C9\uFF1A \u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0, Java, \u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u6307\u5411, \u30C7\u30B6\u30A4\u30F3\u30D1\u30BF\u30FC\u30F3, \u8A73\u7D30\u8A2D\u8A08"
          )}
        ></Text>
      </View>
      <ListTuneBar
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
        {...getOverrideProps(overrides, "ListTuneBar")}
      ></ListTuneBar>
    </View>
  );
}
