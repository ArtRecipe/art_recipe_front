// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Infinite from "./sections/infinite";

// const InfiniteLanding = () => {
//   const [listInfo, setListInfo] = useState([]);
//   const [skip, setSkip] = useState(0);
//   const [limit, setLimit] = useState(10);
//   const [fetching, setFetching] = useState(false);

//   useEffect(() => {
//     const body = {
//       skip: skip,
//       limit: limit,
//     };
//     getData(body);
//   }, []);

//   const getData = (body) => {
//     axios
//       .post("/api/url", body)
//       .then((res) => {
//         if (body.loadMore) setListInfo([...listInfo, ...res.data.listInfo]);
//         else setListInfo(res.data.listInfo);
//       })
//       .catch((err) => alert("글을 가져오는데 실패 했습니다."));
//   };

//   const fetchMoreData = () => {
//     setFetching(true);
//     let tmpSkip = skip + limit;
//     let body = {
//       skip: tmpSkip,
//       limit: limit,
//       filters: filters,
//       loadMore: true,
//     };

//     getData(body);
//     setSkip(tmpSkip);
//     setFetching(false);
//   };

//   return (
//     <>
//       <div>
//         <h2>TITLE</h2>

//         <Infinite
//           posts={listInfo}
//           fetchMoreData={fetchMoreData}
//           fetching={fetching}
//         />
//       </div>
//     </>
//   );
// };

// export default InfiniteLanding;
