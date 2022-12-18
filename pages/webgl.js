import React,{useEffect} from 'react'
import {useRouter} from 'next/router'
import { Unity, useUnityContext } from "react-unity-webgl";

export default function webgl() {

    const router = useRouter()
    const { title,url, creator, user } = router.query
    

    const { unityProvider,sendMessage,isLoaded } = useUnityContext({
        loaderUrl: "build/ardeneme.loader.js",
        dataUrl: "build/ardeneme.data.unityweb",
        frameworkUrl: "build/ardeneme.framework.js.unityweb",
        codeUrl: "build/ardeneme.wasm.unityweb",
      });


      function handleClickTitle() {
        sendMessage("Canvas", "GetTitleFromWeb", title);
      }
      // function handleClickUrl() {
      //   sendMessage("Canvas", "GetUrlFormWeb", url);
      // }
      function handleClickUsername() {
        sendMessage("Canvas", "GetUsernameFormWeb", user);
      }
      useEffect(() => {
       
        // handleClickUrl();
        handleClickTitle();
        handleClickUsername();
      }, [isLoaded])
      

  return (
    <div>
        <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
    </div>
  )
}
