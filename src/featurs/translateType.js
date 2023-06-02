export const translateType = (type) => {
    switch(type){
        case 1 : 
            return 'خاردار'
        case 2:
            return 'گل‌دار'
        case 3:
            return 'بدون گل'
        default :
            return ''
    }

}


const lightValues = ["کم", "متوسط", "زیاد"];
const waterValues = [
  "هر روز",
  "هر دو روز یکبار",
  "هر هفته",
  "هر دو هفته یکبار",
];
const attentionValues = ["هر روز", "هفتگی", "ماهانه"];
const growthValues = ["بذر", "نهال", "رشد کامل"];
const temperatureValues = ["گرم", "شرجی"];
const locationValues = ["آپارتمانی", "بسته", "باز"];


   // Convet values
   export const changeValue = (type, input) => {
  switch (type) {
    case "light":
        console.log(input)
      return lightValues[input - 1];
    case "water":
      return waterValues[input - 1];
    case "fragrance":
      if (input === true) return "است";
      else return "نیست";
    case "growth":
      return growthValues[input - 1];
    case "temperature":
      return temperatureValues[input - 1];
    case "alergy":
      if (input === true) return "دارد";
      else return "ندارد";
    case "pet":
      if (input === true) return "حساس";
      else return "سازگار با حیوانات";
    case "attention":
      return attentionValues[input - 1];
    case "edible":
      if (input === true) return "هست";
      else return "نیست";
    case "location_type":
      return locationValues[input - 1];

    default:
      return "";
  }
};
