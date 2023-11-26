export interface Report {
  report_id?: string;
  user_id: string;
  authority_id: string;
  category: string;
  picture_set: string;
  description: string;
  description_is_private: boolean;
  position: string;
  reporting_date: string;
  status_group: string;
}

export interface User {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  adress: string;
  account_point: number;
}