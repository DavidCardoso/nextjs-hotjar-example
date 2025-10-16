interface Window {
  hj?: (
    command: "trigger" | "event" | "identify" | "stateChange" | string,
    ...args: any[]
  ) => void;
  hjSiteSettings?: {
    site_id: number;
    record: boolean;
    recording_capture_keystrokes: boolean;
    r: number;
    rec_value: number;
    verify_domain: boolean;
    host_domain: string;
    development: boolean;
  };
  _hjSettings?: {
    hjid: number;
    hjsv: number;
    debug: boolean;
  };
}
