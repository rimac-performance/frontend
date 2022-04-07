export const frontToBack = {
  time: {
    names: ["time"],
  },
  speed: {
    names: ["mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_speed"],
  },
  acceleration: {
    names: ["mean_SAFETY_PCU_vehicle_ST:PCU_accelerator_pedal"],
  },
  mileage: {
    names: ["mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_mileage"],
  },
  direction: {
    names: ["mean_gps:pos_latitude", "mean_gps:pos_longitude"],
  },
  battery: {
    names: [
      "mean_PDU_HV_LV_status:PDU_HV_battery_SOC",
      "mean_PDU_HV_LV_status:PDU_HV_battery_SOH",
    ],
  },
  current: {
    names: ["mean_PDU_HV_battery_performance:PDU_HV_battery_current"],
  },
  voltage: {
    names: ["mean_PDU_HV_battery_performance:PDU_HV_battery_voltage"],
  },
  consumption: {
    names: [
      "mean_PDU_HV_consumptions:PDU_HV_batt_consumption_charged",
      "mean_PDU_HV_consumptions:PDU_HV_batt_consumption_regen",
      "mean_PDU_HV_consumptions:PDU_HV_batt_consumption_total",
    ],
  },
  energy: {
    names: ["mean_PDU_HV_energy:PDU_HV_battery_energy_available"],
  },
  power: {
    names: ["mean_SAFETY_PCU_ST:PCU_vehicle_output_power"],
  },
  coolant: {
    names: [
      "mean_CCU_R_temp_1:CCU_R_batt_coolant_in_temp",
      "mean_CCU_R_temp_1:CCU_R_batt_coolant_out_temp",
    ],
  },
  interior: {
    names: ["mean_CCU_F_temp_1:CCU_F_interior_temp"],
  },
  exterior: {
    names: [
      "mean_CCU_F_temp_1:CCU_F_ambient_temp",
      "mean_CCU_F_temp_1:CCU_F_evaporator_temp",
      "mean_CCU_F_temp_1:CCU_F_heating_inlet_temp",
      "mean_CCU_F_temp_1:CCU_F_heating_outlet_temp",
    ],
  },
  Lrear: {
    names: [
      "mean_BFI_RL_temp_1:BFI_temp_sw_max",
      "mean_BFI_RL_temp_2:BFI_temp_motor_1",
      "mean_BFI_RL_temp_2:BFI_temp_motor_2",
      "mean_BFI_RL_temp_2:BFI_temp_motor_3",
    ],
  },
  Rrear: {
    names: [
      "mean_BFI_RR_temp_1:BFI_temp_sw_max",
      "mean_BFI_RR_temp_2:BFI_temp_motor_1",
      "mean_BFI_RR_temp_2:BFI_temp_motor_2",
      "mean_BFI_RR_temp_2:BFI_temp_motor_3",
    ],
  },
  Lhpi: {
    names: [
      "mean_HPI_FL_inverter_temp:HPI_temp_IGBT1",
      "mean_HPI_FL_inverter_temp:HPI_temp_IGBT2",
      "mean_HPI_FL_inverter_temp:HPI_temp_IGBT3",
    ],
  },
  Lmotor: {
    names: [
      "mean_HPI_FL_phase_curr_motor_temp:HPI_temp_motor1",
      "mean_HPI_FL_phase_curr_motor_temp:HPI_temp_motor2",
    ],
  },
  Rhpi: {
    names: [
      "mean_HPI_FR_inverter_temp:HPI_temp_IGBT1",
      "mean_HPI_FR_inverter_temp:HPI_temp_IGBT2",
      "mean_HPI_FR_inverter_temp:HPI_temp_IGBT3",
    ],
  },
  Rmotor: {
    names: [
      "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor1",
      "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor2",
    ],
  },
  unit: {
    names: [
      "mean_PCU_IVI_FB_2:PCU_vehicle_range",
      "mean_PCU_power_LIM:PCU_drive_power_LIM",
      "mean_PCU_power_LIM:PCU_regen_power_LIM",
    ],
  },
  power_available: {
    names: ["mean_PCU_power_LIM:PCU_drive_power_available"],
  },
  cell_temperature: {
    names: [
      "mean_PDU_BMS_cell_min_max_vals:PDU_cell_temp_max",
      "mean_PDU_BMS_cell_min_max_vals:PDU_cell_temp_min",
      "mean_PDU_BMS_cell_min_max_vals:PDU_cell_voltage_max",
      "mean_PDU_BMS_cell_min_max_vals:PDU_cell_voltage_min",
    ],
  },
};

export const backToFront = {
  time: "time",
  "mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_speed": "speed",
  "mean_SAFETY_PCU_vehicle_ST:PCU_accelerator_pedal": "acceleration",
  "mean_SAFETY_PCU_vehicle_ST:PCU_vehicle_mileage": "mileage",
  "mean_gps:pos_latitude": "direction",
  "mean_PDU_HV_LV_status:PDU_HV_battery_SOC": "battery",
  "mean_PDU_HV_battery_performance:PDU_HV_battery_current": "current",
  "mean_PDU_HV_battery_performance:PDU_HV_battery_voltage": "voltage",
  "mean_PDU_HV_consumptions:PDU_HV_batt_consumption_charged": "consumption",
  "mean_PDU_HV_energy:PDU_HV_battery_energy_available": "energy",
  "mean_SAFETY_PCU_ST:PCU_vehicle_output_power": "power",
  "mean_CCU_R_temp_1:CCU_R_batt_coolant_in_temp": "coolant",
  "mean_CCU_F_temp_1:CCU_F_interior_temp": "interior",
  "mean_CCU_F_temp_1:CCU_F_ambient_temp": "exterior",
  "mean_BFI_RL_temp_1:BFI_temp_sw_max": "Lrear",
  "mean_BFI_RR_temp_1:BFI_temp_sw_max": "Rrear",
  "mean_HPI_FL_inverter_temp:HPI_temp_IGBT1": "Lhpi",
  "mean_HPI_FL_phase_curr_motor_temp:HPI_temp_motor1": "Lmotor",
  "mean_HPI_FR_inverter_temp:HPI_temp_IGBT1": "Rhpi",
  "mean_HPI_FR_phase_curr_motor_temp:HPI_temp_motor1": "Rmotor",
  "mean_PCU_IVI_FB_2:PCU_vehicle_range": "unit",
  "mean_PCU_power_LIM:PCU_drive_power_available": "power_available",
  "mean_PDU_BMS_cell_min_max_vals:PDU_cell_temp_max": "cell_temperature",
};
