import {PropertyTypeButtomWrapper} from "./styles"
import { IoAmericanFootballSharp } from "react-icons/io5";
export const PropertyTypeButtom = ({icon, label}) => (
    <PropertyTypeButtomWrapper> 
        <IoAmericanFootballSharp/>
        <p> {label} </p>
    </PropertyTypeButtomWrapper>
)