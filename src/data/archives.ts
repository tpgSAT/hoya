import vol1 from "@assets/hoya_01.webp";
import vol2 from "@assets/hoya_02.webp";
import vol3 from "@assets/hoya_03.webp";
import vol4 from "@assets/hoya_04.webp";
import vol5 from "@assets/hoya_05.webp";
import vol6 from "@assets/hoya_06.webp";
import vol7 from "@assets/hoya_07.webp";

export interface ArchiveItem {
  vol: string;
  year: string;
  img: ImageMetadata;
  pdf: string;
}

export const archives: ArchiveItem[] = [
  {
    vol: "Vol.7",
    year: "2024年秋",
    img: vol7,
    pdf: "/_assets/hoyaPDF/hoya_07_web.pdf",
  },
  {
    vol: "Vol.6",
    year: "2024年春",
    img: vol6,
    pdf: "/_assets/hoyaPDF/hoya_06_web.pdf",
  },
  {
    vol: "Vol.5",
    year: "2023年秋",
    img: vol5,
    pdf: "/_assets/hoyaPDF/hoya_05_web.pdf",
  },
  {
    vol: "Vol.4",
    year: "2023年春",
    img: vol4,
    pdf: "/_assets/hoyaPDF/hoya_04_web.pdf",
  },
  {
    vol: "Vol.3",
    year: "2022年秋",
    img: vol3,
    pdf: "/_assets/hoyaPDF/hoya_03_web.pdf",
  },
  {
    vol: "Vol.2",
    year: "2021年秋",
    img: vol2,
    pdf: "/_assets/hoyaPDF/hoya_02_web.pdf",
  },
  {
    vol: "Vol.1",
    year: "2021年春",
    img: vol1,
    pdf: "/_assets/hoyaPDF/hoya_01_web.pdf",
  },
];
