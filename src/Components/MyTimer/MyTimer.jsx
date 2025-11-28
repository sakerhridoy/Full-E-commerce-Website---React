// import React from 'react'
// import { useTimer } from 'react-timer-hook';

// export const MyTimer = ({ expiryTimestamp }) => {
//   const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
//   return (
//     <>
      
//     </>
//   );
// };

// export const MyTimerCategoryBanner = ({ expiryTimestamp }) => {
//   const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
//   return (
//     <>
//       <div className="flex gap-[17px] items-center">
//         <div className="days">
//           <h4 className="font-poppins font-medium text-xs text-black leading-[18px] pb-1">
//             Days
//           </h4>
//           <h3 className="font-inter font-bold text-[32px] leading-[30px] text-black">
//             {days >= 10 ? days : `0${days}`}
//           </h3>
//         </div>
//         <div className="colon">
//           <span className="text-xl text-[#E07575]">:</span>
//         </div>
//         <div className="hours">
//           <h4 className="font-poppins font-medium text-xs text-black leading-[18px] pb-1">
//             Hours
//           </h4>
//           <h3 className="font-inter font-bold text-[32px] leading-[30px] text-black">
//             {hours >= 10 ? hours : `0${hours}`}
//           </h3>
//         </div>
//         <div className="colon">
//           <span className="text-xl text-[#E07575]">:</span>
//         </div>
//         <div className="minutes">
//           <h4 className="font-poppins font-medium text-xs text-black leading-[18px] pb-1">
//             Minutes
//           </h4>
//           <h3 className="font-inter font-bold text-[32px] leading-[30px] text-black">
//             {minutes >= 10 ? minutes : `0${minutes}`}
//           </h3>
//         </div>
//         <div className="colon">
//           <span className="text-xl text-[#E07575]">:</span>
//         </div>
//         <div className="seconds">
//           <h4 className="font-poppins font-medium text-xs text-black leading-[18px] pb-1">
//             Seconds
//           </h4>
//           <h3 className="font-inter font-bold text-[32px] leading-[30px] text-black">
//             {seconds >= 10 ? seconds : `0${seconds}`}
//           </h3>
//         </div>
//       </div>
//     </>
//   );
// };