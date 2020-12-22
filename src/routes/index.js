/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Redirect } from "react-router-dom";
import { Home, Recommend, Rank, Signers } from "../application";

// export default [
//   {
//     path: "/",
//     component: Home,
//     routes: [
//       {
//         path: "/",
//         exact: true, // 精准匹配
//         render: () => (  // 重定向到recommend
//           <Redirect to={"/recommend"}></Redirect>
//         ),
//       },
//       {
//         path: "/recommend",
//         component: Recommend,
//       },
//       {
//         path: "/rank",
//         component: Rank,
//       },
//       {
//         path: "/singers",
//         component: Signers,
//       },
//     ],
//   },
// ];

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singers",
        component: Signers
      },
      {
        path: "/rank",
        component: Rank
      }
    ]
  }
]
