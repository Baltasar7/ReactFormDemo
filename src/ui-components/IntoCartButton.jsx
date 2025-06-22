/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function IntoCartButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="96px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0)"
      opacity="0.8999999761581421"
      {...getOverrideProps(overrides, "IntoCartButton")}
      {...rest}
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
          {...getOverrideProps(overrides, "Vector128308")}
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
          {...getOverrideProps(overrides, "Vector128309")}
        ></Icon>
      </View>
    </View>
  );
}
