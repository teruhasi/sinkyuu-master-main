import Bfaf from "./Bfaf";
import Fv from "./Fv";
import { useEffect } from "react";

function Rain() {
  useEffect(() => {
    let option = {
      target_element: "#container", // taget HTML element
      where_to_insert: "", // Insert after the specified element in target_element. If unspecified, insert at the end of the target_element. ('img' 'p' '#id' etc)
      rain_amount: 5, // Amount of rain (min 1 max 10)
      rain_speed: 5, // Speed of rain (min 1 max 10)
      rain_color: "#FFF", // Color of rain (hex, rgba, name)
      rain_width: 1, // Width of rain
      rain_height: 5, // Length of rain
      rain_angle: 15, // Angle of rain (min -90 max 90)
      bg_shade: "#000", // Background shade (hex, rgba, name)
      bg_darkness: 0, // Adjust background brightness (min 0.0 max 10.0)
      splat: true, // Rain splat
      lightning: false, // Lightning
      lightning_color: "#FFF", // Color of lightning
      animation_time: 300, // Animation time (s)
    };

    dropRainAnim(option);
  });
  return (
    <div id="container">
      <Fv />
      <Bfaf />
    </div>
  );
}

export default Rain;
