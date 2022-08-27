import { View, TextInput, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import CardCoin from "../../componets/CardCoin";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const getData = async () => {
    await axios
      .get("https://api2.binance.com/api/v3/ticker/24hr")
      .then((response) => {
        var data = response.data;
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    axios
      .get("https://api2.binance.com/api/v3/ticker/24hr")
      .then((response) => {
        var data = response.data;
        var dataArray = [];
        for (let i in data) {
          if (data[i].symbol.match(input.toUpperCase())) {
            dataArray.push(data[i]);
          }
        }
        setData(dataArray);
      });
  }, [input]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          backgroundColor: "#483838",
        }}
      >
        <TextInput
          style={style.input}
          placeholder="Bir şey yazın..."
          autoCapitalize="none"
          onChangeText={setInput}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => (
          <CardCoin
            coinname={item.symbol}
            price={item.lastPrice}
            coinUs={item.symbol}
            changePercent={item.volume}
          />
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    width: "98%",
    height: "60%",
    borderWidth: 4,
    borderColor: "black",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 8,
    backgroundColor: "#fff",
  },
});

export default Search;
