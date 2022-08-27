import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import CardCoin from "../../componets/CardCoin";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoadingName, setisLoadingName] = useState(false);
  const [isLoadingVolume, setisLoadingVolume] = useState(false);
  const [isLoadingPrice, setisLoadingPrice] = useState(false);

  const getData = async (short) => {
    await axios
      .get("https://api2.binance.com/api/v3/ticker/24hr")
      .then((response) => {
        var data = response.data;

        var dataArray = [];

        for (let i in response.data) {
          if (
            response.data[i].symbol.match("USDT") &&
            !response.data[i].symbol.match("1INCH") &&
            !response.data[i].symbol.match("IDRT") &&
            !response.data[i].symbol.match("BIDR") &&
            !response.data[i].symbol.match("RUB") &&
            !response.data[i].symbol.match("BVND") &&
            !response.data[i].lastPrice.match("0.00000000") &&
            !response.data[i].symbol.match("NGN")
          ) {
            dataArray.push(response.data[i]);
          }
        }

        if (short == "Name") {
          dataArray.sort((a, b) => a.symbol > b.symbol);
          setisLoadingName(false);
        } else if (short == "Last Price") {
          dataArray.sort((a, b) => a.lastPrice - b.lastPrice);
          setisLoadingPrice(false);
        } else if (short == "24hr/Volume") {
          dataArray.sort((a, b) => b.quoteVolume - a.quoteVolume);
          setisLoadingVolume(false);
        }

        setData(dataArray);
      });
  };

  const nameShort = () => {
    setisLoadingName(true);
    getData("Name");
  };
  const volumeShort = () => {
    setisLoadingVolume(true);
    getData("24hr/Volume");
  };
  const priceShort = () => {
    setisLoadingPrice(true);
    getData("Last Price");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView></SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "8.5%",
          backgroundColor: "#483838",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          loading={isLoadingName}
          onPress={nameShort}
          style={style.button}
          mode="contained"
        >
          Name
        </Button>
        <Button
          loading={isLoadingVolume}
          onPress={volumeShort}
          style={style.button}
          mode="contained"
        >
          24hr/Volume
        </Button>
        <Button
          loading={isLoadingPrice}
          onPress={priceShort}
          style={style.button}
          mode="contained"
        >
          Last Price
        </Button>
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
  button: {
    backgroundColor: "#1A4D2E",
    marginLeft: 8,
    borderRadius: 13,
  },
});

export default Home;
