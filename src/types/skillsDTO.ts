export enum SkillType {
   FRONT = "FrontEnd",
   BACK = "BackEnd",
   DB = "Database",
   TOOLS = "Tools",
   WILL_LEARN = "WillLearn",
   CMS = "CMS",
}

export type SkillsDTO = {
   type: SkillType;
   logo: string;
   name: string;
   description: string;
   affinity?: string;
   gradient?: string;
}