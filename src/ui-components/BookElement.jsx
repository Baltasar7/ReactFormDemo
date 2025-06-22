/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import DeleteButton from "./DeleteButton";
import BookMarkbutton from "./BookMarkbutton";
import IntoCartButton from "./IntoCartButton";
import { Text, View } from "@aws-amplify/ui-react";
import BookPhoto from "./BookPhoto";
export default function BookElement(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "BookElement")}
      {...rest}
    >
      <DeleteButton
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="72px"
        left="296px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "DeleteButton")}
      ></DeleteButton>
      <BookMarkbutton
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="72px"
        left="272px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BookMarkbutton")}
      ></BookMarkbutton>
      <IntoCartButton
        width="96px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="72px"
        left="172px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        opacity="0.8999999761581421"
        {...getOverrideProps(overrides, "IntoCartButton")}
      ></IntoCartButton>
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
        width="88px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="74px"
        left="80px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="貸出：〇"
        {...getOverrideProps(overrides, "Status")}
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
        width="230px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="54px"
        left="80px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ジョシュア・ブロック"
        {...getOverrideProps(overrides, "Author")}
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
        width="230px"
        height="36px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="10px"
        left="80px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Effective Java 第3版"
        {...getOverrideProps(overrides, "BookTitle")}
      ></Text>
      <BookPhoto
        width="60px"
        height="80px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="10px"
        left="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(204,204,204,1)"
        {...getOverrideProps(overrides, "BookPhoto")}
      ></BookPhoto>
    </View>
  );
}
