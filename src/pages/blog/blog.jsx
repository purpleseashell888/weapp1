import Taro from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import { xiedajiao, liuying } from "../../tools";
import cat from "../../static/cat.jpg";

export default function Blog() {
  const [blogTitle, setBlogTitle] = useState("JSPangBlog");
  const [introduce, setIntroduce] = useState("jspang.com_introduce");

  const girls = [
    { id: 1, name: "谢大脚" },
    { id: 2, name: "刘英" },
    { id: 3, name: "王小蒙" },
    { id: 4, name: "香秀" },
  ];

  const gotoIndex = () => {
    Taro.navigateTo({
      url:
        "/pages/index/index?blogTitle=" + blogTitle + "&introduce=" + introduce,
    });
  };

  let zhujueNum = 2;

  const testHandler = () => {
    Taro.request({
      url: "https://apiblog.jspang.com/default/getArticleList",
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <View>
      <Text>Blog Page</Text>
      <Button onClick={gotoIndex}>我要去Index页面</Button>
      <View>
        <Image src={cat} width="100px" height="100px" />
      </View>
      {girls.map((item, index) => {
        return (
          <View key={index}>
            {item.id}:{item.name}
          </View>
        );
      })}
      <View>男主角是：{zhujueNum === 1 ? "玉田" : "刘能"}</View>
      <View>男主角是：{(zhujueNum === 1 && "玉田") || "刘能"}</View>
      <Button onClick={testHandler}>获取列表</Button>
    </View>
  );
}
