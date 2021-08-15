// 定义css声明
// 只要 import 以css为后缀的文件时，都会遵循以下约定，将会导出key所在的对象
// 原始的类名和相应值都会转化成这个对象
declare module "*.css" {
  const css: { [key: string]: string };
  export default css;
}
