/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, View } from "@aws-amplify/ui-react";
export default function BookMarkbutton(props) {
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
      {...getOverrideProps(overrides, "BookMarkbutton")}
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
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "BookmarkFrame")}
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
          top="1px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "star_border-24px 1")}
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
            {...getOverrideProps(overrides, "Vector112125")}
          ></Icon>
          <Icon
            width="15px"
            height="14.25px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 15,
              height: 14.250000953674316,
            }}
            paths={[
              {
                d: "M15 5.43L9.6075 4.965L7.5 0L5.3925 4.9725L0 5.43L4.095 8.9775L2.865 14.25L7.5 11.4525L12.135 14.25L10.9125 8.9775L15 5.43ZM7.5 10.05L4.68 11.7525L5.43 8.5425L2.94 6.3825L6.225 6.0975L7.5 3.075L8.7825 6.105L12.0675 6.39L9.5775 8.55L10.3275 11.76L7.5 10.05Z",
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
            bottom="12.5%"
            left="16.67%"
            right="0%"
            {...getOverrideProps(overrides, "Vector112126")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
