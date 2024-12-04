import { ImageSourcePropType } from "react-native";

interface Images {
    [key: string]: ImageSourcePropType
}

export const images: Images = {
    cards: require("../assets/images/cards.png"),
    empty: require("../assets/images/empty.png"),
    logoSmall: require("../assets/images/logo-small.png"),
    logo: require("../assets/images/logo.png"),
    path: require("../assets/images/path.png"),
    profile: require("../assets/images/profile.png"),
    thumbnail: require("../assets/images/thumbnail.png")
}