/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const InstagramIcono = ({ color = "#1F1F1F", className }) => {
  return (
    <svg
      className={`instagram-icono ${className}`}
      fill="none"
      height="100"
      viewBox="0 0 100 100"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="50" cy="50" fill={color} r="50" />
      <path
        className="path"
        d="M49.5 27C43.3941 27 42.6263 27.0281 40.2272 27.135C37.8281 27.2475 36.1941 27.6244 34.7625 28.1812C33.2609 28.7461 31.9008 29.632 30.7772 30.7772C29.6327 31.9013 28.7469 33.2613 28.1812 34.7625C27.6244 36.1912 27.2447 37.8281 27.135 40.2187C27.0281 42.6234 27 43.3884 27 49.5028C27 55.6116 27.0281 56.3766 27.135 58.7756C27.2475 61.1719 27.6244 62.8059 28.1812 64.2375C28.7578 65.7169 29.5256 66.9712 30.7772 68.2228C32.0259 69.4744 33.2803 70.245 34.7597 70.8187C36.1941 71.3756 37.8253 71.7553 40.2216 71.865C42.6234 71.9719 43.3884 72 49.5 72C55.6116 72 56.3738 71.9719 58.7756 71.865C61.1691 71.7525 62.8088 71.3756 64.2403 70.8187C65.741 70.2537 67.1001 69.3677 68.2228 68.2228C69.4744 66.9712 70.2422 65.7169 70.8187 64.2375C71.3728 62.8059 71.7525 61.1719 71.865 58.7756C71.9719 56.3766 72 55.6116 72 49.5C72 43.3884 71.9719 42.6234 71.865 40.2216C71.7525 37.8281 71.3728 36.1912 70.8187 34.7625C70.2532 33.2613 69.3674 31.9013 68.2228 30.7772C67.0996 29.6316 65.7394 28.7456 64.2375 28.1812C62.8031 27.6244 61.1662 27.2447 58.7728 27.135C56.3709 27.0281 55.6088 27 49.4944 27H49.5028H49.5ZM47.4834 31.0556H49.5028C55.5103 31.0556 56.2219 31.0753 58.5928 31.185C60.7866 31.2834 61.9791 31.6519 62.7722 31.9584C63.8213 32.3663 64.5722 32.8556 65.3597 33.6431C66.1472 34.4306 66.6338 35.1788 67.0416 36.2306C67.3509 37.0209 67.7166 38.2134 67.815 40.4072C67.9247 42.7781 67.9472 43.4897 67.9472 49.4944C67.9472 55.4991 67.9247 56.2134 67.815 58.5844C67.7166 60.7781 67.3481 61.9678 67.0416 62.7609C66.6808 63.7379 66.1051 64.6212 65.3569 65.3456C64.5694 66.1331 63.8213 66.6197 62.7694 67.0275C61.9819 67.3369 60.7894 67.7025 58.5928 67.8038C56.2219 67.9106 55.5103 67.9359 49.5028 67.9359C43.4953 67.9359 42.7809 67.9106 40.41 67.8038C38.2163 67.7025 37.0266 67.3369 36.2334 67.0275C35.2561 66.6673 34.3719 66.0926 33.6459 65.3456C32.8971 64.6201 32.3205 63.7359 31.9584 62.7581C31.6519 61.9678 31.2834 60.7753 31.185 58.5816C31.0781 56.2106 31.0556 55.4991 31.0556 49.4887C31.0556 43.4812 31.0781 42.7725 31.185 40.4016C31.2863 38.2078 31.6519 37.0153 31.9613 36.2222C32.3691 35.1731 32.8584 34.4222 33.6459 33.6347C34.4334 32.8472 35.1816 32.3606 36.2334 31.9528C37.0266 31.6434 38.2163 31.2778 40.41 31.1766C42.4856 31.0809 43.29 31.0528 47.4834 31.05V31.0556ZM61.5122 34.7906C61.1576 34.7906 60.8065 34.8605 60.4789 34.9962C60.1514 35.1318 59.8537 35.3307 59.603 35.5814C59.3523 35.8322 59.1534 36.1298 59.0177 36.4574C58.882 36.785 58.8122 37.1361 58.8122 37.4906C58.8122 37.8452 58.882 38.1963 59.0177 38.5239C59.1534 38.8514 59.3523 39.1491 59.603 39.3998C59.8537 39.6505 60.1514 39.8494 60.4789 39.9851C60.8065 40.1208 61.1576 40.1906 61.5122 40.1906C62.2283 40.1906 62.915 39.9062 63.4214 39.3998C63.9277 38.8935 64.2122 38.2067 64.2122 37.4906C64.2122 36.7745 63.9277 36.0878 63.4214 35.5814C62.915 35.0751 62.2283 34.7906 61.5122 34.7906ZM49.5028 37.9462C47.9702 37.9223 46.4481 38.2036 45.0253 38.7735C43.6024 39.3435 42.3071 40.1908 41.2148 41.2662C40.1225 42.3416 39.2551 43.6235 38.663 45.0373C38.0709 46.4511 37.766 47.9686 37.766 49.5014C37.766 51.0342 38.0709 52.5517 38.663 53.9655C39.2551 55.3793 40.1225 56.6613 41.2148 57.7366C42.3071 58.812 43.6024 59.6593 45.0253 60.2293C46.4481 60.7993 47.9702 61.0805 49.5028 61.0566C52.5362 61.0092 55.4293 59.771 57.5577 57.6091C59.6861 55.4473 60.8791 52.5352 60.8791 49.5014C60.8791 46.4676 59.6861 43.5555 57.5577 41.3937C55.4293 39.2318 52.5362 37.9936 49.5028 37.9462ZM49.5028 41.9991C51.4922 41.9991 53.4001 42.7893 54.8068 44.196C56.2135 45.6027 57.0037 47.5106 57.0037 49.5C57.0037 51.4894 56.2135 53.3973 54.8068 54.804C53.4001 56.2107 51.4922 57.0009 49.5028 57.0009C47.5134 57.0009 45.6055 56.2107 44.1988 54.804C42.7921 53.3973 42.0019 51.4894 42.0019 49.5C42.0019 47.5106 42.7921 45.6027 44.1988 44.196C45.6055 42.7893 47.5134 41.9991 49.5028 41.9991Z"
        fill="#9DBCB2"
      />
    </svg>
  );
};

InstagramIcono.propTypes = {
  color: PropTypes.string,
};