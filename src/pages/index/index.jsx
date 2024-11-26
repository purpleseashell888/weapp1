import { View, Text } from "@tarojs/components";
import { useEffect, useState } from "react";
import Child from "./child";
import "./index.less";
import { Current } from "@tarojs/taro";

export default function Index() {
  const [userName, setUserName] = useState("JSPang.com--技术胖");
  const [blogTitle, setBlogTitle] = useState("");
  const [introduce, setIntroduce] = useState("");

  useEffect(() => {
    setBlogTitle(Current.router.params.blogTitle);
    setIntroduce(Current.router.params.introduce);
  }, []);

  return (
    <View>
      <Text>{userName}</Text>
      <Child userName={userName}></Child>
      <View>{blogTitle}</View>
      <View>{introduce}</View>
    </View>
  );
}
