/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import TopMenu from "./TopMenu";
import LeftMenu from "./LeftMenu";
import DefaultMain from "./DefaultMain";
import { View } from "@aws-amplify/ui-react";
export default function TopPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="720px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(51,51,51,1)"
      {...getOverrideProps(overrides, "TopPage")}
      {...rest}
    >
      <TopMenu
        width="1280px"
        height="80px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(51,51,51,1)"
        {...getOverrideProps(overrides, "TopMenu")}
      ></TopMenu>
      <LeftMenu
        width="120px"
        height="640px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="80px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(153,153,153,1)"
        opacity="0.9900000095367432"
        {...getOverrideProps(overrides, "LeftMenu")}
      ></LeftMenu>
      <DefaultMain
        width="1160px"
        height="640px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="80px"
        left="120px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(204,204,204,1)"
        {...getOverrideProps(overrides, "DefaultMain")}
      ></DefaultMain>
    </View>
  );
}
