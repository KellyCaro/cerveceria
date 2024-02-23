import {Stack} from "expo-router"
import Login from "./Login"
const prueba= ()=>{
    return(
        <Stack>
            <Stack.Screen name= "Login" component={Login}/>
        </Stack>
    )

}