/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function ConfigButton(props) {
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
      {...getOverrideProps(overrides, "ConfigButton")}
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
        top="3px"
        left="11px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "build-black-18dp")}
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
          {...getOverrideProps(overrides, "Vector215946")}
        ></Icon>
        <Icon
          width="16.52px"
          height="16.43px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 16.524688720703125,
            height: 16.425119400024414,
          }}
          paths={[
            {
              d: "M16.3083 13.4251L9.48328 6.60012C10.1583 4.87512 9.78328 2.85012 8.35828 1.42512C6.85828 -0.0748811 4.60828 -0.374881 2.80828 0.450119L6.03328 3.67512L3.78328 5.92512L0.48328 2.70012C-0.41672 4.50012 -0.0417202 6.75012 1.45828 8.25012C2.88328 9.67512 4.90828 10.0501 6.63328 9.37512L13.4583 16.2001C13.7583 16.5001 14.2083 16.5001 14.5083 16.2001L16.2333 14.4751C16.6083 14.1751 16.6083 13.6501 16.3083 13.4251Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="4.58%"
          bottom="4.17%"
          left="3.98%"
          right="4.21%"
          {...getOverrideProps(overrides, "Vector215947")}
        ></Icon>
      </View>
    </View>
  );
}
