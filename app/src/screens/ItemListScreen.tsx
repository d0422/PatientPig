import React, { FC, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import { RootStackScreenProps } from "@src/types/navigation";
import { getItems } from "@src/apis/ItemAPI";
import Text from "@src/components/Text";
import Item from "@src/interface/Item";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
const ItemListScreen: FC<RootStackScreenProps<"ItemList">> = () => {
  const [Items, setItems] = useState<Item[]>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getItems().then((Item) => setItems(Item));
    setLoading(false);
  }, []);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <FontAwesome5 name="piggy-bank" size={45} color="#EE6983" />
        <Text style={{ fontSize: 40 }}>잘 참았다 꿀!</Text>
      </View>
      <ScrollView
        style={styles.ItemContainer}
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
      >
        {Items?.map((item, index) => (
          <View style={styles.item} key={index}>
            <AntDesign name="like2" size={24} color="#0288D1" />
            <Text style={{ fontSize: 10 }}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  item: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 60,
    margin: 10,
    padding: 5,
  },
  safeArea: {
    flex: 1,
  },
  ItemContainer: {
    margin: 10,
    flexWrap: "wrap",
  },
});
export default ItemListScreen;
