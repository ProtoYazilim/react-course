import Card from "../components/Card"
import ListItem from "../components/ListItem"
import { getProducts } from "../products"
import { withProduct } from "./withProduct"

export const CardWithProduct = withProduct(Card, getProducts)

export const ListWithProduct = withProduct(ListItem, getProducts)
