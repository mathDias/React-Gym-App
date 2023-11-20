import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box, useTheme } from "native-base";
import { useAuth } from "@hooks/useAuth";
import { AppRoutes } from "./app.routes";
import { Loading } from "@components/Loading";

export function Routes () {

    const theme = DefaultTheme
    theme.colors.background = useTheme().colors.gray[700]
    const { user, isLoadingUserStorageData } = useAuth();

    if(isLoadingUserStorageData){
        return <Loading/>
    }

    return (
        <Box flex={1} bg={'gray.700'}>
            <NavigationContainer theme={theme}>
                {
                    user.id ? <AppRoutes/> : 
                    <AuthRoutes/>
                }
            </NavigationContainer>
        </Box>
    )
}