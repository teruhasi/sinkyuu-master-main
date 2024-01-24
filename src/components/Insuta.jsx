// import { useState, useEffect } from "react";
// import { InstagramEmbed } from "react-social-media-embed";

// function Insuta() {
//   const [url, setUrl] = useState("");
//   useEffect(() => {
//     async function getData() {
//       const api = await fetch(
//         "https://script.googleusercontent.com/macros/echo?user_content_key=bA5zj2cq7c34T6MdRyMh7M_AdeRpS1htVmCdu7rkZdB5gf9Tz8S2Y2oZ02JJiTY6eMgwBlbynZgHEiED4O54gExvulvkvoqFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKT03D2pp_sLWMJb01LqkMrZbPCWonX15oU10F162WR2wBvNSQgG4oB_bzNXCZReNjvRGogKHdA6eOU1IadmAodrM9Fy_t4zYNz9Jw9Md8uu&lib=MY3mJTG3zxO16BsUNdD1_VglM_8jcpcwC"
//       );
//       return api.json();
//     }
//     getData()
//       .then((response) => {
//         console.log(response.details);
//         setUrl(response.details.urls.postUrl[1]);
//       })
//       .catch(() => [console.log("error")]);
//   }, []);
//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <InstagramEmbed url={url} width={328} />
//     </div>
//   );
// }
// export default Insuta;
