import { useEffect, useState } from "react";

export const exampleRequest = () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYWRkMzA2ZjMtZDU5MS00MTkwLTlkODEtMjFkYThmNTY0NjgwIiwiZW1haWwiOiJnaHVja2luMEB5YWhvby5jby5qcCIsInBob25lIjoiODIzLTk0MS0xNzYxIiwiZmlyc3RfbmFtZSI6IkdhZWxhbiIsImxhc3RfbmFtZSI6Ikh1Y2tpbiIsInVzZXJfcm9sZSI6MSwiaWF0IjoxNjQ1ODUxNjc3fQ.cBYy80MwOx28met9IDnRxsqlohBOGRqfKW4FccgWEWU"
  );
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "d7ea6c8721c1b3d7dd46a400ca594ba5=becfdcac6520f9b71d0a48d5e3fda138"
  );

  const raw = JSON.stringify({
    run_id: "d871dc3a-0537-47d9-97d5-75c817424612",
    fields: ["mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_speed"],
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://rimacperformance-dev.ryacom.org/api/run/view",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

export const useAnalysisData = (run_id, token) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const myHeaders = new Headers();
    // myHeaders.append(
    //   "Authorization",
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmExZTkzOTUtNmFlNS00NzVlLTgzMTgtNjg5NzY4MGFkYjE3IiwiZW1haWwiOiJjZHd5ZXI1QGFtYXpvbi5jb20iLCJwaG9uZSI6IjEzMC05NzgtNDM1MyIsImZpcnN0X25hbWUiOiJDb3NldHRlIiwibGFzdF9uYW1lIjoiRHd5ZXIiLCJ1c2VyX3JvbGUiOjIsImlhdCI6MTY0NzkwOTMwN30.A8C0pU3NZNi1J2u2wv0nfVcmaLMI_l-567Ll3UracQw"
    // );
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      run_id,
      fields: [
        "mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_speed",
        "mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_mileage",
        "mean_PDU_HV_battery_performance:PDU_HV_battery_voltage",
        "mean_PDU_HV_battery_performance:PDU_HV_battery_current",
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://rimacperformance-dev.ryacom.org/api/run/view",
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        console.log("result", result);
        await setData(cleanData(result));
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return [data, loading];
};

const cleanData = (data) => {
  console.log(data);
  let cleanedData;

  cleanedData = removeNullDataPoints(data);
  cleanedData = removeMillisecondDataPoints(cleanedData);

  //TODO Replace slice with date objects

  console.log(cleanedData);

  return cleanedData;
};

const removeNullDataPoints = (data) => {
  return data.filter((item) => {
    let useLess = true;

    for (const [key, value] of Object.entries(item)) {
      if (key !== "time" && value !== null) useLess = false;
    }

    return !useLess;
  });
};

const removeMillisecondDataPoints = (data) => {
  let cleanedData = [data[0]];
  let currentItemMinSec = data[0].time.slice(11, 16);

  data.map((item) => {
    if (item.time.slice(11, 16) !== currentItemMinSec) {
      cleanedData.push(item);
      currentItemMinSec = item.time.slice(11, 16);
    }
  });

  return cleanedData;
};
