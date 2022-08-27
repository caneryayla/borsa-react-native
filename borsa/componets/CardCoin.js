import React, { View, Text, StyleSheet, Image } from "react-native";

const CardCoin = ({ coinname, coinUs, price, changePercent }) => {
  return (
    <View style={style.coincard}>
      <View style={style.maincard}>
        <View style={style.coinLeft}>
          <Image
            style={style.imgs}
            source={{
              uri: "https://cdn.freebiesupply.com/logos/large/2x/blackcoin-logo-png-transparent.png",
            }}
          ></Image>
        </View>

        <View style={style.coinRight}>
          <View style={style.rightone}>
            <Text style={{ fontSize: 17, fontWeight: "500", marginBottom: 2 }}>
              {coinname}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "200" }}>{coinUs}</Text>
          </View>

          <View style={style.righttwo}>
            <Text style={{ fontSize: 19, fontWeight: "500", marginBottom: 2 }}>
              {price}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "200" }}>
              {changePercent}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  coincard: {
    width: "100%",
    height: 50,
    alignItems: "center",
    marginTop: 10,
  },
  maincard: {
    width: "97%",
    height: "100%",
    flexDirection: "row",
  },
  coinLeft: {
    width: "15%",
    height: "100%",
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 13,
    borderTopLeftRadius: 13,
    backgroundColor: "#483838",
  },
  coinRight: {
    width: "85%",
    height: "100%",
    backgroundColor: "#E0DECA",
    flexDirection: "row",
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    paddingLeft: 5,
    paddingRight: 12,
  },
  rightone: {
    width: "45%",
    height: "100%",
    justifyContent: "center",
  },
  righttwo: {
    width: "55%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  imgs: {
    width: "70%",
    height: "80%",
  },
});

export default CardCoin;
