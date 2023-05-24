import { DetailedHTMLProps, ImgHTMLAttributes, SetStateAction } from "react";

export interface Data {
    id?: number | any;
    name: any;
    img: any | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    langage: string | any;
    lien?: any | undefined;
}