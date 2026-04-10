
export interface LogoProps {
  className?: string;
  style:string;
}
 
export interface CategoryPageParams {
  params: Promise<{
    category: string;
  }>;
}