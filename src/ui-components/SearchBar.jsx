/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SearchBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="292px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SearchBar")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(102,102,102,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.75%"
        bottom="15.63%"
        left="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="検索"
        {...getOverrideProps(overrides, "\u691C\u7D22")}
      ></Text>
      <View
        width="28px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="6.25%"
        bottom="6.25%"
        left="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "search-28px 2")}
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
          {...getOverrideProps(overrides, "Vector1038")}
        ></Icon>
        <Icon
          width="20.41px"
          height="20.4px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 20.405000686645508,
            height: 20.404998779296875,
          }}
          paths={[
            {
              d: "M14.5833 12.8333L13.6617 12.8333L13.335 12.5183C14.4783 11.1883 15.1667 9.46167 15.1667 7.58333C15.1667 3.395 11.7717 0 7.58333 0C3.395 0 0 3.395 0 7.58333C0 11.7717 3.395 15.1667 7.58333 15.1667C9.46167 15.1667 11.1883 14.4783 12.5183 13.335L12.8333 13.6617L12.8333 14.5833L18.6667 20.405L20.405 18.6667L14.5833 12.8333L14.5833 12.8333ZM7.58333 12.8333C4.67833 12.8333 2.33333 10.4883 2.33333 7.58333C2.33333 4.67833 4.67833 2.33333 7.58333 2.33333C10.4883 2.33333 12.8333 4.67833 12.8333 7.58333C12.8333 10.4883 10.4883 12.8333 7.58333 12.8333Z",
              fill: "rgba(153,153,153,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20.83%"
          bottom="6.29%"
          left="29.17%"
          right="-2.04%"
          {...getOverrideProps(overrides, "Vector1039")}
        ></Icon>
      </View>
    </View>
  );
}
