export interface HassEntity {
  entity_id: string;
  state: string;
  last_changed?: string;
  attributes: Record<string, unknown>;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<unknown>;
  callWS<T = unknown>(msg: Record<string, unknown>): Promise<T>;
  [key: string]: unknown;
}

export interface StufaSettings {
  off_below: number;
  ignition_above: number;
  shutdown_min: number;
  shutdown_max: number;
  shutdown_needs_switch_off: boolean;
  confirm_seconds: number;
  grace_seconds: number;
  restore_delay_seconds: number;
  sync_switch_on: boolean;
  sync_switch_off: boolean;
  notify_events: boolean;
  notify_sensor_problem: boolean;
  notify_service: string;
  tile_color: "rosso" | "arancio" | "avorio";
  show_switch_button: boolean;
}

export interface StufaInfo {
  entry_id: string;
  title: string;
  state: StufaState;
  power: number | null;
  since: string | null;
  sources: { power_sensor: string; switch: string | null; energy_sensor: string | null };
  settings: StufaSettings;
  entities: Record<string, string>;
}

export type StufaState = "spenta" | "accensione" | "accesa" | "spegnimento" | "non_disponibile";

export interface RawState {
  s?: string;
  state?: string;
  lu?: number | string;
  lc?: number | string;
  last_updated?: number | string;
  last_changed?: number | string;
}
