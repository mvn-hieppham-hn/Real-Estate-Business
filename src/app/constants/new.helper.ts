export const extractDayMonth = (dateStr: string) => {
  const regex = /(\d{1,2})\sTháng\s(\d{1,2})/;
  const match = dateStr.match(regex);

  if (match) {
    return {
      day: parseInt(match[1], 10),
      month: parseInt(match[2], 10),
    };
  } else {
    return null; // Trả về null nếu chuỗi không khớp định dạng
  }
};
