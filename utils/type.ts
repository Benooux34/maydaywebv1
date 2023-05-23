import { DetailedHTMLProps, ImgHTMLAttributes, SetStateAction } from "react";

export interface Data {
    id?: string;
    name: any;
    img: any | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    lien?: any | undefined;
}