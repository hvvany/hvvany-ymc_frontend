import React, { Component } from "react";
import Slider from "react-slick";
// import style from "./slider.module.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAACACAMAAADQ1dx8AAAAZlBMVEUAAAD////x8fH19fX7+/s4ODjp6em5ubmioqL4+Pjs7OwyMjKenp4jIyO0tLTU1NQsLCzExMRISEg/Pz+qqqqRkZFQUFBeXl5sbGx1dXXe3t5XV1cSEhJ+fn4ICAjMzMyGhoYaGhpbJ/f3AAAD+klEQVRogb2b7XqCMAyFAyIqKgjyrU68/5scqMy2KUVrz87fkeddS0jSNJLnSGFcnH5W038nJ5Rot6dBOyyorempAgnyG6L/AOUkaA0D+ZXIIZgzJAeJQy0IlMoYukUYkMqhk+HhL0BXlWNyui9A7ZmBEgQoyBjnuEGAOsYxBSB7UMI5ZPA5e9CRcy5GA0vQ6tMF2YL2nGPybWsQ+1SJDjMmdiDu2qYwZw+KOCefs7EC5YxTz9pYgSqVk83bWIEsOFYg9RXN75slSHFuQ6HwJUjyhcyUG74ErV+Y/Tp40+gr0Hbnv21kA4rvlGWdLj4wsgH5+S5P208oliCtgoXv+4vpZD4N2oTprrs0zaWLW1Mx0MtPuzobMsf+WDXFVfviJkB+Xkspp84nd6otSjVSlEX4HiitVdNela6wjnZLzaPD56WGcw1oddDb9klU+UdTFl1FySgGarcm4/K1rLYwPThonxhAlzlrqvIkbNNCUzVwXaZA7eSuWWobaUGamuNbnRMNKHbP6XVlIF4JONFzTQReT6+9L4H4scqZskAAhW+5q6ViAXQCc0bQev5xWx1bwRnCHxinWojurYvWbvRX891BunOiY84DBPMEocNByAVtfRnUzJvYSclHCxRH6jsQLsgdPQWkOZA6UaKAUDtXeQpI15twoUQFdRiO/IYGECg/sAIywHBILcAJFBaWngoC+QJrQREo5bETAXUYEOtBESjnqRyP2CkKBZo4SH2pMwfdIKA9B2H0byDN1oEqOg4CxdT/8jpijQbUd5QyECgy8KDaYUAlA+0wIFI7k4Sq6mIVBOgt3KXeYFIIAqkZiVBBiBoVBDuOtwoIdmg5KSBQZ4YUxyNky6SVQDBv6OvvhQTSXKm6Ui2BUEFo0EUEAV+S8DUNqZDPCzhUKbRocA2aQUIHEnW4HFWMoAV073rtr89ekLHz70TZ9Q5C5SSRdAdtkA3Vh/JHpdfBQdEDhOsMPpWNzVtQGfmneAShP6W/dvQGVII/Vbwa7MDGN91L/hHkIz288YRLEGRWakUQcEm1J4KAb6mVQRtU7dB4MggVWs+RCgJli7XHQJCDxdghlM7piOpYdw+LuHbpPC3Id81ZbvQg5573KvM/v/3/RMIQFGvaGMcZPpR4PcFADn1cmmHmbSh3yfbqGUFe54gjD+LqpmjcfE3s+M8VuCggWOdEA/L870dP2KS0ftIpNJFu22VWZsutqZHNJ7KnRqomdu98ipPRaaNrXk60fis+3jc1JBbojoFZrF4/hWvd2nVjxdPTaCxnXPRTvKlaTm+1U5GG+TpfjHvLfHr0TRquWk78SMM4yBesuvL2czh1sXmWu2fFRVNVdRHzebenfgFzzi5c4An9dQAAAABJRU5ErkJggg==" alt="apple"/>
          </div>
          <div>
            <h3>Apple</h3>
          </div>
          <div>
            <h3>권</h3>
          </div>
          <div>
            <h3>세</h3>
          </div>
          <div>
            <h3>빈</h3>
          </div>
          <div>
            <h3>!!!</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
