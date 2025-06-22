/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function UpdateButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="40px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(51,51,51,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UpdateButton")}
      {...rest}
    >
      <View
        width="18px"
        height="18px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 9px - 0px)"
        left="calc(50% - 9px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "autorenew-black-18dp")}
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
          {...getOverrideProps(overrides, "Vector213226")}
        ></Icon>
        <Icon
          width="12px"
          height="16.5px"
          viewBox={{ minX: 0, minY: 0, width: 12, height: 16.5 }}
          paths={[
            {
              d: "M6 3.75L6 6L9 3L6 0L6 2.25C2.685 2.25 0 4.935 0 8.25C0 9.4275 0.345 10.5225 0.93 11.445L2.025 10.35C1.6875 9.7275 1.5 9.0075 1.5 8.25C1.5 5.7675 3.5175 3.75 6 3.75ZM11.07 5.055L9.975 6.15C10.305 6.78 10.5 7.4925 10.5 8.25C10.5 10.7325 8.4825 12.75 6 12.75L6 10.5L3 13.5L6 16.5L6 14.25C9.315 14.25 12 11.565 12 8.25C12 7.0725 11.655 5.9775 11.07 5.055L11.07 5.055Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.17%"
          bottom="4.17%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, "Vector213227")}
        ></Icon>
      </View>
    </View>
  );
}
