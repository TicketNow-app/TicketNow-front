export function cpfMask(value: string): string {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}


export function cnpjMask(value: string): string {
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      '$1.$2.$3/$4-$5'
    );
}
  
export function removeCpfCnpjFormatation(value: string): string {
    return value.toString()?.replace(/(\.|\/|\-)/g, '');
}

  
export function formatCpfCnpj(value: string): string {
    value = removeCpfCnpjFormatation(value);
    if (value.length <= 11) {
      return cpfMask(value);
    } else if (value.length <= 14) {
      return cnpjMask(value);
    }
    return undefined;
}

export function formatMoney(value: number): string {
    const format = {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL',
    };
    return value.toLocaleString('pt-BR', format);
}


export function formatDate(
  date: Date,
  separator = '/',
  hasHour = false,
): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  let formatedDate = `${day}${separator}${month}${separator}${year}`;

  if (hasHour) {
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
   
    formatedDate += ` ${hour}:${minutes}`;  
  }

  return formatedDate;
}