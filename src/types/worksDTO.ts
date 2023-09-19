export type WorksDTO = {
   id: number;
   available: boolean;
   title: string;
   description: string;
   image: string;
   logo: string;
   link: string;
   color: string;
   capture: string;
   techs: TechsDTO[];
}

export type TechsDTO = {
   id: number;
   name: string;
   logo: string;
}