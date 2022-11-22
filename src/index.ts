export const basicLog = (str: string, file?: string, line?: number) => console.log(`📜 ${file} at line ${line} - ${str}`);

export const warnLog = (str: string, file?: string, line?: number) => console.warn(`⚠️ ${file} at line ${line} - ${str}`);

export const errorLog = (str: string, file?: string, line?: number) => console.error(`🚨 ${file} at line ${line} - ${str}`);

// Capitalize the first letter of a string
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// Capitalize the first letter of each word in a string
export const capitalizeWords = (str: string) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

// Format string to match xx.xx.xx.xx
export const toIpStyle = (str: string) => str.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

// Format string to camelCase
export const toCamelCase = (str: string) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, '');

// Format string to PascalCase
export const toPascalCase = (str: string) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => word.toUpperCase()).replace(/\s+/g, '');

// Format string to snake_case
export const toSnakeCase = (str: string) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : '_' + word.toLowerCase())).replace(/\s+/g, '');

// Format string to kebab-case
export const toKebabCase = (str: string) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : '-' + word.toLowerCase())).replace(/\s+/g, '');

// Get days name from a date
export const getDayName = (date: Date, lng: string) => {
  const enDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const frDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  switch (lng) {
    case 'fr-FR':
      return frDays[date.getDay()];
      break;
    case 'en-US':
      return enDays[date.getDay()];
      break;
    default:
      return frDays[date.getDay()];
      break;
  }
}