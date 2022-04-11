import { useEffect, useState } from "react";

export const exampleRequest = () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmExZTkzOTUtNmFlNS00NzVlLTgzMTgtNjg5NzY4MGFkYjE3IiwiZW1haWwiOiJjZHd5ZXI1QGFtYXpvbi5jb20iLCJwaG9uZSI6IjEzMC05NzgtNDM1MyIsImZpcnN0X25hbWUiOiJDb3NldHRlIiwibGFzdF9uYW1lIjoiRHd5ZXIiLCJ1c2VyX3JvbGUiOjIsImlhdCI6MTY0NzkwOTMwN30.A8C0pU3NZNi1J2u2wv0nfVcmaLMI_l-567Ll3UracQw"
  );
  myHeaders.append("Content-Type", "application/json");

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
    .catch((error) => console.error("error", error));
};

export const useAnalysisData = (run_id, token) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [thresholds, setThresholds] = useState();

  useEffect(() => {
    const myHeaders = new Headers();
    // myHeaders.append(
    //   "Authorization",
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmExZTkzOTUtNmFlNS00NzVlLTgzMTgtNjg5NzY4MGFkYjE3IiwiZW1haWwiOiJjZHd5ZXI1QGFtYXpvbi5jb20iLCJwaG9uZSI6IjEzMC05NzgtNDM1MyIsImZpcnN0X25hbWUiOiJDb3NldHRlIiwibGFzdF9uYW1lIjoiRHd5ZXIiLCJ1c2VyX3JvbGUiOjIsImlhdCI6MTY0NzkwOTMwN30.A8C0pU3NZNi1J2u2wv0nfVcmaLMI_l-567Ll3UracQw"
    // );
    if (token) {
      myHeaders.append("Authorization", `Bearer ${token}`);
    }
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      run_id,
      fields: [
        "mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_speed",
        "mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_mileage",
        "mean_PDU_HV_battery_performance:PDU_HV_battery_voltage",
        "mean_PDU_HV_battery_performance:PDU_HV_battery_current",
        "mean_PDU_HV_LV_status:PDU_HV_battery_SOH",
        "mean_PDU_HV_LV_status:PDU_HV_battery_SOC",
        "mean_HPI_FL_phase_curr_motor_temp:HPI_temp_motor1",
        "mean_HPI_FL_phase_curr_motor_temp:HPI_temp_motor2",
        "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor2",
        "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor1",
        "mean_SAFETY_PCU_vehicle_ST:PCU_accelerator_pedal",
        "mean_HPI_FR_inverter_temp:HPI_temp_IGBT3",
        "mean_HPI_FL_inverter_temp:HPI_temp_IGBT3",
        "mean_HPI_FL_inverter_temp:HPI_temp_IGBT2",
        "mean_HPI_FR_inverter_temp:HPI_temp_IGBT2",
        "mean_HPI_FL_inverter_temp:HPI_temp_IGBT1",
        "mean_CCU_R_temp_1:CCU_R_batt_coolant_in_temp",
        "mean_CCU_R_temp_1:CCU_R_batt_coolant_out_temp",
        "mean_CCU_F_temp_1:CCU_F_ambient_temp",
        "mean_CCU_F_temp_1:CCU_F_interior_temp",
        "mean_SAFETY_VCU_vehicle_ST:VCU_vehicle_ST",
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const dataResult = fetch(
      "https://rimacperformance-dev.ryacom.org/api/run/view",
      requestOptions
    )
      .then((response) => response.json())
      .catch(console.error);

    const thresholdResult = fetch(
      "https://rimacperformance-dev.ryacom.org/api/sensor/threshold",
      { method: "GET", headers: myHeaders }
    )
      .then((response) => response.json())
      .catch(console.error);

    Promise.all([dataResult, thresholdResult]).then(async (values) => {
      console.log({ values });
      await setData(cleanData(values[0]));
      await setThresholds(betterThresholds(values[1]));

      setLoading(false);
    });
  }, []);

  return [data, thresholds, loading];
};

export const useThresholdData = (token) => {
  const [thresholdData, setData] = useState();

  useEffect(() => {
    const myHeaders = new Headers();
    // myHeaders.append(
    //   "Authorization",
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMmExZTkzOTUtNmFlNS00NzVlLTgzMTgtNjg5NzY4MGFkYjE3IiwiZW1haWwiOiJjZHd5ZXI1QGFtYXpvbi5jb20iLCJwaG9uZSI6IjEzMC05NzgtNDM1MyIsImZpcnN0X25hbWUiOiJDb3NldHRlIiwibGFzdF9uYW1lIjoiRHd5ZXIiLCJ1c2VyX3JvbGUiOjIsImlhdCI6MTY0NzkwOTMwN30.A8C0pU3NZNi1J2u2wv0nfVcmaLMI_l-567Ll3UracQw"
    // );
    if (token) {
      myHeaders.append("Authorization", `Bearer ${token}`);
    }
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://rimacperformance-dev.ryacom.org/api/sensor/threshold",
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        console.log("result", result);
        console.log("threshold", thresholdData);
        await setData(result);
      })
      .catch((error) => console.error("error", error));
  }, []);

  return [thresholdData];
};

const cleanData = (data) => {
  let cleanedData;

  cleanedData = removeNullDataPoints(data);
  // cleanedData = removeMillisecondDataPoints(cleanedData);

  //TODO Replace slice with date objects

  //console.log({ cleanedData });

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

const betterThresholds = (data) => {
  let better = {};

  data.map((item) => {
    better[item.name] = item.threshold;
  });

  return better;
};
