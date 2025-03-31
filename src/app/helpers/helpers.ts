export function slugify(str: string): string {
  return str
    .normalize('NFD') // tách dấu
    .replace(/[\u0300-\u036f]/g, '') // xóa dấu
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // thay space = dấu gạch ngang
    .replace(/[^\w-]+/g, '') // xóa ký tự đặc biệt
}
