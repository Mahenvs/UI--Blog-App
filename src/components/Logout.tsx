import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar";
import { LogOutIcon,UserIcon,SettingsIcon } from "./Utility/Icons";

  
  const Logout = ({
    logOutHandler,
  }: {
    logOutHandler: (flag: string) => Promise<void>;
  }) => {
    // Fetch user from the store and display
    // const {currentUser } = useStore()
  
    const sendLogOut = (value: string) => {
      logOutHandler(value);
    };
    return (
      <div className="min-w-full">
        <Menubar className="">
          <MenubarMenu>
            <MenubarTrigger className="justify-center flex">
              <span>{"SV"}</span>
            </MenubarTrigger>
  
            <MenubarContent>
              <MenubarItem onClick={() => sendLogOut("profile")}>
                Profile{" "}
                <MenubarShortcut>
                  {" "}
                  <UserIcon />
                </MenubarShortcut>
              </MenubarItem>
  
              <MenubarSeparator />
              <MenubarItem onClick={()=>sendLogOut("settings")}>
                Settings
                <MenubarShortcut>
                  <SettingsIcon />
                </MenubarShortcut>
              </MenubarItem>
  
              <MenubarSeparator />
              <MenubarItem onClick={()=>sendLogOut("logout")}>
                Logout{" "}
                <MenubarShortcut>
                  <LogOutIcon/>
                </MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    );
  };
  
  export default Logout;