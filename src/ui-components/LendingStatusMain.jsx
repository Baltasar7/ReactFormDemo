/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MenuListElement from "./MenuListElement";
import RegistBackground from "./RegistBackground";
import StatusViewBackground from "./StatusViewBackground";
import { View } from "@aws-amplify/ui-react";
export default function LendingStatusMain(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1100px"
      height="600px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(204,204,204,1)"
      {...getOverrideProps(overrides, "LendingStatusMain")}
      {...rest}
    >
      <MenuListElement
        width="1160px"
        height="32px"
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
        {...getOverrideProps(overrides, "MenuListElement")}
      ></MenuListElement>
      <RegistBackground
        width="380px"
        height="240px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="280px"
        left="150px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "RegistBackground214226")}
      ></RegistBackground>
      <RegistBackground
        width="380px"
        height="240px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="280px"
        left="568px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "RegistBackground214539")}
      ></RegistBackground>
      <StatusViewBackground
        width="800px"
        height="200px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="60px"
        left="150px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "StatusViewBackground")}
      ></StatusViewBackground>
    </View>
  );
}
