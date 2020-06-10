export interface Module {
  code: string;
  directory_shortid: string | null;
  id: string;
  inserted_at: string;
  is_binary: boolean;
  shortid: string;
  source_id: string;
  title: string;
  updated_at: string;
  upload_id: string | null;
}

export default Module;
