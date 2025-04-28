export const formatCurrency = (
  amount: number,                   //Đây là số tiền bạn muốn định dạng
  locale: string = "vi-VN",   //Ngôn ngữ và định dạng khu vực
  currency: string = "VND"    //Loại tiền tệ
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);      //Phương thức format() định dạng số (amount) theo cấu hình được thiết lập ở trên
};
