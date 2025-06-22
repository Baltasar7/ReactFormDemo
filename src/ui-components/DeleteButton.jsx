/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function DeleteButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="20px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DeleteButton")}
      {...rest}
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
        backgroundColor="rgba(196,196,196,1)"
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
          {...getOverrideProps(overrides, "Vector112239")}
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
          {...getOverrideProps(overrides, "Vector112240")}
        ></Icon>
      </View>
    </View>
  );
}
