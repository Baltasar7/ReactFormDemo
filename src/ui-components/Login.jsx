/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Login(props) {
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
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <View
        width="240px"
        height="180px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 90px - 106px)"
        left="calc(50% - 120px - 0px)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(153,153,153,1)"
        {...getOverrideProps(overrides, "CenterBackground")}
      >
        <View
          width="200px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="124px"
          left="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0)"
          opacity="0.8999999761581421"
          {...getOverrideProps(overrides, "IntoCartButton")}
        >
          <View
            width="200px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(34,221,68,1)"
            {...getOverrideProps(overrides, "Button")}
          ></View>
          <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
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
            top="5px"
            left="84px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Log in"
            {...getOverrideProps(overrides, "Log in")}
          ></Text>
        </View>
        <View
          width="200px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="90px"
          left="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "PasswordTextBar")}
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="70px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Password"
          {...getOverrideProps(overrides, "Password")}
        ></Text>
        <View
          width="200px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="40px"
          left="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "UserIDTextBar")}
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="20px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User ID"
          {...getOverrideProps(overrides, "User ID")}
        ></Text>
      </View>
      <Text
        fontFamily="Gothic A1"
        fontSize="18px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="22.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 11.5px - 218.5px)"
        left="calc(50% - 101px - -1px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Log in to Book manager"
        {...getOverrideProps(overrides, "LoginMenu")}
      ></Text>
    </View>
  );
}
