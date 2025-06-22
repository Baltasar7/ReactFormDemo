/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import BookMarkUndobutton from "./BookMarkUndobutton";
import BookElement from "./BookElement";
import DeleteButton from "./DeleteButton";
import BookMarkbutton from "./BookMarkbutton";
import ListTuneBar from "./ListTuneBar";
export default function BookList(props) {
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
      {...getOverrideProps(overrides, "BookList")}
      {...rest}
    >
      <View
        width="320px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="244px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "BookElement3")}
      >
        <View
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
          {...getOverrideProps(overrides, "DeleteButton1281744")}
        >
          <View
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(51,51,51,1)"
            {...getOverrideProps(overrides, "ButtonFrame20")}
          ></View>
          <View
            width="18px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="5%"
            bottom="5%"
            left="5%"
            right="5%"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "delete-18px")}
          >
            <Icon
              width="18px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
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
              {...getOverrideProps(overrides, "Vector1281747")}
            ></Icon>
            <Icon
              width="10.5px"
              height="13.5px"
              viewBox={{ minX: 0, minY: 0, width: 10.5, height: 13.5 }}
              paths={[
                {
                  d: "M0.75 12C0.75 12.825 1.425 13.5 2.25 13.5L8.25 13.5C9.075 13.5 9.75 12.825 9.75 12L9.75 3L0.75 3L0.75 12ZM10.5 0.75L7.875 0.75L7.125 0L3.375 0L2.625 0.75L0 0.75L0 2.25L10.5 2.25L10.5 0.75Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="12.5%"
              bottom="12.5%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector1281748")}
            ></Icon>
          </View>
        </View>
        <BookMarkUndobutton
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
          {...getOverrideProps(overrides, "BookMarkUndobutton")}
        ></BookMarkUndobutton>
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
          {...getOverrideProps(overrides, "IntoCartButton1281770")}
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
            backgroundColor="rgba(196,196,196,1)"
            {...getOverrideProps(overrides, "Button1281771")}
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
            left="34.38%"
            right="15.63%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="予約する"
            {...getOverrideProps(overrides, "\u501F\u308A\u308B1281772")}
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
            {...getOverrideProps(overrides, "shopping_cart-16px1281773")}
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
              {...getOverrideProps(overrides, "Vector1281774")}
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
              {...getOverrideProps(overrides, "Vector1281775")}
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
          {...getOverrideProps(overrides, "Image1281650")}
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
          children="貸出：×"
          {...getOverrideProps(overrides, "Status1281651")}
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
          children="高江賢"
          {...getOverrideProps(overrides, "Author1281652")}
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
          children="[改訂新版] Javaポケットリファレンス"
          {...getOverrideProps(overrides, "BookTitle1281653")}
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
          top="35px"
          left="21px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="NO&#xA;IMAGE"
          {...getOverrideProps(overrides, "NO IMAGE132950")}
        ></Text>
      </View>
      <BookElement
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
        {...getOverrideProps(overrides, "BookElement2")}
      ></BookElement>
      <View
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
          {...getOverrideProps(overrides, "DeleteButton1281512")}
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
          {...getOverrideProps(overrides, "IntoCartButton1281609")}
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
            {...getOverrideProps(overrides, "Button1281610")}
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
            {...getOverrideProps(overrides, "\u501F\u308A\u308B1281611")}
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
            {...getOverrideProps(overrides, "shopping_cart-16px1281612")}
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
              {...getOverrideProps(overrides, "Vector1281613")}
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
              {...getOverrideProps(overrides, "Vector1281614")}
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
          {...getOverrideProps(overrides, "Image1281515")}
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
          {...getOverrideProps(overrides, "Status1281516")}
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
          {...getOverrideProps(overrides, "Author1281517")}
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
          {...getOverrideProps(overrides, "BookTitle1281518")}
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
          {...getOverrideProps(overrides, "NO IMAGE132422")}
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
