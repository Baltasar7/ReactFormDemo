/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function ListTuneBar(props) {
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
      {...getOverrideProps(overrides, "ListTuneBar")}
      {...rest}
    >
      <View
        width="28px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="6px"
        left="252px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "filter_list-black-28dp")}
      >
        <Icon
          width="28px"
          height="28px"
          viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
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
          {...getOverrideProps(overrides, "Vector11022")}
        ></Icon>
        <Icon
          width="21px"
          height="14px"
          viewBox={{ minX: 0, minY: 0, width: 21, height: 14 }}
          paths={[
            {
              d: "M8.16667 14L12.8333 14L12.8333 11.6667L8.16667 11.6667L8.16667 14ZM0 0L0 2.33333L21 2.33333L21 0L0 0ZM3.5 8.16667L17.5 8.16667L17.5 5.83333L3.5 5.83333L3.5 8.16667Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="25%"
          bottom="25%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector11023")}
        ></Icon>
      </View>
      <View
        width="28px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="6px"
        left="285px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "sort-black-28dp")}
      >
        <Icon
          width="28px"
          height="28px"
          viewBox={{ minX: 0, minY: 0, width: 28, height: 28 }}
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
          {...getOverrideProps(overrides, "Vector11025")}
        ></Icon>
        <Icon
          width="21px"
          height="14px"
          viewBox={{ minX: 0, minY: 0, width: 21, height: 14 }}
          paths={[
            {
              d: "M0 14L7 14L7 11.6667L0 11.6667L0 14ZM0 0L0 2.33333L21 2.33333L21 0L0 0ZM0 8.16667L14 8.16667L14 5.83333L0 5.83333L0 8.16667Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="25%"
          bottom="25%"
          left="12.5%"
          right="12.5%"
          {...getOverrideProps(overrides, "Vector11026")}
        ></Icon>
      </View>
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
        top="13px"
        left="123px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Java"
        {...getOverrideProps(overrides, "\u5C0F\u5206\u985E")}
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
        top="14px"
        left="110px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children=">"
        {...getOverrideProps(overrides, ">")}
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
        top="14px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="プログラミング"
        {...getOverrideProps(overrides, "\u5927\u5206\u985E")}
      ></Text>
    </View>
  );
}
