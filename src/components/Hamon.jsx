import { useEffect } from "react";

const Hamon = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".area").ripples({
        dropRadius: 20, //波紋の大きさ
        resolution: 500, //波紋の広がり速度
        perturbance: 0.5, //波紋のブレ
      });
    });
  }, []);

  return (
    <div>
      <div className="area"></div>
    </div>
  );
};

export default Hamon;
