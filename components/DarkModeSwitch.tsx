import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const DarkModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
<IconButton
aria-label="Toggle Dark Switch"
icon={colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}
onClick={toggleColorMode}
/>
    );
}

export default DarkModeSwitch;
