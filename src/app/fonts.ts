import { Inter } from 'next/font/google';
import localFont from "next/font/local"

export const bodyFont = localFont({
  src: './SukhumvitSet-Medium-04.ttf',
  display: 'swap',
  variable: '--body-font'
});
 
export const headingFont = localFont({
  src: './Chapaza.ttf',
  display: 'swap',
  variable: '--heading-font'
});