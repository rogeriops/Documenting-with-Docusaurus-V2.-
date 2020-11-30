(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{136:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mixed-reality-openxr-developer-tools-settings-38c71c9ea0715e26b6fdcaf634dfd369.png"},137:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mixed-reality-openxr-developer-tools-status-8fb7e3d95452a6690ce681a6bab762bc.png"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"Highlight",(function(){return p})),n.d(t,"default",(function(){return d}));var o=n(2),i=n(6),a=(n(0),n(90)),r={id:"doc5",title:"Installation for Windows"},l={unversionedId:"doc5",id:"doc5",isDocsHomePage:!1,title:"Installation for Windows",description:"To start developing OpenXR applications for immersive Windows Mixed Reality headsets:",source:"@site/docs\\installation for windows.md",slug:"/doc5",permalink:"/Documenting-with-Docusaurus-V2.-/docs/doc5",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation for windows.md",version:"current",sidebar:"someSidebar",previous:{title:"API",permalink:"/Documenting-with-Docusaurus-V2.-/docs/doc2"},next:{title:"Installation for Linux",permalink:"/Documenting-with-Docusaurus-V2.-/docs/monado"}},s=[{value:"To start developing OpenXR applications for immersive Windows Mixed Reality headsets:",id:"to-start-developing-openxr-applications-for-immersive-windows-mixed-reality-headsets",children:[]},{value:"Getting the OpenXR Developer Tools for Windows Mixed Reality.",id:"getting-the-openxr-developer-tools-for-windows-mixed-reality",children:[]},{value:"Building a sample OpenXR app.",id:"building-a-sample-openxr-app",children:[]},{value:"Integrate the OpenXR loader into a project.",id:"integrate-the-openxr-loader-into-a-project",children:[]},{value:"Reference official OpenXR NuGet package.",id:"reference-official-openxr-nuget-package",children:[]},{value:"Include official OpenXR loader source.",id:"include-official-openxr-loader-source",children:[]},{value:"Using preview extensions.",id:"using-preview-extensions",children:[]}],p=function(e){var t=e.children,n=e.color;return Object(a.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c={rightToc:s,Highlight:p};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"to-start-developing-openxr-applications-for-immersive-windows-mixed-reality-headsets"},"To start developing OpenXR applications for immersive Windows Mixed Reality headsets:"),Object(a.b)("p",null,"Be sure you are running at least the Windows 10 May 2019 Update (1903), which is the minimum requirement for Windows Mixed Reality end users to run OpenXR applications. If you're on an earlier version of Windows 10, you can upgrade by using the Windows 10 Update Assistant.\nSet up a Windows Mixed Reality headset or follow the instructions to enable the Windows Mixed Reality simulator.\nThat's it! The Windows Mixed Reality OpenXR runtime is installed and made active automatically for all Windows Mixed Reality users. The Microsoft Store then keeps the runtime up to date."),Object(a.b)("p",null,'If you ever need to make the Windows Mixed Reality OpenXR Runtime active again, launch Mixed Reality Portal from the Start menu, and click "Fix it" in the banner at the top of the window. If that button is missing, the OpenXR runtime is already active.'),Object(a.b)("h2",{id:"getting-the-openxr-developer-tools-for-windows-mixed-reality"},"Getting the OpenXR Developer Tools for Windows Mixed Reality."),Object(a.b)("p",null,"To try out the Windows Mixed Reality OpenXR Runtime, you can install the OpenXR Developer Tools for Windows Mixed Reality app. This app provides a demo scene that exercises various features of OpenXR, along with a System Status page that provides key information about the active runtime and the current headset."),Object(a.b)("p",null,"If using the HoloLens 2 emulator, the easiest way to install the OpenXR Developer Tools for Windows Mixed Reality is using ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/mixed-reality/develop/platform-capabilities-and-apis/using-the-windows-device-portal"}),"Windows Device Portal"),', by navigating to the "OpenXR" page and then clicking the "Install" button under "Developer Features". (this works on a physical HoloLens 2 device as well)'),Object(a.b)("h2",{id:"building-a-sample-openxr-app"},"Building a sample OpenXR app."),Object(a.b)("p",null,"Be sure to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/mixed-reality/develop/install-the-tools?tabs=unity"}),"install the tools")," you'll need for OpenXR development if you haven't already."),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/microsoft/OpenXR-MixedReality/tree/master/samples/BasicXrApp"}),"BasicXrApp")," project demonstrates a simple OpenXR sample with two Visual Studio project files, one for both a Win32 desktop app and one for a UWP HoloLens 2 app. Because the solution contains a HoloLens UWP project, you'll need the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/mixed-reality/develop/install-the-tools?tabs=unity#installation-checklist"}),"Universal Windows Platform development workload")," installed in Visual Studio to fully open it."),Object(a.b)("p",null,"Note that while the Win32 and UWP project files are separate due to differences in packaging and deployment, the app code inside each project is almost exactly the same!"),Object(a.b)("p",null,"After building an OpenXR Win32 desktop .EXE, you can use it with a VR headset on any desktop VR platform that supports OpenXR, whether it's a Windows Mixed Reality headset or any other headset."),Object(a.b)("p",null,"After building an OpenXR UWP app package, you can deploy that package to either a HoloLens 2 device or the HoloLens 2 Emulator."),Object(a.b)("h2",{id:"integrate-the-openxr-loader-into-a-project"},"Integrate the OpenXR loader into a project."),Object(a.b)("p",null,"To get started with OpenXR in an existing project, you'll include the OpenXR loader. The loader discovers the active OpenXR runtime on the device and provides access to the core functions and extension functions that it implements."),Object(a.b)("p",null,"You can either reference the official OpenXR NuGet package from your Visual Studio project or include the official OpenXR loader source from the Khronos GitHub repo. Either approach will give you access to OpenXR 1.0 core features, plus published ",Object(a.b)("inlineCode",{parentName:"p"},"KHR"),", ",Object(a.b)("inlineCode",{parentName:"p"},"EXT")," and ",Object(a.b)("inlineCode",{parentName:"p"},"MSFT")," extensions."),Object(a.b)("p",null,"If you're interested to experiment with ",Object(a.b)("inlineCode",{parentName:"p"},"MSFT_preview")," extensions as well, you can copy in preview OpenXR headers from the Mixed Reality GitHub repo."),Object(a.b)("h2",{id:"reference-official-openxr-nuget-package"},"Reference official OpenXR NuGet package."),Object(a.b)("p",null,"The OpenXR.Loader NuGet package is the easiest way to reference a prebuilt OpenXR loader .DLL in your Visual Studio C++ solution. This will give you access to OpenXR 1.0 core features, plus published KHR, EXT and MSFT extensions."),Object(a.b)("p",null,"To add an OpenXR.Loader NuGet package reference to your Visual Studio C++ solution:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"In Solution Explorer, right-click the project that will use OpenXR and select Manage NuGet Packages...."),Object(a.b)("li",{parentName:"ol"},"Switch to the Browse tab and search for OpenXR.Loader."),Object(a.b)("li",{parentName:"ol"},"Select the OpenXR.Loader package and click Install in the details pane to the right."),Object(a.b)("li",{parentName:"ol"},"Click OK to accept the changes to your project."),Object(a.b)("li",{parentName:"ol"},"Add ",Object(a.b)("inlineCode",{parentName:"li"},"#include <openxr/openxr.h>")," to a source file to start using the OpenXR API.\nTo see an example of the OpenXR API in action, check out the BasicXrApp sample app.")),Object(a.b)("h2",{id:"include-official-openxr-loader-source"},"Include official OpenXR loader source."),Object(a.b)("p",null,"If you want to build the loader yourself, for example to avoid the extra loader .DLL, you can pull the official Khronos OpenXR loader sources into your project. This will give you access to OpenXR 1.0 core features, plus published KHR, EXT and MSFT extensions."),Object(a.b)("p",null,"To get started here, follow the instructions in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/KhronosGroup/OpenXR-SDK"}),"Khronos OpenXR-SDK repo on GitHub"),". The project is set up to build with CMake - if you are using MSBuild, you will need to copy the code into your own project."),Object(a.b)("h2",{id:"using-preview-extensions"},"Using preview extensions."),Object(a.b)("p",null,"The MSFT_preview extensions listed in the extension roadmap are experimental vendor extensions being previewed to gather feedback. These extensions are for developer devices only and will be removed when the real extension ships."),Object(a.b)("p",null,"If you're interested to try out the available MSFT_preview extensions, go through the following steps to update your project:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Follow either of the approaches above to integrate an OpenXR loader into your project."),Object(a.b)("li",{parentName:"ol"},"Replace the standard OpenXR headers in your project with the preview headers from the Mixed Reality OpenXR repo on GitHub.")),Object(a.b)("p",null,"To then activate preview extension support on your target HoloLens 2 or desktop PC:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"To make sure you've got the latest OpenXR runtime with all extensions present, launch the Store app from within the target device or emulator, open the menu in the upper-right, click Downloads and updates and click Get updates."),Object(a.b)("li",{parentName:"ol"},"Install the OpenXR Developer Tools for Windows Mixed Reality app from the Microsoft Store onto the target device and run it."),Object(a.b)("li",{parentName:"ol"},"Navigate to the Developer Settings tab and enable Use latest preview OpenXR runtime. This enables the preview runtime on your device, which has preview extensions activated.")),Object(a.b)("p",null,Object(a.b)("img",{alt:"img",src:n(136).default})),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Confirm that the Runtime version shown on the System Status tab of the OpenXR Developer Tools for Windows Mixed Reality now matches the required version of the preview extensions you plan to try. If so, you should see the extension in the Extensions list. Note that once a stable extension is available, its preview extension will be removed.")),Object(a.b)("p",null,Object(a.b)("img",{alt:"img",src:n(137).default})),Object(a.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(a.b)(p,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(a.b)(p,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(a.b)("p",null,"I can write ",Object(a.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(a.b)("em",{parentName:"p"},"JSX"),"!"))}d.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,b=d["".concat(r,".").concat(h)]||d[h]||u[h]||a;return n?i.a.createElement(b,l(l({ref:t},p),{},{components:n})):i.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);